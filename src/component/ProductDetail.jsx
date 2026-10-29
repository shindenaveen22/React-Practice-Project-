import { useNavigate } from "react-router-dom";

function ProductDetail ({product}){
    const navigate = useNavigate();
    const handleChange = () => {
        navigate(`/product-view/${product.productId}`, { state: { product } });
    }

    return(<>
     <tr >
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                    <td>{product.productCode}</td>
                    <td>{product.category}</td>
                    <td>
                        <input type="button" className="btn btn-secondary" value="View" onClick={handleChange}/>
                    </td>
                </tr>

               
    

    </>)
}


export default ProductDetail;