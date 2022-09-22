import { useState } from "react";
import { createContext } from "react";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [showsearch, setShowSearch] = useState();
  const [descriptioncolor, setDescriptionColor] = useState([]);
  return (
    <MovieContext.Provider
      value={{
        showsearch,
        setShowSearch,
        descriptioncolor,
        setDescriptionColor,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export { MovieContext, MovieProvider };
