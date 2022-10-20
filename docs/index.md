# Understanding DFlow

## DFlow: D*ecentralized* Flow

DFlow is a decentralized order flow marketplace, powered by DFlow Protocol's open and fair Payment For Order Flow (PFOF) model.

![Image title](/diagrams/DFlow-Overview.svg)

### DFlow

DFlow is an interface for order flow sources to sell their order flow to market makers in a transparent, competitive, and permissionless way. DFlow provides efficient market-driven price discovery for order flow, a financial primitive traditionally (in the stock market) bought and sold in an opaque environment.

DFlow is designed to support order flow from various L1 chains and rollups.

### DFlow Protocol

The DFlow Protocol is the suite of on-chain programs, built as a standalone Cosmos based blockchain, and off-chain programs that together create the infrastructure defining the first open and fair PFOF model. Core to the protocol is the order flow auction, a market structure to allow crypto brokerages to sell their order flow to market makers.

## Why DFlow?

Firstly, "order flow" should be defined. In crypto, order flow has been used to mean all blockchain transactions, in the context of block builders and proposers on Ethereum. Here, order flow strictly means buy and sell orders at the _application layer_, as opposed to transactions closer to the _validator layer_.

DFlow is built from observing the following existing market needs:

- [x] Decentralization of order flow is necessary because private order flow contributes to centralization of liquidity providers, which will lead to worse execution for retail.
- [x] Order execution transparency and competition to ensure retail traders receive the best available prices, and be able to verify that.
- [x] Intense market need for monetization of order flow safely, freely, and with maximum competition.

## Introducing the DFlow Protocol

The DFlow Protocol is primarily comprised of programs on the DFlow appchain that power a decentralized order flow auction market. In addition, there are two main off-chain programs that monitor and support the DFlow appchain. It is beneficial for both crypto brokerages and market makers to understand the core components that make up the DFlow Protocol.

### DFlow Node

The [DFlow node](dflow-node.md) or validator is the on-chain entity that is responsible for validating transactions on the DFlow appchain. The DFlow appchain is intended to be run by a decentralized network of nodes. Nodes will also store auction related data, including information about auction status, order fill quality, payments made by market makers etc.

### Signatory Server

Each DFlow node will run a [signatory server](signatory-server.md), an off-chain sidecar that handles periphery applications including processing quote requests, crafting blockchain transactions, monitoring bridge transactions etc.

### Endorsement Server

DFlow Protocol's open and fair PFOF model associates user intent with order flow, which improves order flow price discovery. A crypto brokerage routing orders to DFlow incorporates intent into order flow by running an [endorsement server](endorsement-server.md). Order flow is best priced not only according to a set of user-defined parameters but also external factors (e.g. who is sending the order, why is the order being placed).

![Image title](/diagrams/DFlow-Protocol.svg)

## Powering The First Transparent Order Flow Marketplace

DFlow is the interface for interacting with the DFlow Protocol and allows crypto brokerages to sell order flow to market makers on an open marketplace. DFlow is considered a primary or wholesale market. In a traditional wholesale market, a business buys supplies or materials straight from the manufacturer. On DFlow, market makers buy order flow directly from the brokerage.

On DFlow, brokerages can create, manage, monitor, and analyze order flow auctions. On the other side, market makers submit bids into auctions. The winner of the auction receive the exclusive right to fill the underlying orders.

The benefit of an active and market-driven order flow marketplace does not only benefit the immediate two parties involved (e.g. crypto brokerages and market makers). The most important beneficiary is the group of individual traders who trade on the venues that are routing order flow to DFlow.

### Built For Retail

DFlow is built with the everyday trader in mind. Crypto brokerages selling order flow on DFlow get the following features:

1. Offer 0 fee swapping. No hidden fees. Neither DFlow nor participating market makers take a trading or "convenience" fee.
2. Guarantee best execution. The DFlow PFOF model uses a decentralized price oracle to ensure market makers fill at the best available market price.
3. Deliver real cost savings. Market makers often fill at better than market prices, resulting in price and size improvements.
