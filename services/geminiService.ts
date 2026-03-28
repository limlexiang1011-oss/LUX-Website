import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in your environment
const ai = new GoogleGenAI({ apiKey });

export const getAIAdvice = async (userQuery: string, context: string): Promise<string> => {
  try {
    const modelId = 'gemini-3-flash-preview'; 
    
    const prompt = `
      你叫 "Lux"，是 "AI 营销全流程" 课程的智能顾问。
      
      活动背景信息 (Context):
      ${context}

      用户问题 (User Query): "${userQuery}"

      指令 (Instructions):
      1. 请用**中文**回答。
      2. 语气专业、真诚、有见地。
      3. 重点突出“系统化落地”、“企业增长”和“非碎片化教学”。
      4. **严禁**提及“免费”、“前50位免费”或“RM197”等过时促销信息。
      5. 费用说明：Preview 体验课 (RM68/RM100)，两天实战课 (RM599)。
      6. 鼓励用户预约 Preview 体验课以了解系统是否适合他们。
      7. 回复保持在 80 字以内。
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "欢迎咨询，请问有什么可以帮您？";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系统繁忙，请稍后再试。";
  }
};