import { useRef } from "react";




function UnControlledForm (){

    const onHandleSubmit =(e) => {
        e.preventDefault();
          const product={
        productId:productIdref.current.value,
        productName:productNameref.current.value,
        price:productpriceref.current.value,
        productCode:productcodeIdref.current.value,
        category:productcategory.current.value ,};
        alert('Form Submit' + JSON.stringify(product)); 
        
    }
    
     const productIdref=useRef();
     const productNameref=useRef();
     const productpriceref=useRef();
     const productcodeIdref=useRef();
     const productcategory=useRef();
     
 
   


    return(<>
    <h4>This is Uncontrolled form</h4>
    <div className="row">
        <div className="col-lg-6">
            <form action="" onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="">ProductId</label>
                    <input type="text" name="" id="" className="form-control" ref={productIdref} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Product Name</label>
                    <input type="text" name="" id="" className="form-control" ref={productNameref} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="text" name="" id="" className="form-control" ref={productpriceref}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">ProductCode</label>
                    <input type="text" name="" id="" className="form-control" ref={productcodeIdref} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Category</label>
                    <input type="text" name="" id="" className="form-control" ref={productcategory}/>

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


export default UnControlledForm;