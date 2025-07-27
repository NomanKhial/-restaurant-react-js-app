import { menu_list } from "../../assets/assets";
import "./menu.css";
function Menu({catagory, setCatagory}) {
  return (
    <div className="menu">
      <h1>Explore our menu</h1>
      <p>
        {" "}
        "Food is our love language," or "Life's too short to eat bad food," are
        great ways to express your appreciation for food. Other options include,
        "Taste the love in every bite," or "Eat good, feel good". You could also
        use phrases like "Mouth-watering," or "Flavorful" to describe the food
        itself.
      </p>
      <div className="menu-list">
        {menu_list.map((menu, index) => (
          <div onClick={()=>{
             setCatagory(itemSelected => itemSelected === menu.menu_name ? 'All' : menu.menu_name)
             }} key={index}>
            <img className={catagory === menu.menu_name ? 'activeCatagory' : ''} src={menu.menu_image} />
            <p>{menu.menu_name}</p>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
}

export default Menu;
