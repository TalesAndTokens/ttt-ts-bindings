/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IItemTransfer,
  IItemTransferInterface,
} from "../../contracts/IItemTransfer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "worldId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "targetTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "itemDefinitionIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "int64[]",
        name: "amounts",
        type: "int64[]",
      },
    ],
    name: "TransferItems",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "worldId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "itemDefinitionIds",
        type: "uint256[]",
      },
      {
        internalType: "int64[]",
        name: "amounts",
        type: "int64[]",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "worldId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "itemDefinitionIds",
        type: "uint256[]",
      },
      {
        internalType: "int64[]",
        name: "amounts",
        type: "int64[]",
      },
    ],
    name: "validateTransfer",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "validWorldId",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "validTokenId",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "validTargetTokenId",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "validLength",
            type: "bool",
          },
          {
            internalType: "bool[]",
            name: "validTransferables",
            type: "bool[]",
          },
          {
            internalType: "bool[]",
            name: "validAmounts",
            type: "bool[]",
          },
        ],
        internalType: "struct IItemTransfer.TransferValidationResult",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IItemTransfer__factory {
  static readonly abi = _abi;
  static createInterface(): IItemTransferInterface {
    return new Interface(_abi) as IItemTransferInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IItemTransfer {
    return new Contract(address, _abi, runner) as unknown as IItemTransfer;
  }
}
