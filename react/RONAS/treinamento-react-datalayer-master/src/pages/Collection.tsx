import { useEffect, useRef, useState } from "react";
import MemeCard from "../components/MemeCard";
import { dataLayerPush } from "../ts/dataLayer";

const Collection = () => {
  const countRef = useRef(0);
  const [memesCollection, setMemesCollection] = useState<any>([]);

  const getMemeCollection = () => {
    setMemesCollection(JSON.parse(localStorage.getItem("memesClickedList")));
  };

  const handleClickMeme = (meme: any) => {
    const newMemesCollection: any[] = JSON.parse(
      localStorage.getItem("memesClickedList")
    ).filter((item: any) => {
      return item.url != meme.url;
    });
    dataLayerPush("eraseMemeFromCollection", meme);
    dataLayerPush("updateMemesCollection", newMemesCollection);
    localStorage.setItem(
      "memesClickedList",
      JSON.stringify(newMemesCollection)
    );
    setMemesCollection(newMemesCollection);
  };

  useEffect(() => {
    countRef.current += 1;
    if (countRef.current == 1) {
      dataLayerPush("pageView", "collection");
    }

    if (localStorage.getItem("memesClickedList")) {
      getMemeCollection();
    }
  }, []);

  return (
    <div>
      {memesCollection &&
        memesCollection.map((meme: any) => {
          return (
            <MemeCard
              key={meme.url}
              meme={meme}
              linkButtonText="Erase Meme"
              onGetClickMeme={handleClickMeme}
            />
          );
        })}
    </div>
  );
};

export default Collection;
