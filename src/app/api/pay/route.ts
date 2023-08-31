import { NextResponse, NextRequest } from "next/server";
import { Client } from "square";
import { cartePrice } from "@/utils/utils";

const client = new Client();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const formData = body.formData;
  const token = body.token;

  const totalPayment = cartePrice(formData) + formData.size.value;

  try {
    const response = await client.paymentsApi.createPayment({
      sourceId: "ccof:GaJGNaZa8x4OgDJn4GB",
      idempotencyKey: "7b0f3ec5-086a-4871-8f13-3c81b3875218",
      amountMoney: {
        amount: BigInt(1000),
        currency: "USD",
      },
      appFeeMoney: {
        amount: BigInt(10),
        currency: "USD",
      },
      autocomplete: true,
      customerId: "W92WH6P11H4Z77CTET0RNTGFW8",
      locationId: "L88917AVBK2S5",
      referenceId: "123456",
      note: "Brief description",
    });

    console.log(response.result);
  } catch (error) {
    console.log(error);
  }
}
