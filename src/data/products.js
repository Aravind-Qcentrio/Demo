import creditCardImage from '../assets/images/credit-card.png';
import digitalSavingsAccountImage from '../assets/images/digital-savings-account.png';
import personalLoanImage from '../assets/images/personal-loan.png';
import wealthManagementImage from '../assets/images/wealth-management.png';
import homeLoanImage from '../assets/images/home-loan.png';
import fixedDepositImage from '../assets/images/fixed-deposit.png';

export const products = [
{
id: 1,
title: "Personal Loan",
description: "Quick funds for your needs with flexible repayment.",
price: " Starting at 10.49% p.a.",
image: personalLoanImage,
},
{
id: 2,
title: "Digital Savings Account",
description: "Open a zero-balance account in minutes. Track spending with ease.",
price: "Interest Rate: Up to 7.00% p.a.",
image: digitalSavingsAccountImage,
},
{
id: 3,
title: "Credit Card",
description: "No annual fees. Earn cashback, rewards, and more.",
price: "Perks: 5% cashback on all online purchases",
image: creditCardImage,
},
{
id: 4,
title: "Wealth Management",
description: "For: professionals, and long-term investors.",
//price: 21999,
badge: "New",
image: wealthManagementImage,
},
{
id: 5,
title: "Home Loan",
description: "Low EMIs, doorstep service, and instant eligibility checks.",
price: "Interest Rate: From 8.25% p.a.",
image: homeLoanImage,
},
{
id: 6,
title: "Fixed Deposit",
description: "Secure your savings with high fixed returns.",
price: "Interest Rate: Up to 8.25% p.a. for senior citizens",
image: fixedDepositImage,
},
];