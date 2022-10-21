# Route order flow

## Make sure you route orders to your auctions on time!

You are responsible for developing an efficient way to route appropriate orders to your order flow auctions on DFlow. Each epoch in an auction has a `Generic Epoch Delivery Period` (or `Genesis Epoch Delivery Period` for the first epoch) which defines the maximum number of days after the start of the Delivery Period to deliver the predetermined `Notional` amount.

When you fall short of delivering the full amount before end of delivery, you will receive a discount on the payment from market makers.

!!! info "Remember Your Delivery Period"

    You can only deliver orders if the value you defined for `Generic Epoch Delivery Day` has not ended. Or, your delivered notional size has not hit the `Notional` amount.

    Mkae sure to check out [auction behavior](understanding-auction-behavior.md)!
