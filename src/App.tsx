import './App.css'

function App() {
  const teammates = [
    'Jose Pablo López',
    'Jesús Gutiérrez Casique',
    'Alexia García',
    'Paulina Méndez'
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>Bernardo Santiago Marín</h1>
      </header>
      
      <main className="main-content">
        <section className="project-section">
          <h2>Current Project</h2>
          <p className="project-name">Jalisco Cómo Vamos</p>
          
          <div className="team-section">
            <h3>Team Members</h3>
            <ul className="team-list">
              {teammates.map((teammate, index) => (
                <li key={index}>{teammate}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
