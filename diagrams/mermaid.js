flowchart LR
    id1([Retail Traders])<-->|Swap and receive tokens|id2(Crypto Brokerages)<-->|Send orders and receive payments|id3{DFlow Model}<-->|Bid into auctions and fill orders|id4[/Market Makers/]
    style id3 fill:#FFCC00

gantt
    dateFormat  YYYY-MM-DD-HH
    axisFormat  %Y-%m-%d-%H
    title       An auction created on 10/13/2022 with an 10 day Genesis Epoch Duration (7 day Bid, 3 day Reveal) and 2 day Genesis Epoch Delivery Period
    todayMarker off
    Current Time: milestone, m1, 2022-10-13-12

    section Genesis   
    Bid Period                  :active,  des1, 2022-10-13-00, 7d
    Reveal Period               :crit,  des2, after des1, 3d
    Delivery Period             :crit,  des3, after des2, 2d

gantt
    dateFormat  YYYY-MM-DD-HH
    axisFormat  %Y-%m-%d-%H
    todayMarker off
    title       Length of an epoch's Bid and Reveal Periods is determined by Notional Time (Delivered Notional / Total Notional). Previous epoch's Delivery Period sets the maximum time.
    Current Time: milestone, 2022-10-23-00, 12h

    section Genesis   
    Bid Period                  :done,  des1, 2022-10-13-00, 7d
    Reveal Period               :done,  des2, after des1, 3d
    Delivery Period             :active,  des3, after des2, 2d


    section Generic   
    Bid Period                  :active,  des4, after des2, 34h
    Reveal Period               :crit,  des5, after des4, 14h
    Delivery Period             :crit,  des6, after des5, 1d
   
erDiagram
    WALLET-A ||--|| AUCTION-A : creates
    WALLET-A ||--|| AUCTION-B : creates
    WALLET-A ||--|| AUCTION-C : creates
    AUCTION-A {
        string baseCurrency
        string quoteCurrency
        int minimumOrderSize
        int maximumOrderSize
        int notionalSize
        int genesisEpochDuration
        int genesisEpochDeliveryPeriod
        int genericEpochDeliveryPeriod
        string feePayer
        string backupLiquidityProvider
    }
    AUCTION-B {
        string baseCurrency
        string quoteCurrency
        int minimumOrderSize
        int maximumOrderSize
        int notionalSize
        int genesisEpochDuration
        int genesisEpochDeliveryPeriod
        int genericEpochDeliveryPeriod
        string feePayer
        string backupLiquidityProvider
    }
    AUCTION-C {
        string baseCurrency
        string quoteCurrency
        int minimumOrderSize
        int maximumOrderSize
        int notionalSize
        int genesisEpochDuration
        int genesisEpochDeliveryPeriod
        int genericEpochDeliveryPeriod
        string feePayer
        string backupLiquidityProvider
    }

flowchart TD
    A[Incoming Orders] --> B{Is it SOL-USDC?}
    B -->|Yes| C{Is it between $10 and $40?}
    C -->|Yes| D{Is Delivery Period open?}
    C ---->|No| F[End]
    B ---->|No| E[End]
    D -->|Yes| G[Route]
    D -->|No| H[End]

flowchart TD
    %% style J fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff

    A[Determining if Bid Period is open] --> B([Is this a Genesis or Generic Epoch?])
    B -->|Genesis| D([Is Current Timestamp < Auction Start Timestamp + Genesis Epoch Duration * Time Factor])
    D -->|Yes| G[Is Open]
    D ---->|No| H[Not Open and Reveal Period has begun]
    B ---->|Generic| C([Is Delivered Notional < Notional Size * Notional Factor])
    C ---->|Yes| E[Is Open]
    C ---->|No| F[Not Open and Reveal Period has begun]
 
gantt
    dateFormat  YYYY-MM-DD-HH
    axisFormat  %Y-%m-%d-%H
    todayMarker off
    title       Wallet ABC creates Auction XYZ on 10/13/2022
    Current Time: milestone, 2022-10-13-00, 0d

    section Genesis   
    Bid Period                  :active,  des1, 2022-10-13-00, 7d
    Reveal Period               :crit,  des2, after des1, 3d
    Delivery Period             :crit,  des3, after des2, 5d

gantt
    dateFormat  YYYY-MM-DD-HH
    axisFormat  %Y-%m-%d-%H
    todayMarker off
    title       Auction XYZ's Genesis Epoch Reveal Period starts
    Current Time: milestone, 2022-10-20-00, 0d

    section Genesis   
    Bid Period                  :done,  des1, 2022-10-13-00, 7d
    Reveal Period               :active,  des2, after des1, 3d
    Delivery Period             :crit,  des3, after des2, 5d

gantt
    dateFormat  YYYY-MM-DD-HH
    axisFormat  %Y-%m-%d-%H
    todayMarker off
    title       Wallet ABC delivers $140,000 (70% of Total Notional Size), triggering the end of Epoch 1's Bid Period.
    Current Time: milestone, 2022-10-25-00, 0d

    section Genesis   
    Bid Period                  :done,  des1, 2022-10-13-00, 7d
    Reveal Period               :done,  des2, after des1, 3d
    Delivery Period (Maximum)             :active,  des3, after des2, 5d
    
    section Epoch 1   
    Bid Period                  :active,  des4, after des2, 2d
    Reveal Period               :crit,  des5, after des4, 3d
    Delivery Period (Maximum)            :crit,  des6, after des5, 2d




