'use client'

import { createContext, useMemo, useState } from 'react'

const MessagesContext = createContext<ContextType>({
      messages: [],
      setMessages: () => {}
})

function ContextProvider({children}: {children: React.ReactNode}) {
      const [messages, setMessages] = useState<MessageType[]>([
            {user: 'me', content: 'Welcome to my portfolio. Click the bar below to ask me a question.'}
      ])

      const value = useMemo(() => ({messages, setMessages}), [messages])
      
  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  )
}

export { MessagesContext, ContextProvider }

