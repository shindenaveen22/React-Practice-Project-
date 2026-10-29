import { useEffect } from "react";
import { productList } from "../utility/data.js";
import ProductDetail from "./ProductDetail.jsx";



function ProductList ({selectcat,onupdate}){
const product = productList;

const selectCategory=selectcat;

const filteredProduct = selectCategory
    ? product.filter(item => item.category === Number(selectCategory))
    : product;

useEffect(() => {
    onupdate(filteredProduct.length);
}, [filteredProduct.length, onupdate]);
    return(<>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>productId</th>
                <th>productName</th>
                <th>price</th>
                <th>productCode</th>
                <th>category</th>
                <th>View</th>
            </tr>
        </thead>
        <tbody>
            {filteredProduct.map((prod)=>(
               <ProductDetail product={prod} key={prod.productId} />
            ))}
        </tbody>
    </table>
    
    
    </>)
}

export default ProductList;

 