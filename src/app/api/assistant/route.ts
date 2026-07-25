import { assistantKnowledge, assistantRules } from "@/data/assistantKnowledge";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const model = "gemini-3.6-flash";

export async function POST(request: Request) {
  let payload: { question?: unknown; history?: unknown };

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const question = typeof payload.question === "string"
    ? payload.question.trim().slice(0, 500)
    : "";
  const history = Array.isArray(payload.history)
    ? payload.history
        .filter(
          (message): message is ChatMessage =>
            typeof message === "object" &&
            message !== null &&
            (message.role === "assistant" || message.role === "user") &&
            typeof message.content === "string",
        )
        .slice(-8)
        .map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content.slice(0, 800) }],
        }))
    : [];

  if (!question) {
    return Response.json({ error: "Please enter a question." }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "AI service is not configured." }, { status: 503 });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: `${assistantRules}\n\nVERIFIED KNOWLEDGE:\n${assistantKnowledge}` }],
          },
          contents: [...history, { role: "user", parts: [{ text: question }] }],
          generationConfig: {
            temperature: 0.15,
            maxOutputTokens: 500,
          },
        }),
      },
    );

    if (!response.ok) {
      return Response.json({ error: "AI service is temporarily unavailable." }, { status: 502 });
    }

    const data = await response.json() as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    };
    const answer = data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("")
      .trim();

    if (!answer) {
      return Response.json({ error: "No answer was generated." }, { status: 502 });
    }

    return Response.json({ answer });
  } catch {
    return Response.json({ error: "AI service is temporarily unavailable." }, { status: 502 });
  }
}
