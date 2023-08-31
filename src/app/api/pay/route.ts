import { NextResponse, NextRequest } from "next/server";
import { Client, Environment, ApiError } from "square";
import { cartePrice } from "@/utils/utils";

const client = new Client({
  accessToken: process.env.SQUARE_SECRET,
  environment: Environment.Sandbox,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const formData = body.formData;
  const token = body.token;

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
      //   billingAddress: formData.billingAddress,
      autocomplete: true,
      //   referenceId: "123456",
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
