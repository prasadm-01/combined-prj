import { useState } from 'react'
import './FavoriteColorPicker.css'

const COLORS = ['Red', 'Green', 'Blue', 'Yellow']
const COLOR_HEX = {
  Red: '#E74C3C',
  Green: '#2ECC71',
  Blue: '#3498DB',
  Yellow: '#F1C40F',
}
const COLOR_TEXT = {
  Red: '#FFFFFF',
  Green: '#FFFFFF',
  Blue: '#FFFFFF',
  Yellow: '#1E293B',
}

const FavoriteColorPicker = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="fcp-component">
      <h2 className="fcp-title">Assignment 3: Favorite Color Picker</h2>

      <p>Selected Color: <strong>{selected ?? '—'}</strong></p>

      <div
        className="fcp-box"
        style={
          selected
            ? {
                backgroundColor: COLOR_HEX[selected],
                borderColor: COLOR_HEX[selected],
                color: COLOR_TEXT[selected],
              }
            : undefined
        }
      >
        {selected ?? 'No color selected'}
      </div>

      <div className="fcp-buttons">
        {COLORS.map((color) => (
          <button
            key={color}
            type="button"
            className="fcp-btn"
            onClick={() => setSelected(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FavoriteColorPicker
