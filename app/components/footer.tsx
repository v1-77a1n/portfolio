"use client";

import { useContext, useState } from "react";
import { questions, handleShow, getAnswer } from "../helpers";
import { MessagesContext } from "./contexts";
import { Inria_Sans } from "next/font/google";

const inria_bold = Inria_Sans({
      weight: "700",
      subsets: ["latin"],
})

function Footer() {
      const { messages, setMessages } = useContext(MessagesContext);
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <footer>
      <div id="wrapper">
            <div id="question-wrapper">
                  {questions.map((q, index) => (<button key={index} type='button' className={`query-btn ${inria_bold.className}`} onClick={getAnswer.bind(null, {query: q, messages: messages, setMessages: setMessages, setLoading: setLoading, setShow: setShow})}>{q.charAt(0).toUpperCase() + q.slice(1)}</button>))}
            </div>
        <div id="query-bar" {...!loading ? {onClick: handleShow.bind(null, show, setShow)} : {}}>
          <p id="query" className={`${inria_bold.className}`}>Click here to ask a question.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
