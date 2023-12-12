
import { Application } from '@splinetool/runtime';

// Correct the canvas class name
const canvas1 = document.querySelector('.canvas3d1');
const canvas2 = document.querySelector('.canvas3d2');

// Create two instances of the Application
const app1 = new Application(canvas1);
const app2 = new Application(canvas2);

// Load Spline scenes
app1.load('https://prod.spline.design/3ozQ59TYS2q8lGp1/scene.splinecode');




app2.load('https://prod.spline.design/e1sXJHMYLp4Fh2KS/scene.splinecode');
const canvas3 = document.getElementById('canvas3d3');
const app3 = new Application(canvas3);
app3.load('https://prod.spline.design/cHKYf9533j5giWrw/scene.splinecode');


let tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("bordered");
    });
    tab.classList.toggle("bordered");
  });
});
