import { useEffect, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameController } from "phosphor-react";
import { GameBanner } from "./components/GameBanner";

import './styles/main.css';

import logoImg from '../src/assets/logo-nlw.svg';
import { Input } from "./components/Form/Input";


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
    fetch('http://localhost:3030/games')
      .then(response => response.json())
      .then(data => {
        setGames(data);
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

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black"> Post an Ad </Dialog.Title>

              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold"> What Game? </label>
                  <Input id="game" placeholder="Select the game that you want" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name"> Your name (or nickname) </label>
                  <Input id="name" placeholder="What are you called in the game?" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying"> How many years have you been playing? </label>
                    <Input id="yearsPlaying" type="number" placeholder="All right be 0" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord"> What your discord? </label>
                    <Input id="discord" type="text" placeholder="User#0000" />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">When do you play? </label>

                    <div className="grid grid-cols-4 gap-2">
                      <button
                        title="Sunday"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        S
                      </button>
                      <button
                        title="Monday"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        M
                      </button>
                      <button
                        title="Tuesday"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        T
                      </button>
                      <button
                        title="Wednesday"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        W
                      </button>
                      <button
                        title="Thursday"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        T
                      </button>
                      <button
                        title="Friday"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        S
                      </button>
                      <button
                        title="Saturday"
                        className="w-8 h-8 rounded bg-zinc-900"
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart"> What time of day? </label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hourStart" type="time" placeholder="To" />
                      <Input id="hourEnd" type="time" placeholder="Even" />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" />
                  I often connect to voice chat
                </div>

                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close
                    type="button"
                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                  >
                    Cancel
                  </Dialog.Close>
                  <button
                    type="submit"
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                  >
                    <GameController className="w-6 h-6" />
                    Find DUO
                  </button>
                </footer>
              </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
