import react from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {createBrowserRouter,RouterProvider,Outlet,ScrollRestoration} from 'react-router-dom';
import Cart from "./pages/Cart";
import { ProductsData } from "./api/Api";
import Product from "./components/Product";

const LayOut = () => {
  return (
     <div>
        <Header/>
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
     </div>
  )
};

const  router = createBrowserRouter( [
  {
    path: '/',
    element : <LayOut/>,
    children : [
       {
        path : '/',
        element : <Home/>,
        loader: ProductsData,
       },

       {
        path : '/product/:id',
        element: <Product/>
      },

       {
          path : '/cart',
          element : <Cart/>,
       },
    ]

  }
])

function App() {
  return (
    <div className="App font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
