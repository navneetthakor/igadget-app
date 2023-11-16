
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Favourite from './components/Favourite'
import UserAccount from './components/UserAccount';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route exact path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route exact path='/prodpage' element={<ProductPage/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/fav' element={<Favourite/>}/>
        <Route exact path='/useracnt' element={<UserAccount/>}/>
    </Route>
    
  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
