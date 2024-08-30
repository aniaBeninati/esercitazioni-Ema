import { NextResponse, NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import Player from "../../../(models)/Player";

export async function GET({ params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const player = await Player.findOne({ _id: new ObjectId(id) });

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
