import "./ScrollToTop.css"
function ScrollToTop() {
  return (
    <button className="scroll-to-top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
      ↑
    </button>
  );
}

export default ScrollToTop;