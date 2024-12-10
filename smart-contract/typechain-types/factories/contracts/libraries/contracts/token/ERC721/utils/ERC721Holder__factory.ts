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
import type { NonPayableOverrides } from "../../../../../../../common";
import type {
  ERC721Holder,
  ERC721HolderInterface,
} from "../../../../../../../contracts/libraries/contracts/token/ERC721/utils/ERC721Holder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761011a908161001c8239f35b600080fdfe60806004361015600e57600080fd5b600090813560e01c63150b7a0214602457600080fd5b3460dc57608036600319011260dc576001600160a01b036004358181160360e0576024359081160360dc576064359067ffffffffffffffff9081831160c4573660238401121560c45782600401359180831160c857601f8301601f19908116603f011682019081118282101760c857604052818152366024838501011160c4578160246020940184830137010152604051630a85bd0160e11b8152602090f35b8380fd5b634e487b7160e01b85526041600452602485fd5b5080fd5b8280fdfea264697066735822122075235ebb9c99822a834fea7b15649eacf2ddc8e8966e3b6897e6fd4ba404f66e64736f6c63430008120033";

type ERC721HolderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721HolderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Holder__factory extends ContractFactory {
  constructor(...args: ERC721HolderConstructorParams) {
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
      ERC721Holder & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC721Holder__factory {
    return super.connect(runner) as ERC721Holder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721HolderInterface {
    return new Interface(_abi) as ERC721HolderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC721Holder {
    return new Contract(address, _abi, runner) as unknown as ERC721Holder;
  }
}