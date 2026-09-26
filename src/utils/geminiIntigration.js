import OpenAI from "openai";

const apiKey = process.env.GROQ_API_KEY;

if (!apiKey) {
  throw new Error("GROQ_API_KEY is missing");
}

const groq = new OpenAI({
  apiKey,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function generateAIResponse(messages) {
  // Validate messages
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("No messages provided.");
  }

  // Convert messages to OpenAI/Groq format
  const validMessages = messages
    .filter(
      (message) =>
        message &&
        typeof message.content === "string" &&
        message.content.trim() !== ""
    )
    .map((message) => ({
      role: message.role === "assistant" ? "assistant" : "user",
      content: message.content.trim(),
    }));

  if (validMessages.length === 0) {
    throw new Error("No valid message content provided.");
  }

  try {
const response = await groq.chat.completions.create({
  model: "openai/gpt-oss-120b",

  messages: [
    {
      role: "system",
      content: `
You are MyGPT, a helpful AI assistant.

Rules:
- Answer clearly and directly.
- Keep simple questions short.
- Do not repeat the user's question.
- For coding questions, provide useful working code.
- Use Markdown when useful.
- Never reveal API keys, passwords, or secrets.
    `,
    },
    ...validMessages,
  ],

  temperature: 0.5,
  max_tokens: 1024,
});

    const text = response.choices?.[0]?.message?.content;

    if (!text) {
      throw new Error("Groq returned an empty response.");
    }

    return text;
  } catch (error) {
    console.error("Groq API Error:", error);

    if (error.status === 400) {
      throw new Error(
        "Invalid request sent to Groq. Please check the message format."
      );
    }

    if (error.status === 401 || error.status === 403) {
      throw new Error(
        "Groq API access denied. Check your API key."
      );
    }

    if (error.status === 429) {
      throw new Error(
        "Groq rate limit reached. Please try again later."
      );
    }

    throw new Error(
      error.message || "Groq API request failed."
    );
  }
}