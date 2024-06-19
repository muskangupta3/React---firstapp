import { createContext, useContext, useState } from "react";


const ThemeContext = createContext(undefined);



export const ThemeProvider = ({ children }) => {
    const theme = useState({
        theme: "dark",
        toggleTheme: function () {
            if (theme == "dark") {
                theme = "light";
            }
            else {
                theme = "dark";
            }
            console.log('Toggles theme'+theme);
        }
    })
    return <ThemeContext.Provider value = {{theme}}></ThemeContext.Provider>
};

export const useTheme = () => useContext(ThemeContext);
// export const useTheme = () => ({ theme: "light" });





