loadingScreen.innerHTML = `
  <div class="toLoad">
      <div class="loadContent">
          <img src="/src/logo.png" alt="" />
          <h1>The Last Over</h1>
      </div>
  </div>
  `;

let contentScreen = document.querySelector(".container");
function loading() {
   setTimeout(() => {
      loadingScreen.innerHTML = ``;
      contentScreen.style.display = "block";
   }, 3000);
}

contentScreen.style.display = "none";
loading();

let score = 158;
let balls = 6;
let wickets = 5;
let flag = "";
function game() {
   ballImg.classList.add("animation");
   if (balls > 0 && wickets < 10) {
      let runs = Math.floor(Math.random() * 7 + 1);
      if (runs == 1 || runs == 2 || runs == 4 || runs == 6) {
         score += runs;
         console.log(`Runs:${runs},Score:${score}`);
         display.innerHTML = `
         <p>${runs} runs</p>
         <img src="/src/${runs}.png" alt="${runs} img" />
         <p>${runs} runs</p>
         `;
      } else if (runs == 3) {
         wickets++;
         console.log(`Out`);
         display.innerHTML = `
         <p>Out</p>
         <img src="/src/out.png" alt="out img" />
         <p>Out</p>
         `;
      } else if (runs == 7) {
         console.log(`Wide ball`);
         score += 1;
         console.log(`Score:${score}`);
         display.innerHTML = `
         <p>Wide ball</p>
         <img src="/src/wide.png" alt="wide img" />
         <p>Wide ball</p>
         `;
      } else {
         console.log(runs, "dot ball");
         display.innerHTML = `
         <p>dot ball</p>
         <img src="/src/dot.png" alt="dot img" />
         <p>dot ball</p>
         `;
      }
      balls--;
      console.log(`balls left :${balls}`);
      details.innerHTML = `
      <img src="/src/CSK logo.png" alt="team logo" />
      <p style="font-size: 40px; font-weight: 700;">${score}-${wickets}</p>
      <p>To Win</p>
      <hr>
      <div>
        <p>runs</p>
        <p>${171 - score}</p>
      </div>
      <div>
        <p>balls</p>
        <p>${balls}</p>
      </div>
      <img src="/src/GT logo.png" alt="team logo" />
      `;
      if (score > 170) {
         balls = 0;
         setTimeout(() => {
            contentScreen.style.display = "none";
            loadingScreen.innerHTML = `
           <div class="toLoad">
            <div class="loadContent">
              <h1>Chennai Super Kings won</h1>
            </div>
           </div>
           `;
         }, 2000);
      } else if (balls == 0 || wickets > 9) {
         setTimeout(() => {
            contentScreen.style.display = "none";
            loadingScreen.innerHTML = `
            <div class="toLoad">
              <div class="loadContent">
                <h1>Gujarat Titans won</h1>
              </div>
            </div>
           `;
         }, 2000);
      }
   }
   
  }
