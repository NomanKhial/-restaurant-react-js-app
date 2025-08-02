import { useEffect, useState } from "react"
import "./Search.css"
import { useAppContext } from "../../context/storeContext"
import { useNavigate } from "react-router"

function Search() {
  const { food_list, setSeachDisplay} = useAppContext()
  const [filterItem, setFilterItem] = useState([])
  const [showMeals, setShowMeals] = useState(true)
  const [inputText, setInputText] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    // show top 5 initially
    setFilterItem(food_list.slice(0, 5))
  }, [food_list])

  function filterMenuMeals(e) {
    e.stopPropagation()
    const value = e.target.value
    setInputText(value)

    if (value.trim() === '') {
      // show top 5 again
      setFilterItem(food_list.slice(0, 5))
    } else {
      // search by name
      const filtered = food_list.filter(meal =>
        meal.name.toLowerCase().includes(value.trim().toLowerCase())
      )
      setFilterItem(filtered)
    }
  }

  return (
    <div  className="search-container">
      <div className="search-box">
        <input
        className="search-input"
         id="input"
          value={inputText}
          onChange={filterMenuMeals}
          onFocus={(e) => {
            e.stopPropagation()
            if (inputText.trim() === '') {
              // on focus with empty input, show top 5
              setFilterItem(food_list.slice(0, 5))
            }
          }}
          placeholder="Search your favorite meals"
        />
      </div>

      {showMeals && (
        <div className="available-meals">
          {filterItem.length > 0 ? (
            <ul>
              {filterItem.map(({ name, _id }, i) => (
                <li onClick={()=> {
                  setInputText('')
                  setShowMeals(false)
                  setSeachDisplay(false)
                  navigate(`meal-details/${_id}`)
                  }} key={i}>{name}</li>
              ))}
            </ul>
          ) : (
            <p>No meals found 😢</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Search
