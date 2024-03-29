// SPDX-License-Identifier: UNLICENSED
// author: @stevieraykatz
// solkat consulting llc                                                                        
//                                       *//.                                      
//                                     .**/((,                                     
//                                    ,***/(((*                                    
//                                  .*****/(((((.                                  
//                                 ,******/((((((/                                 
//                               .********/(((((((/.                               
//                              ,*********/(((((((((*                              
//                             ***********/((((((((((/.                            
//                           ,************/((((((((((((,                           
//                          **************/(((((((((((((/                          
//                        .***************/(((((((((((((((,                        
//                       ,****************/((((((((((((((((/                       
//                     .******************/((((((((((((((((((,                     
//                    ,*******************/(((((((((((((((((((*                    
//                  .*********************/(((((((((((((((((((((.                  
//                 ,**********************/((((((((((((((((((((((*                 
//               .************************/((((((((((((((((((((((((.               
//              ,************************/((((((((((((((((((((((((((*              
//             **********************/(###%&&&%((((((((((((((((((((((/.            
//           .*******************/########%&&&&&&&%#(((((((((((((((((((,           
//          ****************/(############%&&&&&&&&&&&&%((((((((((((((((/.         
//        .*************/(################%&&&&&&&&&&&&&&&&%#(((((((((((((,        
//       ,**********/#####################%&&&&&&&&&&&&&&&&&&&&%#((((((((((/       
//     .********(#########################%&&&&&&&&&&&&&&&&&&&&&&&&&%((((((((,     
//    ,****/(#############################%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%#((((/    
//  .*//(#################################%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%#(/,  
// .(#####################################%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%, 
//     *(#################################%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&(     
//         .(#############################%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#,         
//             .*(########################%&&&&&&&&&&&&&&&&&&&&&&&&&(,             
//                 .*(####################%&&&&&&&&&&&&&&&&&&&&#/.                 
//                      ,(################%&&&&&&&&&&&&&&&&#*                      
//                           /############%&&&&&&&&&&&&(.                          
//                               ,(#######%&&&&&&&%*                               
//                                   ,/###%&&&(,                                   
//                                       .*.                                       

pragma solidity ^0.8.4;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./libraries/ABDKMath64x64.sol";

contract Sisyphus is Ownable, ReentrancyGuard{

    //using ABDKMath64x64 for *;

    // GAME PARAMETERS 
    address public currentWinner;
    uint256 public currentPrice;
    uint256 lastPushTime; // Parameter for recording timestamp of each boulder push
    uint256 expirationTime; // Parameter for setting the new expiration time
    uint256 pushCount;
    uint256 gameCount;
    mapping(uint256 => mapping(address => uint256[])) pushNumByPlayerGame; // Record when a player has pushed for each game

    struct GameParams {
        uint256 startingPrice;
        uint256 timerDuration;
        uint256 percentRateIncrease; // increase for each successive push
        uint256 percentToBoulder;   // push value goes to the Boulder (prize pool)
        uint256 percentToPushers;   // push value goes to previous pushers 
        uint256 percentToReserve;   // push value goes to platform profit
        uint256 lastPush;           // last push of the game; "winner" 
        uint256 boulderAtLastPush;  // boulder value at last push
    }
    mapping(uint256 => GameParams) GameParamsByGame;
    GameParams public PendingParams; // Owner can set new game params while a game is running - will take effect when the next game starts 

    uint256 public boulder = 0; // Value of the boulder
    uint256 public reserve = 0; 
    uint256 constant percentBasis = 10000; 

    // Constructor is called with initial game's params 
    
    constructor(GameParams memory initParams) {
        gameCount++;
        GameParamsByGame[gameCount].startingPrice       = initParams.startingPrice;         // start the price at 0.005 ether each round
        GameParamsByGame[gameCount].timerDuration       = initParams.timerDuration;
        GameParamsByGame[gameCount].percentRateIncrease = initParams.percentRateIncrease;   // 1% increase for each successive push
        GameParamsByGame[gameCount].percentToBoulder    = initParams.percentToBoulder;      // 30% of push value goes to the Boulder (prize pool)
        GameParamsByGame[gameCount].percentToPushers    = initParams.percentToPushers;      // 69% of push value goes to previous pushers 
        GameParamsByGame[gameCount].percentToReserve    = initParams.percentToReserve;      // 1% of push value goes to platform profit
        PendingParams = GameParamsByGame[gameCount];                                        // Init defaults
        
        // Init params for first game
        expirationTime = block.timestamp + GameParamsByGame[gameCount].timerDuration;
        currentPrice = GameParamsByGame[gameCount].startingPrice;
    }

    function pushTheBoulder() external payable {
        require(msg.value == currentPrice,
            "Must push boulder with exactly push price"
        );
        require(expirationTime > block.timestamp,
            "This game is expired; call reset");

        // Record push
        pushCount++;
        pushNumByPlayerGame[gameCount][msg.sender].push(pushCount);
        currentWinner = msg.sender;

        // Increment boulder value and take some for the reserves 
        boulder += _getBoulderAdd(gameCount, msg.value);
        reserve += _getReserveTake(gameCount, msg.value);

        // Set up parameters for next push
        currentPrice = _getNewPrice(gameCount);
        lastPushTime = block.timestamp; 
        expirationTime = lastPushTime + GameParamsByGame[gameCount].timerDuration;
    }

    // Anyone can call this when the time is appropriate
    function resetTheGame() external {
        require(block.timestamp > expirationTime, "Timer has not expired"); 
        // Store end state params 
        GameParamsByGame[gameCount].lastPush = pushCount;
        GameParamsByGame[gameCount].boulderAtLastPush = boulder;
        // Reset game params
        pushCount = 0;
        boulder = 0;
        // Increment game counter and apply new rules (if any) 
        gameCount++;
        GameParamsByGame[gameCount] = PendingParams;
        expirationTime = lastPushTime + GameParamsByGame[gameCount].timerDuration;
        currentWinner = address(0);
    }
    
    // Allows any previous user to withdraw their accrued balance from the platform
    function claimWinningsByGame(uint256 _game) external nonReentrant {
        uint256[] memory pushes = pushNumByPlayerGame[_game][msg.sender];
        require(pushes.length > 0, "Nothing to withdraw");
        require(gameCount > _game, "Game is not over yet");
        uint256 val;
        uint256 lastPush = GameParamsByGame[_game].lastPush;
        for (uint256 i; i == 0; i++) {
            uint256 pushNum = pushes[i];
            if(pushNum == lastPush){
                val += GameParamsByGame[_game].boulderAtLastPush;
            }
            val += _valuePerPush(_game, pushNum);
        }
        delete pushNumByPlayerGame[_game][msg.sender];
        (bool success, ) = msg.sender.call{value:val}("");
        require(success, "Failed to transfer winnings");
    }

    function _valuePerPush(uint256 _game, uint256 _push) internal view returns (uint256) {
        uint256 lastPush = GameParamsByGame[_game].lastPush;
        return _calcValue(_game, lastPush, _push);
    }

    function _calcValue(uint256 _game, uint256 _lastPush, uint256 _push) internal view returns (uint256) {
        if(_push < _lastPush) {
            return _calcValue(_game, _lastPush, _push++) + _valueForPusher(_game, _push);
        }
        return _valueForPusher(_game, _push); // Last push does not get a split
    }

    function _valueForPusher(uint256 _game, uint256 _push) internal view returns (uint256) {
        uint256 r = GameParamsByGame[_game].percentRateIncrease;
        uint256 x0 = GameParamsByGame[_game].startingPrice;
        int128 x = 1 + ABDKMath64x64.divu(r,percentBasis);
        return ABDKMath64x64.mulu(ABDKMath64x64.pow(x,_push),x0);
    }

    function _getBoulderAdd(uint256 _game, uint256 value) internal view returns (uint256) {
        return (value *  GameParamsByGame[_game].percentToBoulder) / percentBasis; 
    }

    function _getReserveTake(uint256 _game, uint256 value) internal view returns (uint256) {
        return (value * GameParamsByGame[_game].percentToReserve) / percentBasis; 
    }

    function _getNewPrice(uint256 _game) internal view returns (uint256) {
        return currentPrice + ((currentPrice * GameParamsByGame[_game].percentRateIncrease) / percentBasis);
    }

    // Allows the platform to withdraw accrued revenue
    function ownerWithdraw(uint256 amount) external payable onlyOwner {
        require(amount <= reserve, "Withdrawal amount must be less than reserves available");
            payable(msg.sender).transfer(amount);
            reserve -= amount;
    }

    function changeGameParams(GameParams calldata NewParams) external onlyOwner {
        PendingParams = NewParams; 
    }
}