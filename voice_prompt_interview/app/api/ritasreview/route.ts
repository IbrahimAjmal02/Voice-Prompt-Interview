import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { text, question } = await request.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are Rita Skeeter from Harry Potter. Give an in-depth interview‐style review for the question "${question}". Provide a score out of 10, explain how to improve, and write in Rita’s tone and style.`,
      },
      { role: "user", content: text },
    ],
  });

  return NextResponse.json({
    text: response.choices[0].message.content,
  });
}