'use client'
import { useState, useRef } from 'react';

export default function Home() {
  const [link, setLink]  = useState("");
  const inputEle = useRef();

  const handleClick = () => {
    setLink(inputEle.current.value);
  };

  return (
    <>
      <div className="px-6 py-4">
        <h1>Your Website</h1>
      </div>
      <main className="flex min-h-screen flex-col items-center p-6">
        <h1>Embedded Sign Task</h1>
        <iframe className="border-solid border-2 border-white w-3/4" style={{height: "85vh"}} src={link}></iframe>
      </main>
      <br />
      <label htmlFor="link_input">Sign Link: </label>
      <input id="link_input" className="text-black" ref={inputEle} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
