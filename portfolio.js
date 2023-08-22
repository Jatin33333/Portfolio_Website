

function fn1(){
  document.getElementById('sidebar').style.display="none";
}







//header animation//

window.addEventListener('scroll',scrollMe);
function scrollMe(){
let viewport = window.scrollY;
let navbar = document.getElementById('header1');

if(viewport < 60){
  navbar.classList.remove('change');
}else{
  navbar.classList.add('change');
}
}


//header animation//

//input//

function focus_function(element){
  element.style.background="white";
  element.style.color="black";
}

function blur_function(element){
  element.style.background="";
  element.style.color="white";
}
/*cursor effects*/

(function () {

  const link = document.querySelectorAll('nav > .hover-this');
  const cursor = document.querySelector('.cursor');

  const animateit = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
  };

  const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
  };

  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));
  window.addEventListener('mousemove', editCursor);

})();
/*cursor effects */


/*blur text animation*/

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Indesign",
  "Coreldraw",
  "Adobe Premiere Pro",
 "Adobe Animate CC",
 "After Effects",
  "HTML-5",
  "CSS",
  "Javascript",
  "Dreamweaver",
  "Harmony",
  "Story Board Pro",
  "jQuery"
];

const morphTime = 1;
const cooldownTime = 1;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();

/*blur text animation*/


/*animation part*/


/*g functions*/


/*g functions*/