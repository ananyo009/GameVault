import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Star } from "lucide-react";
import { GameDataContext } from '../context/Gamecontext';
import { useState } from 'react';

const Carddetail = () => {

  const data = useLoaderData()
  const result = data.data;
  console.log(result)

    const [done, setdone] = useState(false)

  const {addtoFav} = useContext(GameDataContext)

    const params = useParams();
  console.log(params);
  
  function handleAddToFavorites(result) {
    addtoFav(result);
    setdone(true)
    if (done) {
      setdone(false)
    }

  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-12 shadow-2xl">
        <img
          className="w-full h-full object-cover"
          alt="Stunning cinematic game environment landscape"
          src={result.background_image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase rounded tracking-wider">
                Editor's Choice
              </span>
              <div className="flex items-center gap-1 text-yellow-400">
                <span className="material-symbols-outlined fill-icon text-sm">
                  star
                </span>
                <span className="text-sm font-semibold text-white">4.9</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              {result.name}
            </h1>
            <p className="text-slate-300 mt-2 font-medium">
              {result.publishers[0].name} • {result.released}
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2">
              <span className="material-symbols-outlined fill-icon">
                <ShoppingCart />
              </span>
              Buy Now
            </button>
            <button onClick={()=>handleAddToFavorites(result)} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-3 px-6 rounded-xl transition-all border border-white/10 flex items-center gap-2 cursor-pointer active:scale-96">
              <span className="material-symbols-outlined">
                {" "}
                {done ? <Heart color="red" /> : <Heart />}
              </span>
              Add to Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* About the Game Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                description
              </span>
              About the Game
            </h2>
            <div className="max-w-none text-slate-400 leading-relaxed space-y-4">
              <p>{result.description_raw}</p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="material-symbols-outlined text-primary mb-2 block">
                devices
              </span>
              <p className="text-xs text-slate-500 font-medium">Platforms</p>
              <div className="flex flex-wrap gap-3">
                {result.parent_platforms.map((item) => {
                  return (
                    <p className="text-sm font-bold ">{item.platform.name}</p>
                  );
                })}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="material-symbols-outlined text-primary mb-2 block">
                category
              </span>
              <p className="text-xs text-slate-500 font-medium">Genre</p>
              <div className="flex flex-wrap gap-3">
                {result.genres.map((item) => {
                  return <p className="text-sm font-bold ">{item.name}</p>;
                })}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="material-symbols-outlined text-primary mb-2 block">
                group
              </span>
              <p className="text-xs text-slate-500 font-medium">Players</p>
              <p className="text-sm font-bold">Single-player</p>
            </div>
          </section>

          {/* Media Gallery */}
          <section>
            <h2 className="text-xl font-bold mb-6">Media Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden aspect-video shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  alt="In-game screenshot showing futuristic city streets"
                  src={result.background_image_additional}
                />
              </div>
              <div className="rounded-xl overflow-hidden aspect-video shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  alt="High-tech interior game environment shot"
                  src={result.background_image_additional}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-8">
          {/* Player Reviews */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-bold mb-6">Player Reviews</h3>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-black text-primary">4.9</div>
              <div>
                <div className="flex text-primary">
                  <span className="material-symbols-outlined fill-icon">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined fill-icon">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined fill-icon">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined fill-icon">
                    <Star />
                  </span>
                  <span className="material-symbols-outlined fill-icon">
                  </span>
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  {result.ratings_count} reviews
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-[20px_1fr_40px] items-center gap-4">
                <span className="text-xs font-bold">5</span>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[90%] rounded-full"></div>
                </div>
                <span className="text-xs text-slate-500 text-right">90%</span>
              </div>
              <div className="grid grid-cols-[20px_1fr_40px] items-center gap-4">
                <span className="text-xs font-bold">4</span>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[6%] rounded-full"></div>
                </div>
                <span className="text-xs text-slate-500 text-right">6%</span>
              </div>
              <div className="grid grid-cols-[20px_1fr_40px] items-center gap-4">
                <span className="text-xs font-bold">3</span>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[2%] rounded-full"></div>
                </div>
                <span className="text-xs text-slate-500 text-right">2%</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-lg font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-slate-800 text-xs font-semibold rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                RPG
              </span>
              {result.tags.map((item) => {
                return (
                  <span className="px-3 py-1.5 bg-slate-800 text-xs font-semibold rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* System Requirements */}
          <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-3 mb-2 text-primary">
              <span className="material-symbols-outlined">info</span>
              <h3 className="font-bold">System Requirements</h3>
            </div>
            <p className="text-sm text-slate-400">
              Requires a 64-bit processor and operating system. Recommended RTX
              30-series for Ray Tracing.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Carddetail