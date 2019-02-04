import web3 from "./web3";

const address = "0x8350E36520de24c119498b62704348361BbDB490";

const abi = [
  {
    constant: true,
    inputs: [],
    name: "tokensSold",
    outputs: [Array],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x518ab2a8"
  },
  {
    constant: true,
    inputs: [],
    name: "tokenContract",
    outputs: [Array],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x55a373d6"
  },
  {
    constant: true,
    inputs: [],
    name: "tokenPrice",
    outputs: [Array],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x7ff9b596"
  },
  {
    inputs: [Array],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
    constant: undefined
  },
  {
    anonymous: false,
    inputs: [Array],
    name: "Sell",
    type: "event",
    signature:
      "0x5e5e995ce3133561afceaa51a9a154d5db228cd7525d34df5185582c18d3df09",
    constant: undefined,
    payable: undefined
  },
  {
    constant: false,
    inputs: [Array],
    name: "buyTokens",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
    signature: "0x3610724e"
  },
  {
    constant: false,
    inputs: [],
    name: "endSale",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x380d831b"
  }
];

export default new web3.eth.Contract(abi, address);
