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
    name: "resetTheBoulder",
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
  "0x6080604052600060115560006012553480156200001b57600080fd5b506200003c62000030620001cc60201b60201c565b620001d460201b60201c565b60018081905550600760008154809291906200005890620002d1565b91905055506611c37937e08000600960006007548152602001908152602001600020600001819055506201518060096000600754815260200190815260200160002060010181905550606460096000600754815260200190815260200160002060020181905550610bb860096000600754815260200190815260200160002060030181905550611af460096000600754815260200190815260200160002060040181905550606460096000600754815260200190815260200160002060050181905550600960006007548152602001908152602001600020600a600082015481600001556001820154816001015560028201548160020155600382015481600301556004820154816004015560058201548160050155600682015481600601559050506009600060075481526020019081526020016000206001015442620001a191906200031f565b600581905550600960006007548152602001908152602001600020600001546003819055506200037c565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000620002de82620002c7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000314576200031362000298565b5b600182019050919050565b60006200032c82620002c7565b91506200033983620002c7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000371576200037062000298565b5b828201905092915050565b611fbf806200038c6000396000f3fe6080604052600436106100c25760003560e01c80638da5cb5b1161007f578063c8e0a35811610059578063c8e0a35814610217578063cd3293de14610221578063d4ffe5a01461024c578063f2fde38b14610275576100c2565b80638da5cb5b146101965780639d1b464a146101c1578063aabe2fe3146101ec576100c2565b806308627748146100c757806333f707d1146100f85780633e345099146101145780635329fc0b1461013d578063715018a61461015457806379ebc2011461016b575b600080fd5b3480156100d357600080fd5b506100dc61029e565b6040516100ef9796959493929190611412565b60405180910390f35b610112600480360381019061010d91906114b2565b6102ce565b005b34801561012057600080fd5b5061013b600480360381019061013691906114b2565b61037e565b005b34801561014957600080fd5b50610152610664565b005b34801561016057600080fd5b506101696107bf565b005b34801561017757600080fd5b506101806107d3565b60405161018d91906114df565b60405180910390f35b3480156101a257600080fd5b506101ab6107d9565b6040516101b8919061153b565b60405180910390f35b3480156101cd57600080fd5b506101d6610802565b6040516101e391906114df565b60405180910390f35b3480156101f857600080fd5b50610201610808565b60405161020e919061153b565b60405180910390f35b61021f61082e565b005b34801561022d57600080fd5b50610236610a18565b60405161024391906114df565b60405180910390f35b34801561025857600080fd5b50610273600480360381019061026e919061157a565b610a1e565b005b34801561028157600080fd5b5061029c600480360381019061029791906115d3565b610a3b565b005b600a8060000154908060010154908060020154908060030154908060040154908060050154908060060154905087565b6102d6610abf565b60125481111561031b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031290611683565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610361573d6000803e3d6000fd5b50806012600082825461037491906116d2565b9250508190555050565b600260015414156103c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bb90611752565b60405180910390fd5b600260018190555060006008600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561046857602002820191906000526020600020905b815481526020019060010190808311610454575b5050505050905060008151116104b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104aa906117be565b60405180910390fd5b81600754116104f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ee9061182a565b60405180910390fd5b6000805b600081141561054e5760008382815181106105195761051861184a565b5b6020026020010151905061052d8582610b3d565b836105389190611879565b9250508080610546906118cf565b9150506104fb565b506008600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006105ab91906113bb565b60003373ffffffffffffffffffffffffffffffffffffffff16826040516105d190611949565b60006040518083038185875af1925050503d806000811461060e576040519150601f19603f3d011682016040523d82523d6000602084013e610613565b606091505b5050905080610657576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064e906119aa565b60405180910390fd5b5050506001808190555050565b60055442116106a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069f90611a16565b60405180910390fd5b6006546009600060075481526020019081526020016000206006018190555060006006819055506000601181905550600760008154809291906106ea906118cf565b9190505550600a60096000600754815260200190815260200160002060008201548160000155600182015481600101556002820154816002015560038201548160030155600482015481600401556005820154816005015560068201548160060155905050600960006007548152602001908152602001600020600101546004546107759190611879565b6005819055506000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6107c7610abf565b6107d16000610b6d565b565b60115481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60035481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6003543414610872576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086990611aa8565b60405180910390fd5b42600554106108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ad90611b3a565b60405180910390fd5b600660008154809291906108c9906118cf565b919050555060086000600754815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600654908060018154018082558091505060019003906000526020600020016000909190919091505533600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061099660075434610c31565b601160008282546109a79190611879565b925050819055506109ba60075434610c6a565b601260008282546109cb9190611879565b925050819055506109dd600754610ca3565b6003819055504260048190555060096000600754815260200190815260200160002060010154600454610a109190611879565b600581905550565b60125481565b610a26610abf565b80600a8181610a359190611d03565b90505050565b610a43610abf565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ab3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aaa90611d83565b60405180910390fd5b610abc81610b6d565b50565b610ac7610cdd565b73ffffffffffffffffffffffffffffffffffffffff16610ae56107d9565b73ffffffffffffffffffffffffffffffffffffffff1614610b3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3290611def565b60405180910390fd5b565b60008060096000858152602001908152602001600020600601549050610b64848285610ce5565b91505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000612710600960008581526020019081526020016000206003015483610c589190611e0f565b610c629190611e98565b905092915050565b6000612710600960008581526020019081526020016000206005015483610c919190611e0f565b610c9b9190611e98565b905092915050565b60006127106009600084815260200190815260200160002060020154600354610ccc9190611e0f565b610cd69190611e98565b9050919050565b600033905090565b600082821015610d2157610cf98483610d35565b610d1085858580610d09906118cf565b9650610ce5565b610d1a9190611879565b9050610d2e565b610d2b8483610d35565b90505b9392505050565b600080600960008581526020019081526020016000206002015490506000600960008681526020019081526020016000206000015490506000610d7a83612710610da6565b6001610d869190611ed6565b9050610d9b610d958287610e0e565b83611123565b935050505092915050565b600080821415610db557600080fd5b6000610dc184846111de565b90506f7fffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff16816fffffffffffffffffffffffffffffffff161115610e0457600080fd5b8091505092915050565b600080600084600f0b128015610e2657506001808416145b905060008085600f0b12610e3a5784610e3f565b846000035b6fffffffffffffffffffffffffffffffff16905060007001000000000000000000000000000000009050680100000000000000008211610f1957603f82901b91505b60008514610f0d5760006001861614610e9e57607f828202901c90505b607f828302901c915060006002861614610ebc57607f828202901c90505b607f828302901c915060006004861614610eda57607f828202901c90505b607f828302901c915060006008861614610ef857607f828202901c90505b607f828302901c9150600485901c9450610e81565b604081901c90506110b3565b6000603f90506c01000000000000000000000000831015610f4257602083901b92506020810390505b6e010000000000000000000000000000831015610f6757601083901b92506010810390505b6f01000000000000000000000000000000831015610f8d57600883901b92506008810390505b6f10000000000000000000000000000000831015610fb357600483901b92506004810390505b6f40000000000000000000000000000000831015610fd957600283901b92506002810390505b6f80000000000000000000000000000000831015610fff57600183901b92506001810390505b60005b6000871461109a576040821061101757600080fd5b6000600188161461105857607f848402901c9250818101905070010000000000000000000000000000000083111561105757600183901c92506001810190505b5b607f848502901c9350600182901b9150700100000000000000000000000000000000841061108e57600184901c93506001820191505b600187901c9650611002565b604081106110a757600080fd5b8060400383901c925050505b6000836110c057816110c5565b816000035b90507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b811215801561110d57506f7fffffffffffffffffffffffffffffff600f0b8113155b61111657600080fd5b8094505050505092915050565b60008082141561113657600090506111d8565b600083600f0b121561114757600080fd5b600060406fffffffffffffffffffffffffffffffff841685600f0b02901c90506000608084901c85600f0b02905077ffffffffffffffffffffffffffffffffffffffffffffffff81111561119a57600080fd5b604081901b9050817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038111156111d057600080fd5b818101925050505b92915050565b6000808214156111ed57600080fd5b600077ffffffffffffffffffffffffffffffffffffffffffffffff841161122a5782604085901b8161122257611221611e69565b5b049050611394565b600060c09050600060c086901c9050640100000000811061125357602081901c90506020820191505b62010000811061126b57601081901c90506010820191505b610100811061128257600881901c90506008820191505b6010811061129857600481901c90506004820191505b600481106112ae57600281901c90506002820191505b600281106112bd576001820191505b600160bf830360018703901c018260ff0387901b816112df576112de611e69565b5b0492506fffffffffffffffffffffffffffffffff8311156112ff57600080fd5b6000608086901c8402905060006fffffffffffffffffffffffffffffffff871685029050600060c089901c9050600060408a901b905082811015611344576001820391505b8281039050608084901b92508281101561135f576001820391505b8281039050608084901c821461137857611377611f5a565b5b88818161138857611387611e69565b5b04870196505050505050505b6fffffffffffffffffffffffffffffffff8111156113b157600080fd5b8091505092915050565b50805460008255906000526020600020908101906113d991906113dc565b50565b5b808211156113f55760008160009055506001016113dd565b5090565b6000819050919050565b61140c816113f9565b82525050565b600060e082019050611427600083018a611403565b6114346020830189611403565b6114416040830188611403565b61144e6060830187611403565b61145b6080830186611403565b61146860a0830185611403565b61147560c0830184611403565b98975050505050505050565b600080fd5b61148f816113f9565b811461149a57600080fd5b50565b6000813590506114ac81611486565b92915050565b6000602082840312156114c8576114c7611481565b5b60006114d68482850161149d565b91505092915050565b60006020820190506114f46000830184611403565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611525826114fa565b9050919050565b6115358161151a565b82525050565b6000602082019050611550600083018461152c565b92915050565b600080fd5b600060e0828403121561157157611570611556565b5b81905092915050565b600060e082840312156115905761158f611481565b5b600061159e8482850161155b565b91505092915050565b6115b08161151a565b81146115bb57600080fd5b50565b6000813590506115cd816115a7565b92915050565b6000602082840312156115e9576115e8611481565b5b60006115f7848285016115be565b91505092915050565b600082825260208201905092915050565b7f5769746864726177616c20616d6f756e74206d757374206265206c657373207460008201527f68616e20726573657276657320617661696c61626c6500000000000000000000602082015250565b600061166d603683611600565b915061167882611611565b604082019050919050565b6000602082019050818103600083015261169c81611660565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006116dd826113f9565b91506116e8836113f9565b9250828210156116fb576116fa6116a3565b5b828203905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b600061173c601f83611600565b915061174782611706565b602082019050919050565b6000602082019050818103600083015261176b8161172f565b9050919050565b7f4e6f7468696e6720746f20776974686472617700000000000000000000000000600082015250565b60006117a8601383611600565b91506117b382611772565b602082019050919050565b600060208201905081810360008301526117d78161179b565b9050919050565b7f47616d65206973206e6f74206f76657220796574000000000000000000000000600082015250565b6000611814601483611600565b915061181f826117de565b602082019050919050565b6000602082019050818103600083015261184381611807565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611884826113f9565b915061188f836113f9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118c4576118c36116a3565b5b828201905092915050565b60006118da826113f9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561190d5761190c6116a3565b5b600182019050919050565b600081905092915050565b50565b6000611933600083611918565b915061193e82611923565b600082019050919050565b600061195482611926565b9150819050919050565b7f4661696c656420746f207472616e736665722077696e6e696e67730000000000600082015250565b6000611994601b83611600565b915061199f8261195e565b602082019050919050565b600060208201905081810360008301526119c381611987565b9050919050565b7f54696d657220686173206e6f7420657870697265640000000000000000000000600082015250565b6000611a00601583611600565b9150611a0b826119ca565b602082019050919050565b60006020820190508181036000830152611a2f816119f3565b9050919050565b7f4d757374207075736820626f756c64657220776974682065786163746c79207060008201527f7573682070726963650000000000000000000000000000000000000000000000602082015250565b6000611a92602983611600565b9150611a9d82611a36565b604082019050919050565b60006020820190508181036000830152611ac181611a85565b9050919050565b7f5468652067616d65206e6565647320746f20626520726573657420627920746860008201527f6520636f6e7472616374206f70657261746f7200000000000000000000000000602082015250565b6000611b24603383611600565b9150611b2f82611ac8565b604082019050919050565b60006020820190508181036000830152611b5381611b17565b9050919050565b60008135611b6781611486565b80915050919050565b60008160001b9050919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ba984611b70565b9350801983169250808416831791505092915050565b6000819050919050565b6000611be4611bdf611bda846113f9565b611bbf565b6113f9565b9050919050565b6000819050919050565b611bfe82611bc9565b611c11611c0a82611beb565b8354611b7d565b8255505050565b600081016000830180611c2a81611b5a565b9050611c368184611bf5565b505050600181016020830180611c4b81611b5a565b9050611c578184611bf5565b505050600281016040830180611c6c81611b5a565b9050611c788184611bf5565b505050600381016060830180611c8d81611b5a565b9050611c998184611bf5565b505050600481016080830180611cae81611b5a565b9050611cba8184611bf5565b5050506005810160a0830180611ccf81611b5a565b9050611cdb8184611bf5565b5050506006810160c0830180611cf081611b5a565b9050611cfc8184611bf5565b5050505050565b611d0d8282611c18565b5050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611d6d602683611600565b9150611d7882611d11565b604082019050919050565b60006020820190508181036000830152611d9c81611d60565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611dd9602083611600565b9150611de482611da3565b602082019050919050565b60006020820190508181036000830152611e0881611dcc565b9050919050565b6000611e1a826113f9565b9150611e25836113f9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611e5e57611e5d6116a3565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611ea3826113f9565b9150611eae836113f9565b925082611ebe57611ebd611e69565b5b828204905092915050565b600081600f0b9050919050565b6000611ee182611ec9565b9150611eec83611ec9565b9250816f7fffffffffffffffffffffffffffffff03831360008312151615611f1757611f166116a3565b5b817fffffffffffffffffffffffffffffffff80000000000000000000000000000000038312600083121615611f4f57611f4e6116a3565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fdfea2646970667358221220635a3f97bb2b3a2c6c4d8ccf261762ff167fb33aa3bc6054221adae8eb50aa7064736f6c634300080a0033";

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