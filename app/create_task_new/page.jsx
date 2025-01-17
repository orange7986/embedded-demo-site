'use client'
import Script from 'next/script'
import { useRef } from 'react';

export default function Home() {
  const inputEle = useRef();

  const initial = () => {
    if (window.dottedSign) {
       // Prepare the container where the embedded signing will be displayed
       const embedContainer = document.getElementById("embed-container");

       // Initialize the embedded signing
       window.dottedSign.open(embedContainer, {
         token: inputEle.current.value,
         type: window.dottedSign.embedTypes.create,
       });

       // Set language after the document content is loaded
       window.dottedSign.eventListener.onLoad = () => {
         window.dottedSign.setLanguage("zh-tw");
         window.dottedSign.hideElement(
           window.dottedSign.elementsId.createLabels,
         );
       };

       // Define a callback for when a task is created
       window.dottedSign.eventListener.onCreate = (id) => {
         window.dottedSign.close();
         alert(`Task ${id} created successfully.`);
       };

       // Define a callback for when the creation process is canceled
       window.dottedSign.eventListener.onCancel = () => {
         window.dottedSign.close();
         alert("Create process was canceled.");
       };
    }
  }

  const handleClick = () => {
    initial();
  };

  return (
    <>
      <div className="px-6 py-4">
        <h1>Your Website</h1>
      </div>
      <main className="flex min-h-screen flex-col items-center p-6">
        {/* src 連結目前是使用 preparing 環境的腳本，可替換成正式環境或 Sandbox 環境 */}
        <Script src="https://dottedsign-embedded-signing.preparing.kdanmobile.com/zh-tw/static/dottedsign-embedded-signing.min.js"></Script>
        <h1>New Embedded Create Task</h1>
        <div id="embed-container" className="border-solid border-2 border-white w-3/4" style={{height: "85vh"}}></div>
        <br />
        <label htmlFor="token_input">Access Token: </label>
        <input id="token_input" className="text-black" ref={inputEle} />
        <button onClick={handleClick}>Submit</button>
      </main>
    </>
  );
}
