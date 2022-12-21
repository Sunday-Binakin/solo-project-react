import React from 'react'

const Joke = () => {
  const [messages, setMessages] = React.useState(["a"])

  return (
    <div>
    {/* {
      messages.length > 0 && <h1>you have {messages.length} unread messages!</h1>
    } */}
      {/* <h1  >{!messages? "you have - unread messages!":"no new message"}</h1> */}
      {
        !messages? <h1>You're all caught up</h1>: <h1>you have {messages.length} unread {messages.length>1? "messages":"message"}!</h1>
      }
    </div>
  )
}

export default Joke