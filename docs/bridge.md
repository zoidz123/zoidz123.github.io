# DFlow Native Bridge

Auctions are hosted by DFlow nodes on the DFlow appchain, built as a Cosmos based blockchain. This means auction participants will use the DFlow Native Bridge to transfer funds for auction creation and payments.

## Overview

Until USDC is natively supported in the Cosmos ecosystem in 2023, the DFlow Native Bridge will be the only way to bridge over USDC from Solana. Initially, the bridge will only support transfers from and to Solana, meaning you will have to create an account on Solana (e.g. Phanton wallet account).

Note, DFlow will support settlement transactions to various chains and rollups.

### Risk Mitigation

The choice of the DFlow bridge to only support one asset (i.e. USDC) and one source chain (i.e. Solana) mitigates risks that come with connecting multiple chains and a list of assets. While DFlow is built as a sovereign blockchain, its intended behavior is to solely support order flow auctions and will not support other DeFi protocols.

Thus, it's expected there won't be large amounts of long-term capital sitting in the bridge (e.g. yield farming or participating in other DeFi activities), and funds will be bridged on an as-needed basis for auction creation and payments.
