"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWorld__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "getItemPackNFTs",
        outputs: [
            {
                internalType: "contract IItemPackNFT[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getL1NFT",
        outputs: [
            {
                internalType: "contract IL1NFT",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "game_",
                type: "address",
            },
        ],
        name: "setGame",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IWorld__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IWorld__factory = IWorld__factory;
IWorld__factory.abi = _abi;
