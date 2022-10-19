# Endorsement Server

An endorsement server endorses certain actions like sending an order to DFlow by signing and attaching an Ed25519 public key to the request or transaction. Endorsing price quote requests and/or create auction transactions guarantees those actions came from the auction source and prevents DFlow network spam.

Every order flow source routing orders to DFlow will run an endorsement server, an off-chain program that is a core part of the DFlow payment-for-order-flow (PFOF) model. One of the key prerequisites to a successful PFOF model is associating intent with order flow. Order flow with intent is valuable to market makers and a well-designed PFOF model returns value to retail flow.

## Trading Venue Reveals Intent

Where users trade can say a few things about who they are and why they trade. Every trading venue markets towards a specific type of users and uses UI/UX or authentication to target that group of people. In stocks, the Robinhood users have a very different persona than Interactive Brokers users. In crypto, users on Uniswap on Ethereum can be quite different from users on MetaMask Swap.

## Purpose of the Endorsement Server

The order flow source running the endorsement server has to endorse all price quote requests and new order transactions. Each order flow source has an endorsement key (an Ed25519 key pair) associated with its DFlow account and an endorsement means the order flow source signed the request or transaction with its private key.

Endorsements prevent network spam from malicious actors and guarantees the user sending the transaction came from the original trading venue. In this case, a malicious actor with toxic flow can't pretend to be MetaMask and route its own order flow to DFlow.

### Signing

The order flow source can implement custom logic to check / safeguard its endorsement server. An approved endorsement will return the requester the endorser's `public key`, `signature` and `expiration time`, which can also be set by the endorser.

### Verifying

The endorsed price quote request or new order transaction will be sent to a signatory server, which will verify the endorser signed properly. All others will be rejected.
