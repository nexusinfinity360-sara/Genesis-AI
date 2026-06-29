"use client";



import { useState } from "react";



type Message = {

  role: "user" | "assistant";

  content: string;

};



export default function ChatUI() {

  const [messages, setMessages] = useState<Message[]>([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);



  const sendMessage = async () => {

    if (!input.trim()) return;



    const userMessage: Message = {

      role: "user",

      content: input,

    };



    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setLoading(true);



    try {

      const res = await fetch("/api/chat", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({ message: input }),

      });



      const data = await res.json();



      const botMessage: Message = {

        role: "assistant",

        content: data.reply,

      };



      setMessages((prev) => [...prev, botMessage]);

    } catch (err) {

      setMessages((prev) => [

        ...prev,

        { role: "assistant", content: "Error aaya hai 😢" },

      ]);

    } finally {

      setLoading(false);

    }

  };



  return (

    <div style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>

      <h2>Genesis AI Chat 🚀</h2>



      <div

        style={{

          border: "1px solid #ccc",

          padding: 10,

          height: 400,

          overflowY: "auto",

          marginBottom: 10,

        }}

      >

        {messages.map((msg, i) => (

          <div

            key={i}

            style={{

              textAlign: msg.role === "user" ? "right" : "left",

              margin: "10px 0",

            }}

          >

            <span

              style={{

                display: "inline-block",

                padding: 10,

                borderRadius: 10,

                background: msg.role === "user" ? "#0070f3" : "#eee",

                color: msg.role === "user" ? "white" : "black",

                maxWidth: "80%",

              }}

            >

              {msg.content}

            </span>

          </div>

        ))}



        {loading && <p>Thinking... 🤖</p>}

      </div>



      <div style={{ display: "flex", gap: 10 }}>

        <input

          value={input}

          onChange={(e) => setInput(e.target.value)}

          onKeyDown={(e) => e.key === "Enter" && sendMessage()}

          placeholder="Type message..."

          style={{ flex: 1, padding: 10 }}

        />



        <button onClick={sendMessage} style={{ padding: 10 }}>

          Send

        </button>

      </div>

    </div>

  );

} 