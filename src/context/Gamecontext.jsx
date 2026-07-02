import { createContext } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router";

export const GameDataContext = createContext();

const Gamecontext = ({children}) => {
    
    const [favourite, setFavourite] = useState([]);
 
    const addtoFav = (game) => {
        setFavourite(prev => {
            const exist = prev.find((item) => game.id === item.id)
            if (exist) return prev;
            else return [...prev, game];
        })
    }

    return (
        <GameDataContext.Provider value={{ favourite, addtoFav, setFavourite }}>
            {children}
        </GameDataContext.Provider>
    )
}

export default Gamecontext