interface Props {
  meme: any;
  linkButtonText: string;
  onGetClickMeme: (meme: any) => void;
}

const MemeCard = ({ meme, linkButtonText, onGetClickMeme }: Props) => {
  return (
    <div id="memeCard">
      <img
        src={meme.url}
        key={meme.url}
        className="rounded mx-auto d-block"
      ></img>
      <p>{meme.title}</p>
      <button
        onClick={() => {
          onGetClickMeme(meme);
        }}
      >
        {linkButtonText}
      </button>
    </div>
  );
};

export default MemeCard;
