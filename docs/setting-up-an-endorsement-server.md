# Setting Up An Endorsement Server

Having an endorsement server up and running is the first step to onboarding with DFlow. The purpose of the endorsement server is to guarantee order flow sent by you is actually submitted by your users. This both attaches an intent on order flow, which helps with price discovery, and reduces network spam from malicious sources.

The following actions on DFlow requires endorsement from the endorsement server:

- Fetching price quotes
- Submitting order transactions

## Defining Endorsement

An endorsement is done by attaching an Ed25519 public key and signature to the data field of the request or transaction. When you endorse a request or transaction, you are marking that request or transaction as one that came from one of your users.

## Generating Endorsement Key

To complete the endorsement server setup, you will need to generate an endorsement key, which can be any Ed25519 keypair. When you create your first auction, DFlow will prompt you to enter an existing public key (also an option to help you generate one). If your first auction is created successfully, DFlow will automatically generate an on-chain account for you which includes your endorsement key.

!!! info "Save Your Endorsement Keypair"

    Save your endorsement private key and ensure the endorsement public key you generated is also used to set up the endorsement server later. DFlow will check if you signed with the correct key.

## Deploying the Endorsement Server

An endorsement server will be delivered to you as a Docker image, which you can deploy on any server. The endorsement server gives you additional flexibility when it comes to preventing malicious actors from using your endorsement key to spam the network.

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
    ```

After your endorsement server is setup, you can start routing orders to your DFlow auctions!

## Endorsing User Requests and Transactions

DFlow requires you to endorse price quote requests and user order transactions. Request and transactions without a proper endorsement will fail. An endorsement also comes with a preset timestamp, limiting actions to a certain period of time after endorsement.

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
    ```
