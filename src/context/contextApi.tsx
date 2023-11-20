import { fetchDataFromApi } from "../utils/api";
import React, { ReactNode, createContext, useEffect, useState } from "react";

type contextType = {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  searchResults: any
  setSearchResults: React.Dispatch<any>
  selectCategories: string
  setSelectCategories: React.Dispatch<React.SetStateAction<string>>
  mobileMenu: boolean
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
};
type AppContextProps = {
  children: ReactNode
};

export const Context = createContext({} as contextType);

export const AppContext = (props: AppContextProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<any>();
  const [selectCategories, setSelectCategories] = useState<string>("New");
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query: string) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
