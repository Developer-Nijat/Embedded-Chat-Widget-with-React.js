import { createRoot } from "react-dom/client";
import ChatWidget from "./components/chat-widget/ChatWidget";

// createRoot(document.getElementById("chat-widget-root")).render(<ChatWidget />);

const createChatWidget = () => {
  const container = document.createElement("div");
  container.id = "chat-widget-root";
  document.body.appendChild(container);

  createRoot(container).render(<ChatWidget />);
};

window.createChatWidget = createChatWidget;
