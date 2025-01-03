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
  HederaCustomTokenService,
  HederaCustomTokenServiceInterface,
} from "../../contracts/HederaCustomTokenService";

const _abi = [
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "tokenAssociate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "tokenDissociate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenId",
        type: "address",
      },
      {
        internalType: "int64",
        name: "amount",
        type: "int64",
      },
      {
        internalType: "bytes[]",
        name: "metadata",
        type: "bytes[]",
      },
    ],
    name: "tokenMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenId",
        type: "address",
      },
      {
        internalType: "address",
        name: "fromAccountId",
        type: "address",
      },
      {
        internalType: "address",
        name: "toAccountId",
        type: "address",
      },
      {
        internalType: "int64",
        name: "tokenAmount",
        type: "int64",
      },
    ],
    name: "tokenTransfer",
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
] as const;

const _bytecode =
  "0x608080604052346100165761092a908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c90816311e1fc071461078e5750806315dacbea146107775780633a04033c146106505780634753b51b146105735780637f6314d0146104975780639b23d3d91461042c578063d95b2e62146101295763eac6f3fe1461007757600080fd5b3461011a576000806100e06100d261008e36610811565b604051630aed65f560e11b602082019081526001600160a01b03958616602483015293851660448201529390911660648401526084830152929091829060a4820190565b03601f198101835282610852565b51906101675af46100ef6108a8565b901561011f5760208180518101031261011a5761010f60208092016108d8565b6040519060030b8152f35b600080fd5b506020601561010f565b3461011a57606036600319011261011a576101426107e5565b6024908135908160070b80920361011a576044359067ffffffffffffffff821161011a573660238301121561011a57816004013567ffffffffffffffff811161011a57848160051b84010136811161011a5761019d82610874565b916101ab6040519384610852565b825260208201908194878101925b8284106103c557505050506040519363707a02cd60e11b6020860152608485019260018060a01b0316868601526044850152606060648501525180915260a4830160a48260051b85010192916000915b818310610368578660008088610228818a03601f198101835282610852565b602081519101826101675af161023c6108a8565b901561032757805181016060826020830192031261011a57610260602083016108d8565b9161026d604082016108e6565b5060608101519067ffffffffffffffff821161011a570181603f8201121561011a57602081015190604060206102a284610874565b6102ae83519182610852565b848152019260051b82010192831161011a57604001905b82821061030f575050506016905b60030b036102dd57005b606490600b6040519162461bcd60e51b8352602060048401528201526a135a5b9d0811985a5b195960aa1b6044820152fd5b6020809161031c846108e6565b8152019101906102c5565b50604051602081019080821067ffffffffffffffff8311176103535760009160405252601660156102d3565b82634e487b7160e01b60005260416004526000fd5b9091929360a319868203018252845180519081835260005b8281106103b057505060208083836000838096600198010152601f80199101160101960192019301919092610209565b80602080928401015182828701015201610380565b833567ffffffffffffffff811161011a5782013660438201121561011a5789810135916103f18361088c565b6103fe6040519182610852565b838152366044858501011161011a5760006020858196604483970183860137830101528152019301926101b9565b3461011a576000806104876100d261044336610811565b604051639b23d3d960e01b602082019081526001600160a01b03958616602483015293851660448201529390911660648401526084830152929091829060a4820190565b5190826101675af16100ef6108a8565b3461011a57604036600319011261011a576000806104b36107e5565b6100d26104f66104c16107fb565b60405163248a35ef60e11b602082019081526001600160a01b0395861660248301529490911660448201529182906064820190565b5190826101675af16105066108a8565b90156105695760208180518101031261011a576105276020601692016108d8565b60030b0361053157005b60405162461bcd60e51b815260206004820152601060248201526f105cdcdbd8da585d194811985a5b195960821b6044820152606490fd5b5060166015610527565b3461011a57604036600319011261011a5760008061058f6107e5565b6100d26105d261059d6107fb565b604051630132f29d60e31b602082019081526001600160a01b0395861660248301529490911660448201529182906064820190565b5190826101675af16105e26108a8565b90156106465760208180518101031261011a576106036020601692016108d8565b60030b0361060d57005b60405162461bcd60e51b8152602060048201526011602482015270111a5cdcdbd8da585d194811985a5b1959607a1b6044820152606490fd5b5060166015610603565b3461011a57608036600319011261011a576106696107e5565b6106716107fb565b906001600160a01b036044358181169081900361011a57606435918260070b80930361011a576040519481602087019563eca3691760e01b8752166024870152166044850152606484015260848301526084825260c082019082821067ffffffffffffffff8311176107615760009283926040525190826101675af16106f56108a8565b90156107575760208180518101031261011a576107166020601692016108d8565b60030b0361072057005b60405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8811985a5b1959608a1b6044820152606490fd5b5060166015610716565b634e487b7160e01b600052604160045260246000fd5b3461011a576000806104876100d261008e36610811565b3461011a5760006100d2826100e083946107a736610811565b639b23d3d960e01b602086019081526001600160a01b03948516602487015292841660448601529216606484015260848301919091529360a4820190565b600435906001600160a01b038216820361011a57565b602435906001600160a01b038216820361011a57565b608090600319011261011a576001600160a01b03600435818116810361011a5791602435828116810361011a5791604435908116810361011a579060643590565b90601f8019910116810190811067ffffffffffffffff82111761076157604052565b67ffffffffffffffff81116107615760051b60200190565b67ffffffffffffffff811161076157601f01601f191660200190565b3d156108d3573d906108b98261088c565b916108c76040519384610852565b82523d6000602084013e565b606090565b51908160030b820361011a57565b51908160070b820361011a5756fea26469706673582212207ed5ac75f257fa28a531bdd0b2cf4509128e1fa6633a965514ba1e7e90a7b2d064736f6c63430008120033";

type HederaCustomTokenServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HederaCustomTokenServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HederaCustomTokenService__factory extends ContractFactory {
  constructor(...args: HederaCustomTokenServiceConstructorParams) {
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
      HederaCustomTokenService & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): HederaCustomTokenService__factory {
    return super.connect(runner) as HederaCustomTokenService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HederaCustomTokenServiceInterface {
    return new Interface(_abi) as HederaCustomTokenServiceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): HederaCustomTokenService {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as HederaCustomTokenService;
  }
}
