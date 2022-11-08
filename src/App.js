import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Blank from "./pages/Blank";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Comments from "./pages/Comments";
import Make from "./pages/Make";
import Header from "./components/Header";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Blank />} />
            <Route path="/order" element={<Order />} />
            <Route path="/products" element={<Products />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/make" element={<Make />} />
            <Route path="/make/:id" element={<Product /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
