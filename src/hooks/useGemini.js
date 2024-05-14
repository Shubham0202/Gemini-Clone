

// node --version # Should be >= 18
// npm install @google/generative-ai

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { useCallback, useEffect, useState } from "react";
// AIzaSyAYx8dp5C39ulSyJOjqTu9xrjkr9QWi9ks

  const MODEL_NAME = "gemini-1.5-pro-latest";
  const API_KEY = "AIzaSyAYx8dp5C39ulSyJOjqTu9xrjkr9QWi9ks";
  
 export default async function runWithDelay() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 1,
      topK: 0,
      topP: 0.95,
      maxOutputTokens: 8192,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const parts = [
        {title: "Write a poem about a cat chasing a butterfly." },
    ];
  
    try {
      const result = await model.generateContent({
        contents: parts,
        generationConfig,
        safetySettings,
      });
      const response = result.response;
      console.log(response.text());
    } catch (error) {
      if (error.code === 429) {
        console.error("Quota exceeded. Retrying in 60 seconds...");
        await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 60 seconds
        runWithDelay(); // Retry the request after waiting
      } else {
        console.error("An error occurred:", error);
      }
    }
  }
  
  runWithDelay();  