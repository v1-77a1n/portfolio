'use client'

import Header from "./components/header";
import Footer from "./components/footer";
import { useContext, useState, useEffect } from "react";
import { MessagesContext } from "./components/contexts";
import TextBubble from "./components/textbubble";

export default function Home() {
      const { messages } = useContext(MessagesContext);
      const [msgCount, setMsgCount] = useState<number>(0);

      useEffect(() => {
            const wrapper = document.getElementById('messages-wrapper') as HTMLDivElement

            if(msgCount === messages.length) return;
            setTimeout(() => {
                  setMsgCount((prev: number) => prev + 1);
                  wrapper.scroll(0, wrapper.scrollHeight);
            }, 1000);
      }, [messages.length, msgCount])

  return (
      <>
            <Header />
            <div id="messages-wrapper">
                  {messages && messages.filter((message, index) => index <= msgCount).map((message, index) => (
                        <TextBubble key={index} user={message.user} content={message.content} />
                  ))}
            </div>
            <Footer />
      </>
  );
}
