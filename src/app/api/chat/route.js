import { generateAIResponse } from "@/utils/geminiIntigration";


export async function POST(request) {
  try {
    const { messages } = await request.json();

    const response = await generateAIResponse(messages);

    return Response.json({
      success: true,
      response,
    });
  } catch (error) {
    console.error("API Route Error:", error);

    return Response.json(
      {
        success: false,
        error: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}