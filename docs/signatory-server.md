# DFlow Signatory Server

## What is a DFlow Signatory Server

Every DFlow node or validator must run a Signatory Server. While the Signatory Server, an off-chain program, doesn't handle any order flow auction logic or state, it supports the DFlow Protocol.

### Fetch price quotes

To display prices to users, crypto brokerages will need to request price quotes from the _signatory server_, which will retrieve the price from the auction winner (i.e. market maker who won the appropriate auction). The Signatory Server will check if the price request is endorsed and depending on the type of quote request (DFlow defines [two types of quotes](fetching-price-quotes.md)), it will craft and return a transaction back to the user.

### Send transactions

If the user submits the order (i.e. user signs the crafted transaction from Signatory Server), the Signatory Server will conduct proper checks and forward the user's signed transaction to the market maker (who won the auction) to be filled. The market maker will send a settlement transaction to the appropriate destination (i.e. the chain the order came from).

### Update DFlow ledger

As order flow is delivered to auctions, the Signatory Server notifies the DFlow node to update the delivered notional amount. The delivered notional amount determines the progress of DFlow auctions.

### Monitor DFlow USDC Bridge

Signatory Server checks and validates transactions on both DFlow and Solana to ensure deposits and withdrawals have the correct state changes.

DFlow chose Solana as the chain to be the USDC on-ramp to the DFlow appchain.
