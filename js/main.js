document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  let currentPlayer = "PlayerOne";
  let playerOneCount = 0;
  let playerTwoCount = 0;
  let lastActiveButton = null;
  let maxActiveReached = false;



  function addClasses(button) {
    button.classList.add("BtnActive", currentPlayer);
    button.classList.forEach((cls) => {
      if (cls.startsWith("Btn") && cls !== "BtnActive") {
        button.classList.add(`${cls}Active`);
      }
    });
  }

  function removeClasses(button) {
    button.classList.remove("BtnActive", "PlayerOne", "PlayerTwo");
    button.classList.forEach((cls) => {
      if (cls.startsWith("Btn") && cls.endsWith("Active")) {
        button.classList.remove(cls);
      }
    });
  }

  function swapClasses(activeButton, inactiveButton) {
    removeClasses(activeButton);
    addClasses(inactiveButton);
  }

 

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const activeButtonsCount = document.querySelectorAll(".BtnActive").length;

    

      

      // Prevent overwriting buttons
      if (
        (button.classList.contains("PlayerOne") &&
          currentPlayer === "PlayerTwo") ||
        (button.classList.contains("PlayerTwo") &&
          currentPlayer === "PlayerOne")
      ) {
        return;
      }

      if (button.classList.contains("BtnActive") && activeButtonsCount >= 18) {
        removeClasses(button);

        // Decrement the counter for the current player
        if (currentPlayer === "PlayerOne") {
          playerOneCount--;
        } else {
          playerTwoCount--;
        }

        lastActiveButton = button;
        maxActiveReached = false; // Allow adding buttons again if count drops below 18
      } else {
        if (maxActiveReached) {
          return; // Prevent adding more buttons if max active buttons reached
        }

        if (lastActiveButton) {
          if (lastActiveButton === button) {
            // If the same button is clicked again, toggle its classes
            if (button.classList.contains("BtnActive")) {
              removeClasses(button);
              lastActiveButton = null;
            } else {
              addClasses(button);
              lastActiveButton = button;
            }
          } else {
            // Check if lastActiveButton is BtnOne and the new button is BtnTwo or BtnFour
            if (
              lastActiveButton.classList.contains("BtnOne") &&
              !(
                button.classList.contains("BtnTwo") ||
                button.classList.contains("BtnFour")
              )
            ) {
              return;
            }

            // Check if lastActiveButton is BtnTwo and the new button is BtnOne, BtnThree, or BtnMidTwo
            if (
              lastActiveButton.classList.contains("BtnTwo") &&
              !(
                button.classList.contains("BtnOne") ||
                button.classList.contains("BtnThree") ||
                button.classList.contains("BtnMidTwo")
              )
            ) {
              return;
            }

            // Check if lastActiveButton is BtnThree and the new button is BtnTwo or BtnFive
            if (
              lastActiveButton.classList.contains("BtnThree") &&
              !(
                button.classList.contains("BtnTwo") ||
                button.classList.contains("BtnFive")
              )
            ) {
              return;
            }
            // Check if lastActiveButton is BtnThree and the new button is BtnTwo or BtnFive
            if (
              lastActiveButton.classList.contains("BtnFive") &&
              !(
                button.classList.contains("BtnThree") ||
                button.classList.contains("BtnMidFive") ||
                button.classList.contains("BtnEight")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnEight") &&
              !(
                button.classList.contains("BtnFive") ||
                button.classList.contains("BtnSeven")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnSeven") &&
              !(
                button.classList.contains("BtnMidSeven") ||
                button.classList.contains("BtnSix") ||
                button.classList.contains("BtnEight")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnSix") &&
              !(
                button.classList.contains("BtnSeven") ||
                button.classList.contains("BtnFour")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnFour") &&
              !(
                button.classList.contains("BtnSix") ||
                button.classList.contains("BtnMidFour") ||
                button.classList.contains("BtnOne")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnMidOne") &&
              !(
                button.classList.contains("BtnMidTwo") ||
                button.classList.contains("BtnMidFour")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnMidTwo") &&
              !(
                button.classList.contains("BtnMidOne") ||
                button.classList.contains("BtnTwo") ||
                button.classList.contains("BtnEndTwo") ||
                button.classList.contains("BtnMidThree")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnMidThree") &&
              !(
                button.classList.contains("BtnMidTwo") ||
                button.classList.contains("BtnMidFive")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnMidFive") &&
              !(
                button.classList.contains("BtnMidThree") ||
                button.classList.contains("BtnFive") ||
                button.classList.contains("BtnEndFive") ||
                button.classList.contains("BtnMidEight")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnMidEight") &&
              !(
                button.classList.contains("BtnMidFive") ||
                button.classList.contains("BtnMidSeven")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnMidSeven") &&
              !(
                button.classList.contains("BtnMidEight") ||
                button.classList.contains("BtnSeven") ||
                button.classList.contains("BtnEndSeven") ||
                button.classList.contains("BtnMidSix")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnMidSix") &&
              !(
                button.classList.contains("BtnMidSeven") ||
                button.classList.contains("BtnMidFour")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnMidFour") &&
              !(
                button.classList.contains("BtnMidSix") ||
                button.classList.contains("BtnFour") ||
                button.classList.contains("BtnEndFour") ||
                button.classList.contains("BtnMidOne")
              )
            ) {
              return;
            }

            if (
              lastActiveButton.classList.contains("BtnEndOne") &&
              !(
                button.classList.contains("BtnEndFour") ||
                button.classList.contains("BtnEndTwo")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnEndTwo") &&
              !(
                button.classList.contains("BtnEndOne") ||
                button.classList.contains("BtnMidTwo") ||
                button.classList.contains("BtnEndThree")
              )
            ) {
              return;
            }

            if (
              lastActiveButton.classList.contains("BtnEndThree") &&
              !(
                button.classList.contains("BtnEndTwo") ||
                button.classList.contains("BtnEndFive")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnEndFive") &&
              !(
                button.classList.contains("BtnEndThree") ||
                button.classList.contains("BtnMidFive") ||
                button.classList.contains("BtnEndEight")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnEndEight") &&
              !(
                button.classList.contains("BtnEndFive") ||
                button.classList.contains("BtnEndSeven")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnEndSeven") &&
              !(
                button.classList.contains("BtnEndEight") ||
                button.classList.contains("BtnMidSeven") ||
                button.classList.contains("BtnEndSix")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnEndSix") &&
              !(
                button.classList.contains("BtnEndSeven") ||
                button.classList.contains("BtnEndFour")
              )
            ) {
              return;
            }
            if (
              lastActiveButton.classList.contains("BtnEndFour") &&
              !(
                button.classList.contains("BtnEndSix") ||
                button.classList.contains("BtnMidFour") ||
                button.classList.contains("BtnEndOne")
              )
            ) {
              return;
            }

            swapClasses(lastActiveButton, button);
            lastActiveButton = null;

            // Increment the counter for the current player
            if (currentPlayer === "PlayerOne") {
              playerOneCount++;
            } else {
              playerTwoCount++;
            }

            // Toggle the current player
            currentPlayer =
              currentPlayer === "PlayerOne" ? "PlayerTwo" : "PlayerOne";
          }
        } else {
          if (activeButtonsCount < 18) {
            addClasses(button);

            // Increment the counter for the current player
            if (currentPlayer === "PlayerOne") {
              playerOneCount++;
            } else {
              playerTwoCount++;
            }

            // Toggle the current player
            currentPlayer =
              currentPlayer === "PlayerOne" ? "PlayerTwo" : "PlayerOne";
          }

          if (activeButtonsCount + 1 >= 18) {
            maxActiveReached = true; // Set the flag when max active buttons are reached
          }
        }
      }
    });
  });
});
