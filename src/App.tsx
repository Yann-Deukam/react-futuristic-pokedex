import Footer from "./sections/Footer"
import Navbar from "./sections/Navbar"
import Wrapper from "./sections/Wrapper"
import background1 from "./assets/pokemonbg.jpeg"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Search from "./pages/Search"
import MyList from "./pages/MyList"
import About from "./pages/About"
import Pokemon from "./pages/Pokemon"
import Compare from "./pages/Compare"

const WrappedSearch = Wrapper(Search)
const WrappedMyList = Wrapper(MyList)
const WrappedAbout = Wrapper(About)
const WrappedPokemon = Wrapper(Pokemon)
const WrappedCompare = Wrapper(Compare)

const App = () => {
  return (
    <>
      <div
        className="main bg-cover -z-[1]"
        style={{ backgroundImage: `url(${background1})`, minHeight: "100vh" }}
      >
        <div className="main-container ">
          <BrowserRouter>
            <div className="app">
              <Navbar />
              <Routes>
                <Route element={<WrappedSearch />} path="/search" />
                <Route element={<WrappedMyList />} path="/list" />
                <Route element={<WrappedAbout />} path="/about" />
                <Route element={<WrappedCompare />} path="/compare" />
                <Route element={<WrappedPokemon />} path="/pokemon/:id" />
                <Route element={<Navigate to="pokemon/1" />} path="*" />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
