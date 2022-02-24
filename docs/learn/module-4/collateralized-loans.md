---
sidebar_position: 5
---

# Collateralized Loans

Collateralization is when a borrower pledges an asset as a means for the lender to recoup their capital in the instance that the borrower defaults on the loan. Defaulting on a loan or any sort of debt obligation is when the borrower fails to pay back the loan according to the original agreement. In other words, the borrower has continuously missed payments on the debt over an extended period of time. Lenders sometimes require the borrower to put up a valuable asset as collateral in which the lender has the right to possess in the instance that the loan defaults. In traditional finance, the most common types of collateral used to secure a loan include real estate, automobiles, art, jewelry, and securities.

As an example, let's assume that you are looking to purchase a new property. Like most, you don't have enough money to actually pay for the property so you take out a mortgage in order to pay for it. In this case, the lender would require you to collateralize the mortgage with the underlying property being purchased. In return, the lender would issue you a mortgage. Traditionally, mortgages are collateralized between 70% and 90% of the property value.

## Collateralized Loans in DeFi

In decentralized finance, collateralized loans are the backbone of open lending protocols. Given that DeFi empowers open, pseudo-anonymous finance, no one has a credit score or any sort of formal identity associated with the loan they are taking out. Therefore, similar to mortgages, most DeFi lending applications will require borrowers to collateralize their loan as an incentive to hold them accountable for repaying the debt. However, the key difference between traditional collateralization and DeFi collateralization (as it stands today), is that collateralizing a loan on MakerDAO or Compound will require the borrower to over-collateralize the loan.

This means that in order to take out the loan, the value of the collateral will exceed the value of the loan. For MakerDAO, borrowers are required to collateralize their loan, at minimum, of 150% of the loan value. To expand on this, if you are looking to take out a loan of 100 Dai on MakerDAO, you would have to collateralize your loan with at least $150 in Ether. You can choose your collateralization ratio which calculates the liquidation price and the amount of Dai you'll receive in return. The liquidation price is the price of Ether where the value of your loan will exceed the value of the minimum collateralization ratio.

Given that the minimum collateralization ratio is 150% and you collateralized your loan with $150 ETH for 100 DAI, any drop in ETH price below $150 would subject your loan to the 13% liquidation penalty. As such, you would want to (1) take out less Dai or (2) collateralized more Ether in order to avoid this penalty. With this in mind, most individuals will collateralize their loans well over 200%, with the average collateralization ratio across all platforms is 348%. This is done to give investors a nice padding in the case of any volatility in the crypto markets and to avoid the liquidation penalty.

## Borrower protections for DeFi Collateralized Loans

In DeFi, there are few borrower protections associated with lending. Unlike in traditional finance where both borrowers and lenders have protections, such as loan insurance, DeFi is currently lacking in protection on both ends. In general, the primary protection mechanism associated with DeFi lending is the game theory and incentives behind over-collateralized loans. Users are unlikely to not pay their loan and default as there's more capital locked as collateral. With this, borrowers are vulnerable to losing their private keys or having the smart contracts that hold their collateral hacked. In either one of these scenarios, the borrower or the lender would lose their capital with little to no recourse.

It's important that over the next few years that the DeFi space begins to establish better protection for both borrowers and lenders. We're already beginning to see this with the emergence of decentralized insurance protocols such as Nexus Mutual or CDx.
