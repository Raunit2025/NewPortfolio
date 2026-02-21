import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Resizable } from "re-resizable";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [position, setPosition] = useState({ x: 20, y: 100 });
  const dragRef = useRef<HTMLDivElement | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const API_BASE =
    import.meta.env.MODE === "development" ? "http://127.0.0.1:8001" : "";
  const [size, setSize] = useState({ width: 350, height: 520 });

  // Chat persistence
  useEffect(() => {
    const saved = localStorage.getItem("raunit-ai-chat");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("raunit-ai-chat", JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, loading, isOpen]);

  useEffect(() => {
    const savedSize = localStorage.getItem("raunit-ai-size");
    if (savedSize) setSize(JSON.parse(savedSize));
  }, []);

  useEffect(() => {
    localStorage.setItem("raunit-ai-size", JSON.stringify(size));
  }, [size]);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (!hasWelcomed) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hi 👋 I'm Raunit's AI assistant. Ask me about his skills, projects, or experience!",
        },
      ]);
      setHasWelcomed(true);
    }
  };

  // 🔥 Native Drag Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - startX,
        y: e.clientY - startY,
      });
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    const updatedMessages = [
      ...messages,
      { role: "user" as const, content: userMessage },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "No response." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={handleToggle}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0px rgba(59,130,246,0.7)",
            "0 0 20px rgba(59,130,246,0.7)",
            "0 0 0px rgba(59,130,246,0.7)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🤖
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <Resizable
            size={size}
            onResizeStop={(e, direction, ref) => {
              setSize({
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              });
            }}
            minWidth={300}
            minHeight={400}
            maxWidth={600}
            maxHeight={700}
            style={{
              position: "fixed",
              left: position.x,
              top: position.y,
              zIndex: 50,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl flex flex-col"
            >
              {/* Header (Drag Handle) */}
              <div
                onMouseDown={handleMouseDown}
                className="p-4 border-b border-slate-700 flex justify-between items-center cursor-move select-none"
              >
                <h3 className="font-semibold text-white">AI Assistant</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-xl text-sm prose prose-invert ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-slate-700 text-slate-200 rounded-bl-none"
                      }`}
                    >
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex gap-1 items-center text-slate-400">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-300"></span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-slate-700 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 px-3 py-2 rounded-lg bg-slate-800 text-white text-sm outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 rounded-lg text-white text-sm hover:bg-blue-700 disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </motion.div>
          </Resizable>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
