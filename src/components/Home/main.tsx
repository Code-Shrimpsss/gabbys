import React, { useState, useEffect } from "react";
import Chat from "./Chat";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // 监听回车键
    const handleEnter = (event) => {
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
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.isUser) {
      generateReply(lastMessage.text);
    }
  }, [messages]);

  // 根据用户消息生成程序回复
  const generateReply = (userMessage) => {
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
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-gray-100">
        <Chat messages={messages} />
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="w-full p-2 rounded-lg focus:outline-none focus:ring"
        />
      </div>
    </div>
  );
};

export default App;
