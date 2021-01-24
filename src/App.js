import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAppleAlt,
  faAlignCenter,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";

import Button from "./components/button/Button";
import DivBody from "./components/divBody/DivBody";

const data = [
  {
    title: "the title",
    content:
      "this is the h3aragrah3h this is the h3aragrah3h this is the h3aragrah3h",
    buttonContent: "click me",
    imageSrc:
      "https://image.freepik.com/free-psd/frame-mockup-cabinet-interior_41470-1521.jpg",
  },
  {
    title: "the title",
    content:
      "this is the h3aragrah3h this is the h3aragrah3h this is the h3aragrah3h",
    buttonContent: "click me",
    imageSrc:
      "https://image.freepik.com/free-psd/poster-frame-mockup-modern-contemporary-office-room_216839-321.jpg",
  },
  {
    title: "the title",
    content:
      "this is the h3aragrah3h this is the h3aragrah3h this is the h3aragrah3h",
    buttonContent: "click me",
    imageSrc:
      "https://image.freepik.com/free-psd/modern-interior-living-room-frame-wall-mockup_42637-1491.jpg",
  },
  {
    title: "the title",
    content:
      "this is the h3aragrah3h this is the h3aragrah3h this is the h3aragrah3h",
    buttonContent: "click me",
    imageSrc:
      "    https://image.freepik.com/free-psd/mock-up-poster-child-room_41470-1544.jpg",
  },
  {
    title: "the title",
    content:
      "this is the h3aragrah3h this is the h3aragrah3h this is the h3aragrah3h",
    buttonContent: "click me",
    imageSrc: "",
  },
];
function App() {
  const [nav, setNav] = useState(true);
  return (
    <div className="App">
      <ul className={nav ? "navbar" : "App__navbar"}>
        <li>home</li>
        <li>contactUs</li>
        <li>home</li>
        <li>contactUs</li>
        <li>home</li>
        <li>contactUs</li>
      </ul>

      <FontAwesomeIcon
        className="drawer__icon"
        icon={faAlignCenter}
        color="white"
        size="1x"
        onClick={() => setNav(!nav)}
      />
      <header>
        <div className="App-header">
          <img
            className="left-img"
            src="https://image.freepik.com/free-vector/luxury-pastel-pink-golden-frame_79603-966.jpg"
          />
          <div>
            <h1> This is the header</h1>
            <h3>this is the h3aragrah3h</h3>
            <h3>this is the h3aragrah3h</h3>
            <h3>this is the h3aragrah3h</h3>
            <Button text="submit" onClick={() => console.log("x")} />
          </div>
        </div>
      </header>
      <main>
        <div className="advirt">
          <hr className="advirt__row" />
          <h1> This is the header</h1>
          <h3>this is the h3aragrah3h</h3>
          <h3>this is the h3aragrah3h</h3>
          <h3>this is the h3aragrah3h</h3>
          <div className="advirt__icons">
            <FontAwesomeIcon className="icon" icon={faAppleAlt} size="3x" />
            <p className="hrr">___________</p>
            <FontAwesomeIcon className="icon" icon={faAlignRight} size="3x" />
            <p className="hrr">___________</p>
            <FontAwesomeIcon className="icon" icon={faCoffee} size="3x" />
          </div>
          <Button text="submit" onClick={() => console.log("x")} />
        </div>
      </main>
      {data.map(({ title, content, buttonContent, imageSrc }) => (
        <DivBody
          title={title}
          content={content}
          buttonContent={buttonContent}
          imageSrc={imageSrc}
        />
      ))}

      <div className="body__content">
        <img
          className="body__content__img"
          src="https://image.freepik.com/free-photo/gold-cutlery-set-black-background_1220-4103.jpg"
        />
        <div className="body__content__contain">
          <hr className="body__content__hr" />
          <h1 className="body__content__title"> This is the header</h1>
          <p className="body__content__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            eaque sint blanditiis placeat culpa! Dolor explicabo saepe earum nam
            distinctio impedit expedita! Optio dignissimos, amet consequuntur
            excepturi recusandae ad laboriosam!
          </p>
          <Button
            className="body__content__button"
            text="submit"
            onClick={() => console.log("x")}
          />
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="footer__left">
            <hr className="footer__left__hr" />
            <h1 className="footer__left__title"> This is the header</h1>
            <p className="footer__left__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              eaque sint blanditiis placeat culpa! Dolor explicabo saepe earum
              nam distinctio impedit expedita! Optio dignissimos, amet
              consequuntur excepturi recusandae ad laboriosam!
            </p>
            <div className="footer__left__icon">
              <FontAwesomeIcon className="footer__icon" icon={faCoffee} />
              <FontAwesomeIcon className="footer__icon" icon={faAppleAlt} />
              <FontAwesomeIcon className="footer__icon" icon={faAlignCenter} />
              <FontAwesomeIcon className="footer__icon" icon={faAlignRight} />
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__right__InputText">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="age" />
            </div>
            <textarea rows="6" cols="50" placeholder="Detail" />

            <Button
              className="footer__right__button"
              text="submit"
              onClick={() => console.log("x")}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
