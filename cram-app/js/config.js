/**
 * Configuration settings for Cram application (TEMPLATE)
 * 
 * ИНСТРУКЦИЯ: Скопируйте этот файл как config.js и добавьте свой API ключ OpenAI.
 * Файл config.js добавлен в .gitignore и не будет отправлен в репозиторий.
 */

const CONFIG = {
  // Заменить на свой API ключ OpenAI
  apiKey: "YOUR_API_KEY_HERE", 
  apiEndpoint: "https://api.openai.com/v1/chat/completions",
  model: "gpt-4.1-mini", // Using GPT-4.1 for better responses
  
  // Page format settings
  maxBottleHeightCm: 10.5, // Upper half of landscape page
  bottleColumns: 4,        // Number of sections in the upper half
  
  // Default values
  defaultFontSize: 14,
  defaultWidth: 20         // Default cheat width in cm
};
