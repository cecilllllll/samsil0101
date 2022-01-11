
/*가로 슬라이드*/


 const display = document.querySelector("#slideBox")
 const L = document.getElementById("L")
 const R = document.getElementById("R")
 let current = 1;

 L.addEventListener("click", () => {
   if (current == 1) {
     display.style.transform = "translate(-1500vw)"
    current = 17;
   } else if (current == 2) {
     display.style.transform = "translate(0)"
     current = 1;
   }else if (current == 3) {
     display.style.transform = "translate(-100vw)"
     current = 2;
   }else if (current == 4) {
     display.style.transform = "translate(-200vw)"
     current = 3;
   }else if (current == 5) {
     display.style.transform = "translate(-300vw)"
     current = 4;
   }else if (current == 6) {
     display.style.transform = "translate(-400vw)"
     current = 5;
   }else if (current == 7) {
     display.style.transform = "translate(-500vw)"
     current = 6;
   }else if (current == 8) {
     display.style.transform = "translate(-600vw)"
     current = 7;
   }else if (current == 9) {
     display.style.transform = "translate(-700vw)"
     current = 8;
   }else if (current == 10) {
     display.style.transform = "translate(-800vw)"
     current = 9;
   }else if (current == 11) {
     display.style.transform = "translate(-900vw)"
     current = 10;
   }else if (current == 12) {
     display.style.transform = "translate(-1000vw)"
     current = 11;
   }else if (current == 13) {
     display.style.transform = "translate(-1100vw)"
     current = 12;
   }else if (current == 14) {
     display.style.transform = "translate(-1200vw)"
     current = 13;
   }else if (current == 15) {
     display.style.transform = "translate(-1300vw)"
     current = 14;
   }else if (current == 16) {
     display.style.transform = "translate(-1400vw)"
     current = 15;
   }else if (current == 17) {
     display.style.transform = "translate(-1500vw)"
     current = 16;
   }
 })

 R.addEventListener("click", () => {
   if (current == 1) {
     display.style.transform = "translate(-100vw)"
     current = 2;
   } else if (current == 2) {
     display.style.transform = "translate(-200vw)"
     current = 3;
   } else if (current == 3) {
     display.style.transform = "translate(-300vw)"
     current = 4;
   } else if (current == 4) {
     display.style.transform = "translate(-400vw)"
     current = 5;
   } else if (current == 5) {
     display.style.transform = "translate(-500vw)"
     current = 6;
   }else if (current == 6) {
     display.style.transform = "translate(-600vw)"
     current = 7;
   }else if (current == 7) {
     display.style.transform = "translate(-700vw)"
     current = 8;
   }else if (current == 8) {
     display.style.transform = "translate(-800vw)"
     current = 9;
   }else if (current == 9) {
     display.style.transform = "translate(-900vw)"
     current = 10;
   }else if (current == 10) {
     display.style.transform = "translate(-1000vw)"
     current = 11;
   }else if (current == 11) {
     display.style.transform = "translate(-1100vw)"
     current = 12;
   }else if (current == 12) {
     display.style.transform = "translate(-1200vw)"
     current = 13;
   }else if (current == 13) {
     display.style.transform = "translate(-1300vw)"
     current = 14;
   }else if (current == 14) {
     display.style.transform = "translate(-1400vw)"
     current = 15;
   }else if (current == 15) {
     display.style.transform = "translate(-1500vw)"
     current = 16;
   }else if (current == 16) {
     display.style.transform = "translate(0)"
     current = 1;
   }
 })



// openBtn.onclick = () => showConsole();

 /*nav*/
 const fullpage=document.querySelector("#fullpage")
 const nav1=document.querySelector("#nav1")
 const nav2=document.querySelector("#nav2")
 const nav3=document.querySelector("#nav3")
 const nav4=document.querySelector("#nav4")
 const navBox=document.querySelector("#navBox")
 const toptoptop=document.querySelector("#toptoptop")
 const toptoptoptop=document.querySelector("#toptoptoptop")


  fullpage.addEventListener('scroll', function(){
  if(fullpage.scrollTop >=400){
    navBox.style.opacity=1;
        nav1.addEventListener('mouseover', function(){
       nav1.style.color ="#4151A3";
   });
    nav1.addEventListener('mouseout', function(){
       nav1.style.color ="#7C7C7C"
   });
       nav2.addEventListener('mouseover', function(){
       nav2.style.color ="#4151A3";
   });
    nav2.addEventListener('mouseout', function(){
       nav2.style.color ="#7C7C7C"
   });
       nav3.addEventListener('mouseover', function(){
       nav3.style.color ="#4151A3";
   });
    nav3.addEventListener('mouseout', function(){
       nav3.style.color ="#7C7C7C"
   });
       nav4.addEventListener('mouseover', function(){
       nav4.style.color ="#4151A3";
   });
    nav4.addEventListener('mouseout', function(){
       nav4.style.color ="#7C7C7C"
   });
  }

  if(fullpage.scrollTop <=400){
     navBox.style.opacity=0;
     nav1.style.color = "#7C7C7C"
  }

  if(fullpage.scrollTop >=700){
    nav1.style.color = "#4151A3"
     nav1.addEventListener('mouseover', function(){
       nav1.style.color ="#4151A3";
   });
    nav1.addEventListener('mouseout', function(){
       nav1.style.color ="#4151A3"
   });
  }

  if(fullpage.scrollTop >=2000){
     navBox.style.opacity=0;
      navBox.style.backgroundColor = "white"
  }
   if(fullpage.scrollTop >=900){
     toptoptop.style.opacity = 0;
     toptoptoptop.style.opacity = 1;
   }
  if(fullpage.scrollTop <=900){
     toptoptop.style.opacity = 1;
     toptoptoptop.style.opacity = 0;
   }
   if(fullpage.scrollTop >=2230){
     navBox.style.opacity=1;
     navBox.style.backgroundColor = "#4151A3"
     nav1.style.color = "white"
     nav2.style.color = "#FF974B"
     nav3.style.color = "white"
     nav4.style.color = "white"
    nav1.addEventListener('mouseover', function(){
       nav1.style.color ="#FF974B";
   });
    nav1.addEventListener('mouseout', function(){
       nav1.style.color ="white"
   });
       nav2.addEventListener('mouseover', function(){
       nav2.style.color ="#FF974B";
   });
    nav2.addEventListener('mouseout', function(){
       nav2.style.color ="#FF974B"
   });
       nav3.addEventListener('mouseover', function(){
       nav3.style.color ="#FF974B";
   });
    nav3.addEventListener('mouseout', function(){
       nav3.style.color ="white"
   });
         nav4.addEventListener('mouseover', function(){
       nav4.style.color ="#FF974B";
   });
    nav4.addEventListener('mouseout', function(){
       nav4.style.color ="white"
   });
  }
     if(fullpage.scrollTop >=1700){
      toptoptop.style.opacity = 1;
     toptoptoptop.style.opacity = 0;
     }
  if(fullpage.scrollTop <=2180){
     nav2.style.color = "#7C7C7C"
     nav3.style.color = "#7C7C7C"
     nav4.style.color = "#7C7C7C"
  }

  if(fullpage.scrollTop >= 3070){
    navBox.style.backgroundColor = "white"
    navBox.style.opacity = "1"
    nav1.style.color = "#7C7C7C"
    nav2.style.color = "#4151A3"
    nav3.style.color = "#7C7C7C"
    nav4.style.color = "#7C7C7C"

 nav1.addEventListener('mouseover', function(){
       nav1.style.color ="#4151A3";
   });
    nav1.addEventListener('mouseout', function(){
       nav1.style.color ="#7C7C7C"
   });
       nav2.addEventListener('mouseover', function(){
       nav2.style.color ="#4151A3";
   });
    nav2.addEventListener('mouseout', function(){
       nav2.style.color ="#4151A3"
   });
       nav3.addEventListener('mouseover', function(){
       nav3.style.color ="#4151A3";
   });
    nav3.addEventListener('mouseout', function(){
       nav3.style.color = "#7C7C7C"
   });
         nav4.addEventListener('mouseover', function(){
       nav4.style.color ="#4151A3";
   });
    nav4.addEventListener('mouseout', function(){
       nav4.style.color ="#7C7C7C"
   });
  }

  if(fullpage.scrollTop >= 4600){
  navBox.style.opacity = "0"
    nav1.style.color = "white"
    nav2.style.color = "white"
    nav3.style.color = "#4151A3"
    nav4.style.color = "white"

 nav1.addEventListener('mouseover', function(){
       nav1.style.color ="#4151A3";
   });
    nav1.addEventListener('mouseout', function(){
       nav1.style.color ="white"
   });
       nav2.addEventListener('mouseover', function(){
       nav2.style.color ="#4151A3";
   });
    nav2.addEventListener('mouseout', function(){
       nav2.style.color ="white"
   });
       nav3.addEventListener('mouseover', function(){
       nav3.style.color ="#4151A3";
   });
    nav3.addEventListener('mouseout', function(){
       nav3.style.color = "#4151A3"
   });
         nav4.addEventListener('mouseover', function(){
       nav4.style.color ="#4151A3";
   });
    nav4.addEventListener('mouseout', function(){
       nav4.style.color ="white"
   });
  }
  if(fullpage.scrollTop >= 5200){
    navBox.style.opacity = "1"
    navBox.style.backgroundColor = "#7C7C7C"
    nav1.style.color = "white"
    nav2.style.color = "white"
    nav3.style.color = "white"
    nav4.style.color = "#4151A3"

 nav1.addEventListener('mouseover', function(){
       nav1.style.color ="#4151A3";
   });
    nav1.addEventListener('mouseout', function(){
       nav1.style.color ="white"
   });
       nav2.addEventListener('mouseover', function(){
       nav2.style.color ="#4151A3";
   });
    nav2.addEventListener('mouseout', function(){
       nav2.style.color ="white"
   });
       nav3.addEventListener('mouseover', function(){
       nav3.style.color ="#4151A3";
   });
    nav3.addEventListener('mouseout', function(){
       nav3.style.color = "white"
   });
         nav4.addEventListener('mouseover', function(){
       nav4.style.color ="#4151A3";
   });
    nav4.addEventListener('mouseout', function(){
       nav4.style.color ="#4151A3"
   });
  }

  if(fullpage.scrollTop >= 5600){
    toptoptop.style.opacity = 0;
    toptoptoptop.style.opacity = 1;
     navBox.style.opacity = "0"
      nav1.style.opacity = "0"
    nav2.style.opacity = "0"
    nav3.style.opacity = "0"
    nav4.style.opacity = "0"
  }
    if(fullpage.scrollTop <= 5600){
      nav1.style.opacity = "1"
    nav2.style.opacity = "1"
    nav3.style.opacity = "1"
    nav4.style.opacity = "1"
  }
  });

  /*하트 칭구*/
    const heartBtn = document.getElementById("heartHoll")
    const heartBtn2 = document.getElementById("heartfull")
    const hearttext = document.getElementById("heart1")
    const hearttext2 = document.getElementById("heart2")


  function play(){

    console.log("play animation!");
    // document.querySelector("#heartA").className = "heartA";
    const heartA = document.querySelector("#heartA")
    heartA.className = "changing";

    const heartB = document.querySelector("#heartB")
    heartB.className = "changing2";

        const heartC = document.querySelector("#heartC")
    heartC.className = "changing3";

        const heartD = document.querySelector("#heartD")
    heartD.className = "changing4";

        const heartE = document.querySelector("#heartE")
    heartE.className = "changing5";

    heartBtn2.style.opacity = "1"
    heartBtn.style.opacity = "0"
    hearttext.style.opacity = "0"
    hearttext2.style.opacity = "1"

}

heartBtn.addEventListener('click', play, false);


/*lock box*/
/*lockbox*/

const LOCK  = document.querySelectorAll("#LOCK")
const think = document.querySelectorAll("#think")
const openBtn = document.getElementById("storyNav0")
const storyNavBox = document.getElementById("storyNavBox")

openBtn.addEventListener('click', () => {
})

const opennav = document.querySelector('#storyNav0')

function move(){
  const lockbox = document.querySelector("#lockbox")
  lockbox.className = "changebox";

  const shadow = document.querySelector('#shadow')
  shadow.className = "changebox2"

  const lockp = document.querySelector('#lockText')
  lockp.className = "changetext3"
   
  storyNavBox.style.zIndex = "0"
}

opennav.addEventListener('click',move, false);

/*think num 1*/
const storyNav1 = document.querySelector('#storyNav1')

function move1(){
  const thinkimg = document.querySelector("#think img")
  thinkimg.className = "changebox5";

  const think = document.querySelector('#think')
  think.className = "changebox4"
}

 storyNav1.addEventListener('click', move1, false);

 /*think num 2*/
 const storyNav2 = document.querySelector("#storyNav2")

 function move2(){
   const story1 = document.querySelector('#story1')
   story1.className = "changebox6"
 }

 storyNav2.addEventListener('click', move2, false);

 /*think num 3*/
const storyNav3 = document.querySelector("#storyNav3")

 function move3(){
   const story2 = document.querySelector('#story2')
   story2.className = "changebox7"
 }

 storyNav3.addEventListener('click', move3, false);

// think num 4
const storyNav4 = document.querySelector("#storyNav4")

 function move4(){
   const story3 = document.querySelector('#story3')
   story3.className = "changebox8"
 }

 storyNav4.addEventListener('click', move4, false);

/*popup*/
function showPopup(showhoho) {
	const popup = document.querySelector('#popup');
  
  if (showhoho) {
  	popup.classList.add('showhoho');
    popup.classList.remove('hide');

  } 
  popup.classList.remove('hide');
}


function closePopup() {
	const popup = document.querySelector('#popup');
  popup.classList.add('hide');
}

closePopup()
// 2
function showPopup2(showhoho2) {
	const popup2 = document.querySelector('#popup2');
  
  if (showhoho2) {
  	popup2.classList.add('showhoho2');
    popup2.classList.remove('hide');

  } 
  popup2.classList.remove('hide');
}


function closePopup2() {
	const popup2 = document.querySelector('#popup2');
  popup2.classList.add('hide');
}

closePopup()

//3
function showPopup3(showhoho3) {
	const popup3 = document.querySelector('#popup3');
  
  if (showhoho3) {
  	popup3.classList.add('showhoho3');
    popup3.classList.remove('hide');

  } 
  popup3.classList.remove('hide');
}


function closePopup3() {
	const popup3 = document.querySelector('#popup3');
  popup3.classList.add('hide');
}

closePopup()



//4
function showPopup4(showhoho4) {
	const popup4 = document.querySelector('#popup4');
  
  if (showhoho4) {
  	popup4.classList.add('showhoho4');
    popup4.classList.remove('hide');

  } 
  popup4.classList.remove('hide');
}


function closePopup4() {
	const popup4 = document.querySelector('#popup4');
  popup4.classList.add('hide');
}

closePopup()

//5
function showPopup5(showhoho5) {
	const popup5 = document.querySelector('#popup5');
  
  if (showhoho5) {
  	popup5.classList.add('showhoho5');
    popup5.classList.remove('hide');

  } 
  popup5.classList.remove('hide');
}


function closePopup5() {
	const popup5 = document.querySelector('#popup5');
  popup5.classList.add('hide');
}

 /*popupslide*/
const popupBtn1_left = document.querySelector("#popupBtn1_left")
const popupBtn1_right = document.querySelector("#popupBtn1_right")
const popupImgBaby = document.querySelector("#popupimgSlide1_img2")
var count=1;


popupBtn1_left.addEventListener("click", () => {
  count++
  if(count%2 ==0) {
  popupImgBaby.style.opacity=1;
  }
  else if(count%2 == 1) {
    popupImgBaby.style.opacity=0;
  }
});


popupBtn1_right.addEventListener("click", () => {
  count++
  if(count%2 ==0) {
  popupImgBaby.style.opacity=1;
  }
  else if(count%2 == 1) {
    popupImgBaby.style.opacity=0;
  }
});


const popupBtn2_right = document.querySelector("#popupBtn2_right")
const popupBtn2_left = document.querySelector("#popupBtn2_left")
const imgGirl = document.querySelector("#popupimgSlide2_img ")


popupBtn2_left.addEventListener("click", ()=>{
  count++
  if(count%2==0){
    imgGirl.style.opacity=0;
  }

  else if(count%2==1){
    imgGirl.style.opacity=1;
  }
})



popupBtn2_right.addEventListener("click", ()=>{
  count++
  if(count%2==0){
    imgGirl.style.opacity=0;
  }

  else if(count%2==1){
    imgGirl.style.opacity=1;
  }
})

// letter game


document.addEventListener("dragleave", function( event ) {
      if ( event.target.className == "letterAfterHo" ) {
          event.target.style.opacity = "1";
          event.target.style.zIndex = "4";
          console.log("aaaa")
      }
  }, false);


// letter click

const letter1 = document.querySelector(".lettersAfter div:nth-child(1)>img:nth-child(2)")

 letter1.addEventListener("click", () =>{
       window.open('https://cecilllllll.github.io/classic/', '_blank');

 })


 const letter2 = document.querySelector(".lettersAfter div:nth-child(2)>img:nth-child(2)")

 letter2.addEventListener("click", () =>{
     window.open('file:///Users/rhea/Desktop/C%E1%84%85%E1%85%A2%E1%86%B8%20/Hawatttang/index.html#credit', '_blank');
  
 })



 const letter3 = document.querySelector(".lettersAfter div:nth-child(3)>img:nth-child(2)")

 letter3.addEventListener("click", () =>{
    window.open('file:///Users/rhea/Desktop/C%E1%84%85%E1%85%A2%E1%86%B8%20/samsil/indexEco.html', '_blank');
 })



 const letter4 = document.querySelector(".lettersAfter div:nth-child(4)>img:nth-child(2)")

 letter4.addEventListener("click", () =>{
    window.open('file:///Users/rhea/Desktop/C%E1%84%85%E1%85%A2%E1%86%B8%20/samsil/indexPotato.html', '_blank');
 })



 const letter5 = document.querySelector(".lettersAfter div:nth-child(5)>img:nth-child(2)")

 letter5.addEventListener("click", () =>{
    window.open('file:///Users/rhea/Desktop/C%E1%84%85%E1%85%A2%E1%86%B8%20/samsil/indexNone.html', '_blank');
 })


//  guestbook


function printName()  {
  const comment = document.getElementById('comment-input').value;
  document.getElementById("guestT").innerText = comment+" 잘가요~";
  console.log(comment)
}







  

