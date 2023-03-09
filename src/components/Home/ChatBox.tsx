import React, { useState } from "react";

// A type for the message object
type Message = {
  text: string;
  isUser: boolean;
};

// A function to generate a random reply
const getReply = (): string => {
  const replies = [
    "你好",
    "今天天气不错",
    "我喜欢编程",
    "你有什么爱好？",
    "我是必应"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
};

// A component to render a chat bubble
const ChatBubble = ({ message, isUser }: Message) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : ""}`}>
      <div
        className={`chat-bubble ${isUser ? "bg-primary" : ""} ${!isUser ? "bg-base-200" : ""
          }`}
      >
        <div className="chat-content">{message}</div>
      </div>
    </div>
  );
};

// A component to render the chat history
const ChatHistory = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="chat-history">
      {messages.map((message, index) => (
        <ChatBubble key={index} message={message.text} isUser={message.isUser} />
      ))}
    </div>
  );
};

// A component to render the chat input
const ChatInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [value, setValue] = useState("");

  // A function to handle the change of the input value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // A function to handle the key press of the input
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSend(value);
      setValue("");
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

// A component to render the chat app
const ChatApp = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  // A function to handle the send of a user message
  const handleSend = (text: string) => {
    // Add the user message to the messages state
    setMessages([...messages, { text: text, isUser: true }]);

    // Generate a reply and add it to the messages state after a delay
    setTimeout(() => {
      setMessages([...messages, { text: getReply(), isUser: false }]);
    }, Math.random() * (3000 - 1000) + 1000);
  };

  return (
    <div className="chat-app">
      <ChatHistory messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatApp;
