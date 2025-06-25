import { Inria_Sans } from "next/font/google";

const inria_bold = Inria_Sans({
      weight: "700",
      subsets: ["latin"],
})

const inria_reg = Inria_Sans({
      weight: "300",
      subsets: ["latin"],
})

function TextBubble({user, content}: TextBubbleProps) {
      return (
            <div className={`bubble-wrapper ${user === 'you' ? 'bubble-right' : "bubble-left"}`}>
                  {user === '' ? (
                        <></>
                  ) : (
                        <h3 className={`${inria_bold.className} ${user === 'you' ? 'bubble-right' : 'bubble-left'}`}>{user === 'you' ? 'You' : 'Clark Le'}</h3>
                  )}
                  <div className={`bubble ${inria_reg.className}`}>
                        <p>{content}</p>
                  </div>
            </div>
      );
}

export default TextBubble