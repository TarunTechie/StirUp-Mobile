import axios from 'axios';
import {SPOON_API} from "@env"

const spoon = axios.create({
  baseURL: 'https://api.spoonacular.com/',
  headers: {
    'x-api-key':SPOON_API ,
    'Content-Type': 'application/json',
  },
});

export default spoon;