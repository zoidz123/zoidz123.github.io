# Fetch price quotes

## Learn how to fetch price quotes from market makers

DFlow makes the distinction by calling one the Indicative Quote and the other the Firm Quote. You fetch quotes by hitting the endpoints on a Signatory Server.

### Indicative quote

An _Indicative Quote_ is provided by market makers to give a continuous stream of price quotes for you to display to your users. This is a high throughput endpoint that can be called to give users an approximation of the "real" price, where DFlow defines the "real" price as the executable price.

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

## Firm quote

A _Firm Quote_ is an executable price, meaning users will be able to have their orders filled at the Firm Quote. I.e when fetched, the receive quantity will be calculated from the Firm Quote and displayed to users, and users will be guaranteed that receive quantity assuming fill success.

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
