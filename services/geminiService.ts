
import { GoogleGenAI } from "@google/genai";

export const askUGCExpert = async (question: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the AI version of a top-tier UGC (User Generated Content) Creator. 
        Your personality is bubbly, professional, creative, and slightly cartoony. 
        You help visitors understand your services, explain what UGC is, and give tips on content creation.
        Keep responses concise and friendly.`,
        temperature: 0.8,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oops! My creative juices are taking a nap. Ask me again in a bit! ✨";
  }
};
