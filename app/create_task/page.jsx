'use client'
import Script from 'next/script'
import { useState, useRef } from 'react';

export default function Home() {
  const [info, setInfo]  = useState({
    apiKey: "",
    token: "",
    name: "",
    url: "",
    signers: "",
  });  
  const inputApiKeyEle = useRef();
  const inputTokenEle = useRef();
  const inputNameEle = useRef();
  const inputUrlEle = useRef();
  const inputSignersEle = useRef();

  // const initial = () => {
  //   if (window.dottedSign) {
  //      // Prepare the container where the embedded signing will be displayed
  //      const embedContainer = document.getElementById("embed-container");

  //      // Initialize the embedded signing
  //      window.dottedSign.open(embedContainer, {
  //        token: token,
  //        type: window.dottedSign.embedTypes.create,
  //      });

  //      // Set language after the document content is loaded
  //      window.dottedSign.eventListener.onLoad = () => {
  //        window.dottedSign.setLanguage("zh-tw");
  //        window.dottedSign.hideElement(
  //          window.dottedSign.elementsId.createLabels,
  //        );
  //      };

  //      // Define a callback for when a task is created
  //      window.dottedSign.eventListener.onCreate = (id) => {
  //        window.dottedSign.close();
  //        alert(`Task ${id} created successfully.`);
  //      };

  //      // Define a callback for when the creation process is canceled
  //      window.dottedSign.eventListener.onCancel = () => {
  //        window.dottedSign.close();
  //        alert("Create process was canceled.");
  //      };
  //   }
  // }

  const handleClick = () => {
    setInfo({
      apiKey: inputApiKeyEle.current.value,
      token: inputTokenEle.current.value,
      name: inputNameEle.current.value,
      url: inputUrlEle.current.value,
      signers: inputSignersEle.current.value,
    });
    // initial();
  };

  return (
    <>
      <div className="px-6 py-4">
        <h1>Your Website</h1>
      </div>
      <main className="flex min-h-screen flex-col items-center p-6">
        {/* <Script src="https://dottedsign-embedded-signing.preparing.kdanmobile.com/zh-tw/static/dottedsign-embedded-signing.min.js"></Script> */}
        <h1>Embedded Create Task (Std. QA Env)</h1>
        <div id="embed-container" className="border-solid border-2 border-white w-3/4" style={{height: "85vh"}}>
          <iframe
            src={`https://dottedsign-api.qa.kdanmobile.com/integration/frame-create-task?api_key=${info.apiKey}&user_token=${info.token}&file_name=${encodeURIComponent(info.name)}&file_url=${encodeURIComponent(info.url)}&signers=${encodeURIComponent(info.signers)}`}
            className="w-full h-full"
          />
        </div>
        <br />
        <label htmlFor="key_input">API Key: </label>
        <input id="key_input" className="text-black" ref={inputApiKeyEle} />
        <label htmlFor="token_input">Access Token: </label>
        <input id="token_input" className="text-black" ref={inputTokenEle} />
        <label htmlFor="name_input">File Name: </label>
        <input id="name_input" className="text-black" ref={inputNameEle} defaultValue="Test Task" />
        <label htmlFor="url_input">File URL: </label>
        <input id="url_input" className="text-black" ref={inputUrlEle} defaultValue="https://pdfobject.com/pdf/sample.pdf" />
        <label htmlFor="signer_input">signers: </label>
        <input id="signer_input" className="text-black" ref={inputSignersEle} defaultValue='[{"name":"signer1","email":"signer1@test.com"}]' />
        <button onClick={handleClick}>Submit</button>
      </main>
    </>
  );
}
