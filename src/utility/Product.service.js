import axios from "axios";
import { Config } from "../helpers/constants";

function getApiUrl(path) {
    const baseUrl = Config.BASEURL.trim().replace(/\/+$/, "");
    if (!baseUrl) {
        throw new Error("Set VITE_API_BASE_URL to the product API origin.");
    }

    return `${baseUrl}/ProductApi/${path}`;
}

async function getAllProducts() {
    const response = await axios.get(getApiUrl("getall"));
    if (!Array.isArray(response.data)) {
        throw new Error("The product API must return an array.");
    }

    return response.data;
}

const getAllProductsAsync = async () => {
    const response = await axios.get(getApiUrl("getall"));
    if (!Array.isArray(response.data)) {
        throw new Error("The product API must return an array.");
    }

    return response;
}

async function addProduct(productToAdd) {
    const response = await axios.post(getApiUrl("add"), productToAdd, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response.data;
}

async function deleteProduct(id) {
    const response = await axios.delete(getApiUrl(`delete/${id}`));
    return response.data;
}

const ProductService = {
    getAllProducts,
    addProduct,
    deleteProduct,
    getAllProductsAsync
}

export default ProductService;