# Sending Order Transaction

When a user shows intent of submitting an order, you can fetch a Firm Quote by sending a request to the signatory server. The signatory server will then check for endorsement, relay the request to the market maker, craft a DFlow transaction with the response, and return the transaction. If the user proceeds with the order, the user will sign the transaction which gets forwarded to the market maker, who will approve and send the settlement transaction to the appropriate L1 chain.

On low gas cost chains, you have the option to delegate the market maker as the fee payer for the settlement transaction.

=== "Typescript"

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
    ```
