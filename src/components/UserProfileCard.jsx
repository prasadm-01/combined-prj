import { useState } from 'react'
import './UserProfileCard.css'

const PLAYERS = [
  { id: 'virat', name: 'Virat Kohli',    role: 'Batsman',             country: 'India' },
  { id: 'rohit', name: 'Rohit Sharma',   role: 'Batsman',             country: 'India' },
  { id: 'dhoni', name: 'MS Dhoni',       role: 'Wicketkeeper-Batsman', country: 'India' },
]

const UserProfileCard = () => {
  const [activeId, setActiveId] = useState(null)
  const player = PLAYERS.find((p) => p.id === activeId)

  return (
    <div className="upc-component">
      <h2 className="upc-title">Assignment 4: User Profile Card</h2>

      <div className="upc-buttons">
        {PLAYERS.map((p) => (
          <button
            key={p.id}
            type="button"
            className="upc-btn"
            onClick={() => setActiveId(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>

      {player ? (
        <div className="upc-card">
          <p><span className="upc-label">Name:</span> {player.name}</p>
          <p><span className="upc-label">Role:</span> {player.role}</p>
          <p><span className="upc-label">Country:</span> {player.country}</p>
        </div>
      ) : (
        <p className="upc-empty">Select a player above.</p>
      )}
    </div>
  )
}

export default UserProfileCard