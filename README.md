# Cram.AI: AI-Powered Cheat Sheet Generator

Cram.AI is a web application that helps you create cheat sheets on any topic in various formats ready for printing. The application uses OpenAI's GPT models to generate content with LaTex formula support, preview functionality, and PDF export.

## Features

- Generate cheat sheets on any topic using GPT-4 models
- Support for mathematical formulas via LaTeX/MathJax
- Two formats: classic cheat sheet and bottle wrapper
- Customizable width and font size
- PDF export with preserved formatting
- Voice input support
- Dark/light theme

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- OpenAI API key (get one at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys))

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/Cram.AI.git
   cd Cram.AI
   ```

2. Configure your OpenAI API key:
   - Navigate to the `cram-app/js` directory
   - Copy the template configuration file:
     ```
     cp config.template.js config.js
     ```
   - Edit `config.js` and replace `"YOUR_API_KEY_HERE"` with your actual OpenAI API key

3. Open the application:
   - Double-click on `cram-app/index.html` or
   - Use a local server (recommended for better experience):
     ```
     # Using Python
     cd cram-app
     python -m http.server
     ```
     Then open `http://localhost:8000` in your browser

## Usage

1. Enter the topic for your cheat sheet in the input field
2. Click the arrow button or press Enter to generate
3. Use the settings panel to customize:
   - Format: Choose between "Шпора" (classic cheat sheet) or "Обёртка" (bottle wrapper)
   - Font size: Adjust text size for better readability
   - Width: Set the width of the cheat sheet (in centimeters)
4. Click "Экспорт PDF" to save your cheat sheet as a PDF file

## Project Structure

- `index.html` - Main application file
- `js/`
  - `config.js` - Configuration file (contains your API key)
  - `app.js` - Main application logic
  - `api.js` - API interaction with OpenAI
  - `ui.js` - User interface related functions
  - `layout.js` - Layout calculations
  - `export.js` - PDF export functionality
  - `voice.js` - Voice input functionality
  - `utils.js` - Utility functions
- `css/`
  - `styles.css` - Main stylesheet
  - `animations.css` - Animation related styles
- `img/` - Images and icons

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the GPT API
- MathJax for LaTeX rendering
- Tailwind CSS for styling
