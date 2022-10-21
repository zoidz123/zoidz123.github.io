# Introduction to DFlow

## DFlow – D*ecentralized* Flow

DFlow is a decentralized order flow marketplace, powered by DFlow Protocol's open and fair payment-for-order-flow (PFOF) model.

![Image title](/diagrams/DFlow-Overview.svg)

### DFlow: The first order flow marketplace

DFlow is an interface for order flow sources to sell their order flow to market makers in a transparent, competitive, and permissionless way. DFlow provides efficient market-driven price discovery for order flow, which are buy and sell orders that are sold in an opaque environment, in traditional markets.

DFlow is designed to support order flow from various L1 chains and rollups.

### DFlow Protocol: The open and fair PFOF standard

The DFlow Protocol is the suite of on-chain programs, built as a standalone Cosmos based blockchain, and off-chain programs that together create the infrastructure defining the first open and fair PFOF model. An _open and fair_ PFOF model means verifiable best execution, transparent order flow pricing, and open competition amongst market makers.

In practice, the protocol allows market makers to compete in order flow auctions created by order flow sources.

## Why DFlow?

Firstly, _order flow_ should be defined. In crypto, order flow has been used to mean any transaction that changes the blockchain state. Here, order flow strictly means buy and sell orders at the _application layer_, as opposed to transactions closer to the _validator layer_.

DFlow is inspired and built from the following observations:

- **Decentralization of order flow is necessary to ensure the most optimal execution environment for retail.** Private order, meaning order flow sent exclusively to a market maker, leads to centralization and less competition.
- **Blockchain technology redistributes power from institutions back to individuals by reducing trust assumptions in the entire finance supply chain.** Algorithmically enforcing order execution on-chain guarantees best execution and lets the public easily verify the legitimacy of any transaction.
- **There is an intense market need for monetization of order flow safely, freely, and with maximum competition.** Enabling the _proper_ monetization of order flow allows the crypto application layer to develop novel features for the end users.

## Overview of the DFlow marketplace

DFlow is the interface for interacting with the DFlow Protocol and allows crypto brokerages sell order flow to market makers on an open marketplace. DFlow is considered a primary or wholesale market. In a traditional wholesale market, a business buys supplies or materials straight from the manufacturer. On DFlow, market makers buy order flow directly from the brokerage.

On DFlow, brokerages can create, manage, monitor, and analyze order flow auctions. On the other side, market makers submit bids into auctions. The winner of the auction receive the exclusive right to fill the underlying orders.

The benefit of an active and market-driven order flow marketplace does not only benefit the immediate two parties involved (e.g. crypto brokerages and market makers). The most important beneficiary is the group of individual traders who trade on the venues that are routing order flow to DFlow.

### How does DFlow benefit retail _directly_

While retail is not the immediate user, they directly benefit from crypto brokerages selling order flow on DFlow. Brokerages can pass on the following:

- **Zero fee swapping.** No hidden fees. Neither DFlow nor participating market makers take a trading or "convenience" fee.
- **Guaranteed best execution.** The DFlow PFOF model uses a decentralized price oracle to ensure market makers fill at the best available market price.
- **Real cost savings.** Market makers often fill at better than market prices, resulting in price and size improvements.

## Overview of the DFlow Protocol architecture

The DFlow Protocol is primarily comprised of programs on the DFlow appchain that power a decentralized order flow auction market. In addition, there are two main off-chain programs that monitor and support the DFlow appchain. It is beneficial for both crypto brokerages and market makers to understand the core components that make up the DFlow Protocol.

### DFlow Node

The [DFlow node](dflow-node.md) or validator is the on-chain entity that is responsible for validating transactions on the DFlow appchain. The DFlow appchain is intended to be run by a decentralized network of nodes. Nodes will also store auction related data, including information about auction status, order fill quality, payments made by market makers etc.

### Signatory Server

Each DFlow node will run a [signatory server](signatory-server.md), an off-chain sidecar that handles periphery applications including processing quote requests, crafting blockchain transactions, monitoring bridge transactions etc.

### Endorsement Server

DFlow Protocol's open and fair PFOF model associates user intent with order flow, which improves order flow price discovery. A crypto brokerage routing orders to DFlow incorporates intent into order flow by running an [endorsement server](endorsement-server.md). Order flow is best priced not only according to a set of user-defined parameters but also external factors (e.g. who is sending the order, why is the order being placed).

![Image title](/diagrams/DFlow-Protocol.svg)
