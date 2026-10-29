import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../utility/Product.service.js";

function Product() {

    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        ProductService.getAllProducts()
            .then(resp => {
                setProducts(resp);
            })
            .catch(() => {
                setError("Unable to load products. Check the API URL and try again.");
            });
    }, []);

    const deleteProduct = (id) => {
        let confirmDelete = confirm('Do you wish to delete?');

        if (confirmDelete) {
            ProductService.deleteProduct(id)
                .then(resp => {
                    if (resp) {
                        setMessage('Product is deleted');
                        setProducts(currentProducts =>
                            currentProducts.filter(product => product.productId !== id)
                        );

                        setTimeout(() => {
                            setMessage("");
                        }, 1000);
                    } else {
                        setError("The product was not deleted.");
                    }
                })
                .catch(() => {
                    setError("Unable to delete the product. Please try again.");
                });
        }
    }

    return (<>
        <h4>Product List</h4>
        {message && (<div className="alert alert-info text-center">{message}</div>)}
        {error && (<div className="alert alert-danger" role="alert">{error}</div>)}
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>View</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map(prod => (
                    <tr key={prod.productId}>
                        <td>{prod.productId}</td>
                        <td>{prod.productCode}</td>
                        <td>{prod.productName}</td>
                        <td>{prod.price}</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate(`/product-view/${prod.productId}`, { state: { product: prod } })}
                            >
                                View
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => deleteProduct(prod.productId)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>);
}

export default Product;