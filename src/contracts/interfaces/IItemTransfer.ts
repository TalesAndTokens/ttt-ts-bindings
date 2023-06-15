/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IItemTransfer {
  export type TransferValidationResultStruct = {
    validWorldId: PromiseOrValue<boolean>;
    validTokenId: PromiseOrValue<boolean>;
    validTargetTokenId: PromiseOrValue<boolean>;
    validLength: PromiseOrValue<boolean>;
    validTransferables: PromiseOrValue<boolean>[];
    validAmounts: PromiseOrValue<boolean>[];
  };

  export type TransferValidationResultStructOutput = [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean[],
    boolean[]
  ] & {
    validWorldId: boolean;
    validTokenId: boolean;
    validTargetTokenId: boolean;
    validLength: boolean;
    validTransferables: boolean[];
    validAmounts: boolean[];
  };
}

export interface IItemTransferInterface extends utils.Interface {
  functions: {
    "transfer(uint256,uint256,uint256,uint256[],int64[])": FunctionFragment;
    "validateTransfer(uint256,uint256,uint256,uint256[],int64[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "transfer" | "validateTransfer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "transfer",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validateTransfer",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateTransfer",
    data: BytesLike
  ): Result;

  events: {
    "TransferItems(uint256,uint256,uint256,uint256[],int64[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TransferItems"): EventFragment;
}

export interface TransferItemsEventObject {
  worldId: BigNumber;
  tokenId: BigNumber;
  targetTokenId: BigNumber;
  itemDefinitionIds: BigNumber[];
  amounts: BigNumber[];
}
export type TransferItemsEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber[], BigNumber[]],
  TransferItemsEventObject
>;

export type TransferItemsEventFilter = TypedEventFilter<TransferItemsEvent>;

export interface IItemTransfer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IItemTransferInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    transfer(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      targetTokenId: PromiseOrValue<BigNumberish>,
      itemDefinitionIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateTransfer(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      targetTokenId: PromiseOrValue<BigNumberish>,
      itemDefinitionIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[IItemTransfer.TransferValidationResultStructOutput]>;
  };

  transfer(
    worldId: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    targetTokenId: PromiseOrValue<BigNumberish>,
    itemDefinitionIds: PromiseOrValue<BigNumberish>[],
    amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateTransfer(
    worldId: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    targetTokenId: PromiseOrValue<BigNumberish>,
    itemDefinitionIds: PromiseOrValue<BigNumberish>[],
    amounts: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<IItemTransfer.TransferValidationResultStructOutput>;

  callStatic: {
    transfer(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      targetTokenId: PromiseOrValue<BigNumberish>,
      itemDefinitionIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    validateTransfer(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      targetTokenId: PromiseOrValue<BigNumberish>,
      itemDefinitionIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<IItemTransfer.TransferValidationResultStructOutput>;
  };

  filters: {
    "TransferItems(uint256,uint256,uint256,uint256[],int64[])"(
      worldId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      targetTokenId?: PromiseOrValue<BigNumberish> | null,
      itemDefinitionIds?: null,
      amounts?: null
    ): TransferItemsEventFilter;
    TransferItems(
      worldId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      targetTokenId?: PromiseOrValue<BigNumberish> | null,
      itemDefinitionIds?: null,
      amounts?: null
    ): TransferItemsEventFilter;
  };

  estimateGas: {
    transfer(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      targetTokenId: PromiseOrValue<BigNumberish>,
      itemDefinitionIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateTransfer(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      targetTokenId: PromiseOrValue<BigNumberish>,
      itemDefinitionIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    transfer(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      targetTokenId: PromiseOrValue<BigNumberish>,
      itemDefinitionIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateTransfer(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      targetTokenId: PromiseOrValue<BigNumberish>,
      itemDefinitionIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
