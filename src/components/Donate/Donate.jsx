import React, { useEffect } from "react";
import "./donate.css";
import { FaRegCopy } from "react-icons/fa";
import NavBar from "../Hero/NavbarBlack";
import Footer from "../Footer";


const Donate = () => {
    useEffect(() => {
        document.title = "Donate - UZOMMIRI"; 
      }, []);
  // Function to copy account number
  const copyToClipboard = (elementId) => {
    const textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        showToast();
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  // Function to show toast "Text copied to clipboard"
  const showToast = () => {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000); // Toast visible for 3 seconds
  };

  return (
    <div>
      <NavBar/>
      {/* DONATE */}
      <div className="donate-hero md:pb-20">
        <div className="donate-content">
          <h1>Donate</h1>
          <p>Uzommiri Study Centre</p>
          <p>First Bank</p>
          <p className="copy flex flex-row gap-6 justify-center align-center" id="textToCopy">
             <FaRegCopy className="icon" onClick={() => copyToClipboard("textToCopy")} />
             2001218880
          </p>
          <br />
          <p  className="">
            Donate in foreign currency with this{" "}
            <a href="https://www.american-initiatives.org/uzommiri">link</a>
          </p>
          
        </div>
        <p className="py-6"></p>
      </div>

      {/* TOAST */}
      <div id="toast" className="toast">
        Text copied to clipboard
      </div>
      <Footer/>
    </div>
  );
};

export default Donate;
