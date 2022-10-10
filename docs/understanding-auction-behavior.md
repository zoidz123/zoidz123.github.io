# Understanding Auction Behavior

DFlow auctions are set up as first-price sealed-bid auctions and run in a parallel, sequential manner. Both order flow sources and market makers will benefit from understanding the DFlow order flow auction mechanics.

See [Order Flow Auction](order-flow-auction.md) for the basic auction structure and parameters. This section will focus on an auction epoch rollover example.

!!! info "Before Moving On"

    It will be helpful to understand all the auction parameters (e.g. `Genesis Epoch Bidding Period`) and their implications in the above link.

## Revisiting the Rollover Process: Bid, Reveal, Deliver, _Repeat_

An auction is comprised of an indefinite number of epochs. An epoch defines the vintage or "age" of the auction. All epochs follow the same lifecycle and the epoch's length is the sum of:

- **Bid Period**: Market makers _bid_ into auction
- **Reveal Period**: Market makers _reveal_ bids
- **Delivery Period**: Order flow sources _deliver_ order flow

The length is determined by the previous epoch. At any point in time, there will be two active epochs:

- Current epoch will be receiving bids (in Bid Period)
- Previous epoch will be taking delivery (in Delivery Period)

DFlow defines two types of epochs for every auction, where both are quite similar. If you are a market maker, you will be bidding into the latest epoch of an auction.

### Genesis Epoch

Known as the first epoch of the auction, Epoch 0, or Genesis Epoch. Genesis Epoch is designed to be a preparation period (e.g. announce auction on social media, source market maker bids, prepare order flow routing) and starts as soon as the auction is created. DFlow allows the auction operator to manually define both the `Genesis Epoch Bidding Period` and `Genesis Epoch Delivery Period`.

#### From Bid to Reveal

Immediately after the auction is created, market makers can start submitting bids into the Genesis Epoch. The entire Bid Period is defined by `Genesis Epoch Bidding Period` multiplied by a time factor (e.g. 70%) and the Reveal Period starts thereafter. No new bids can be submitted during the Reveal Period.

Note the end of the Bid Period of this epoch will start and kickoff the Bid Period of the next epoch, which will be considered a Generic Epoch.

#### From Reveal to Delivery

The Reveal Period will last until the `Genesis Epoch Bidding Period` ends and a winner will be selected.

### Generic Epoch

Any epoch, other than the Genesis Epoch. The major difference here is the Bidding Period of a Generic Epoch is determined by the Delivery Period of the previous epoch. Remember, the auction operator could manually set the `Genesis Epoch Bidding Period` – it's not the case here.

#### From Bid to Reveal

The Bid Period starts when the Bid Period of the previous epoch ends. The Bid Period of the Generic Epoch will last the length of the previous epoch's Delivery Period, which is determined as the shorter of:

- `Genesis Epoch Delivery Period` if previous is Genesis Epoch or `Generic Epoch Delivery Period` if previous is Generic Epoch, multiplied by a time factor
- Previous epoch's `Notional` multiplied by a notional factor (e.g. 70%)

Similar to above, the end of this epoch's Bid Period starts the next epoch's Bid Period.

Unlike the Genesis Epoch's Bid Period, the Bid Period of the Generic Epoch is determined by not only a time (in hours, days) but also a `Notional` amount. The reason is the epoch should roll over if `Notional` is reached before the specified period ends. Likewise, the epoch should roll over if `Notional` is not reached but the specified period is up.

#### From Reveal to Delivery

The Reveal Period will last until the end of the previous epoch's Delivery Period. The Delivery Period of this epoch starts thereafter and will determine the Bid + Reveal Period of the next epoch.

## A Rollover Example

An example is worth a thousand words. Consider Wallet A specced and deployed this auction below:

| Auction Parameter               | Value              |
| :------------------------------ | :----------------- |
| `Network`                       | Solana             |
| `Base Currency`                 | SOL                |
| `Quote Currency`                | USDC               |
| `Min`                           | $20                |
| `Max`                           | $50                |
| `Notional`                      | $200,000           |
| `Genesis Epoch Bidding Period`  | 10 days            |
| `Genesis Epoch Delivery Period` | 5 days             |
| `Generic Epoch Delivery Period` | 10 minutes         |
| `Fee Payer`                     | Market Maker       |
| `Backup Liquidity Provider`     | Jupiter Aggregator |

TODO

## Monitoring Auctions

TODO
