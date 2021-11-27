import { useState } from "react";
import MainContentNews from "./MainContentNews";

function MainContent() {
  const objectsArray = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  const [buttonState, changeButtonState] = useState({
    activeObject: objectsArray[3],
    objects: objectsArray,
  });

  function toggleActive(index) {
    changeButtonState({
      ...buttonState,
      activeObject: buttonState.objects[index],
    });
  }

  function toggelActiveStyles(index) {
    if (buttonState.objects[index] === buttonState.activeObject) {
      return "page_button active_button";
    } else {
      return "page_button";
    }
  }

  return (
    <section className="main_content">
      <h2 className="article_headline">News</h2>
      <MainContentNews />
      <MainContentNews />
      <MainContentNews />
      <MainContentNews />
      <MainContentNews />
      <MainContentNews />
      <div className="page_buttons">
        {buttonState.objects.map((elements, index) => (
          <button
            key={index}
            className={toggelActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default MainContent;
