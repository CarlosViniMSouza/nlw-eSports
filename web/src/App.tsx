import { useEffect, useState } from "react";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";
import { CreateAdModal } from "./components/CreateAdModal";

import './styles/main.css';

import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../src/assets/logo-nlw.svg';
import axios from "axios";


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3030/games').then(response => {
        setGames(response.data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Your <span className="text-transparent bg-duo-gradient bg-clip-text"> DUO </span> be here.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal/>
      </Dialog.Root>
    </div>
  )
}

export default App
