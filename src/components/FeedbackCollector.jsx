import { useState } from 'react'
import './FeedbackCollector.css'

const OPTIONS = [
  { key: 'good',    label: 'Good',    emoji: '😊', color: '#2ECC71', textOn: '#FFFFFF', message: 'Thank you for your positive feedback!' },
  { key: 'average', label: 'Average', emoji: '😐', color: '#F1C40F', textOn: '#1E293B', message: "We'll try to improve." },
  { key: 'poor',    label: 'Poor',    emoji: '😞', color: '#E74C3C', textOn: '#FFFFFF', message: 'Sorry for the inconvenience.' },
]

const FeedbackCollector = () => {
  const [selected, setSelected] = useState(null)
  const [counts, setCounts] = useState({ good: 0, average: 0, poor: 0 })

  const total = counts.good + counts.average + counts.poor

  const handleSelect = (key) => {
    setSelected(key)
    setCounts((prev) => ({ ...prev, [key]: prev[key] + 1 }))
  }

  const current = OPTIONS.find((o) => o.key === selected)

  return (
    <div className="fb-component">
      <h2 className="fb-title">Assignment 5: Feedback Collector</h2>

      <div className="fb-buttons">
        {OPTIONS.map((opt) => {
          const isActive = selected === opt.key
          return (
            <button
              key={opt.key}
              type="button"
              className={`fb-btn${isActive ? ' fb-btn-active' : ''}`}
              onClick={() => handleSelect(opt.key)}
              style={{
                backgroundColor: isActive ? opt.color : 'transparent',
                borderColor: opt.color,
                color: isActive ? opt.textOn : opt.color,
                boxShadow: isActive ? `0 0 0 3px ${opt.color}33` : 'none',
              }}
            >
              {opt.emoji} {opt.label} ({counts[opt.key]})
            </button>
          )
        })}
      </div>

      <p>Selected Feedback: <strong>{selected ? current.label : '—'}</strong></p>
      <p>Total Feedback Given: <strong>{total}</strong></p>

      {current && <p className="fb-message">{current.message}</p>}
    </div>
  )
}

export default FeedbackCollector