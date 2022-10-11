# Understanding DFlow

## DFlow: D*ecentralized* Flow

DFlow is the infrastructure for a novel, open and fair payment-for-order-flow model. The infrastructure allows order flow sources, such as wallets and swappers, to monetize their order flow by creating order flow auctions on DFlow. Market makers will then bid into these auctions to win the right to fill orders.

!!! info "Helpful Concepts"

    The Helpful Concepts section contains background information, like payment-for-order-flow and order flow toxicity, that are essential to understanding DFlow and its value prop.

## Architecture

The DFlow infrastructure is built as a standalone Cosmos based blockchain featuring a decentralized order flow auction marketplace. It is beneficial for both wallets and market makers to understand the core components that power the DFlow network.

### DFlow Node

The DFlow node or validator is the on-chain entity that is responsible for validating transactions on the DFlow blockchain. DFlow intends to have a decentralized network of nodes but will initially run the first set of nodes. Nodes will also store auction related data, including information about auction volume, order fill quality, payments made by market makers etc.

### Signatory Server

Each DFlow node will run a signatory server, an off-chain sidecar that handles periphery applications including processing quote requests, crafting blockchain transactions, monitoring bridge transactions etc.

### Endorsement Server

DFlow's application layer payment-for-order-flow model associates user intent with order flow, which improves market pricing of order flow. Every order flow source routing orders to DFlow incorporate intent into order flow by running an endorsement server. An endorsement server endorses certain actions on the DFlow network by attaching an Ed25519 public key to requests and transactions. Endorsing price quote requests and/or create auction transactions guarantees those actions came from the auction source and prevents DFlow network spam.
