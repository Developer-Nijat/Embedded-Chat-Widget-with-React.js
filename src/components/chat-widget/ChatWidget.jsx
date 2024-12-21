import { useState } from "react";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([
        ...messages,
        { text: input, sender: "user", id: Date.now() },
      ]);
      setInput("");

      // Simulate response after 1 second
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: "Thanks for your message! This is a demo response.",
            sender: "support",
          },
        ]);
      }, 2000);
    }
  };

  return (
    <div className="chat-widget-container">
      {!isOpen && (
        <button className="chat-toggle" onClick={toggleChat}>
          💬 Chat
        </button>
      )}
      {isOpen && (
        <div className="chat-widget" style={isOpen ? { bottom: 20 } : {}}>
          <div className="chat-header">
            <h4>Support</h4>
            <button className="chat-close" onClick={toggleChat}>
              ✖
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="chat-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="chat-input"
            />
            <button type="submit" className="chat-send">
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
