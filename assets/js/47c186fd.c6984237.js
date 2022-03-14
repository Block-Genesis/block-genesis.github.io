"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[1908],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return p}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(o),p=a,f=h["".concat(s,".").concat(p)]||h[p]||d[p]||n;return o?r.createElement(f,l(l({ref:t},u),{},{components:o})):r.createElement(f,l({ref:t},u))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<n;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7162:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=o(3117),a=o(102),n=(o(7294),o(3905)),l=["components"],i={sidebar_position:5},s="Collateralized Loans",c={unversionedId:"learn/module-4/collateralized-loans",id:"learn/module-4/collateralized-loans",title:"Collateralized Loans",description:"Collateralization is when a borrower pledges an asset as a means for the lender to recoup their capital in the instance that the borrower defaults on the loan. Defaulting on a loan or any sort of debt obligation is when the borrower fails to pay back the loan according to the original agreement. In other words, the borrower has continuously missed payments on the debt over an extended period of time. Lenders sometimes require the borrower to put up a valuable asset as collateral in which the lender has the right to possess in the instance that the loan defaults. In traditional finance, the most common types of collateral used to secure a loan include real estate, automobiles, art, jewelry, and securities.",source:"@site/docs/learn/module-4/collateralized-loans.md",sourceDirName:"learn/module-4",slug:"/learn/module-4/collateralized-loans",permalink:"/docs/learn/module-4/collateralized-loans",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5}},u={},d=[{value:"Collateralized Loans in DeFi",id:"collateralized-loans-in-defi",level:2},{value:"Borrower protections for DeFi Collateralized Loans",id:"borrower-protections-for-defi-collateralized-loans",level:2}],h={toc:d};function p(e){var t=e.components,o=(0,a.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"collateralized-loans"},"Collateralized Loans"),(0,n.kt)("p",null,"Collateralization is when a borrower pledges an asset as a means for the lender to recoup their capital in the instance that the borrower defaults on the loan. Defaulting on a loan or any sort of debt obligation is when the borrower fails to pay back the loan according to the original agreement. In other words, the borrower has continuously missed payments on the debt over an extended period of time. Lenders sometimes require the borrower to put up a valuable asset as collateral in which the lender has the right to possess in the instance that the loan defaults. In traditional finance, the most common types of collateral used to secure a loan include real estate, automobiles, art, jewelry, and securities."),(0,n.kt)("p",null,"As an example, let's assume that you are looking to purchase a new property. Like most, you don't have enough money to actually pay for the property so you take out a mortgage in order to pay for it. In this case, the lender would require you to collateralize the mortgage with the underlying property being purchased. In return, the lender would issue you a mortgage. Traditionally, mortgages are collateralized between 70% and 90% of the property value."),(0,n.kt)("h2",{id:"collateralized-loans-in-defi"},"Collateralized Loans in DeFi"),(0,n.kt)("p",null,"In decentralized finance, collateralized loans are the backbone of open lending protocols. Given that DeFi empowers open, pseudo-anonymous finance, no one has a credit score or any sort of formal identity associated with the loan they are taking out. Therefore, similar to mortgages, most DeFi lending applications will require borrowers to collateralize their loan as an incentive to hold them accountable for repaying the debt. However, the key difference between traditional collateralization and DeFi collateralization (as it stands today), is that collateralizing a loan on MakerDAO or Compound will require the borrower to over-collateralize the loan."),(0,n.kt)("p",null,"This means that in order to take out the loan, the value of the collateral will exceed the value of the loan. For MakerDAO, borrowers are required to collateralize their loan, at minimum, of 150% of the loan value. To expand on this, if you are looking to take out a loan of 100 Dai on MakerDAO, you would have to collateralize your loan with at least $150 in Ether. You can choose your collateralization ratio which calculates the liquidation price and the amount of Dai you'll receive in return. The liquidation price is the price of Ether where the value of your loan will exceed the value of the minimum collateralization ratio."),(0,n.kt)("p",null,"Given that the minimum collateralization ratio is 150% and you collateralized your loan with $150 ETH for 100 DAI, any drop in ETH price below $150 would subject your loan to the 13% liquidation penalty. As such, you would want to (1) take out less Dai or (2) collateralized more Ether in order to avoid this penalty. With this in mind, most individuals will collateralize their loans well over 200%, with the average collateralization ratio across all platforms is 348%. This is done to give investors a nice padding in the case of any volatility in the crypto markets and to avoid the liquidation penalty."),(0,n.kt)("h2",{id:"borrower-protections-for-defi-collateralized-loans"},"Borrower protections for DeFi Collateralized Loans"),(0,n.kt)("p",null,"In DeFi, there are few borrower protections associated with lending. Unlike in traditional finance where both borrowers and lenders have protections, such as loan insurance, DeFi is currently lacking in protection on both ends. In general, the primary protection mechanism associated with DeFi lending is the game theory and incentives behind over-collateralized loans. Users are unlikely to not pay their loan and default as there's more capital locked as collateral. With this, borrowers are vulnerable to losing their private keys or having the smart contracts that hold their collateral hacked. In either one of these scenarios, the borrower or the lender would lose their capital with little to no recourse."),(0,n.kt)("p",null,"It's important that over the next few years that the DeFi space begins to establish better protection for both borrowers and lenders. We're already beginning to see this with the emergence of decentralized insurance protocols such as Nexus Mutual or CDx."))}p.isMDXComponent=!0}}]);