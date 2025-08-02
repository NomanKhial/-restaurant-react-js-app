import Home from './Home/Home';
import Cart from './Cart/Cart';
import OrderSummary from './Placeorder/OrderSummary';
import MealDetails from '../components/MealDetails/MealDetails';

export const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/order', component: OrderSummary },
  {path: '/meal-details/:id', component: MealDetails},
];
