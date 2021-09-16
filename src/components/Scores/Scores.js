import './Scores.css'

export function Scores({ player, score, color }) {
  return (
    <div className="scores-container">
      {Array.from({ length: 2 }, (_, index) => (
        <div key={index} className={`score score-player-${index + 1}`}>
          <p className="score-number">00</p>
          <p className="player">player {index + 1}</p>
        </div>
      ))}
    </div>
  )
}
