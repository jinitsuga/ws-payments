import { NextResponse, NextRequest } from "next/server";
import { Client, Environment } from "square";
import { cartePrice, calcDiscount } from "@/utils/utils";
import { sizes } from "@/utils/sizes";
import { carteOptions } from "@/utils/carteOptions";

const client = new Client({
  accessToken: process.env.SQUARE_SECRET,
  environment: Environment.Sandbox,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const formData = body.formData;
  const token = body.token;

  const selectedSizes = [
    formData.showcasesLaOct,
    formData.showcasesNyJan,
    formData.showcasesNyNov,
    formData.showcasesLaFeb,
  ];

  const checkSizes = () => {
    let confirmation: boolean = true;

    for (let i = 0; i < selectedSizes.length; i++) {
      if (selectedSizes[i] == "") continue;
      const option = selectedSizes[i];
      const realOption = sizes.find((size) => size.name === option.name);
      if (!realOption?.value === option.value) {
        confirmation = false;
        break;
      }
    }
    return confirmation;
  };

  const checkCarteOptions = () => {
    let answer: boolean = true;
    for (let i = 0; i < formData.carte.length; i++) {
      const option = formData.carte[i];
      const realOption = carteOptions.find(
        (carteOption) => carteOption.name === option.name
      );
      if (!realOption?.value === option.value) {
        answer = false;
        break;
      }
    }
    return answer;
  };

  const sizeCheck = checkSizes();
  const carteCheck = checkCarteOptions();

  if (!sizeCheck || !carteCheck) {
    console.log("information toyed with");
    return;
  }
  console.log("payment issues");

  // Calc total after items are validated
  const multiShowsDiscount = calcDiscount(selectedSizes);

  const totalPayment =
    cartePrice(formData) + cartePrice({ carte: selectedSizes });

  // Floats can't be converted to bigint, needs to be integer
  const discountedTotal = BigInt(
    Math.floor(totalPayment - (totalPayment * multiShowsDiscount) / 100)
  );

  const idemKey = crypto.randomUUID();

  console.log(discountedTotal);

  try {
    const response = await client.paymentsApi.createPayment({
      sourceId: token,
      idempotencyKey: idemKey,
      amountMoney: {
        amount: discountedTotal,
        currency: "USD",
      },
      buyerEmailAddress: formData.billingEmail,
      autocomplete: true,
      note: "showcase",
    });
    // guardar orderId en db response.result.payment.orderId
    console.log(response.result);
    console.log("orded id", response.result.payment?.orderId);

    return NextResponse.json(response);
  } catch (error) {
    console.log("error in payment", error);
    return NextResponse.json(error, { status: 500 });
  }
}
