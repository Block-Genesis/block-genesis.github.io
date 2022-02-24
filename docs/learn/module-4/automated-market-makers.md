---
sidebar_position: 4
---

# Automated Market Makers

An automated market maker (AMM) is an automated liquidity protocol powered by a constant product formula and implemented in a system of non-upgradeable smart contracts on the blockchain. It obviates the need for trusted intermediaries, prioritizing decentralization, censorship resistance, and security.

Each AM smart contract, or pair, manages a liquidity pool made up of reserves of two ERC-20 tokens.

Anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for pool tokens. These tokens track pro-rata LP shares of the total reserves, and can be redeemed for the underlying assets at any time.


## How it works

Pairs act as automated market makers, standing ready to accept one token for the other as long as the "constant product" formula is preserved. This formula, most simply expressed as $x * y = k$, states that trades must not change the product ($k$) of a pair’s reserve balances ($x$ and $y$). Because $k$ remains unchanged from the reference frame of a trade, it is often referred to as the invariant. This formula has the desirable property that larger trades (relative to reserves) execute at exponentially worse rates than smaller ones.

In practice, most AMMs applies a fee (usually 0.3%) to trades, which is added to reserves. As a result, each trade actually increases $k$. This functions as a payout to LPs, which is realized when they burn their pool tokens to withdraw their portion of total reserves.

Because the relative price of the two pair assets can only be changed through trading, divergences between the AMM price and external prices create arbitrage opportunities. This mechanism ensures that AMM prices always trend toward the market-clearing price.

## Economic Participants

AMMs primarily comprised of three types of users: liquidity providers, traders, and developers. Liquidity providers are incentivized to contribute ERC-20 tokens to common liquidity pools. Traders can swap these tokens for one another for a fixed 0.30% fee (which goes to liquidity providers). Developers can integrate directly with the AMM smart contracts to power new and exciting interactions with tokens, trading interfaces, retail experiences, and more.

In total, interactions between these classes create a positive feedback loop, fueling digital economies by defining a common language through which tokens can be pooled, traded and used.

### Liquidity Providers

Liquidity providers, or LPs, are not a homogenous group:

* Passive LPs are token holders who wish to passively invest their assets to accumulate trading fees.
* Professional LPs are focused on market making as their primary strategy. They usually develop custom tools and ways of tracking their liquidity positions across different DeFi projects.
* Token projects sometimes choose to become LPs to create a liquid marketplace for their token. This allows tokens to be bought and sold more easily, and unlocks interoperability with other DeFi projects through Uniswap.
* Finally, some DeFi pioneers are exploring complex liquidity provision interactions like incentivized liquidity, liquidity as collateral, and other experimental strategies. Uniswap is the perfect protocol for projects to experiment with these kinds of ideas.

### Traders

There are a several categories of traders in the protocol ecosystem:

* Speculators use a variety of community built tools and products to swap tokens using liquidity pulled from the Uniswap protocol.
* Arbitrage bots seek profits by comparing prices across different platforms to find an edge. (Though it might seem extractive, these bots actually help equalize prices across broader Ethereum markets and keep things fair.)
* DAPP users buy tokens on Uniswap for use in other applications on Ethereum.
* Smart contracts that execute trades on the protocol by implementing swap functionality (from products like DEX aggregators to custom Solidity scripts).

In all cases, trades are subject to the same flat fee for trading on the protocol. Each is important for increasing the accuracy of prices and incentivizing liquidity.

### Developers/Projects

There are far too many ways an AMM is used in the wider blockchain ecosystem to count, but some examples include:

* The open-source, accessible nature of AMM smart contracts means there are countless UX experiments and front-ends built to offer access to AMM functionality. You can find AMM functions in most of the major DeFi dashboard projects. There are also many AMM-specific tools built by the community.
* Wallets often integrate swapping and liquidity provision functionality as a core offering of their product.
* DEX (decentralized exchange) aggregators pull liquidity from many liquidity protocols to offer traders the best prices by splitting their trades.
* Smart contract developers use the suite of functions available to invent new DeFi tools and other various experimental ideas.
