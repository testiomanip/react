import React, { useState } from "react";
import light from "./assets/light.svg";
import dark from "./assets/dark.svg";
import rolls from "./assets/rolls.jpg";
import paneer from "./assets/paneer.jpg";
import chickenred from "./assets/chickenred.jpg";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    const body = document.body;
    body.classList.toggle("black-screen");
  }

  const variable = {
    // fontFamily: 'Artifika, serif',
    // fontFamily: 'Dancing Script, cursive',
    fontFamily: "Kaushan Script, cursive",
    fontFamily: "Lobster, cursive",
    // fontFamily: 'Montserrat, sans-serif',
    // fontFamily: 'PT Sans Narrow, sans-serif',
    // fontFamily: 'Rubik Iso, cursive',
  };

  return (
    <>
      <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="flex space-x-6 m-4 bg-sky-500 p-3 rounded-lg justify-between ">
          <h1
            className={`text-lg font-bold ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
          >
            <span className="text-yellow-300">Resto</span>
            <span className="text-white">Kitchen</span>
          </h1>
          <button className="" onClick={() => toggleDarkMode()}>
            {/* {`${isDarkMode ? "Light" : "Dark"}`} */}

            {isDarkMode ? (
              <>
                <img className="h-6 w-6 " src={light} />
              </>
            ) : (
              <>
                <img className="h-6 w-6" src={dark} />
              </>
            )}
          </button>
        </div>

        <div className="m-6 mt-24 text-4xl font-bold">
          <h1 style={variable}>A Taste of Tradition, A Touch of Innovation.</h1>
        </div>

        <div className="m-6 mt-8 font-thin text-lg">
          <span>Feeding Your Senses, One Dish at a Time </span>
          <span> , Where Every Dish Tells a Delicious Story.</span>
        </div>

        <div
          className="m-6 text-indigo-400 font-bold text-2xl mt-12 "
          style={variable}
        >
          <h1>Todays Special Menu</h1>
        </div>

        {/* rolls */}

        <div className="card-container">
          <div className="card">
            <img className="card-image" src={rolls} alt="Rolls" />

            <div className="card-content">
              <div className="card-title">Vegetable Rolls</div>
              <p className="card-text">
                Crispy rolls filled with vegetables and served with sweet and
                sour sauce.
              </p>
            </div>
          </div>

          {/* paneer */}

          <div className="card ">
            <img className="card-image" src={paneer} />
            <div className="card-content">
              <div className="card-title">Paneer Tikka</div>
              <p className="card-text">
                Cubes of cottage cheese marinated in spices and grilled to
                perfection.
              </p>
            </div>
          </div>

          {/* chicken Manchurian*/}

          <div className="card">
            <img className="card-image" src={chickenred} />
            <div className="card-content">
              <div className="card-title">Chicken Manchurian</div>
              <p className="card-text">
                Deep-fried chicken balls tossed in a flavorful Manchurian sauce.
              </p>
            </div>
          </div>

          {/* Div for card components end */}
        </div>

        <div className="mt-10 text-center mb-7 bg-slate-800 p-3 m-4 rounded-lg font-bold">
          <span className="text-yellow-300">Resto</span>
          <span className="text-white">Kitchen</span>
          <span className="text-white"> | 2023</span>
          <h1 className="mt-4 text-white font-thin" style={variable}>Thanks  for Visiting</h1>
        </div>

        {/* Div for dark mode end */}
      </div>
    </>
  );
};

export default App;
