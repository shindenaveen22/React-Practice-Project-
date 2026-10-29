import { ErrorMessage, Field, Form, Formik } from "formik";
import { categoryList } from "../utility/data.js";
import * as Yup from 'yup';
import ProductService from "../utility/Product.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function FormikForm() {

    const initialProductForm = {
        productId: 0,
        productCode: "",
        productName: "",
        price: "",
        category: ""
    }

    const categories = categoryList;
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleSaveProduct = (frm) => {
        ProductService.addProduct(frm)
            .then(response => {
                if (response) {
                    alert('Product Saved successfully' + JSON.stringify(frm));
                    navigate('/product-list');
                } else {
                    setError("The product could not be saved.");
                }
            })
            .catch(() => {
                setError("Unable to save the product. Check the API URL and try again.");
            });
    }


    // const validateFn = (frm) => {
    //     let errors = {};
    //     let priceregex = /^\d+(\.\d{1,2})?$/;
    //     if(!frm.productCode){
    //         errors.productCode = "Product Code is mandatory"
    //     }
    //     if (frm.price) {
    //         if (!frm.price.length)
    //             errors.price = "Price is mandatory";
    //         else if (!priceregex.test(frm.price))
    //             errors.price = "Price should be a number";
    //     }

    //     return errors;
    // }

    const productValidationSchema = Yup.object({
        productId: Yup.number().min(0, 'Product Id is mandatory'),
        productCode: Yup.string().required('Product code is mandatory'),
        price: Yup.string()
            .required('Product Price is mandatory')
            .matches(/^\d+(\.\d{1,2})?$/, "Product Price is Invalid"),
        category: Yup.string().required('Category is mandatory')
            .notOneOf(["0"], 'Select a valid Category')
    })

    return (<>
        <h4>Add Product (Formik)</h4>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <div className="row">
            <div className="col-lg-6">
                <Formik initialValues={initialProductForm}
                    enableReinitialize={true}
                    onSubmit={(frm) => handleSaveProduct(frm)}
                    validationSchema={productValidationSchema}>
                    <Form>
                        {/* {frm => (
                        
                        <form onSubmit={frm.handleSubmit}> */}
                        <div className="form-group">
                            <label>Product Id</label>
                            <Field name="productId" className="form-control"></Field>

                            {/* <input type="text" className="form-control" name="productId" value={frm.value?.productId}
                                    onChange={frm.handleChange} onBlur={frm.handleBlur}></input>
                                {frm.touched && frm.errors.productId && <span className="text-danger">{frm.errors?.productId}</span>} */}
                        </div>
                        <div className="form-group">
                            <label>Product code</label>
                            <Field name="productCode" className="form-control"></Field>
                            <ErrorMessage className="text-danger" component="label" name="productCode"></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <Field name="productName" as="textarea" className="form-control"></Field>
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <Field name="price" className="form-control"></Field>
                            <ErrorMessage className="text-danger" component="label" name="price"></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <Field as="select" name="category" className="form-select">
                                <option value="0">--Select--</option>
                                {categories.map(cat => (
                                    <option value={cat.id} key={cat.id}>{cat.categoryName}</option>
                                ))}
                            </Field>
                            <ErrorMessage className="text-danger" component="label" name="category"></ErrorMessage>
                        </div>
                        <input type="submit" value="Save Product" className="btn btn-dark" />
                        {/* </form>
                        
                    )} */}
                    </Form>
                </Formik>
            </div>
        </div>
    </>)
}

export default FormikForm;