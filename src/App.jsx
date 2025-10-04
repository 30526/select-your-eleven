import React, { Suspense, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import HeroSection from './components/HeroSection/HeroSection';

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}
const playerPromise = fetchPlayers()
const App = () => {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(600000)
  const [purchasePlayers, setPurchasePlayers] = useState([])

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <HeroSection></HeroSection>
      <div className='flex justify-between items-center mt-20 mb-5  max-w-[1200px] mx-auto
      px-4 md:px-0'>
        <h2 className='font-bold ml-2 text-3xl'>{toggle ? "Available Players" : `Selected Players (${purchasePlayers.length}/11)`}</h2>
        <div className='flex'>
          <button onClick={() => setToggle(true)}
            className={`btn border-r-0 rounded-l-xl rounded-r-none 
          ${toggle === true ? "bg-[#E7FE29]" : ""} font-semibold`}>
            Available</button>
          <button onClick={() => setToggle(false)}
            className={`btn border-l-0 rounded-r-xl rounded-l-none 
          ${toggle === false ? "bg-[#E7FE29]" : ""}`}>
            Selected({purchasePlayers.length})</button>
        </div>
      </div >
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-infinity loading-xl flex mx-auto"></span>}>
          <AvailablePlayers
            purchasePlayers={purchasePlayers}
            setPurchasePlayers={setPurchasePlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playerPromise={playerPromise}
          ></AvailablePlayers>
        </Suspense> : <SelectedPlayers
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          purchasePlayers={purchasePlayers}
          setPurchasePlayers={setPurchasePlayers}
          setToggle={setToggle}></SelectedPlayers>
      }


    </>
  );
};

export default App;