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

export declare namespace ICharacterReveal {
  export type RevealStateRecordStruct = {
    characterDefinitionId: PromiseOrValue<BigNumberish>;
    isRevealed: PromiseOrValue<boolean>;
  };

  export type RevealStateRecordStructOutput = [BigNumber, boolean] & {
    characterDefinitionId: BigNumber;
    isRevealed: boolean;
  };
}

export interface ICharacterRevealInterface extends utils.Interface {
  functions: {
    "getRevealState(uint256,uint256)": FunctionFragment;
    "reveal(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getRevealState" | "reveal"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRevealState",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "reveal",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRevealState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reveal", data: BytesLike): Result;

  events: {
    "Reveal(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Reveal"): EventFragment;
}

export interface RevealEventObject {
  worldId: BigNumber;
  tokenId: BigNumber;
  characterDefinitionId: BigNumber;
}
export type RevealEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  RevealEventObject
>;

export type RevealEventFilter = TypedEventFilter<RevealEvent>;

export interface ICharacterReveal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICharacterRevealInterface;

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
    getRevealState(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ICharacterReveal.RevealStateRecordStructOutput]>;

    reveal(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getRevealState(
    worldId: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ICharacterReveal.RevealStateRecordStructOutput>;

  reveal(
    worldId: PromiseOrValue<BigNumberish>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getRevealState(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ICharacterReveal.RevealStateRecordStructOutput>;

    reveal(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Reveal(uint256,uint256,uint256)"(
      worldId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      characterDefinitionId?: PromiseOrValue<BigNumberish> | null
    ): RevealEventFilter;
    Reveal(
      worldId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      characterDefinitionId?: PromiseOrValue<BigNumberish> | null
    ): RevealEventFilter;
  };

  estimateGas: {
    getRevealState(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reveal(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRevealState(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reveal(
      worldId: PromiseOrValue<BigNumberish>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}