import { UpdateFollower } from "react-mouse-follower"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Banner from "./components/Banner/Banner"
import BannerText from "./components/Banner/BannerText"


function App() {

  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>

      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5
        }}
      >
        <Services />
        <Banner />
        <BannerText />
      </UpdateFollower>
      
    </main>
  )
}

export default App
