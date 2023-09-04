import { NextResponse, NextRequest } from "next/server";
import { Client, Environment } from "square";
import { cartePrice } from "@/utils/utils";
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

  const sizeName = formData.size.name;

  const checkSize = () => {
    const realSize = sizes.find((size) => sizeName === size.name);
    if (realSize?.value === formData.size.value) {
      return true;
    } else {
      return false;
    }
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

  const sizeCheck = checkSize();
  const carteCheck = checkCarteOptions();

  if (!sizeCheck || !carteCheck) {
    console.log("information toyed with");
    return;
  }

  const totalPayment = cartePrice(formData) + formData.size.value;
  const idemKey = crypto.randomUUID();

  try {
    const response = await client.paymentsApi.createPayment({
      sourceId: token,
      idempotencyKey: idemKey,
      amountMoney: {
        amount: totalPayment,
        currency: "USD",
      },
      buyerEmailAddress: formData.billingEmail,
      autocomplete: true,
      note: formData.showcase,
    });
    // guardar orderId en db response.result.payment.orderId
    console.log(response.result);

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
