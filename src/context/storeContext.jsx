import { createContext, useContext } from "react";
import { food_list } from "../assets/assets";
export const AppContext = createContext(null)

export default function AppContextProvider ({children}) {

    const store = {
            food_list
    }
    return <AppContext.Provider value={store}>
        {children}
    </AppContext.Provider>
    
}

export function useAppContext(){
    return useContext(AppContext)
}