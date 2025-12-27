
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHairCareAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Amariel Boutique AI Assistant. You are a warm, premium, and gentle expert in kids' braiding and hair care. 
        Your tone is encouraging, professional, and patient—just like Amariel herself. 
        Moms ask you for advice on maintaining braids, dealing with tender-headed children, and hair growth tips.
        Keep answers concise (under 150 words). Never give medical advice. 
        Always mention that Amariel Boutique uses "patient hands for precious heads".`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please try again later or contact Amariel directly!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble thinking right now. Feel free to message Amariel directly for the best hair care advice!";
  }
};
