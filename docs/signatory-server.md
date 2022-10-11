# Signatory Server

Every DFlow node or validator must run a signatory server. While the signatory server, an off-chain program, doesn't handle any order flow auction logic or state, it supports the DFlow PFOF model.

## Main Use Cases

### Fetch Price Quotes

To display prices to users, order flow sources will need to request price quotes from the signatory server, which will retrieve the price from the auction winner (i.e. market maker who won the appropriate auction). The signatory server will check if the price request is endorsed and depending on the type of quote request (see [here](fetching-price-quotes.md) for more), it will craft and return a transaction back to the user.

### Send Transactions

If the user submits the order (i.e. user signs the crafted transaction from signatory server), the signatory server will conduct proper checks and forward the user's signed transaction to the market maker (who won the auction) to be filled.

### Update DFlow Ledger

TODO

### Monitor DFlow Native Bridge

TODO
