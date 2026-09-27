"use client";
import ChatArea from "@/Components/ChatArea";
import HeartDesign from "@/Components/HeartDesign";
import Input from "@/Components/Input";
import Navbar from "@/Components/Navbar";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const page = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
          error: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyMessage = async (content, index) => {
    try {
      await navigator.clipboard.writeText(content);

      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleSuggestion = (suggestion) => {
    setInput(suggestion);
  };
  return (
    <div className="relative z-1000 min-h-screen w-auto bg-gray-200 overflow-y-auto overflow-x-hidden">
      <Navbar />
      <ChatArea
        messages={messages}
        handleSuggestion={handleSuggestion}
        loading={loading}
        copiedIndex={copiedIndex}
      />

      <Input
        setInput={setInput}
        input={input}
        sendMessage={sendMessage}
        messages={messages}
      />

      <HeartDesign loading={loading} messages={messages} />
      {!messages.length == 0 && (
        <HeartDesign loading={loading} messages={messages} />
      )}
    </div>
  );
};

export default page;
