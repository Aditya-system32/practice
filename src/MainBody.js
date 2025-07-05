import { useState } from "react";
import { restrauntList } from "./constant";

const CuisineList = ({ name }) => {
  return <h3 syle={{ padding: "0 4px" }}>{name},</h3>;
};

const RestaurantCard = ({ info, distance }) => {
  return (
    <div className="card-container">
      <img src={info?.image.url} alt="restraunt" className="restraunt-logo" />
      <h2>{info?.name}</h2>
      <div className="cuisine-container">
        {info.cuisine.map((res, index) => {
          return <CuisineList key={index} {...res} />;
        })}
      </div>
      <h3>{distance}</h3>
    </div>
  );
};

const MainBody = () => {
  const [searchBox, setSearchBox] = useState("");
  const [modifiedData, setModifiedData] = useState(restrauntList);
  const handleSearch = () => {
    let temp = modifiedData.filter((data) =>
      data.info.name.toLowerCase().includes(searchBox.toLowerCase())
    );
    setModifiedData([...temp]);
  };

  const handleInputChange = (e) => {
    setSearchBox(e.target.value)
    if(e.target.value === ""){
        setModifiedData([...restrauntList])
    }
  }
  
  return (
    <>
      <input
        placeholder="search"
        value={searchBox}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="mainbody-container">
         {modifiedData.map((restaurant) => {
              return (
                <RestaurantCard key={restaurant.info.resId} {...restaurant} />
              );
            })}
      </div>
    </>
  );
};

export default MainBody;
