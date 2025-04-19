import React from 'react'
import SearchBar from './Components/SearchBar'
import SecondBar from './Components/SecondBar'
import Slider from './Components/Slider'
import bg_wallpaper from './assets/bg_wallpaper.jpg'
import Container from './Components/Container'
import Showcases from './Components/Showcases'

const App = () => {
  
  React.useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <div className="relative">
      <img 
        src={bg_wallpaper} 
        alt="background-wallpaper" 
        className="absolute top-0 left-0 w-full h-[100vh] object-cover z-0"
      />
      <div className="relative z-10">
        <SearchBar />
        <SecondBar />
        <Slider />
        <Showcases />
        <Container />
      </div>
    </div>
  )
}

export default App;
