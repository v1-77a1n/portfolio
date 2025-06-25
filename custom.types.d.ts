interface ContextType {
      messages: MessageType[],
      setMessages: (messages: MessageType[]) => void
}

interface MessageType {
      user: string,
      content: string
}

interface TextBubbleProps {
      user: string,
      content: string
}

interface GetAnswerProps {
      query: string,
      messages: MessageType[],
      setMessages: (messages: MessageType[]) => void,
      setLoading: (loading: boolean) => void,
      setShow: (show: boolean) => void
}