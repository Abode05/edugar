import AskedUs from "./components/AskedUs/AskedUs"
import Brand from "./components/Brand/Brand"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/NavBar/Navbar"
import OverView from "./components/Overview/OverView"
import PopularCourse from "./components/PopularCourse/PopularCourse"
import SayClent from "./components/SaycCient/SayClent"
import TopCategory from "./components/TopCategory/TopCategory"
import Footer from "./components/Footer/Footer"


function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <OverView />
      <TopCategory />
      <PopularCourse />
      <AskedUs />
      <SayClent />
      <Brand />
      <Footer />
    
    </>
  )
}

export default App
