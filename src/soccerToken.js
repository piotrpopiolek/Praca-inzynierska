import web3 from "./web3";

const address = "0x92221a8e3F11b779AfdF02860D628aD5d94cc4b3";

const abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [Array],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x06fdde03"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [Array],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x18160ddd"
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [Array],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x481c6a75"
  },
  {
    constant: true,
    inputs: [Array],
    name: "balanceOf",
    outputs: [Array],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x70a08231"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [Array],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x95d89b41"
  },
  {
    constant: true,
    inputs: [Array],
    name: "allowance",
    outputs: [Array],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xdd62ed3e"
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
    constant: false,
    inputs: [Array],
    name: "transfer",
    outputs: [Array],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa9059cbb"
  },
  {
    constant: false,
    inputs: [],
    name: "pay",
    outputs: [Array],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x1b9265b8"
  },
  {
    constant: false,
    inputs: [Array],
    name: "transferFrom",
    outputs: [Array],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x23b872dd"
  }
];

export default new web3.eth.Contract(abi, address);
