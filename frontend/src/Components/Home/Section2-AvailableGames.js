import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../SubComponents/Button";
import Game from "./Game";

const AvailableGames = (props) => {
  const [game_list,SetGame_list]=useState([]);
  const [loading,SetLoading]=useState(false);
  const get_game_list = async () => {
    try {
      const games_api = "https://aqueous-falls-70675.herokuapp.com/api/v1/collect/games/GamesAvailable";
    axios.get(games_api).then((response) => {
      if (response.status === 201) {
        SetGame_list(response.data.results);
       var games = {
         games:response.data.results
       };
        localStorage.setItem("games", JSON.stringify(games));
       
        SetLoading(true);
      }else{
        console.log(response.data.errors);
      }
    })
    } catch (error) {
      console.log(error);
    }
    
  };
useEffect (()=>{
  get_game_list()
}, []);
  return (
    
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-[50vw] h-[70vh] bg-gradient-to-b from-[#4609C3] to-[#0E063D] rounded-3xl p-20 text-white gap-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-extrabold">AVAILABLE GAMES</h1>
            <p className="text-lg ">We are constantly adding new games</p>
          </div>
        </div>
        <img src =""></img>
        

          {loading ? (<div className="flex items-center justify-center gap-4">{game_list.map((game) => (
            <Game key={game.title} title={game.title} image={game.image} />
          ))}</div>) : (<div className="flex items-center justify-center gap-4"><img className="" style={{maxWidth:"100px",maxHeight:"100px"}} src="https://cutewallpaper.org/24/loading-gif-png/loadinggifpng5-superior-lawn-care.png"></img></div>)}
          
        
        <Button name="VIEW ALL" />
      </div>
    </div>
  );
};

export default AvailableGames;
