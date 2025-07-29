import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favorite food here</h2>
        <p>
          "Food is our love language," or "Life's too short to eat bad food,"
          are great ways to express your appreciation for food. Other options
          include, "Taste the love in every bite," or "Eat good, feel good". You
          could also use phrases like "Mouth-watering," or "Flavorful" to
          describe the food itself.
        </p>
      <a href='#menu'><button>View Menu</button></a>
      </div>
    </div>
  );
}

export default Header;
