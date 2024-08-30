import { NextResponse, NextRequest } from "next/server";
import Player from "../(models)/Player";

export async function GET() {
  try {
    const players = await Player.find();

    return NextResponse.json(players, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
