import { useState, useEffect } from "react";
import "./App.css";
import rawData from "./FishData.json";
import PageContainer from "./container/PageContainer/PageContainer";
import FishList from "./container/FishList/FishList";
import FishForm from "./container/FishForm/FishForm";
import Toggler from "./container/Toggler/Toggler";
import AquaNum from "./container/AquaNum/AquaNum";

function App() {
  const [listOfFish, setListOfFish] = useState(rawData.fish);
  // male ryby count
  const [smallFishCount, setSmallFishCount] = useState(0);
  //  velke ryby count
  const [bigFishCount, setBigFishCount] = useState(0);
  const [newFish, setNewFish] = useState({
    id:
      listOfFish.length > 0
        ? Math.max(...listOfFish.map((fish) => fish.id)) + 1
        : 1,
    name: "",
    size: "big",
  });

  useEffect(() => {
    // Výpočet počtu malých a velkých ryb při načtení stránky
    const initSmallFishCount = listOfFish.filter(
      (item) => item.size === "small"
    ).length;
    const initBigFishCount = listOfFish.filter(
      (item) => item.size === "big"
    ).length;
    setSmallFishCount(initSmallFishCount);
    setBigFishCount(initBigFishCount);
  }, [listOfFish]);

  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFish({
      ...newFish,
      [name]: value,
    });
  };

  // add  new fish
  const handleAdd = () => {
    setListOfFish((listOfFish) => {
      return [...listOfFish, newFish];
    });

    const newFishId = newFish.id + 1;

    const updatedFish = {
      id: newFishId,
      name: "",
      size: "big",
    };
    setNewFish(updatedFish);
  };

  const handleChoose = (source) => {
    switch (source) {
      case "list-of-fishes": {
        setActiveTab(1);
        break;
      }
      case "aquarium": {
        setActiveTab(2);
        break;
      }
      default:
        break;
    }
  };

  const handleDelete = (idToDelete) => {
    setListOfFish(listOfFish.filter((fish) => fish.id !== idToDelete));
  };

  useEffect(() => {
    console.log(newFish);
  }, [newFish]);
  return (
    <div className="App">
      <PageContainer>
        <Toggler active={activeTab} onChoose={handleChoose} />
        {activeTab === 1 && (
          <>
            <FishList data={listOfFish} onDelete={handleDelete} />
            <FishForm
              data={newFish}
              handleChange={handleChange}
              handleAdd={handleAdd}
            />
          </>
        )}
        {activeTab === 2 && (
          <>
            <AquaNum
              smallFishCount={smallFishCount}
              bigFishCount={bigFishCount}
            />
          </>
        )}
      </PageContainer>
    </div>
  );
}

export default App;
