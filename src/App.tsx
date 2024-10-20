import Footer from "./sections/Footer"
import Navbar from "./sections/Navbar"
import Wrapper from "./sections/Wrapper"

const App = () => {
  return (
    <>
      <div className="main-container">
        <div className="app">
          <Navbar />
          <Wrapper />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
