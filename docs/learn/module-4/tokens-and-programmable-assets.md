---
sidebar_position: 3
---

# Tokens and Programmable Assets

Technically, "token" is just another word for "cryptocurrency" or "cryptoasset." But increasingly it has taken on a couple of more specific meanings depending on context. The first is to describe all cryptocurrencies besides Bitcoin and Ethereum (even though they are technically also tokens). The second is to describe certain digital assets that run on top of another cryptocurrencies' blockchain, as many decentralized finance (or DeFi) tokens do. Tokens have a huge range of potential functions, from helping make decentralized exchanges possible to selling rare items in video games. But they can all be traded or held like any other cryptocurrency.

The other increasingly common meaning for "token" has an even more specific connotation, which is to describe cryptoassets that run on top of another cryptocurrency's blockchain. You'll encounter this usage if you become interested in decentralized finance (or DeFi). While a cryptocurrency like Bitcoin has its own dedicated blockchain, DeFi tokens like Chainlink and Aave run on top of, or leverage, an existing blockchain, most commonly Ethereum's. 

## What Does ERC Mean?

ERC is an acronym that stands for Ethereum Request for Comments. ERCs are application level standards for Ethereum and can include token standards, name registries, library/package formats, and more. Anyone can create an ERC, but it is the author's responsibility to clearly explain their standard and foster support for it within the community.

This article will focus on common ERC token standards and how they are different from each other. These standards define a required set of functions for a token type, allowing applications and smart contracts to interact with them in a predictable way.

## ERC-20

ERC-20 is a token standard first proposed by Vitalik Buterin in June 2015. It is a simple interface that allows for the creation of tokens on Ethereum that can be re-used by other applications, from wallets to decentralized exchanges. It is also the most commonly used standard for Ethereum-based tokens and was the token of choice for many initial coin offerings (ICOs) between 2016-2018.

The ERC-20 standard contains 6 key functions that must be implemented to meet the standard. The functions are outlined below:

* **totalSupply()** – Used to get the token supply of a specific ERC-20 token.
* **balanceOf()** – Keeps track of the token balance in each Ethereum wallet.
* **transfer()** – Upon token creation, this function can send all the tokens to one wallet or distribute them to ICO investors.
* **transferFrom()** – Enables token holders to exchange tokens with one another after the initial distribution occurs.
* **approve()** – Used to "approve" other accounts to withdraw a certain amount of tokens from the account calling the function.
* **allowance()** – After approve() is used, allowance() is used to see the amount of tokens the approved account is allowed to withdraw from the original account.
  
ERC-20 tokens are relatively easy to create – as of December 1, 2018*, there are 150,558 ERC-20 contracts deployed on the Ethereum blockchain. Some of the most valuable ERC-20 tokens include Binance Coin (BNB), 0x (ZRX), and OmiseGo (OMG) with market caps of $678 million, $231 million, and $216 million, respectively.

## ERC-721

ERC-721 is a token standard that defines non-fungible tokens (NFTs) on the Ethereum blockchain.

Fungibility is a characteristic of a good or commodity whose individual units are identical and interchangeable. For example, US dollars are fungible because any dollar bill can be replaced by another dollar bill and they both represent the same exact thing.

ERC-20 tokens are also fungible. Let's say I create an ERC-20 token with the ticker CC – if I replaced 1 CC with another CC from a different wallet, there would be no tangible difference.

The ERC-721 standard was introduced to allow anyone to create tokens on Ethereum that are completely unique from one another. No two ERC-721 tokens are alike, and they can be thought of as one-of-a-kind collectables.

ERC-721 tokens can be used to represent ownership over assets, and the use cases are just starting to be explored. This includes physical assets such as land, houses, or unique art, and virtual assets like digital collectables.

CryptoKitties is one project utilizing ERC-721 tokens that gained mainstream attention in 2017 and 2018. CryptoKitties is an online game where users can collect and breed virtual cats that have unique genomes to define appearance and traits. Each kitty is represented by an Ethereum ERC-721 token which means they are all one-of-a-kind and can never be replicated, taken away from the owner, or destroyed.

As of December 1, 2018*, there have been 481,000 sales of CryptoKitties totaling over $27 million. The traffic on the DApp was enough to clog and slow down the entire Ethereum blockchain in late 2017, proving that digital collectables are a popular use case for ERC-721 tokens.

## Other Token Standards

* ERC 223 – A standard that defines a type of token similar to ERC-20 with added functionality. If ERC-20 tokens are sent to a smart contract not built to work with the ERC-20 standard, those tokens will be inaccessible forever. ERC-223 contains a method called tokenFallback that ensures tokens are only sent to contracts with the appropriate functionality.

* ERC 777 – Another standard attempting to improve upon the ERC-20 token. It defines advanced features including operators to send tokens on behalf of another address and offers users more control over their tokens.
  
* ERC 1155 – An interface that allows smart contracts to manage multiple token types. A deployed contract may include any combination of fungible tokens, non-fungible tokens, or other types (i.e. both ERC-20 and ERC-721).

* ERC 1337 – A token standard for recurring subscriptions on the Ethereum blockchain. This standard focuses on interoperability, allowing wallets to sign into recurring payment contracts and providing appropriate UI for managing and cancelling subscriptions.
