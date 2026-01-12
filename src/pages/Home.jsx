import { useEffect } from 'react'
import CoinTable from '../components/CoinTable/CoinTable.jsx'
// import NavBar from '../components/Navbar/Navbar.jsx'
import Banner from '../components/Banner/Banner.jsx'

function Home() {

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "forest")
  }, [])

  return (
    
    <>
      
      <Banner />
      <CoinTable/>
    </>
  )
}

export default Home;
