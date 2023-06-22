import { useRef, useState, useEffect } from "react";
import MemeCard from "../components/MemeCard";
import { GET_10_WHOLESOME_MEMES_URL } from "../ts/constants";
import { dataLayerPush } from "../ts/dataLayer";

const Home = () => {
  const countRef = useRef(0);
  const [memes, setMemes] = useState([]);
  const [memesClickedList, setMemesClickedList] = useState<any[]>(
    JSON.parse(localStorage.getItem("memesClickedList")) || []
  );

  useEffect(() => {
    // countRef used for deduplicate pageview
    countRef.current += 1;
    if (countRef.current == 1) {
      dataLayerPush("pageView", "home");
    }
    const getMemes = async () => {
      const res = await fetch(GET_10_WHOLESOME_MEMES_URL);
      const data = await res.json();
      setMemes(data.memes);
    };
    getMemes();
  }, []);

  const handleClickMeme = (meme: any) => {
    const newMemesClickedList: any[] = [...memesClickedList, meme];
    dataLayerPush("memeClicked", meme);
    dataLayerPush("updateMemesClickedList", newMemesClickedList);
    localStorage.setItem(
      "memesClickedList",
      JSON.stringify(newMemesClickedList)
    );
    setMemesClickedList(newMemesClickedList);
  };

  return (
    <div>
      {memes.map((meme: any) => {
        return (
          <MemeCard
            key={meme.url}
            meme={meme}
            linkButtonText="Get Meme"
            onGetClickMeme={handleClickMeme}
          />
        );
      })}
    </div>
  );
};

export default Home;
