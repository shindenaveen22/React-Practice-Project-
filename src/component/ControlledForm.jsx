import { useState } from "react";
import { categoryList } from "../utility/data";
import { validateProductFrom } from "../utility/validation";



function ControlledFrom (){

    const category = categoryList;


    const productobj={
        productId:0,
        productName:"",
        price:"",
        productCode:"",
        category:"",
    }
    const[errors,setErrors]=useState({});
    const [product,setProduct]=useState(productobj);

    const onHandleChange =(e)=>{

        setProduct(prev=>({...prev,[e.target.name]:e.target.value}));
        if (e.target.name === "productName") {
            setErrors(validateProductFrom(e.target.name, e.target.value));
        }
     
    }
    
    const onHandleSubmit =(e)=>{
        e.preventDefault();
        const validationErrors = validateProductFrom("productName", product.productName);
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            alert('Product saved successfully' + JSON.stringify(product))
        console.log(product);
        
        }
        
    }




     return(<>
    <h4>This is Controlled form</h4>
    <div className="row">
        <div className="col-lg-6">
            <form action="" onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="">ProductId</label>
                    <input type="text" name="productId" id="" className="form-control" value={product.productId} onChange={onHandleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Product Name</label>
                    <input type="text" name="productName" id="" className="form-control" value={product.productName} onChange={onHandleChange} />
                    {errors && Object.hasOwn(errors, 'title') && (<span className="text-danger">{errors.title}</span>)}
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="text" name="price" id="" className="form-control" value={product.price} onChange={onHandleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">ProductCode</label>
                    <input type="text" name="productCode" id="" className="form-control" value={product.productCode} onChange={onHandleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Category</label>
                    <select name="category" id="" value={product.category} onChange={onHandleChange}>
                           <option value="">--Select</option>
                        {category.map((cat)=>(
                            <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                        ))}
                    </select>
                    <br /><br />
                 

                </div>
                <div className="form-group">
                    <label htmlFor=""></label>
                    <input type="submit" name="" id="" value="Submit" className="btn btn-secondary"/>
                    
                </div>
                
            </form>
        </div> 
    </div>
    
    </>)
}

export default ControlledFrom;