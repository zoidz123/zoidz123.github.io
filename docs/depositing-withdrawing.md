# Transfer USDC

## Learn how to transfer USDC to create and bid into auctions

All auctions are hosted on the DFlow appchain.

Order flow sources will need to transfer USDC to DFlow to create auctions. Market makers will need to transfer USDC to pay for order flow.

### Use DFlow USDC Bridge

The DFlow USDC Bridge allows order flow sources and market makers to transfer USDC from Solana to DFlow. This can be done through the DFlow interface.

#### What chains are supported

The bridge chose Solana as the USDC on-ramp to DFlow. E.g. if you are a wallet on Ethereum, you will need to create an account on Solana.

#### What assets are supported

The bridge only supports USDC.

#### How long does transferring take

Transfer should be confirmed within a few minutes.

### Risk Mitigation

By only supporting one asset and source chain, the DFlow USDC Bridge mitigates risks that come with connecting multiple chains and a list of assets. While DFlow is built as a sovereign blockchain, its intended behavior is to solely support order flow auctions and will not support other DeFi protocols.

Thus, it's expected there won't be large amounts of long-term capital sitting in the bridge, and funds will be bridged on an as-needed basis for auction creation and payments.
