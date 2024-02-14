let nums = document.querySelectorAll(".nums .num");
let sectionn = document.querySelector(".number");
let started = false; // Function Started ? No

let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");


let menubtn = document.querySelector('.menubtn');
let publicinfo = document.querySelector('.public-info'); 
let icon = document.querySelector('.burger');
let x = 0;


menubtn.onclick = function (){
  if (x === 1){
      publicinfo.style.left = '-250px'; 
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
      x--;
  } else {
      publicinfo.style.left = '0'; 
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
      x++;

  }

}










window.onscroll = function () {
  if (window.scrollY >= sectionn.offsetTop - 550) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  if (window.scrollY >= section.offsetTop - 450) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}










// تعيين الأحداث "blur" و "focus"
window.addEventListener("blur", () => {
  document.title = "Come Back";
});

window.addEventListener("focus", () => {
  document.title = "Mr Error";
});

    
    
ScrollReveal({

  reset: false ,
  distance:'500px',
  duration:2000,
  delay:200
});


ScrollReveal().reveal('.image',{origin: 'left' });
ScrollReveal().reveal('.info',{origin: 'right' });
ScrollReveal().reveal('.int , .three ,.today ,.show ,.display',{origin: 'bottom' });
