import "./ScrollToTop.css"
function ScrollToTop() {
  return (
    <button onClick={()=>scrollTo({top: 0})}>ScrollToTop</button>
  )
}

export default ScrollToTop