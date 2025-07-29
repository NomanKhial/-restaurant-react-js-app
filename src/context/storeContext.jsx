import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/assets";
const AppContext = createContext(null)

export default function AppContextProvider ({children}) {

        const [cartCount, setCartCount] = useState({})

        function addToCart(itemId, name, ) {
            if (!cartCount[itemId]) {
                setCartCount(prev => ({...prev, [name]: `${name} X ${prev[itemId] ?? 1}`,  [itemId] : 1}))
            }else{
                setCartCount(prev => ({...prev, [name]: `${name} X ${prev[itemId] + 1}`, [itemId]: prev[itemId] + 1}))
            }
        }

        function removeFeomCart(itemId) {
            setCartCount(prev => ({...prev, [itemId]: prev[itemId] - 1}))
        }

    const store = {
            food_list,
            addToCart,
            removeFeomCart,
            cartCount,
            setCartCount,
    }
    return <AppContext.Provider value={store}>
        {children}
    </AppContext.Provider>
    
}

function useAppContext(){
    return useContext(AppContext)
}

export {useAppContext}