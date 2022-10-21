# Getting started

This section details the onboarding process for both order flow sources (i.e. wallets, swappers, aggregators) and market makers.

## For order flow sources

Order flow sources need to complete a simple setup process of running Endorsement Server and interfacing with Signatory Server to create order flow auctions and route orders to the appropriate auctions.

After the initial setup, brokerages will primarily use the DFlow interface to create and manage auctions, and carry out other day-to-day business operations.

## For market makers

Market makers will bid into first-price sealed-bid auctions and after a bid-reveal scheme, the winning market maker will receive the exclusive right to fill the underlying orders of the auction epoch. The bid-reveal scheme is meant to disincentivize market makers from bidding the minimum increment in a bidding war.

<!-- !!! info "Get Started"

    If you are a crypto brokerage interested in onboarding with DFlow or a market maker interested in market making on DFlow, reach out to us on Telegram! -->
