/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IItemPackReveal,
  IItemPackRevealInterface,
} from "../../../contracts/interfaces/IItemPackReveal";

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
        name: "itemPackId",
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
    name: "RevealItemPack",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "playerWallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "worldId",
        type: "uint256",
      },
    ],
    name: "getItemPacks",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemPackId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "itemPackDefinitionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IItemPackReveal.ItemPackRecord[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "playerWallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "worldId",
        type: "uint256",
      },
    ],
    name: "getItemPacksAssociatedWithNFT",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemPackId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "itemPackDefinitionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IItemPackReveal.ItemPackRecord[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
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
        name: "itemPackId",
        type: "uint256",
      },
    ],
    name: "isRevealed",
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
        name: "itemPackId",
        type: "uint256",
      },
    ],
    name: "reveal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IItemPackReveal__factory {
  static readonly abi = _abi;
  static createInterface(): IItemPackRevealInterface {
    return new utils.Interface(_abi) as IItemPackRevealInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IItemPackReveal {
    return new Contract(address, _abi, signerOrProvider) as IItemPackReveal;
  }
}
