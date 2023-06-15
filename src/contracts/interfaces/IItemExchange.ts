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

export declare namespace IItemExchange {
  export type ItemExchangeValidationResultStruct = {
    checkEnabled: PromiseOrValue<boolean>;
    checkConditionCharacter: PromiseOrValue<boolean>;
    checkExecutableTimes: PromiseOrValue<boolean>;
    checkExecutableTimesPerCharacter: PromiseOrValue<boolean>;
    checkEndPeriod: PromiseOrValue<boolean>;
    checkCharacterExecutableInterval: PromiseOrValue<boolean>;
    checkConditionEquipments: PromiseOrValue<boolean>[];
    checkConditionItemCounts: PromiseOrValue<BigNumberish>[];
    checkCostItemCounts: PromiseOrValue<BigNumberish>[];
  };

  export type ItemExchangeValidationResultStructOutput = [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    boolean[],
    BigNumber[],
    BigNumber[]
  ] & {
    checkEnabled: boolean;
    checkConditionCharacter: boolean;
    checkExecutableTimes: boolean;
    checkExecutableTimesPerCharacter: boolean;
    checkEndPeriod: boolean;
    checkCharacterExecutableInterval: boolean;
    checkConditionEquipments: boolean[];
    checkConditionItemCounts: BigNumber[];
    checkCostItemCounts: BigNumber[];
  };
}

export interface IItemExchangeInterface extends utils.Interface {
  functions: {
    "exchange(uint256,uint256,uint256)": FunctionFragment;
    "validate(uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "exchange" | "validate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exchange",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;

  events: {
    "Exchange(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Exchange"): EventFragment;
}

export interface ExchangeEventObject {
  worldId: BigNumber;
  tokenId: BigNumber;
  exchangeDefinitionId: BigNumber;
}
export type ExchangeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  ExchangeEventObject
>;

export type ExchangeEventFilter = TypedEventFilter<ExchangeEvent>;

export interface IItemExchange extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IItemExchangeInterface;

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
    exchange(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      exchangeDefinitionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validate(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      exchangeDefinitionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IItemExchange.ItemExchangeValidationResultStructOutput]>;
  };

  exchange(
    worldId: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    exchangeDefinitionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validate(
    worldId: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    exchangeDefinitionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IItemExchange.ItemExchangeValidationResultStructOutput>;

  callStatic: {
    exchange(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      exchangeDefinitionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    validate(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      exchangeDefinitionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IItemExchange.ItemExchangeValidationResultStructOutput>;
  };

  filters: {
    "Exchange(uint256,uint256,uint256)"(
      worldId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      exchangeDefinitionId?: null
    ): ExchangeEventFilter;
    Exchange(
      worldId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      exchangeDefinitionId?: null
    ): ExchangeEventFilter;
  };

  estimateGas: {
    exchange(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      exchangeDefinitionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validate(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      exchangeDefinitionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exchange(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      exchangeDefinitionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validate(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      exchangeDefinitionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
