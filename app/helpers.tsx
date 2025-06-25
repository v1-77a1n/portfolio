export const questions: string[] = ['education', 'notable projects', 'work experience', 'skills', 'contact', 'fun facts']

const userMessages = new Map<string, string>([
      ['education', "What's your educational background?"],
      ['notable projects', "What are some of your notable projects?"],
      ['work experience', "Do you have any work experience?"],
      ['skills', "What are your skills?"],
      ['contact', "Where can I contact you?"],
      ['fun facts', "Tell me a fun fact about you."]
])

export function handleShow(show: boolean, setShow: (show: boolean) => void) {
      const wrapper = document.getElementById('question-wrapper') as HTMLDivElement
    if (show) {
        wrapper.classList.remove('show-wrapper');
        wrapper.classList.add('hide-wrapper');
    } else {
        wrapper.classList.remove('hide-wrapper');
        wrapper.classList.add('show-wrapper');
    }
    setShow(!show);
}

export const getAnswer = async({query, messages, setMessages, setLoading, setShow}: GetAnswerProps) => {
      setLoading(true)
      handleShow(true, setShow)

      const replies = [{ user: 'you', content: userMessages.get(query) as string }]

      const res = await fetch('/api/queries', {
            method: 'POST',
            body: JSON.stringify({
                  query: query
            })
      })

      const data = await res.json()

      if(typeof data.answer === 'string') {
            const answer = { user: 'me', content: data.answer }
            replies.push(answer)
      } else {
            data.answer.map((a: string, index: number) => {
                  if(index === 0) {
                        replies.push({ user: 'me', content: a})
                  } else {
                        replies.push({ user: '', content: a})
                  }
            })
      }
      console.log(replies)
      setMessages([...messages, ...replies])
      setLoading(false)
}