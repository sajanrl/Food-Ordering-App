import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/userContext";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardOffer = withPromotedLabel(RestaurantCard);


    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

      setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false) 
    return (
      <h1>You are Offline. Please check your internet connection.</h1>
    );


    const {loggedInUser, setUserName} = useContext(UserContext); 

    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
      <div className="body px-28">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" 
            className="border border-solid border-black" 
            value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}/> 
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase() )
              );

              setFilteredRestaurants(filteredRestaurant);
            }}>Search</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
          <button 
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg" 
            onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    res => res.info.avgRating > 4.2
                );
                setListOfRestaurant(filteredList);
                }}> Top Rated Restaurant</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <label > UserName : </label>
            <input 
              className="border border-black p-2 h-6 ml-2 outline-none"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
            
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant) => (
            <Link 
            key={restaurant.info.id} 
            to={"/restaurants/"+restaurant.info.id}> 
                                                          {/* // if the restaurant is promoted then add a promoted label to it */}
               { restaurant?.info?.aggregatedDiscountInfoV3?.header ? ( <RestaurantCardOffer resData={restaurant} /> ) : ( <RestaurantCard resData={restaurant} /> ) } 

            </Link>
          ))};
        </div>
      </div>
    );
};

export default Body;