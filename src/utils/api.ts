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

const options: optionsType = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "cc43de1244mshd459ac0b91ee9bbp1825d0jsn81baab9c57c6",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url: string) => {
  const { data } = await axios.get(`${base_url}/${url}`, options);
  return data;
  // return {contents:"hello"}
};

