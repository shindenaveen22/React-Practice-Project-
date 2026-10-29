import { useCallback, useState } from "react";
import { categoryList } from "../utility/data.js"
import ProductList from "./ProductList";





function Search () {
 const category = categoryList;
 const [selectedCatergory,setSelectedCatergory]=useState('')
 const handleChange=(e)=>{
    setSelectedCatergory(e.target.value);
 }
 const [records,setRecords]=useState(0)
 const onNotify = useCallback((count) => {
    setRecords(count);
 }, [])



    return(<>
    <h4>This is category selection</h4>
    <select name="" id="" onChange={(e)=>handleChange(e)}>
        <option value="">--Select</option>
        {category.map((cat)=>(
            <option  key={cat.id} value={cat.id}>{cat.categoryName}</option>
        ))}
       
    </select>
     <i>{selectedCatergory}</i>

    <hr />
    <ProductList selectcat={selectedCatergory} onupdate={onNotify}/>

    <hr />
    <i className="text text-success">Products: {records}</i>
    
    
    </>)
}


export default Search;