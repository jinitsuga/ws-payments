// export async function POST() {
//   try {
//     const response = await client.paymentsApi.createPayment({
//       sourceId: "ccof:GaJGNaZa8x4OgDJn4GB",
//       idempotencyKey: "7b0f3ec5-086a-4871-8f13-3c81b3875218",
//       amountMoney: {
//         amount: 1000,
//         currency: "USD",
//       },
//       appFeeMoney: {
//         amount: 10,
//         currency: "USD",
//       },
//       autocomplete: true,
//       customerId: "W92WH6P11H4Z77CTET0RNTGFW8",
//       locationId: "L88917AVBK2S5",
//       referenceId: "123456",
//       note: "Brief description",
//     });

//     console.log(response.result);
//   } catch (error) {
//     console.log(error);
//   }
// }
