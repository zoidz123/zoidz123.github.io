# Decentralized NBBO

## DNBBO guarantees orders are filled at the best available price

The decentralized NBBO (DNBBO) is an analogue to the NBBO created by the SEC to ensure brokerage firms provide customers with the best publicly available prices.

!!! info "National Best Bid And Offer"

    In US equities, stocks are traded on 10+ different registered exchanges, primarily under NYSE, NASDAQ, and CBOE. The National Best Bid and Offer (NBBO) is a consolidated quote showing the highest bid and lowest offer price from across all exchanges. It's basically to serve as a benchmark for market makers.

DFlow programmatically requires market makers to fill orders at prices at or better than the DNBBO. Orders filled at prices within the the DNBBO quote are called price improvements.
