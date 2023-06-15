/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IItemDefinition",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IItemDefinition__factory>;
    getContractFactory(
      name: "IERC4906",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4906__factory>;
    getContractFactory(
      name: "ICharacterEquipment",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICharacterEquipment__factory>;
    getContractFactory(
      name: "ICharacterReveal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICharacterReveal__factory>;
    getContractFactory(
      name: "ICharacterStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICharacterStorage__factory>;
    getContractFactory(
      name: "IEventCheckin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEventCheckin__factory>;
    getContractFactory(
      name: "IGameAccess",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGameAccess__factory>;
    getContractFactory(
      name: "IItemAcquisitionHistory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IItemAcquisitionHistory__factory>;
    getContractFactory(
      name: "IItemExchange",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IItemExchange__factory>;
    getContractFactory(
      name: "IItemPackReveal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IItemPackReveal__factory>;
    getContractFactory(
      name: "IItemTransfer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IItemTransfer__factory>;
    getContractFactory(
      name: "IWorld",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWorld__factory>;
    getContractFactory(
      name: "IWorldStore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWorldStore__factory>;
    getContractFactory(
      name: "IItemPackNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IItemPackNFT__factory>;
    getContractFactory(
      name: "IL1NFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL1NFT__factory>;
    getContractFactory(
      name: "IERC721AQueryable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721AQueryable__factory>;
    getContractFactory(
      name: "IERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721A__factory>;

    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IItemDefinition",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IItemDefinition>;
    getContractAt(
      name: "IERC4906",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4906>;
    getContractAt(
      name: "ICharacterEquipment",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICharacterEquipment>;
    getContractAt(
      name: "ICharacterReveal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICharacterReveal>;
    getContractAt(
      name: "ICharacterStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICharacterStorage>;
    getContractAt(
      name: "IEventCheckin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEventCheckin>;
    getContractAt(
      name: "IGameAccess",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGameAccess>;
    getContractAt(
      name: "IItemAcquisitionHistory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IItemAcquisitionHistory>;
    getContractAt(
      name: "IItemExchange",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IItemExchange>;
    getContractAt(
      name: "IItemPackReveal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IItemPackReveal>;
    getContractAt(
      name: "IItemTransfer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IItemTransfer>;
    getContractAt(
      name: "IWorld",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWorld>;
    getContractAt(
      name: "IWorldStore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWorldStore>;
    getContractAt(
      name: "IItemPackNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IItemPackNFT>;
    getContractAt(
      name: "IL1NFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL1NFT>;
    getContractAt(
      name: "IERC721AQueryable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721AQueryable>;
    getContractAt(
      name: "IERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721A>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
