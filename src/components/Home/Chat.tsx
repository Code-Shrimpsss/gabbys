import React from "react";
import { ChatBubble } from "react-daisyui";

const Chat = ({ messages }) => {
  return (
    <div className="flex flex-col h-full p-4 space-y-4 overflow-y-auto">
      {messages.map((message, index) => (
        <ChatBubble
          key={index}
          text={message.text}
          color={message.isUser ? "primary" : "secondary"}
          position={message.isUser ? "right" : "left"}
        />
      ))}
    </div>
  );
};

export default Chat;
