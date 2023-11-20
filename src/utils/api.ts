import axios from "axios";

const base_url: string = "https://youtube138.p.rapidapi.com";

type optionsType= {
  params: {
    hl: string;
    gl: string;
  };
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
};

const options:optionsType = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "c5cf0767b9msh4ac4b1f858db397p118362jsne3578fdbe066",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url: string) => {
  const { data } = await axios.get(`${base_url}/${url}`, options);
  return data;
  // return {contents:"hello"}
};

