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
   if (balls > 0 && wickets < 10) {
      let runs = Math.floor(Math.random() * 7 + 1);
      if (runs == 1 || runs == 2 || runs == 4 || runs == 6) {
         score += runs;
         console.log(`Runs:${runs},Score:${score}`);
         display.innerHTML = `
      <video autoplay>
        <source src="/src/${runs}.mp4">
      </video>
      <p>${runs} runs</p>
      `;
      } else if (runs == 3) {
         wickets++;
         console.log(`Out`);
         display.innerHTML = `
         <video autoplay>
           <source src="/src/out.mp4">
         </video>
         <p>Out</p>
         `;
      } else if (runs == 7) {
         console.log(`Wide ball`);
         score += 1;
         console.log(`Score:${score}`);
         display.innerHTML = `
         <p>Wide ball</p>
         `;
      } else {
         console.log(runs, "dot ball");
         display.innerHTML = `
         <video autoplay>
           <source src="/src/dot.mp4">
         </video>
         <p>dot ball</p>
         `;
      }
      balls--;
      console.log(`balls left :${balls}`);
      setTimeout(() => {
         if (score > 170) {
            display.innerHTML = `csk won`;
            balls = 0;
         } else if (balls == 0 || wickets > 9) {
            display.innerHTML = `gt won`;
         }
      }, 9000);
   }
}
