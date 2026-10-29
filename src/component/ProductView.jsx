import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductService from "../utility/Product.service.js";
import { productList } from "../utility/data.js";

function ProductView() {
    const { id } = useParams();
    const location = useLocation();
    const stateProduct = location.state?.product;
    const routeProduct = stateProduct && String(stateProduct.productId) === id
        ? stateProduct
        : productList.find(product => String(product.productId) === id);
    const [apiResult, setApiResult] = useState(null);

    useEffect(() => {
        if (routeProduct) {
            return;
        }

        let isCurrent = true;
        ProductService.getAllProducts()
            .then(products => {
                if (!isCurrent) {
                    return;
                }

                const foundProduct = products.find(product => String(product.productId) === id);
                if (foundProduct) {
                    setApiResult({ id, product: foundProduct, error: "" });
                } else {
                    setApiResult({ id, product: null, error: "Product not found." });
                }
            })
            .catch(() => {
                if (isCurrent) {
                    setApiResult({
                        id,
                        product: null,
                        error: "Unable to load this product. Check the API URL and try again."
                    });
                }
            });

        return () => {
            isCurrent = false;
        };
    }, [id, routeProduct]);

    const currentApiResult = apiResult?.id === id ? apiResult : null;
    const product = routeProduct ?? currentApiResult?.product;
    const error = currentApiResult?.error;

    if (error) {
        return <div className="alert alert-danger" role="alert">{error}</div>;
    }

    if (!product) {
        return <div>Loading product...</div>;
    }

    return (
        <section>
            <h4>Product Details</h4>
            <dl className="row">
                <dt className="col-sm-3">Product Id</dt>
                <dd className="col-sm-9">{product.productId}</dd>
                <dt className="col-sm-3">Product Code</dt>
                <dd className="col-sm-9">{product.productCode}</dd>
                <dt className="col-sm-3">Product Name</dt>
                <dd className="col-sm-9">{product.productName}</dd>
                <dt className="col-sm-3">Price</dt>
                <dd className="col-sm-9">{product.price}</dd>
                <dt className="col-sm-3">Category</dt>
                <dd className="col-sm-9">{product.category}</dd>
            </dl>
        </section>
    );
}

export default ProductView;
