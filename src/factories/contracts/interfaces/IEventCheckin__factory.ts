/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IEventCheckin,
  IEventCheckinInterface,
} from "../../../contracts/interfaces/IEventCheckin";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "playerWallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "worldId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eventDefinitionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "itemPackDefinitionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "itemPackId",
        type: "uint256",
      },
    ],
    name: "Checkin",
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
      {
        internalType: "uint256",
        name: "eventDefinitionId",
        type: "uint256",
      },
    ],
    name: "checkin",
    outputs: [],
    stateMutability: "nonpayable",
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
      {
        internalType: "uint256",
        name: "eventDefinitionId",
        type: "uint256",
      },
    ],
    name: "getCheckinCountFromPlayer",
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
        name: "worldId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eventDefinitionId",
        type: "uint256",
      },
    ],
    name: "getEventDefinition",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        name: "playerWallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "worldId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eventDefinitionId",
        type: "uint256",
      },
    ],
    name: "getLatestCheckinTimestampFromPlayer",
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
        internalType: "address",
        name: "playerWallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "worldId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eventDefinitionId",
        type: "uint256",
      },
    ],
    name: "validateCheckin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IEventCheckin__factory {
  static readonly abi = _abi;
  static createInterface(): IEventCheckinInterface {
    return new Interface(_abi) as IEventCheckinInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IEventCheckin {
    return new Contract(address, _abi, runner) as unknown as IEventCheckin;
  }
}
