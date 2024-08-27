import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex1,setShowIndex}) => {
    // // console.log(data);
    // const [showItems, setShowItems] = useState(false);


 
    const handleClick = () => {
        setShowIndex1();

        if(showItems)
        {
             setShowIndex(null); 
        }

        
    }

    return (
        <div>
            {/* Header */}

            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 cursor-pointer">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span className="w-14 ">⌄</span>
                </div>
                { showItems && <ItemList items={data.itemCards} /> }
                
            </div>

        </div>
    )
}

export default RestaurantCategory;