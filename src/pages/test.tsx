import React, { useState, useEffect } from "react";
import { ChatBubble } from "react-daisyui";

type Message = { text: string; isUser: boolean };

const Chat = ({ chatMessages }: { chatMessages: Message[] }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // 监听回车键
    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 13) {
        // 添加用户消息
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: input, isUser: true },
        ]);
        // 清空输入框
        setInput("");
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  }, [input]);

  useEffect(() => {
    // 如果有新消息且是用户发送的，则生成程序回复
    const lastMessage = chatMessages[chatMessages.length - 1];
    if (lastMessage && lastMessage.isUser) {
      generateReply(lastMessage.text);
    }
  }, [messages]);

  const generateReply = (userMessage: string) => {
    let reply;
    switch (userMessage.toLowerCase()) {
      case "hi":
        reply = "Hello!";
        break;
      case "how are you?":
        reply = "I'm fine, thank you.";
        break;
      case "what is your name?":
        reply = "I'm Bing.";
        break;
      default:
        reply = "Sorry, I don't understand.";
    }
    // 添加程序消息
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: reply, isUser: false },
    ]);
  };

  return (
    <div className="flex flex-col h-full p-4 space-y-4 overflow-y-auto">
      {chatMessages.map((message, index) => (
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
