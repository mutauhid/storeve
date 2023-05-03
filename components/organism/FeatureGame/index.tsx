import ListGames from "@/components/molecules/Feature";
import { GameItemsTypes } from "@/services/DataTypes";
import { getFeaturedGame } from "@/services/player";
import React, { useCallback, useEffect, useState } from "react";

const FeatureGame = () => {
  const [gameList, setGameList] = useState([]);

  const getFeaturedGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeaturedGameList();
  }, []);

  return (
    <>
      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br /> Games This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            {gameList.map((game: GameItemsTypes) => [
              <ListGames
                key={game._id}
                image={`${game.thumbnail}`}
                title={game.name}
                category={game.category.name}
                id={game._id}
              />,
            ])}
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default FeatureGame;
