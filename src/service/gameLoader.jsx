
import { api } from "../config/apicall";
import { useContext } from "react";
import { GameDataContext } from "../context/Gamecontext.jsx";

const API_KEY = import.meta.env.VITE_API_KEY;



export const getgamedata = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || "";
  const page = Number(url.searchParams.get('page') || '1');
  const pageSize = 6;

  const params = {
    key: API_KEY,
    page,
    page_size: pageSize,
  };

  if (search) {
    params.search = search;
  }

  try {
    const response = await api.get('/games', { params });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getgamedetail = async ({ params }) => {
    
    try {
        const response = await api.get(`/games/${params.id}`, {
            params: {
                key:API_KEY,
            }
        })
        return response;
    } catch (error) {
        console.log(error.message)
    }
}