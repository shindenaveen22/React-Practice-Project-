import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
// import ProductView from "./ProductView";
 //import Databinding from "./Databinding";
// import DiscountOffer from "./DiscountOffer";
// import Search from "./Search";
// import UnControlledForm from "./UnControlledForm";


import { lazy, Suspense } from "react";
// import ControlledForm from "./ControlledForm";

const Databinding = lazy(() => import("./Databinding"));
const DiscountOffer = lazy(() => import("./DiscountOffer"));
const Search = lazy(() => import("./search"));
const ProductView = lazy(() => import("./ProductView"));
const UnControlledForm = lazy(() => import("./UnControlledForm"));
const ControlledForm = lazy(() => import("./ControlledForm"));
const FormikForm = lazy(() => import("./FormikForm"));
const Product = lazy(() => import("./Product"));

function Layout(){

    return (<>
    <BrowserRouter>
        <Navbar/>
        <Suspense fallback={<div>Loading......</div>}>
        <Routes>
          <Route path="/databinding" element={<Databinding/>}/>
          <Route path="/offer" element={<DiscountOffer/>}/>
          <Route path="/products" element={<Search/>}/>
          <Route path="/product-view/:id" element={<ProductView/>}/>
          <Route path="/product-list" element={<Product/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/uncontrolled" element={<UnControlledForm/>}/>
          <Route path="/controlled" element={<ControlledForm/>}/>
          <Route path="/formik" element={<FormikForm/>}/>
          {/* <Route path="/product-list" element={<Products/>}/> */}
          <Route path="*" element={<Databinding/>}/>
        </Routes>
        </Suspense>
    </BrowserRouter>
    </>)
}
export default Layout;