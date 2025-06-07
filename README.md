# acedIt
# 📚 acedIt - Smart Study Planner

**acedIt** is a web app that helps high school students create detailed, balanced weekly study plans using AI. Just list your subjects, deadlines, and available study hours per day—the app will generate a personalized, day-by-day plan to help you stay on track.

## Features

- 🧠 **AI-powered**: Automatically generates a study plan with balanced subject allocation and deadline awareness.
- 📅 **Deadline Management**: Ensures all tasks are planned to meet your deadlines.
- ⚡ **Fast & Responsive**: User-friendly interface with instant feedback and loading spinner.
- 🎨 **Modern Design**: Clean, responsive UI using CSS gradients and subtle animations.

## Demo

![Screenshot](screenshot.png) <!-- Add your screenshot file or remove this line -->

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/acedIt.git
cd acedIt
```

### 2. Add your OpenAI API key

Edit `plans.js` and replace the placeholder in the `Authorization` header with your own [OpenAI API Key](https://platform.openai.com/account/api-keys):

```js
"Authorization": "Bearer YOUR_OPENAI_API_KEY"
```

### 3. Open in Browser

No build step needed—just open `index.html` in your browser.

## Usage

1. Enter your subjects (comma-separated).
2. Enter the corresponding deadlines/test dates (YYYY-MM-DD, same order).
3. Enter your available study hours per day.
4. Click "Generate Plan" to receive an AI-generated, day-by-day study schedule.

## File Structure

```
.
├── index.html      # Main HTML file
├── style.css       # Stylesheet for the app
├── plans.js        # JavaScript logic including AI integration
└── README.md       # Project documentation
```

## Requirements

- An OpenAI API key (for GPT-4o or compatible model)
- Modern web browser

## Customization

- **Model**: Change the `model` field in `plans.js` to another supported OpenAI model if you wish.
- **Styling**: Edit `style.css` to change the look and feel.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

[MIT](LICENSE)

---
