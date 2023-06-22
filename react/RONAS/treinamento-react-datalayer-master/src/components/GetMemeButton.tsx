import React from "react";

interface Props {
  linkButtonText: string;
  meme: any;
}
let memesSalvos: any = [];

const GetMemeButton = ({ meme, linkButtonText }: Props) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        memesSalvos.push(meme);
        console.log(memesSalvos);
      }}
    >
      {linkButtonText}
    </button>
  );
};

export default GetMemeButton;
