import React from "react";
import "./App.scss";
import Body from "./components/sections/Body";
import Clients from "./components/sections/Clients";
import Contact from "./components/sections/Contact";
import Header from "./components/sections/Header";
// import LizzieB from "../src/assets/images/liz-portrait.jpg";
// import LizzieBwebp from "../src/assets/images/liz-portrait.webp";
// import Webp from "./components/utils/Webp";
import { isWebpSupported } from "react-image-webp/dist/utils";
import useWindowWidth from "./components/utils/WindowWidth";

function App() {
  const width = useWindowWidth();

  return (
    <div className="App">
      <main>
        {width <= 768 && (
          <div className="portrait">
            <div
              className={`${"portrait__background"} ${
                isWebpSupported
                  ? "portrait__background--webp"
                  : "portrait__background--jpg"
              }`}
            >
              <span className="visually-hidden">
                Portrait of Liz Hamburger - Product Designer
              </span>
            </div>
          </div>
        )}

        <article className="main-content">
          <Header />
          <Body />
          <Clients />
          <Contact />
        </article>

        {width >= 768 && (
          <div className="content">
            <div className="portrait">
              <div
                className={`${"portrait__background"} ${
                  isWebpSupported
                    ? "portrait__background--webp"
                    : "portrait__background--jpg"
                }`}
              >
                <span className="visually-hidden">
                  Portrait of Liz Hamburger - Product Designer
                </span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
