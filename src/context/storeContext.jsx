import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/assets";
const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const [cartCount, setCartCount] = useState({});
  const [mode, setMode] = useState('light')
  const [searchDisplay, setSeachDisplay] = useState(false)
  const [mobileMenu, setMobileMennu] = useState(false)

  function addToCart(itemId, name) {
    if (!cartCount[itemId]) {
      setCartCount((prev) => ({
        ...prev,
        [name]: `${name} X ${prev[itemId] ?? 1}`,
        [itemId]: 1,
      }));
    } else {
      setCartCount((prev) => ({
        ...prev,
        [name]: `${name} X ${prev[itemId] + 1}`,
        [itemId]: prev[itemId] + 1,
      }));
    }
  }

  function removeFeomCart(itemId) {
    setCartCount((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function getTotal() {
    let totalAmount = 0;
    for (const item in cartCount) {
      if (cartCount[item] > 0) {
        let itemInfo = food_list.find((product) => product._id == item);
        totalAmount += itemInfo.price * cartCount[item];
      }
    }
    return totalAmount 
  }
  const store = {
    food_list,
    addToCart,
    removeFeomCart,
    cartCount,
    setCartCount,
    getTotal,
    searchDisplay,
    setSeachDisplay,
    mode, setMode,
    mobileMenu, setMobileMennu
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

function useAppContext() {
  return useContext(AppContext);
}

export { useAppContext };
 