# DFlow Native Bridge

DFlow is built as a Cosmos based blockchain, meaning auction participants will use the DFlow Native Bridge to transfer funds for auction creation and payments.

## Overview

Until USDC is natively supported in the Cosmos ecosystem in 2023, the DFlow Native Bridge will be the only way to bridge over USDC from Solana. Initially, the bridge will only support transfers from and to Solana, meaning you will have to create an account on Solana (e.g. Phanton wallet account).

!!! info "Cross Chain Order Flow Support"

    This does not mean DFlow won't support order flow from other chains. DFlow will support order settlement transactions to various chains soon after launch.

### Risk Mitigation

The DFlow bridge will only support one asset (i.e. USDC) and be connected to Solana, mitigating risks that come with connecting multiple chains and a list of assets. While DFlow is built as a sovereign blockchain, its intended behavior is to solely support order flow auctions and will not support other DeFi protocols. Thus, it's expected there won't be large amounts of long-term capital sitting in the bridge (e.g. yield farming or participating in other DeFi activities), and funds will be bridged on an as-needed basis for auction creation and payments.
