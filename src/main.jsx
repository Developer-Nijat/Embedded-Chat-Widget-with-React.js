import { createRoot } from "react-dom/client";
import ChatWidget from "./components/chat-widget/ChatWidget.jsx";

createRoot(document.getElementById("chat-widget")).render(<ChatWidget />);

// const createChaWidget = () => {
//   const root = document.createElement("div");
//   root.id = "chat-widget";
//   document.body.appendChild(root);
//   createRoot(root).render(<ChatWidget />);
// };

// window.createChaWidget = createChaWidget;
