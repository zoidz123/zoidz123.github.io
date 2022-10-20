# Reveal Bid

DFlow uses first-price sealed-bid auctions so if you submitted a bid into an auction epoch, you will need to reveal your bid to win the epoch. I.e. if you forget to reveal your bid but your bid was the highest bid, you will not win the auction epoch.

During the Reveal period, you will not be able to submit a new bid. By the end of the Reveal period, if you do not have the highest bid, whether you chose to reveal or not, you will get your bid amount returned. This bid-reveal scheme is meant to prevent a bidding war, where market makers bid the minimum amount to win the auction epoch.

If you have the highest bid by the end of the Reveal period, you will become the winner and receive exclusive right to fill the underlying orders of the epoch. Note this is a right and if you choose to not fill, you will not be refunded the bid amount.

!!! info "Reveal Period Length"

    The Reveal period lasts until the Delivery Period of the previous epoch ends. Because the Delivery Period of an epoch ends when the `Notional` amount is filled or `Generic Epoch Delivery Period` is up (`Genesis Epoch Delivery Period` for the first epoch), you can monitor `Notional` or `Generic Epoch Delivery Period` to infer the Reveal Period length.

<!-- ## A Reveal Bid Example

=== "TypeScript"

    ``` ts
    TODO
    ```

=== "Python"

    ``` python
    TODO
    ```

=== "Rust"

    ``` rust
    TODO
    ``` -->
