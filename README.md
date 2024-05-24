# Gemini Clone Project

## Project Overview

The Gemini Clone Project is a web application designed to replicate the functionalities of Gemini, a modern conversational AI platform. This project allows users to interact with the AI, store previous responses, and utilize text-to-speech functionality to enhance the user experience. It demonstrates the integration of various web technologies and APIs to create a robust conversational AI application.

## Key Features

1. **Conversational Interface**:
   - Engage in conversations with the AI.
   - Real-time responses and interaction.

2. **Store Previous Responses**:
   - Save and display previous conversations.
   - Users can refer back to their chat history.

3. **Text-to-Speech Functionality**:
   - Convert text responses from the AI into speech.
   - Enhance accessibility and user experience with audio responses.

## Technologies Used

1. **Frontend**:
   - **ReactJS**: A popular JavaScript library for building user interfaces, providing a dynamic and responsive experience.
   - **Tailwind CSS**: A utility-first CSS framework for styling the application efficiently and consistently.
   - **JavaScript**: For adding interactivity and handling API requests.

2. **APIs**:
   - **Gemini API**: For fetching conversational responses from the AI.

## Project Structure

- **Frontend**:
  - `src/components`: Contains React components such as ChatWindow, MessageList, MessageInput, and TextToSpeech.
  - `src/pages`: Contains different pages like Home and Chat.
  - `src/styles`: Contains Tailwind CSS styles for the components.
  - `src/hooks`: Custom hooks for fetching data from the Gemini API and handling text-to-speech.

## Learning Outcomes

- **Understanding of Frontend Development**:
  - Gain hands-on experience with ReactJS and Tailwind CSS.
  - Learn to build responsive and interactive user interfaces.

- **API Integration**:
  - Learn how to use third-party APIs to fetch and manipulate data.
  - Understand the importance of handling API errors and displaying meaningful messages to users.

- **State Management**:
  - Manage application state using React hooks.
  - Implement features to store and display previous conversations.

- **Accessibility Enhancements**:
  - Add text-to-speech functionality to improve accessibility.
  - Learn to integrate and use browser APIs for audio playback.

## Key Components

1. **ChatWindow**:
   - The main component for displaying the chat interface.
   - Contains MessageList and MessageInput components.

2. **MessageList**:
   - Displays the list of previous messages.
   - Fetches and renders messages from the stored conversation history.

3. **MessageInput**:
   - Input field for users to type and send their messages.
   - Handles sending messages and updating the conversation history.

4. **TextToSpeech**:
   - Converts text responses from the AI into speech.
   - Uses the Web Speech API for text-to-speech functionality.

## Usage

1. **Clone the Repository**:
   ```sh
   https://github.com/Shubham0202/Gemini-Clone.git
   cd gemini-clone
2. **Install Dependencies**:
   ```sh
   npm install

4. **Run the Application**:
   ```sh
   npm run dev
6. **Access the Application**:
   Open your browser and navigate to
   ```sh
   localhost:5173

# Conclusion
The Gemini Clone Project is a comprehensive project that covers a wide range of frontend development skills and concepts. By working on this project, developers can gain valuable experience in building real-world applications, integrating APIs, and enhancing user interactions with text-to-speech functionality. This project not only enhances technical skills but also provides a deeper understanding of how conversational AI platforms operate and how to make web applications more accessible.
    
