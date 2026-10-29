import { useEffect, useState } from "react";

function getRandomOffer() {
    return (1000 + Math.random() * 500).toFixed(2);
}

function DiscountOffer() {
    const [offerPrice, setOfferPrice] = useState(getRandomOffer());
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    }


    useEffect(() => {
        if (!isChecked) {
            return;
        }

        const intervalId = setInterval(() => {
            setOfferPrice(getRandomOffer());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isChecked]);

    return (<>

        <div className="offer" style={{ backgroundColor:"yellow", fontSize: "30px"}}>
            <input type="checkbox" checked={isChecked} onChange={(e) => handleChange(e)} /> Please Select
            <h5>Offer Price</h5>
            <p>Price: INR <b id="price">{offerPrice}</b></p>
        </div>

    </>)
}

export default DiscountOffer;