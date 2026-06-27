import { useState } from 'react'
import './CharacterCounter.css'

const CharacterCounter = () => {
  const [text, setText] = useState('')

  const characters = text.length
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length

  return (
    <div className="cc-component">
      <h2 className="cc-title">Assignment 1: Live Character Counter</h2>

      <textarea
        className="cc-textarea"
        rows={5}
        placeholder="Start typing here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Text: {text || '(empty)'}</p>
      <p>Characters: {characters}</p>
      <p>Words: {words}</p>
    </div>
  )
}

export default CharacterCounter
