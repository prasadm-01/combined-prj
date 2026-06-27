import CharacterCounter from './components/CharacterCounter.jsx'
import ProductQuantitySelector from './components/ProductQuantitySelector.jsx'
import FavoriteColorPicker from './components/FavoriteColorPicker.jsx'
import UserProfileCard from './components/UserProfileCard.jsx'
import FeedbackCollector from './components/FeedbackCollector.jsx'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">React useState Assignments</h1>
      </header>

      <div className="grid">
        <div className="card"><CharacterCounter /></div>
        <div className="card"><ProductQuantitySelector /></div>
        <div className="card"><FavoriteColorPicker /></div>
        <div className="card"><UserProfileCard /></div>
        <div className="card"><FeedbackCollector /></div>
      </div>
    </div>
  )
}

export default App