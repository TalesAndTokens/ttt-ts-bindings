/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IItemPackNFT,
  IItemPackNFTInterface,
} from "../../../../contracts/interfaces/token/IItemPackNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEnabled",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "getTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "itemPackDefinitionId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IItemPackNFT__factory {
  static readonly abi = _abi;
  static createInterface(): IItemPackNFTInterface {
    return new utils.Interface(_abi) as IItemPackNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IItemPackNFT {
    return new Contract(address, _abi, signerOrProvider) as IItemPackNFT;
  }
}
