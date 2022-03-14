"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[1487],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},c="Ethereum",l={unversionedId:"learn/module-3/ethereum",id:"learn/module-3/ethereum",title:"Ethereum",description:'Ethereum is a public blockchain that pioneered and popularized blockchain based smart contracts which can be used to build decentralized applications. ETH is the native currency, which is generated as a reward to miners for computations performed and is also the only currency accept in the payment of transaction fees in the network. The blockchain uses a virtual machine (dubbed the Ethereum Virtual Machine), which is Turing-complete, to execute smart contracts. The concept of "gas" is used as an internal transaction pricing mechanism to mitigate spam and resource hogging on the network. Gas is a unified unit of cost of computation on the blockchain.',source:"@site/docs/learn/module-3/ethereum.md",sourceDirName:"learn/module-3",slug:"/learn/module-3/ethereum",permalink:"/docs/learn/module-3/ethereum",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebarLearn",previous:{title:"Monero",permalink:"/docs/learn/module-3/monero"},next:{title:"BNBChain",permalink:"/docs/learn/module-3/bnbchain"}},u={},d=[],h={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ethereum"},"Ethereum"),(0,o.kt)("p",null,'Ethereum is a public blockchain that pioneered and popularized blockchain based smart contracts which can be used to build decentralized applications. ETH is the native currency, which is generated as a reward to miners for computations performed and is also the only currency accept in the payment of transaction fees in the network. The blockchain uses a virtual machine (dubbed the Ethereum Virtual Machine), which is Turing-complete, to execute smart contracts. The concept of "gas" is used as an internal transaction pricing mechanism to mitigate spam and resource hogging on the network. Gas is a unified unit of cost of computation on the blockchain.'),(0,o.kt)("p",null,'Ethereum 2.0 is the upcoming and latest iteration of Ethereum, which will introduce sharding and Proof-of-Stake. Dapps will be able to choose which shard they want to run on. It is designed to have a main chain, called the Beacon Chain, and pegged to the Beacon Chain are several sub-chains or shards. Shards would need to go through the Beacon Chain should they want to communicate with each other, thus cross-shard communication, although possible, is not encouraged as it is slow. The minimum staking threshold for validators is 32 ETH. Validators will be assigned to shards and divided into block proposers and committees. A block proposer is a validator that has been pseudorandomly selected to build a block. Most of the time, validators are attesters that vote on beacon blocks and shard blocks. These votes are recorded in the Beacon Chain. The votes determine the head of the Beacon Chain, and the heads of shards. A committee is a group of validators which attempt to crosslink a particular shard. A crosslink is a reference in a beacon block to a shard block, and it is how the Beacon Chain follows the head of a shard chain. All shard chains are following the Beacon Chain at all times as the Beacon chain will be treated as the "single source of truth".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Block Explorer"),": ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"https://etherscan.io/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Addresses"),': "0x" prefix concatenated with the rightmost 20 bytes of the Keccak-256 hash of the ECDSA public key. Account and contract addresses are indistinguishable and share the same format, however contract addresses are determined by the sender address and creation transaction nonce.\nExample: ',(0,o.kt)("inlineCode",{parentName:"p"},"0x2B522cABE9950D1153c26C1b399B293CaA99FcF9")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Block Time"),": Average of 15 seconds."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Consensus"),": For Ethereum 1.0, consensus is Proof-of-Work with a modified version of Nakamoto consensus via transaction-based state transitions. It uses Ethash as the hashing algorithm, which is designed to be ASIC-resistant via memory-hardness. For Ethereum 2.0, consensus is Proof-of-Stake using Casper Correct by Construction with Greediest Heaviest Observed Sub-Tree (GHOST) as the fork-choice rule protocol."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ETH Supply"),": No hard cap on the total supply."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Smart Contracts"),": Solidity, a statically-typed Javascript-like language, is the most popular high-level programming language on Ethereum that compiles code to EVM bytecode."),(0,o.kt)("p",null,"Example contract code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity >=0.5.0 <0.7.0;\n\ncontract Coin {\n    // The keyword "public" makes variables\n    // accessible from other contracts\n    address public minter;\n    mapping (address => uint) public balances;\n\n    // Events allow clients to react to specific\n    // contract changes you declare\n    event Sent (address from, address to, uint amount);\n\n    // Constructor code is only run when the contract\n    // is created\n    constructor() public {\n        minter = msg.sender;\n    }\n\n    // Sends an amount of newly created coins to an address\n    // Can only be called by the contract creator\n    function mint(address receiver, uint amount) public {\n        require(msg.sender == minter);\n        require(amount < 1e60);\n        balances[receiver] += amount;\n    }\n\n    // Sends an amount of existing coins\n    // from any caller to an address\n    function send(address receiver, uint amount) public {\n        require(amount <= balances[msg.sender], "Insufficient balance.");\n        balances[msg.sender] -= amount;\n        balances[receiver] += amount;\n        emit Sent (msg.sender, receiver, amount);\n    }\n}\n')))}p.isMDXComponent=!0}}]);