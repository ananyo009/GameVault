import axios from 'axios'

const API_KEY = '';

export const api = axios.create({
  baseURL: `https://api.rawg.io/api`,
});

