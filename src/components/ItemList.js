import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handdleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItems(item));
    }
    
    return (
        <div>
             {items.map(((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left">
                        
                    <div className="flex justify-between">
                        <div className="w-9/12">
                            <span>{item.card.info.name} - ₹ </span>
                            <span>{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            <p className="text-xs ">{item.card.info.description}</p>
                        </div>
                       { item.card.info.imageId ? <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="p-1 mx-10 rounded-lg bg-black text-white shadow-lg" 
                                onClick={ () => handdleAddItem(item) }

                                >Add +</button>
                            </div>
                            <img alt="img" src={CDN_URL + item.card.info.imageId} className="w-15" />
                        </div> :
                        <div>
                        <button className="p-1 mx-10 rounded-lg bg-black text-white shadow-lg"
                            onClick={() => handdleAddItem(item)}>Add +</button>
                        </div> }
                    </div>
                    
                </div>
             )))}
        </div>
    )
}

export default ItemList;