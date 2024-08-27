import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {

    const { resData } = props;
    // console.log("hello344",props.resData);
    const { loggedInUser } = useContext(UserContext); 
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
      areaName,
    } = resData?.info;

    return (
        <div
          className="m-4 p-4 w-[260] rounded-lg hover:scale-95 linear duration-500"
        >
          <img className="rounded-lg w-[238] h-[158.66]" src={ CDN_URL + cloudinaryImageId } alt="Biryani" />
          <h3 className="font-bold  text-lg overflow-hidden whitespace-nowrap text-ellipsis">{name}</h3>
          <div className="flex items-center">
            <div className="w-5 h-5 text-white font text-xs bg-lime-600 rounded-full flex items-center justify-center"><FaStar /></div>
            <h4 className="ml-2">{avgRating} ⋅ {sla.slaString} </h4>
          </div>
          <h4 className="overflow-hidden whitespace-nowrap text-ellipsis">{cuisines.join(', ')}</h4>
          <h4 className="">{areaName}</h4>
          <h4>{loggedInUser}</h4>
        </div>
      );
};

// Higher order component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {

  return ( props ) => {
    console.log("hello",props.resData);
    
    const { resData } = props;
    const { header } = resData?.info?.aggregatedDiscountInfoV3;
    const { subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    
    return(
      <div className="relative  hover:scale-95 linear duration-500">
      <div >
        <p className="absolute top-32 py-2 left-10 font-extrabold text-xl text-white z-10 ">{header} {subHeader}</p>
      </div>
      <RestaurantCard {...props}/>
    </div>
      )
    
  }
}

export default RestaurantCard;