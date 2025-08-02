



function useLocalStorage() {
    
    function setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    function getLocalStorage(key) {
       return JSON.parse(localStorage.getItem(key)) || 'light'
    }
  return {
    setLocalStorage,
    getLocalStorage
  }
}

export default useLocalStorage