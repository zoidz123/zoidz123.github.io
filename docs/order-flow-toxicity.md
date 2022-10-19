# Order Flow Toxicity

The concept of order flow is clearly explained in this [article](https://insights.deribit.com/market-research/toxic-flow-its-sources-and-counter-strategies/).

> The goal for market makers in all markets is to profitably handle incoming order flow – the requests of takers to trade against their liquidity.

The reason order flow differs can be summarized by the following.

> In a word, information. The average taker might have no alpha, but the sharpest takers fundamentally have much more information than makers. Takers do not need to trade. They can lie in wait for opportunities to pop up and trade only when those conditions are met. In contrast, makers must constantly make their liquidity available to whoever wishes to trade against it.

Market makers generate profit from bid-ask spreads but they might find themselves immediately at loss after filling toxic order flow. So, how is toxic order flow created?

> Takers generate toxic flow through two main ways: latency and coverage. Latency means they have faster connectivity to other venues with similar products, and so they can aggressively take against makers knowing that the market is already higher or lower elsewhere. Coverage means they are connected to more venues than makers, so they are aware of activity in markets that makers cannot access. Such examples could include an OTC buyer that plans to lift every offer on every venue.

It is important to separate non-toxic from toxic flow because market makers will only pay to fill non-toxic flow. Sellers of non-toxic flow benefit from better execution quality.

### Measuring Order Flow Toxicity

Order flow toxicity is a well-studied metric that can be measured over time. Intuitively, a market maker can measure the P&L of its order fills immediately after all fills over a long enough time and volume to determine the toxicity of the flow.

!!! info "Relation to DFlow"

    The usefulness of any PFOF model is based on how well it can source retail volume. DFlow is designed to incentivize order flow from retail trading venues and allows them to design auctions that may reveal more about the underlying order flow quality.
