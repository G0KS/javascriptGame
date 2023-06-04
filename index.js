//Initial Loading Screen
loadingScreen.innerHTML = `
  <div class="toLoad">
      <div class="loadContent">
          <img src="/src/logo.png" alt="" />
          <h1>The Final Over</h1>
      </div>
  </div>
  `;

let contentScreen = document.querySelector(".container");
function loading() {
   setTimeout(() => {
      loadingScreen.innerHTML = ``;
      contentScreen.style.display = "block";
   }, 2200);
}

contentScreen.style.display = "none";
loading();

//Game logic
let score = 158;
let balls = 6;
let wickets = 5;
function game() {
   if (balls > 0 && wickets < 10) {
      //Ball Animation
      ballImg.classList.add("animation");
      setTimeout(() => {
         ballImg.classList.remove("animation");
      }, 100);

      let runs = Math.floor(Math.random() * 7 + 1);
      if (runs == 1 || runs == 2 || runs == 4 || runs == 6) {
         score += runs;
         display.innerHTML = `
         <p>${runs} runs</p>
         <img src="/src/${runs}.png" alt="${runs} img" />
         <p>${runs} runs</p>
         `;
      } else if (runs == 3) {
         wickets++;
         display.innerHTML = `
         <p>Out</p>
         <img src="/src/out.png" alt="out img" />
         <p>Out</p>
         `;
      } else if (runs == 7) {
         score += 1;
         display.innerHTML = `
         <p>Wide ball</p>
         <img src="/src/wide.png" alt="wide img" />
         <p>Wide ball</p>
         `;
      } else {
         display.innerHTML = `
         <p>dot ball</p>
         <img src="/src/dot.png" alt="dot img" />
         <p>dot ball</p>
         `;
      }
      balls--;

      let displayScore = 171 - score;
      if (displayScore < 0) {
         displayScore = 0;
      }

      //Scoreboard details
      details.innerHTML = `
      <img src="/src/CSK logo.png" alt="team logo" />
      <p style="font-size: 40px; font-weight: 700;">${score}-${wickets}</p>
      <p>To Win</p>
      <hr>
      <div>
        <p>runs</p>
        <p>${displayScore}</p>
      </div>
      <div>
        <p>balls</p>
        <p>${balls}</p>
      </div>
      <img src="/src/GT logo.png" alt="team logo" />
      `;

      //winning logic
      if (score > 170) {
         balls = 0;
         setTimeout(() => {
            contentScreen.style.display = "none";
            loadingScreen.innerHTML = `
            <div class="toLoad" style="background-color: yellow;">
               <div class="loadContent">
                  <h1>The Champions</h1>
                  <img src="/src/CSK logo.png" alt="team logo" />
               </div>
               <button class="playAgain" onclick="replay()">Play again</button>
            </div>
            `;
         }, 700);
      } else if (balls == 0 || wickets > 9) {
         setTimeout(() => {
            contentScreen.style.display = "none";
            loadingScreen.innerHTML = `
            <div class="toLoad" style="background-color: rgb(1, 1, 53);">
               <div class="loadContent">
                  <h1>The Champions</h1>
                  <img src="/src/GT logo.png" alt="team logo" />
               </div>
               <button class="playAgain" onclick="replay()">Play again</button>
            </div>
           `;
         }, 700);
      }
   }
}

//To play again
function replay() {
   score = 158;
   balls = 6;
   wickets = 5;
   loadingScreen.innerHTML = ``;
   contentScreen.style.display = "block";
   contentScreen.innerHTML = `
   <div class="gameContainer">
      <div id="display" class="displayContainer">
         <h3>Ready to ball?</h3>
         <img src="/src/ready.png" alt="ready" />
         <h3>Ready to ball?</h3>
      </div>
      <div class="btn">
         <button type="button" onclick="game()" class="gameBtn">
            <img src="/src/ball.webp" alt="ball button" id="ballImg"/>
         </button>
      </div>
      <div class="scoreboard" id="details" >
         <img src="/src/CSK logo.png" alt="team logo" />
         <p style="font-size: 40px; font-weight: 700">158-5</p>
         <p>To Win</p>
         <hr />
         <div>
            <p>runs</p>
            <p>13</p>
         </div>
         <div>
            <p>balls</p>
            <p>6</p>
         </div>
         <img src="/src/GT logo.png" alt="team logo" />
      </div>
   </div>
   `;
}
