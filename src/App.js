
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route exact path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
    </Route>
    
  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
