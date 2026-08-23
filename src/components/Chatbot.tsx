"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/fixpoint-data.json";

type Msg = { from: "bot" | "user"; text: string };

function getReply(input: string): string {
  const lower = input.toLowerCase();
  for (const k of data.chatbotReplies.keywords) {
    if (k.match.some((m) => lower.includes(m))) return k.reply;
  }
  return data.chatbotReplies.fallback;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: data.chatbotReplies.greeting },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Msg = { from: "user", text: input.trim() };
    const botMsg: Msg = { from: "bot", text: getReply(input) };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-80 max-h-[26rem] flex flex-col rounded-2xl border border-beige bg-offwhite shadow-soft overflow-hidden"
          >
            <div className="bg-burgundy text-cream px-4 py-3">
              <p className="font-semibold text-sm">FixPoint Assistant</p>
              <p className="text-xs text-cream/70">Usually replies instantly</p>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 scrollbar-thin">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    m.from === "bot"
                      ? "bg-beige/50 text-burgundy self-start"
                      : "bg-terracotta text-white self-end ml-auto"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <form onSubmit={send} className="flex border-t border-beige">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 text-sm font-semibold text-terracotta hover:text-burgundy transition-colors"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Toggle chatbot"
        className="w-14 h-14 rounded-full bg-burgundy text-cream flex items-center justify-center shadow-lg"
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-xl"
        >
          {open ? "✕" : "💬"}
        </motion.span>
      </motion.button>
    </div>
  );
}
