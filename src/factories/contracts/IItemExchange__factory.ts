/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IItemExchange,
  IItemExchangeInterface,
} from "../../contracts/IItemExchange";

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
        indexed: false,
        internalType: "uint256",
        name: "exchangeDefinitionId",
        type: "uint256",
      },
    ],
    name: "Exchange",
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
        name: "exchangeDefinitionId",
        type: "uint256",
      },
    ],
    name: "exchange",
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
        name: "exchangeDefinitionId",
        type: "uint256",
      },
    ],
    name: "validate",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "checkEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "checkConditionCharacter",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "checkExecutableTimes",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "checkExecutableTimesPerCharacter",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "checkEndPeriod",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "checkCharacterExecutableInterval",
            type: "bool",
          },
          {
            internalType: "bool[]",
            name: "checkConditionEquipments",
            type: "bool[]",
          },
          {
            internalType: "int64[]",
            name: "checkConditionItemCounts",
            type: "int64[]",
          },
          {
            internalType: "int64[]",
            name: "checkCostItemCounts",
            type: "int64[]",
          },
        ],
        internalType: "struct IItemExchange.ItemExchangeValidationResult",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IItemExchange__factory {
  static readonly abi = _abi;
  static createInterface(): IItemExchangeInterface {
    return new Interface(_abi) as IItemExchangeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IItemExchange {
    return new Contract(address, _abi, runner) as unknown as IItemExchange;
  }
}
