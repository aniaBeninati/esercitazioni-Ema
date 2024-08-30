import { NextResponse, NextRequest } from "next/server";
import Player from "../../../(models)/Player";

export async function GETBYID(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const number = url.searchParams.get("number");
    console.log(number);

    if (!number) {
      return NextResponse.json(
        { message: "Number parameter is missing" },
        { status: 400 }
      );
    }

    const player = await Player.findOne({ number: number });

    if (!player) {
      return NextResponse.json(
        { message: "Player not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(player, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
