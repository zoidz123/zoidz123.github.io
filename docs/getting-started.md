# Getting Started

This section will detail the onboarding process for both crypto brokerages (i.e. wallets, swappers, aggregators) and market makers.

## Crypto Brokerages

Crypto brokerages will need to complete a simple setup process of running an endorsement server and interfacing with the signatory server to be able to create order flow auctions and route orders to the appropriate auctions.

After the initial setup, brokerages will primarily use the DFlow interface to create and manage auctions, and carry out other day-to-day business operations.

### Prerequisites

- [ ] Set up an endorsement server
- [ ] Understand auction mechanics and know how to create auctions
- [ ] Know how to fetch prices and send new order transactions to the signatory server
- [ ] Set up a system for routing and fulfilling orders

## Market Makers

Market makers will bid into first-price sealed-bid auctions and after a bid-reveal scheme, the winning market maker will receive the exclusive right to fill the underlying orders of the auction epoch. The bid-reveal scheme is meant to disincentivize market makers from bidding the minimum increment in a bidding war.

!!! info "Get Started"

    If you are a crypto brokerage interested in onboarding with DFlow or a market maker interested in market making on DFlow, reach out to us on Telegram!
