import Opinion from "@/models/opinions";
import { connectToDb } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await connectToDb();
    const opinions = await Opinion.find({});
    if (opinions) return NextResponse.json(opinions);
    else
      return new Response(
        JSON.stringify({
          status: 404,
          message: "No opinions found",
        })
      );
  } catch (e) {
    console.log("An error occurred:", e);
    return new Response(
      JSON.stringify({ message: "An internal server error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(req) {
  try {
    await connectToDb();
    const body = await req.json();
    const newOpinion = new Opinion(body);
    await newOpinion.save();
    return NextResponse.json(
      { message: "Opinion saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting opinion:", error);
    return NextResponse.json(
      { message: "Failed to submit opinion", error },
      { status: 500 }
    );
  }
}
