import React, { useState, useEffect } from "react";
import Norris from "../assets/Norris.jpg";
import axios from "axios";

const Joke = ({ joke, fetchJoke }) => {
  const [gettagline, setGetTagline] = useState(""); // This is the state for the tagline

  const tagline = {
    taglines: [
      "When Chuck Norris tells a joke, even the punchline is afraid.",
      "Generating Chuck Norris jokes faster than his roundhouse kicks.",
      "Chuck Norris doesn't need a punchline, his jokes hit you before you even hear them.",
      "Warning: May cause uncontrollable laughter and fear of Chuck Norris.",
      "Our Chuck Norris joke generator is so good, it can even make Chuck Norris laugh.",
      "When Chuck Norris jokes, even the crickets stop chirping to listen.",
      "Our Chuck Norris joke generator is like a roundhouse kick to the funny bone.",
      "If Chuck Norris had a joke generator, it would be ours.",
      "You don't choose the Chuck Norris joke, the Chuck Norris joke chooses you.",
      "Our Chuck Norris joke generator: the only thing scarier than a roundhouse kick to the face.",
    ],
  };

  useEffect(() => {
    const randomTagline = Math.floor(Math.random() * tagline.taglines.length);
    setGetTagline(tagline.taglines[randomTagline]);
  }, [gettagline]); // This is the effect for the tagline

  return (
    <div className='container mx-auto w-full items-center flex flex-wrap mt-5 justify-center'>
      <div className='max-w-sm w-full lg:max-w-full lg:flex'>
        <div
          className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
          style={{
            backgroundImage: `url(${Norris})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          title='Woman holding a mug'
        ></div>
        <div className='w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
          <div className='mb-8'>
            <div className='text-gray-900 font-bold text-xl mb-2'>
              {gettagline}
            </div>
            <p className='text-gray-700 text-base'>{joke}</p>
          </div>
        </div>
      </div>
      {/* <div className='font-semibold text-1xl text-slate-500'></div> */}
      <button
        onClick={fetchJoke}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out block mx-auto'
      >
        Get New Joke
      </button>
    </div>
  );
};

export default Joke;
