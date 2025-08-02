import Home from './Home/Home';
import Cart from './Cart/Cart';
import OrderSummary from './Placeorder/OrderSummary';
import MealDetails from '../components/MealDetails/MealDetails';
import NotFound from '../components/NotFound/NotFound';

export const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/order', component: OrderSummary },
  {path: '/meal-details/:id', component: MealDetails},
  {path: '*', component: NotFound}
];
