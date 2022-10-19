# Liquidity Models

Price discovery is the process of determining the proper price of an asset or security. Developing appropriate and efficient liquidity models to discover prices is crucial to well-functioning markets. While there is no all-around best liquidity model, some are better for specific purposes (e.g. there are reasons stocks are not bought and sold in auctions).

Here's an overview of popular liquidity models and all of this is relevant because DFlow is developing a type of liquidity to better discover prices for retail order flow.

## Overview: Same Genes, Different Paths

All liquidity models are designed to find asset prices, but they result in different properties.

### Central Limit Order Book (CLOB)

CLOB is the most widely used exchange method in traditional markets. An order book provides liquidity and price discovery for assets by having market makers put up bid and ask prices. While market makers provide liquidity, market takers take liquidity off the order book (e.g. Bob market buys 50 SOL at $10).

The primary reason CLOBs are not prevalent on-chain is because Ethereum, the largest L1, has high gas costs which make putting up and cancelling quotes very expensive for market makers. On the other hand, Solana's high throughput and low cost network allows Serum, an on-chain CLOB, to be built.

### Automated Market Maker (AMM)

AMMs were built and popularized under blockchain constraints. Instead of an order book, AMMs enable price discovery through pooled capital from liquidity providers (LPs). The LPs on AMMs are similar to the market makers on order books; however, LPs are mostly passive and do not quote bid and ask prices (concentrated liquidity is an exception). Pricing of assets is done by market forces based on a mathematical formula such as the constant product formula, `x * y = k`.

### Request for quote (RFQ)

RFQ is a very common way to trade OTC products (like corporate bonds) but is not as common on the blockchain. As the name suggests, market takers request quotes (e.g. request to buy 10 SOL) from market makers and pick the best one. RFQ is generally preferred for large illiquid positions.

### Auctions

[Auctions](https://blogs.cornell.edu/info2040/2021/11/29/four-common-types-of-auctions/), both English and Dutch auctions, are available for selling NFTs (although most NFT sales still use fixed prices). Dutch auctions are also seen in DeFi loan liquidations.

!!! info "Relation to DFlow"

    On DFlow, order flow is batched and sold in first-price sealed-bid auctions. The winning market maker internalizes the orders, meaning the market maker fills them from its own inventory. The market could source its inventory using any of the above methods.
