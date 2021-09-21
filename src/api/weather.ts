import axios from 'axios';
import { META_WEATHER_DOMAIN } from 'config';

const instance = axios.create({
  baseURL: `${META_WEATHER_DOMAIN}/api`,
});

export default instance;
