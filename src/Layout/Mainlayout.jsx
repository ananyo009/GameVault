import React, { useEffect } from 'react'
import { Link, NavLink, Outlet, useSearchParams } from 'react-router'
import { Gamepad2 } from "lucide-react";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import { useState } from 'react';


const Mainlayout = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (value) {
          params.set("search", value);
        } else {
          params.delete("search");
        }

        params.set("page", params.get("page") || "1");
        return params;
      });
    }, 700);

    return () => clearTimeout(timer);
  }, [value, setSearchParams]);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white overflow-y-auto scrollbar-none">
      <nav className="h-25 w-full flex items-center gap-10 bg-inherit p-5 ">
        <div className="w-[20%] flex items-center gap-5">
          <Gamepad2 size={100} />
          <h1 className="text-3xl">GamersVault</h1>
        </div>
        <div className=" w-[30%] text-xl flex gap-10 ">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#3b82f6" : "#9ca3af",
              fontWeight: isActive ? "bold" : "normal",
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#3b82f6" : "#9ca3af",
              fontWeight: isActive ? "bold" : "normal",
            })}
            to="/games"
          >
            games
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#3b82f6" : "#9ca3af",
              fontWeight: isActive ? "bold" : "normal",
            })}
            to="/favourites"
          >
            favourites
          </NavLink>
        </div>
        <div className="w-[40%] flex items-center justify-end rounded-md gap-5">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Search"
            className="border px-4 py-2"
          />
          <button>
            <Search />
          </button>
          <User />
        </div>
      </nav>
      <div className="w-full border border-gray-500 mb-5"></div>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-slate-800 mt-20 bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-1 rounded">
                  <span className="material-symbols-outlined text-white text-xl">
                    {" "}
                    <Gamepad2 size={30} />
                  </span>
                </div>
                <span className="text-slate-100 text-lg font-bold tracking-tight">
                  GameVault
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                The ultimate destination for game discovery and library
                management. Built for gamers, by gamers.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">
                Explore
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                    href="#"
                  >
                    Top Rated
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                    href="#"
                  >
                    New Releases
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                    href="#"
                  >
                    Indie Gems
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">
                Support
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                    href="#"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                    href="#"
                  >
                    Safety Center
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                    href="#"
                  >
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-500 hover:text-primary transition-colors"
                    href="#"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">© made by Ananyo Mitra.</p>
            <div className="flex gap-6">
              <a
                className="text-slate-500 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  <Link to="https://github.com/ananyo009">github</Link>
                </span>
              </a>
              <a
                className="text-slate-500 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  <Link to="https://www.linkedin.com/in/ananyo-mitra-993560280/">
                    linkedin
                  </Link>
                </span>
              </a>
              <a
                className="text-slate-500 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  public
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Mainlayout