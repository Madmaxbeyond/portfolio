import mconLogo from './assets/MCON.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://mlisle.wixsite.com/madisonlisle" target="_blank">
          <img src={mconLogo} className="logo" alt="Madison Lisle logo" />
        </a>
      </div>
      <h1>Madison Lisle <br></br> Frontend & Full-stack Software Engineer</h1>
      <br></br>
      <p className='secondary-txt'>My portfolio is currently under construction. To see my work & projects on a temporary site click the button below!</p>
      <br></br>
      <button>
        <a href='https://mlisle.wixsite.com/madisonlisle'>Temporary Portfolio Site</a>
      </button>
    </>
  )
}

export default App
