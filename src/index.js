"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IL1NFT__factory = exports.IItemPackNFT__factory = exports.IWorldStore__factory = exports.IWorld__factory = exports.IItemTransfer__factory = exports.IItemPackReveal__factory = exports.IItemExchange__factory = exports.IItemAcquisitionHistory__factory = exports.IGameAccess__factory = exports.IEventCheckin__factory = exports.ICharacterStorage__factory = exports.ICharacterReveal__factory = exports.ICharacterEquipment__factory = exports.IERC4906__factory = exports.IItemDefinition__factory = exports.IERC165__factory = exports.IERC721__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var IERC721__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC721/IERC721__factory");
Object.defineProperty(exports, "IERC721__factory", { enumerable: true, get: function () { return IERC721__factory_1.IERC721__factory; } });
var IERC165__factory_1 = require("./factories/@openzeppelin/contracts/utils/introspection/IERC165__factory");
Object.defineProperty(exports, "IERC165__factory", { enumerable: true, get: function () { return IERC165__factory_1.IERC165__factory; } });
var IItemDefinition__factory_1 = require("./factories/contracts/interfaces/definitions/IItemDefinition__factory");
Object.defineProperty(exports, "IItemDefinition__factory", { enumerable: true, get: function () { return IItemDefinition__factory_1.IItemDefinition__factory; } });
var IERC4906__factory_1 = require("./factories/contracts/interfaces/erc/IERC4906__factory");
Object.defineProperty(exports, "IERC4906__factory", { enumerable: true, get: function () { return IERC4906__factory_1.IERC4906__factory; } });
var ICharacterEquipment__factory_1 = require("./factories/contracts/interfaces/ICharacterEquipment__factory");
Object.defineProperty(exports, "ICharacterEquipment__factory", { enumerable: true, get: function () { return ICharacterEquipment__factory_1.ICharacterEquipment__factory; } });
var ICharacterReveal__factory_1 = require("./factories/contracts/interfaces/ICharacterReveal__factory");
Object.defineProperty(exports, "ICharacterReveal__factory", { enumerable: true, get: function () { return ICharacterReveal__factory_1.ICharacterReveal__factory; } });
var ICharacterStorage__factory_1 = require("./factories/contracts/interfaces/ICharacterStorage__factory");
Object.defineProperty(exports, "ICharacterStorage__factory", { enumerable: true, get: function () { return ICharacterStorage__factory_1.ICharacterStorage__factory; } });
var IEventCheckin__factory_1 = require("./factories/contracts/interfaces/IEventCheckin__factory");
Object.defineProperty(exports, "IEventCheckin__factory", { enumerable: true, get: function () { return IEventCheckin__factory_1.IEventCheckin__factory; } });
var IGameAccess__factory_1 = require("./factories/contracts/interfaces/IGameAccess__factory");
Object.defineProperty(exports, "IGameAccess__factory", { enumerable: true, get: function () { return IGameAccess__factory_1.IGameAccess__factory; } });
var IItemAcquisitionHistory__factory_1 = require("./factories/contracts/interfaces/IItemAcquisitionHistory__factory");
Object.defineProperty(exports, "IItemAcquisitionHistory__factory", { enumerable: true, get: function () { return IItemAcquisitionHistory__factory_1.IItemAcquisitionHistory__factory; } });
var IItemExchange__factory_1 = require("./factories/contracts/interfaces/IItemExchange__factory");
Object.defineProperty(exports, "IItemExchange__factory", { enumerable: true, get: function () { return IItemExchange__factory_1.IItemExchange__factory; } });
var IItemPackReveal__factory_1 = require("./factories/contracts/interfaces/IItemPackReveal__factory");
Object.defineProperty(exports, "IItemPackReveal__factory", { enumerable: true, get: function () { return IItemPackReveal__factory_1.IItemPackReveal__factory; } });
var IItemTransfer__factory_1 = require("./factories/contracts/interfaces/IItemTransfer__factory");
Object.defineProperty(exports, "IItemTransfer__factory", { enumerable: true, get: function () { return IItemTransfer__factory_1.IItemTransfer__factory; } });
var IWorld__factory_1 = require("./factories/contracts/interfaces/IWorld__factory");
Object.defineProperty(exports, "IWorld__factory", { enumerable: true, get: function () { return IWorld__factory_1.IWorld__factory; } });
var IWorldStore__factory_1 = require("./factories/contracts/interfaces/IWorldStore__factory");
Object.defineProperty(exports, "IWorldStore__factory", { enumerable: true, get: function () { return IWorldStore__factory_1.IWorldStore__factory; } });
var IItemPackNFT__factory_1 = require("./factories/contracts/interfaces/token/IItemPackNFT__factory");
Object.defineProperty(exports, "IItemPackNFT__factory", { enumerable: true, get: function () { return IItemPackNFT__factory_1.IItemPackNFT__factory; } });
var IL1NFT__factory_1 = require("./factories/contracts/interfaces/token/IL1NFT__factory");
Object.defineProperty(exports, "IL1NFT__factory", { enumerable: true, get: function () { return IL1NFT__factory_1.IL1NFT__factory; } });
