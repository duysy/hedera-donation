/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  DonationPlatform,
  DonationPlatformInterface,
} from "../../contracts/DonationPlatform";

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
        indexed: false,
        internalType: "uint256",
        name: "campaignId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "CampaignApprovalChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "campaignId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "organizer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalDonationTokens",
        type: "uint256",
      },
    ],
    name: "CampaignClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offChainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "campaignId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "organizer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
    ],
    name: "CampaignPublished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "campaignId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "donor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalDonationTokens",
        type: "uint256",
      },
    ],
    name: "DonationReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "value",
        type: "uint64",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WORKER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaigns",
    outputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "address",
        name: "organizer",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isClosed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_campaignId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "changeCampaignApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "delegateTransferFrom",
    outputs: [
      {
        internalType: "int64",
        name: "responseCode",
        type: "int64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "serialNumber",
        type: "uint256",
      },
    ],
    name: "delegateTransferFromNFT",
    outputs: [
      {
        internalType: "int64",
        name: "responseCode",
        type: "int64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_campaignId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "donate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "donationsByUser",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "donationsPerCampaign",
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
        internalType: "uint256",
        name: "_campaignId",
        type: "uint256",
      },
    ],
    name: "getCampaign",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "address",
            name: "organizer",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "goal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isClosed",
            type: "bool",
          },
        ],
        internalType: "struct DonationPlatform.Campaign",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_offChainId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_goal",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "organizer",
        type: "address",
      },
    ],
    name: "publishAndApproveCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "int64",
        name: "responseCode",
        type: "int64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "serialNumber",
        type: "uint256",
      },
    ],
    name: "transferFromNFT",
    outputs: [
      {
        internalType: "int64",
        name: "responseCode",
        type: "int64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "useErc20Mode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_campaignId",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040818152346100f3576001805560ff1960018160025416176002556000908180526020828152838320338452815260ff8484205416156100bf575b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177593848452838252808420338552825260ff818520541615610086575b611b0786816100f98239f35b60019185855284815281852090338652528320918254161790553391600080516020611c00833981519152339280a4388080808061007a565b8280528281528383203384528152838320600183825416179055333384600080516020611c008339815191528180a461003d565b600080fdfe608080604052600436101561001357600080fd5b60003560e01c90816301ffc9a7146111f5575080630cdd53f614610fa657806311e1fc0714610f8f578063141961bc14610eef578063155dd5ee14610ccb57806315dacbea14610cb45780631de81182146107d3578063248a9ca3146107a457806324f6c093146107785780632f2ff15d146106c55780633576914c1461067d57806336568abe146105eb57806339339546146105c85780635598f8cc146104a3578063634252dc1461046857806366e356f11461030d57806375b238fc146102d257806391d14854146102855780639b23d3d91461021a578063a217fddf146101fe578063d547741f146101bd5763eac6f3fe1461011157600080fd5b346101b85760008061017a61016c6101283661125e565b604051630aed65f560e11b602082019081526001600160a01b03958616602483015293851660448201529390911660648401526084830152929091829060a4820190565b03601f198101835282611346565b51906101675af4610189611937565b90156101ae576101a3816020808094518301019101611967565b6040519060030b8152f35b50602060156101a3565b600080fd5b346101b85760403660031901126101b8576101fc6004356101dc611248565b908060005260006020526101f7600160406000200154611472565b6117a7565b005b346101b85760003660031901126101b857602060405160008152f35b346101b85760008061027561016c6102313661125e565b604051639b23d3d960e01b602082019081526001600160a01b03958616602483015293851660448201529390911660648401526084830152929091829060a4820190565b5190826101675af1610189611937565b346101b85760403660031901126101b85761029e611248565b600435600052600060205260406000209060018060a01b0316600052602052602060ff604060002054166040519015158152f35b346101b85760003660031901126101b85760206040517fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758152f35b346101b85760403660031901126101b857600435602435801515918282036101b8573360009081527f7d7ffb7a348e1c6a02869081a26547b49160dd3df72d1d75a570eb9b698292ec602052604090205460ff161561042a576103736003548210611839565b600561037e8261129f565b5001928060ff8554161515146103d4576103c76040937f50ed3bd29ed86cd1e925df38e87444f34d0d2b69b528366321a23cd8738d5ce3959060ff801983541691151516179055565b82519182526020820152a1005b60405162461bcd60e51b815260206004820152602860248201527f43616d706169676e20697320616c726561647920696e20746865206465736972604482015267656420737461746560c01b6064820152608490fd5b60405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1030b71030b236b4b760511b6044820152606490fd5b346101b85760003660031901126101b85760206040517ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc78152f35b346101b85760203660031901126101b857610599610503600435600060c06040516104cd8161132a565b606081528260208201528260408201528260608201528260808201528260a082015201526104fe6003548210611839565b61129f565b50604051906105118261132a565b61051a81611368565b825260018060a01b0380600183015416916020840192835281600282015416906040850191825260038101546060860190815260056004830154926080880193845201549360a087019360ff86161515855260ff60c089019660081c161515865281604051998a9960208b525160e060208c01526101008b0190611431565b9751166040890152511660608701525160808601525160a085015251151560c084015251151560e08301520390f35b346101b85760003660031901126101b857602060ff600254166040519015158152f35b346101b85760403660031901126101b857610604611248565b336001600160a01b03821603610620576101fc906004356117a7565b60405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608490fd5b346101b85760403660031901126101b857610696611248565b600435600052600560205260406000209060018060a01b03166000526020526020604060002054604051908152f35b346101b85760403660031901126101b8576004356106e1611248565b8160005260006020526106fb600160406000200154611472565b81600052600060205260406000209060018060a01b0316908160005260205260ff604060002054161561072a57005b8160005260006020526040600020816000526020526040600020600160ff1982541617905533917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d600080a4005b346101b85760203660031901126101b85760043560005260046020526020604060002054604051908152f35b346101b85760203660031901126101b85760043560005260006020526020600160406000200154604051908152f35b346101b85760a03660031901126101b85767ffffffffffffffff6024358181116101b857366023820112156101b857806004013561081081611456565b9161081e6040519384611346565b81835236602483830101116101b85781600092602460209301838601378301015260449182356001600160a01b038116908190036101b8576084356001600160a01b038116908190036101b8573360009081527f0455839be7ae8b4a15d4efa84a286c663d6a625e72addf8ada11660c4b7ee430602052604090205460ff1615610c775760643515610c3357835115610bef578015610ba0578115610b5c57604051936108ca8561132a565b845260208401526040830152606435606083015260006080830152600160a0830152600060c083015260035468010000000000000000811015610b3057806001610917920160035561129f565b919091610b465782518051918211610b305761093383546112f0565b601f8111610aec575b50602090601f8311600114610a7d57918060c09492600594600092610a72575b50508160011b916000199060031b1c19161781555b6001810160018060a01b03602086015116906bffffffffffffffffffffffff60a01b9182825416179055600282019060018060a01b0360408701511690825416179055606084015160038201556080840151600482015501916109e660a08201511515849060ff801983541691151516179055565b0151815461ff00191690151560081b61ff0016179055600354600019810191908211610a5c57604080516001600160a01b03608435811682529235909216602083015260643590820152600435907fdefb2bfb397ffb606cd0da9e9008000fee58af4fccb0d26192ffb0614adac0fd90606090a3005b634e487b7160e01b600052601160045260246000fd5b01519050878061095c565b908360005260206000209160005b601f1985168110610ad457509260c0949260019260059583601f19811610610abb575b505050811b018155610971565b015160001960f88460031b161c19169055878080610aae565b91926020600181928685015181550194019201610a8b565b836000526020600020601f840160051c810160208510610b29575b601f830160051c82018110610b1d57505061093c565b60008155600101610b07565b5080610b07565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052600060045260246000fd5b60405162461bcd60e51b815260206004820152601e60248201527f546f6b656e2061646472657373206d757374206e6f74206265207a65726f000081870152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f7267616e697a65722061646472657373206d757374206e6f74206265207a658187015261726f60f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152601760248201527f5469746c65206d757374206e6f7420626520656d70747900000000000000000081870152606490fd5b60405162461bcd60e51b815260206004820152601b60248201527f476f616c206d7573742062652067726561746572207468616e2030000000000081870152606490fd5b60405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1030903bb7b935b2b960511b81870152606490fd5b346101b85760008061027561016c6101283661125e565b346101b8576020806003193601126101b85760043590610ce96118e1565b610cf66003548310611839565b610cff8261129f565b5060018101546001600160a01b0392919083163303610e9c57600581019283549360ff8560081c16610e57576004830154948515610e1b5761ff001916610100179055600254839190859060ff1615610e025750600260009301541660446040518094819363a9059cbb60e01b83523360048401528860248401525af18015610df657610d9491600091610dc9575b5061189d565b6040519283528201527fe120b15313f47b70c9196f36751e63aa50b67cf9316c6b5d695b4ad33ce2076f60403392a260018055005b610de99150833d8511610def575b610de18183611346565b810190611885565b85610d8e565b503d610dd7565b6040513d6000823e3d90fd5b91506002610e169301541633903090611980565b610d94565b60405162461bcd60e51b81526004810186905260146024820152734e6f2066756e647320746f20776974686472617760601b6044820152606490fd5b60405162461bcd60e51b815260048101859052601a60248201527f43616d706169676e20697320616c726561647920636c6f7365640000000000006044820152606490fd5b60405162461bcd60e51b815260048101839052602560248201527f4f6e6c7920746865206f7267616e697a65722063616e2077697468647261772060448201526466756e647360d81b6064820152608490fd5b346101b85760203660031901126101b8576004356003548110156101b857610f19610f619161129f565b50610f2381611368565b9060ff60018060a01b03918260018201541692600282015416906003810154600560048301549201549260405197889760e0895260e0890190611431565b956020880152604087015260608601526080850152818116151560a085015260081c16151560c08301520390f35b346101b85760008061017a61016c6102313661125e565b346101b85760403660031901126101b857600435602435610fc56118e1565b610fd26003548310611839565b610fdb8261129f565b50600581015460ff8116156111b05760081c60ff166111765781156111315760025460ff161561110b5760028101546040516323b872dd60e01b8152336004820152306024820152604481018490529190602090839060649082906000906001600160a01b03165af1918215610df65760049261105f916000916110ed575061189d565b0161106b82825461181b565b8155826000526005602052604060002033600052602052604060002061109283825461181b565b905582600052600460205260406000206110ad83825461181b565b90555490604051928352602083015260408201527f3dbea1b4ce5f95137fdcac9b1d685825c3d70ace830df1ca5a181d3887add41060603392a260018055005b611105915060203d8111610def57610de18183611346565b86610d8e565b60028101546004919061112c908490309033906001600160a01b0316611980565b61105f565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b60405162461bcd60e51b815260206004820152601260248201527110d85b5c185a59db881a5cc818db1bdcd95960721b6044820152606490fd5b60405162461bcd60e51b815260206004820152601860248201527f43616d706169676e206973206e6f7420617070726f76656400000000000000006044820152606490fd5b346101b85760203660031901126101b8576004359063ffffffff60e01b82168092036101b857602091637965db0b60e01b8114908115611237575b5015158152f35b6301ffc9a760e01b14905083611230565b602435906001600160a01b03821682036101b857565b60809060031901126101b8576001600160a01b0360043581811681036101b8579160243582811681036101b8579160443590811681036101b8579060643590565b6003548110156112da576006906003600052027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0190600090565b634e487b7160e01b600052603260045260246000fd5b90600182811c92168015611320575b602083101461130a57565b634e487b7160e01b600052602260045260246000fd5b91607f16916112ff565b60e0810190811067ffffffffffffffff821117610b3057604052565b90601f8019910116810190811067ffffffffffffffff821117610b3057604052565b906040519182600082549261137c846112f0565b9081845260019485811690816000146113eb57506001146113a8575b50506113a692500383611346565b565b9093915060005260209081600020936000915b8183106113d35750506113a693508201013880611398565b855488840185015294850194879450918301916113bb565b9150506113a694506020925060ff191682840152151560051b8201013880611398565b60005b8381106114215750506000910152565b8181015183820152602001611411565b9060209161144a8151809281855285808601910161140e565b601f01601f1916010190565b67ffffffffffffffff8111610b3057601f01601f191660200190565b600090808252602090828252604092838120338252835260ff84822054161561149b5750505050565b83519167ffffffffffffffff90336060850183811186821017611793578752602a8552858501918736843785511561177f576030835385519160019283101561176b576078602188015360295b83811161170157506116bf57908751936080850190858210908211176116ab57885260428452868401946060368737845115611697576030865384518210156116975790607860218601536041915b818311611629575050506115e7576115e39386936115c7936115b860489461158f9a519a8b957f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008c880152518092603788019061140e565b8401917001034b99036b4b9b9b4b733903937b6329607d1b60378401525180938684019061140e565b01036028810187520185611346565b5192839262461bcd60e51b845260048401526024830190611431565b0390fd5b60648587519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f81166010811015611683576f181899199a1a9b1b9c1cb0b131b232b360811b901a6116598588611828565b5360041c92801561166f57600019019190611537565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b634e487b7160e01b86526041600452602486fd5b60648789519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b90600f81166010811015611757576f181899199a1a9b1b9c1cb0b131b232b360811b901a61172f838a611828565b5360041c90801561174357600019016114e8565b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b88526032600452602488fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b85526032600452602485fd5b634e487b7160e01b85526041600452602485fd5b9060009180835282602052604083209160018060a01b03169182845260205260ff6040842054166117d757505050565b80835282602052604083208284526020526040832060ff1981541690557ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b339380a4565b91908201809211610a5c57565b9081518110156112da570160200190565b1561184057565b60405162461bcd60e51b815260206004820152601760248201527f43616d706169676e20646f6573206e6f742065786973740000000000000000006044820152606490fd5b908160209103126101b8575180151581036101b85790565b156118a457565b60405162461bcd60e51b8152602060048201526015602482015274151bdad95b881d1c985b9cd9995c8819985a5b1959605a1b6044820152606490fd5b6002600154146118f2576002600155565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b3d15611962573d9061194882611456565b916119566040519384611346565b82523d6000602084013e565b606090565b908160209103126101b857518060030b81036101b85790565b90929192677fffffffffffffff8311611a7c5760405163eca3691760e01b602082019081526001600160a01b039384166024830152918316604482015291909316606482015267ffffffffffffffff91821660070b60848083019190915281529160c0830191821183831017610b305760009283926040525190826101675af1611a08611937565b9015611a7257611a2381602080601694518301019101611967565b60030b03611a2d57565b60405162461bcd60e51b815260206004820152601b60248201527f5361666520746f6b656e207472616e73666572206661696c65642100000000006044820152606490fd5b5060166015611a23565b60405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20616044820152661b881a5b9d0d8d60ca1b6064820152608490fdfea264697066735822122048191a9933c22a5303045fa6fbe79730d2be3c6f931e0efce9a48f27b9cdc8b564736f6c634300081200332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";

type DonationPlatformConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DonationPlatformConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DonationPlatform__factory extends ContractFactory {
  constructor(...args: DonationPlatformConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DonationPlatform & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DonationPlatform__factory {
    return super.connect(runner) as DonationPlatform__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonationPlatformInterface {
    return new Interface(_abi) as DonationPlatformInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DonationPlatform {
    return new Contract(address, _abi, runner) as unknown as DonationPlatform;
  }
}
