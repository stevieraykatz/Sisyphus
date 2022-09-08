/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Sisyphus, SisyphusInterface } from "../../contracts/Sisyphus";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "PendingParams",
    outputs: [
      {
        internalType: "uint256",
        name: "startingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timerDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percentRateIncrease",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percentToBoulder",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percentToPushers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percentToReserve",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastPush",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "boulderAtLastPush",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "boulder",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startingPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timerDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percentRateIncrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percentToBoulder",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percentToPushers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "percentToReserve",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastPush",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "boulderAtLastPush",
            type: "uint256",
          },
        ],
        internalType: "struct Sisyphus.GameParams",
        name: "NewParams",
        type: "tuple",
      },
    ],
    name: "changeGameParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_game",
        type: "uint256",
      },
    ],
    name: "claimWinningsByGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ownerWithdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pushTheBoulder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reserve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "resetTheGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060125560006013553480156200001b57600080fd5b506200003c62000030620001d660201b60201c565b620001de60201b60201c565b60018081905550600760008154809291906200005890620002db565b91905055506611c37937e08000600960006007548152602001908152602001600020600001819055506201518060096000600754815260200190815260200160002060010181905550606460096000600754815260200190815260200160002060020181905550610bb860096000600754815260200190815260200160002060030181905550611af460096000600754815260200190815260200160002060040181905550606460096000600754815260200190815260200160002060050181905550600960006007548152602001908152602001600020600a60008201548160000155600182015481600101556002820154816002015560038201548160030155600482015481600401556005820154816005015560068201548160060155600782015481600701559050506009600060075481526020019081526020016000206001015442620001ab919062000329565b6005819055506009600060075481526020019081526020016000206000015460038190555062000386565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000620002e882620002d1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156200031e576200031d620002a2565b5b600182019050919050565b60006200033682620002d1565b91506200034383620002d1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200037b576200037a620002a2565b5b828201905092915050565b61204480620003966000396000f3fe6080604052600436106100c25760003560e01c80638da5cb5b1161007f578063aabe2fe311610059578063aabe2fe314610216578063c8e0a35814610241578063cd3293de1461024b578063f2fde38b14610276576100c2565b80638da5cb5b146101a95780639d1b464a146101d4578063a3d31a24146101ff576100c2565b806308627748146100c757806333f707d1146100f95780633e34509914610115578063715018a61461013e57806379ebc201146101555780637e9bece514610180575b600080fd5b3480156100d357600080fd5b506100dc61029f565b6040516100f098979695949392919061148b565b60405180910390f35b610113600480360381019061010e919061153a565b6102d5565b005b34801561012157600080fd5b5061013c6004803603810190610137919061153a565b610385565b005b34801561014a57600080fd5b506101536106b4565b005b34801561016157600080fd5b5061016a6106c8565b6040516101779190611567565b60405180910390f35b34801561018c57600080fd5b506101a760048036038101906101a291906115a7565b6106ce565b005b3480156101b557600080fd5b506101be6106eb565b6040516101cb9190611616565b60405180910390f35b3480156101e057600080fd5b506101e9610714565b6040516101f69190611567565b60405180910390f35b34801561020b57600080fd5b5061021461071a565b005b34801561022257600080fd5b5061022b61089e565b6040516102389190611616565b60405180910390f35b6102496108c4565b005b34801561025757600080fd5b50610260610aae565b60405161026d9190611567565b60405180910390f35b34801561028257600080fd5b5061029d6004803603810190610298919061165d565b610ab4565b005b600a8060000154908060010154908060020154908060030154908060040154908060050154908060060154908060070154905088565b6102dd610b38565b601354811115610322576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103199061170d565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610368573d6000803e3d6000fd5b50806013600082825461037b919061175c565b9250508190555050565b600260015414156103cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c2906117dc565b60405180910390fd5b600260018190555060006008600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561046f57602002820191906000526020600020905b81548152602001906001019080831161045b575b5050505050905060008151116104ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b190611848565b60405180910390fd5b81600754116104fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f5906118b4565b60405180910390fd5b6000806009600085815260200190815260200160002060060154905060005b600081141561059d57600084828151811061053b5761053a6118d4565b5b60200260200101519050828114156105725760096000878152602001908152602001600020600701548461056f9190611903565b93505b61057c8682610bb6565b846105879190611903565b935050808061059590611959565b91505061051d565b506008600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006105fa9190611434565b60003373ffffffffffffffffffffffffffffffffffffffff1683604051610620906119d3565b60006040518083038185875af1925050503d806000811461065d576040519150601f19603f3d011682016040523d82523d6000602084013e610662565b606091505b50509050806106a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069d90611a34565b60405180910390fd5b505050506001808190555050565b6106bc610b38565b6106c66000610be6565b565b60125481565b6106d6610b38565b80600a81816106e59190611c1e565b90505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60035481565b600554421161075e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075590611c78565b60405180910390fd5b600654600960006007548152602001908152602001600020600601819055506012546009600060075481526020019081526020016000206007018190555060006006819055506000601281905550600760008154809291906107bf90611959565b9190505550600a6009600060075481526020019081526020016000206000820154816000015560018201548160010155600282015481600201556003820154816003015560048201548160040155600582015481600501556006820154816006015560078201548160070155905050600960006007548152602001908152602001600020600101546004546108549190611903565b6005819055506000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6003543414610908576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ff90611d0a565b60405180910390fd5b426005541161094c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094390611d76565b60405180910390fd5b6006600081548092919061095f90611959565b919050555060086000600754815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600654908060018154018082558091505060019003906000526020600020016000909190919091505533600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a2c60075434610caa565b60126000828254610a3d9190611903565b92505081905550610a5060075434610ce3565b60136000828254610a619190611903565b92505081905550610a73600754610d1c565b6003819055504260048190555060096000600754815260200190815260200160002060010154600454610aa69190611903565b600581905550565b60135481565b610abc610b38565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2390611e08565b60405180910390fd5b610b3581610be6565b50565b610b40610d56565b73ffffffffffffffffffffffffffffffffffffffff16610b5e6106eb565b73ffffffffffffffffffffffffffffffffffffffff1614610bb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bab90611e74565b60405180910390fd5b565b60008060096000858152602001908152602001600020600601549050610bdd848285610d5e565b91505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000612710600960008581526020019081526020016000206003015483610cd19190611e94565b610cdb9190611f1d565b905092915050565b6000612710600960008581526020019081526020016000206005015483610d0a9190611e94565b610d149190611f1d565b905092915050565b60006127106009600084815260200190815260200160002060020154600354610d459190611e94565b610d4f9190611f1d565b9050919050565b600033905090565b600082821015610d9a57610d728483610dae565b610d8985858580610d8290611959565b9650610d5e565b610d939190611903565b9050610da7565b610da48483610dae565b90505b9392505050565b600080600960008581526020019081526020016000206002015490506000600960008681526020019081526020016000206000015490506000610df383612710610e1f565b6001610dff9190611f5b565b9050610e14610e0e8287610e87565b8361119c565b935050505092915050565b600080821415610e2e57600080fd5b6000610e3a8484611257565b90506f7fffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff16816fffffffffffffffffffffffffffffffff161115610e7d57600080fd5b8091505092915050565b600080600084600f0b128015610e9f57506001808416145b905060008085600f0b12610eb35784610eb8565b846000035b6fffffffffffffffffffffffffffffffff16905060007001000000000000000000000000000000009050680100000000000000008211610f9257603f82901b91505b60008514610f865760006001861614610f1757607f828202901c90505b607f828302901c915060006002861614610f3557607f828202901c90505b607f828302901c915060006004861614610f5357607f828202901c90505b607f828302901c915060006008861614610f7157607f828202901c90505b607f828302901c9150600485901c9450610efa565b604081901c905061112c565b6000603f90506c01000000000000000000000000831015610fbb57602083901b92506020810390505b6e010000000000000000000000000000831015610fe057601083901b92506010810390505b6f0100000000000000000000000000000083101561100657600883901b92506008810390505b6f1000000000000000000000000000000083101561102c57600483901b92506004810390505b6f4000000000000000000000000000000083101561105257600283901b92506002810390505b6f8000000000000000000000000000000083101561107857600183901b92506001810390505b60005b60008714611113576040821061109057600080fd5b600060018816146110d157607f848402901c925081810190507001000000000000000000000000000000008311156110d057600183901c92506001810190505b5b607f848502901c9350600182901b9150700100000000000000000000000000000000841061110757600184901c93506001820191505b600187901c965061107b565b6040811061112057600080fd5b8060400383901c925050505b600083611139578161113e565b816000035b90507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b811215801561118657506f7fffffffffffffffffffffffffffffff600f0b8113155b61118f57600080fd5b8094505050505092915050565b6000808214156111af5760009050611251565b600083600f0b12156111c057600080fd5b600060406fffffffffffffffffffffffffffffffff841685600f0b02901c90506000608084901c85600f0b02905077ffffffffffffffffffffffffffffffffffffffffffffffff81111561121357600080fd5b604081901b9050817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0381111561124957600080fd5b818101925050505b92915050565b60008082141561126657600080fd5b600077ffffffffffffffffffffffffffffffffffffffffffffffff84116112a35782604085901b8161129b5761129a611eee565b5b04905061140d565b600060c09050600060c086901c905064010000000081106112cc57602081901c90506020820191505b6201000081106112e457601081901c90506010820191505b61010081106112fb57600881901c90506008820191505b6010811061131157600481901c90506004820191505b6004811061132757600281901c90506002820191505b60028110611336576001820191505b600160bf830360018703901c018260ff0387901b8161135857611357611eee565b5b0492506fffffffffffffffffffffffffffffffff83111561137857600080fd5b6000608086901c8402905060006fffffffffffffffffffffffffffffffff871685029050600060c089901c9050600060408a901b9050828110156113bd576001820391505b8281039050608084901b9250828110156113d8576001820391505b8281039050608084901c82146113f1576113f0611fdf565b5b88818161140157611400611eee565b5b04870196505050505050505b6fffffffffffffffffffffffffffffffff81111561142a57600080fd5b8091505092915050565b50805460008255906000526020600020908101906114529190611455565b50565b5b8082111561146e576000816000905550600101611456565b5090565b6000819050919050565b61148581611472565b82525050565b6000610100820190506114a1600083018b61147c565b6114ae602083018a61147c565b6114bb604083018961147c565b6114c8606083018861147c565b6114d5608083018761147c565b6114e260a083018661147c565b6114ef60c083018561147c565b6114fc60e083018461147c565b9998505050505050505050565b600080fd5b61151781611472565b811461152257600080fd5b50565b6000813590506115348161150e565b92915050565b6000602082840312156115505761154f611509565b5b600061155e84828501611525565b91505092915050565b600060208201905061157c600083018461147c565b92915050565b600080fd5b6000610100828403121561159e5761159d611582565b5b81905092915050565b600061010082840312156115be576115bd611509565b5b60006115cc84828501611587565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611600826115d5565b9050919050565b611610816115f5565b82525050565b600060208201905061162b6000830184611607565b92915050565b61163a816115f5565b811461164557600080fd5b50565b60008135905061165781611631565b92915050565b60006020828403121561167357611672611509565b5b600061168184828501611648565b91505092915050565b600082825260208201905092915050565b7f5769746864726177616c20616d6f756e74206d757374206265206c657373207460008201527f68616e20726573657276657320617661696c61626c6500000000000000000000602082015250565b60006116f760368361168a565b91506117028261169b565b604082019050919050565b60006020820190508181036000830152611726816116ea565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061176782611472565b915061177283611472565b9250828210156117855761178461172d565b5b828203905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006117c6601f8361168a565b91506117d182611790565b602082019050919050565b600060208201905081810360008301526117f5816117b9565b9050919050565b7f4e6f7468696e6720746f20776974686472617700000000000000000000000000600082015250565b600061183260138361168a565b915061183d826117fc565b602082019050919050565b6000602082019050818103600083015261186181611825565b9050919050565b7f47616d65206973206e6f74206f76657220796574000000000000000000000000600082015250565b600061189e60148361168a565b91506118a982611868565b602082019050919050565b600060208201905081810360008301526118cd81611891565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061190e82611472565b915061191983611472565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561194e5761194d61172d565b5b828201905092915050565b600061196482611472565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156119975761199661172d565b5b600182019050919050565b600081905092915050565b50565b60006119bd6000836119a2565b91506119c8826119ad565b600082019050919050565b60006119de826119b0565b9150819050919050565b7f4661696c656420746f207472616e736665722077696e6e696e67730000000000600082015250565b6000611a1e601b8361168a565b9150611a29826119e8565b602082019050919050565b60006020820190508181036000830152611a4d81611a11565b9050919050565b60008135611a618161150e565b80915050919050565b60008160001b9050919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611aa384611a6a565b9350801983169250808416831791505092915050565b6000819050919050565b6000611ade611ad9611ad484611472565b611ab9565b611472565b9050919050565b6000819050919050565b611af882611ac3565b611b0b611b0482611ae5565b8354611a77565b8255505050565b600081016000830180611b2481611a54565b9050611b308184611aef565b505050600181016020830180611b4581611a54565b9050611b518184611aef565b505050600281016040830180611b6681611a54565b9050611b728184611aef565b505050600381016060830180611b8781611a54565b9050611b938184611aef565b505050600481016080830180611ba881611a54565b9050611bb48184611aef565b5050506005810160a0830180611bc981611a54565b9050611bd58184611aef565b5050506006810160c0830180611bea81611a54565b9050611bf68184611aef565b5050506007810160e0830180611c0b81611a54565b9050611c178184611aef565b5050505050565b611c288282611b12565b5050565b7f54696d657220686173206e6f7420657870697265640000000000000000000000600082015250565b6000611c6260158361168a565b9150611c6d82611c2c565b602082019050919050565b60006020820190508181036000830152611c9181611c55565b9050919050565b7f4d757374207075736820626f756c64657220776974682065786163746c79207060008201527f7573682070726963650000000000000000000000000000000000000000000000602082015250565b6000611cf460298361168a565b9150611cff82611c98565b604082019050919050565b60006020820190508181036000830152611d2381611ce7565b9050919050565b7f546869732067616d6520697320657870697265643b2063616c6c207265736574600082015250565b6000611d6060208361168a565b9150611d6b82611d2a565b602082019050919050565b60006020820190508181036000830152611d8f81611d53565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611df260268361168a565b9150611dfd82611d96565b604082019050919050565b60006020820190508181036000830152611e2181611de5565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611e5e60208361168a565b9150611e6982611e28565b602082019050919050565b60006020820190508181036000830152611e8d81611e51565b9050919050565b6000611e9f82611472565b9150611eaa83611472565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611ee357611ee261172d565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611f2882611472565b9150611f3383611472565b925082611f4357611f42611eee565b5b828204905092915050565b600081600f0b9050919050565b6000611f6682611f4e565b9150611f7183611f4e565b9250816f7fffffffffffffffffffffffffffffff03831360008312151615611f9c57611f9b61172d565b5b817fffffffffffffffffffffffffffffffff80000000000000000000000000000000038312600083121615611fd457611fd361172d565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fdfea2646970667358221220117fbe7c38cee1043d4df0ced6113de12b1ec25dbe72cf07f868555606dfb4c364736f6c634300080a0033";

type SisyphusConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SisyphusConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Sisyphus__factory extends ContractFactory {
  constructor(...args: SisyphusConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Sisyphus> {
    return super.deploy(overrides || {}) as Promise<Sisyphus>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Sisyphus {
    return super.attach(address) as Sisyphus;
  }
  override connect(signer: Signer): Sisyphus__factory {
    return super.connect(signer) as Sisyphus__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SisyphusInterface {
    return new utils.Interface(_abi) as SisyphusInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Sisyphus {
    return new Contract(address, _abi, signerOrProvider) as Sisyphus;
  }
}