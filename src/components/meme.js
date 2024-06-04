import React from "react";
import MemesData from "../memesData";
import memesData from "../memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState(
  //   "https://i.imgflip.com/30b1gx.jpg"
  // );

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memeArray = MemesData.data.memes;
    const randomArray = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomArray].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}
