import {useState} from 'react'


function Databinding() {

const name = "Naveen Kumar Shinde";
const [fullName,setFullName] = useState('Naveen Sindhe');

const handleChange = (e) => {
    setFullName(e.target.value);
}
const handleSubmit = (e) => {
    const button = e.currentTarget;
    button.value = "Clicked me";
    button.style.backgroundColor = "red";
    setTimeout(() => {
        button.value = "Click Me";
        button.style.backgroundColor = "royalblue";
        setFullName("");
    }, 3000);
}

    return(<>
    
    <h4>It is databinding page </h4>
    <input type="text" name="" id="" placeholder="Naveen Kumar Shinde" onChange={handleChange} />
    <hr />  
    <i>{name}</i>

    <hr />
     
    <input type="text" name="" id="" value={fullName} onChange={handleChange} />
    <hr /> <i>{fullName}</i>
    <hr />
     <input type="submit" className='btn btn-primary' value="Click me " onClick={handleSubmit} />
    
    
    </>)
}
    


export default Databinding;