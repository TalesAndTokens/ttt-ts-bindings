/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IItemPackReveal {
  export type ItemPackRecordStruct = {
    itemPackId: BigNumberish;
    itemPackDefinitionId: BigNumberish;
    tokenId: BigNumberish;
  };

  export type ItemPackRecordStructOutput = [
    itemPackId: bigint,
    itemPackDefinitionId: bigint,
    tokenId: bigint
  ] & { itemPackId: bigint; itemPackDefinitionId: bigint; tokenId: bigint };
}

export interface IItemPackRevealInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getItemPacks"
      | "getItemPacksAssociatedWithNFT"
      | "isRevealed"
      | "reveal"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "RevealItemPack"): EventFragment;

  encodeFunctionData(
    functionFragment: "getItemPacks",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getItemPacksAssociatedWithNFT",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isRevealed",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reveal",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getItemPacks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getItemPacksAssociatedWithNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isRevealed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reveal", data: BytesLike): Result;
}

export namespace RevealItemPackEvent {
  export type InputTuple = [
    worldId: BigNumberish,
    tokenId: BigNumberish,
    itemPackId: BigNumberish,
    itemDefinitionIds: BigNumberish[],
    amounts: BigNumberish[]
  ];
  export type OutputTuple = [
    worldId: bigint,
    tokenId: bigint,
    itemPackId: bigint,
    itemDefinitionIds: bigint[],
    amounts: bigint[]
  ];
  export interface OutputObject {
    worldId: bigint;
    tokenId: bigint;
    itemPackId: bigint;
    itemDefinitionIds: bigint[];
    amounts: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IItemPackReveal extends BaseContract {
  connect(runner?: ContractRunner | null): IItemPackReveal;
  waitForDeployment(): Promise<this>;

  interface: IItemPackRevealInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getItemPacks: TypedContractMethod<
    [playerWallet: AddressLike, worldId: BigNumberish],
    [IItemPackReveal.ItemPackRecordStructOutput[]],
    "view"
  >;

  getItemPacksAssociatedWithNFT: TypedContractMethod<
    [playerWallet: AddressLike, worldId: BigNumberish],
    [IItemPackReveal.ItemPackRecordStructOutput[]],
    "view"
  >;

  isRevealed: TypedContractMethod<
    [worldId: BigNumberish, itemPackId: BigNumberish],
    [boolean],
    "view"
  >;

  reveal: TypedContractMethod<
    [worldId: BigNumberish, tokenId: BigNumberish, itemPackId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getItemPacks"
  ): TypedContractMethod<
    [playerWallet: AddressLike, worldId: BigNumberish],
    [IItemPackReveal.ItemPackRecordStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getItemPacksAssociatedWithNFT"
  ): TypedContractMethod<
    [playerWallet: AddressLike, worldId: BigNumberish],
    [IItemPackReveal.ItemPackRecordStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "isRevealed"
  ): TypedContractMethod<
    [worldId: BigNumberish, itemPackId: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "reveal"
  ): TypedContractMethod<
    [worldId: BigNumberish, tokenId: BigNumberish, itemPackId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "RevealItemPack"
  ): TypedContractEvent<
    RevealItemPackEvent.InputTuple,
    RevealItemPackEvent.OutputTuple,
    RevealItemPackEvent.OutputObject
  >;

  filters: {
    "RevealItemPack(uint256,uint256,uint256,uint256[],int64[])": TypedContractEvent<
      RevealItemPackEvent.InputTuple,
      RevealItemPackEvent.OutputTuple,
      RevealItemPackEvent.OutputObject
    >;
    RevealItemPack: TypedContractEvent<
      RevealItemPackEvent.InputTuple,
      RevealItemPackEvent.OutputTuple,
      RevealItemPackEvent.OutputObject
    >;
  };
}
