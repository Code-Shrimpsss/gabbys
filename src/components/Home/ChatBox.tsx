import React, { useState } from "react";
import data from "@/mocks/chat_data.json"
// 假设这是从json文件中读取的数据


interface ChatMessageProps {
  name: string;
  message: string;
}

interface InputBoxProps {
  onEnter: (value: string) => void;
}

// 定义一个输入框组件
function InputBox({ onEnter }: InputBoxProps) {
  const [value, setValue] = useState(""); // 输入框的值

  // 处理输入框的变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 处理按键事件
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter(value); // 调用父组件传递的回调函数
      setValue(""); // 清空输入框
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Type User or Gabby"
    />
  );
}

// 定义一个聊天消息组件
function ChatMessage({ name, message }: ChatMessageProps) {
  return (
    <div className="chat-message">
      <span className="name">{name}</span>
      <span className="message">{message}</span>
    </div>
  );
}

// 定义一个聊天框组件
function ChatBox() {
  const [messages, setMessages] = useState<string>(""); // 聊天消息数组

  // 处理输入框按回车事件
  const handleEnter = (value: string) => {
    if (value !== "" && value.length != 0) {
      setMessages(value);
    }
  };


  return (
    <div className="chat-box">
      <h1>Chat with Gabby</h1>
      <div className="messages">
        {/* {messages.map((m, i) => (
          // 遍历消息数组，渲染每一条消息
          <>
            {m[chatSource.User] && (
              <ChatMessage key={`user-${i}`} name="User" message={m[chatSource.User]} />
            )}
            {m[chatSource.Gabby] && (
              <ChatMessage key={`gabby-${i}`} name="Gabby" message={m[chatSource.Gabby]} />
            )}
          </>
        ))} */}
      </div>
      <InputBox onEnter={handleEnter} /> {/* 渲染输入框组件，并传递回调函数 */}
    </div>
  );
}

export default ChatBox;
