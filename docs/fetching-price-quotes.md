# Fetching Price Quotes

DFlow makes it simple for you to display price quotes to your users by exposing two price quote endpoints on the signatory server. DFlow makes the distinction by calling one the Indicative Quote and the other the Firm Quote.

!!! info "Note"

    Each DFlow node runs a signatory server, which is an off-chain program that has API endpoints that you can interface with to interact with DFlow. It ensures requests and transactions have the proper endorsement key and relays them to market makers.

## Indicative Quote

An Indicative Price Quote is provided by market makers to give a continuous stream of price quotes for you to display to your users. This is a high throughput endpoint that can be called to give users an approximation of the "real" price, where DFlow defines the "real" price as the executable price.

<!-- === "TypeScript"

    ``` ts
    TODO
    ```

=== "Python"

    ``` python
    TODO
    ```

=== "HTTP"

    ``` http
    TODO
    ``` -->

## Firm Quote

A Firm Quote is an executable price, meaning users will be able to have their orders filled at the Firm Quote. I.e when fetched, the receive quantity will be calculated from the Firm Quote and displayed to users, and users will be guaranteed that receive quantity assuming fill success.

Fetching a Firm Quote, unlike an Indicative Quote, also returns a crafted DFlow transaction, which your user can then sign to complete the order transaction.

Note this price quote endpoint is rate-limited which means you should refrain from retrieving Firm Quotes unless necessary (when user has intent of submitting an order).

<!-- What's the rate limit? -->

<!-- === "TypeScript"

    ``` ts
    TODO
    ```

=== "Python"

    ``` python
    TODO
    ```

=== "HTTP"

    ``` http
    TODO
    ``` -->
