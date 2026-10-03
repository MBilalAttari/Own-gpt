import React, { useEffect, useRef } from 'react'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatArea = ({ messages, handleSuggestion ,loading ,copiedIndex }) => {
    const messagesEndRef = useRef(null);
    useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);
  return (

<section className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6  py-25 min-h-screen overflow-auto">
  {messages.length === 0 ? (
    <div className="min-h-[65vh] flex flex-col items-center justify-start text-center">

      {/* Logo */}
      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-lg border border-gray-100">
        <span className="text-black text-2xl font-bold">M</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
        How can I help you?
      </h2>

      <p className="text-gray-500 mt-3 max-w-md text-sm sm:text-base leading-6">
        Ask me anything. I can help with coding, ideas,
        explanations and more.
      </p>

      {/* Suggestions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 w-full max-w-2xl">
        {[
          "Explain React hooks",
          "Write a JavaScript function",
          "Give me a project idea",
        ].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSuggestion(suggestion)}
            className="p-4 text-left rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 transition-all text-sm text-gray-700"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  ) : (
    <div className="space-y-8">
      {messages.map((message, index) => {
        const isUser = message.role === "user";

        return (
          <div
            key={index}
            className={`flex gap-3 sm:gap-4 ${
              isUser ? "justify-end" : "justify-start"
            }`}
          >
            {/* AI AVATAR */}
            {!isUser && (
              <div className="w-8 h-8 shrink-0 rounded-lg bg-black flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">M</span>
              </div>
            )}

            {/* MESSAGE */}
            <div
              className={`group relative max-w-[90%] sm:max-w-[78%] ${
                isUser ? "order-1" : ""
              }`}
            >
              <div
                className={`rounded-2xl px-4 py-3 ${
                  isUser
                    ? "bg-black text-white rounded-br-md"
                    : message.error
                    ? "bg-red-50 border border-red-200 text-red-600 rounded-bl-md"
                    : "bg-gray-100 border border-gray-200 text-gray-800 rounded-bl-md"
                }`}
              >
                {isUser ? (
                  <p className="text-sm leading-6 whitespace-pre-wrap wrap-break-words">
                    {message.content}
                  </p>
                ) : (
                  <div
                    className="
                      text-sm
                      leading-7
                      wrap-break-words

                      [&_h1]:text-2xl
                      [&_h1]:font-bold
                      [&_h1]:text-gray-900
                      [&_h1]:mt-5
                      [&_h1]:mb-4

                      [&_h2]:text-xl
                      [&_h2]:font-semibold
                      [&_h2]:text-gray-900
                      [&_h2]:mt-5
                      [&_h2]:mb-3

                      [&_h3]:text-lg
                      [&_h3]:font-semibold
                      [&_h3]:text-gray-900
                      [&_h3]:mt-4
                      [&_h3]:mb-2

                      [&_p]:mb-4
                      [&_p:last-child]:mb-0

                      [&_strong]:font-semibold
                      [&_strong]:text-gray-900

                      [&_em]:italic

                      [&_ul]:list-disc
                      [&_ul]:pl-6
                      [&_ul]:mb-4

                      [&_ol]:list-decimal
                      [&_ol]:pl-6
                      [&_ol]:mb-4

                      [&_li]:mb-1

                      [&_a]:text-blue-600
                      [&_a]:underline
                      [&_a]:underline-offset-2

                      [&_blockquote]:border-l-2
                      [&_blockquote]:border-gray-300
                      [&_blockquote]:pl-4
                      [&_blockquote]:text-gray-500
                      [&_blockquote]:italic
                      [&_blockquote]:my-4

                      [&_hr]:border-gray-200
                      [&_hr]:my-5

                      [&_table]:w-full
                      [&_table]:border-collapse
                      [&_table]:my-5
                      [&_table]:text-sm

                      [&_th]:border
                      [&_th]:border-gray-200
                      [&_th]:bg-gray-50
                      [&_th]:px-3
                      [&_th]:py-2
                      [&_th]:text-left
                      [&_th]:font-semibold
                      [&_th]:text-gray-900

                      [&_td]:border
                      [&_td]:border-gray-200
                      [&_td]:px-3
                      [&_td]:py-2

                      [&_code]:bg-gray-200
                      [&_code]:text-pink-600
                      [&_code]:px-1.5
                      [&_code]:py-0.5
                      [&_code]:rounded-md
                      [&_code]:text-[13px]

                      [&_pre]:bg-gray-900
                      [&_pre]:border
                      [&_pre]:border-gray-200
                      [&_pre]:rounded-xl
                      [&_pre]:p-4
                      [&_pre]:my-4
                      [&_pre]:overflow-x-auto

                      [&_pre_code]:bg-transparent
                      [&_pre_code]:text-gray-100
                      [&_pre_code]:p-0
                      [&_pre_code]:rounded-none
                      [&_pre_code]:text-[13px]
                    "
                    ref={messagesEndRef}
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>

              {/* COPY BUTTON */}
              {!isUser && !message.error && (
                <button
                  onClick={() => copyMessage(message.content, index)}
                  className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-gray-700 transition"
                >
                  {copiedIndex === index ? (
                    <>
                      <span>✓</span>
                      Copied
                    </>
                  ) : (
                    <>
                      <span>⧉</span>
                      Copy
                    </>
                  )}
                </button>
              )}
            </div>

            {/* USER AVATAR */}
            {isUser && (
              <div className="w-8 h-8 shrink-0 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-700">U</span>
              </div>
            )}
          </div>
        );
      })}

      {/* LOADING */}
      {loading && (
        <div className="flex gap-3 sm:gap-4 items-start">
          <div className="w-8 h-8 shrink-0 rounded-lg bg-black flex items-center justify-center">
            <span className="text-white text-xs font-bold">M</span>
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-2xl rounded-bl-md px-5 py-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      )}
    </div>
  )}
</section>
  )
}

export default ChatArea
