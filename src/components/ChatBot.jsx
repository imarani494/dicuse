import React, { useState } from "react";

const ChatBot = ({ tasks }) => {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Ask me about your tasks!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const getResponse = (question) => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;

    question = question.toLowerCase();

    if (question.includes("total")) {
      return `You have ${total} total tasks.`;
    }

    if (question.includes("completed")) {
      return `You completed ${completed} tasks.`;
    }

    if (question.includes("pending")) {
      return `You have ${pending} pending tasks.`;
    }

    return "I can tell total, completed, and pending tasks 😊";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    const botMsg = { text: getResponse(input), sender: "bot" };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div
      style={{
        marginTop: "20px",
        borderTop: "1px solid #ddd",
        paddingTop: "10px"
      }}
    >
      <h3>🤖 Task Assistant</h3>

      <div
        style={{ maxHeight: "150px", overflowY: "auto", marginBottom: "10px" }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "5px 0"
            }}
          >
            <span
              style={{
                background: msg.sender === "user" ? "#007bff" : "#eee",
                color: msg.sender === "user" ? "#fff" : "#000",
                padding: "6px 10px",
                borderRadius: "10px",
                display: "inline-block"
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          placeholder="Ask about tasks..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
