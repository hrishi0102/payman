import Paymanai from "paymanai";
import dotenv from "dotenv";

dotenv.config();

const payman = new Paymanai({
    xPaymanAPISecret: process.env.PAYMAN_API_KEY,
});

// Create a payee
// US ACH
// const payee = await payman.payments.createPayee({
// 	type: "US_ACH",
// 	name: "Hrishi",
// 	accountHolderName: "Hrishi",
// 	accountHolderType: "individual",
// 	accountNumber: "12345678",
// 	routingNumber: "021000021",
// 	accountType: "checking",
// 	contactDetails: {
// 		email: "hrishi@example.com",
// 	},
// });

// // Crypto
// const cryptoPayee = await payman.payments.createPayee({
//     type: "CRYPTO_ADDRESS",
//     name: "Crypto Wallet",
//     address: "0x123abc456def789ghi",
//     chain: "ethereum",
//     currency: "USDC",
//     contactDetails: {
//         email: "crypto.user@example.com"
//     },
//     tags: ["crypto", "eth"]
// });

// console.log(`Payee created: ${payee.id}`);
// console.log(`Crypto Payee created: ${cryptoPayee.id}`);

//Send a payment (can only use Test Account)
// const payment = await payman.payments.sendPayment({
//     amountDecimal: 5.00,
//     payeeId: 'pd-1f0056c2-e3bc-6593-82c2-2f0e5fd60eb7',
//     memo: 'Invoice #1234',
//     metadata: {
//       department: "marketing"
//     }
//   });

// console.log('Payment sent:', JSON.stringify(payment));

//Search Payee
const all_payees = await payman.payments.searchPayees();
const payees_filtered = await payman.payments.searchPayees({
    name: "Hrishi",
    type: "US_ACH"
});

console.log('All payees:', JSON.stringify(all_payees));
console.log('Filtered payees:', JSON.stringify(payees_filtered));