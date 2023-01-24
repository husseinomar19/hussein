let skills2 = document.querySelector(".skill2");
let skills = document.getElementById("skills")
let about = document.querySelector(".about");
let spans = document.querySelectorAll(".slid span");
let htmlslid = document.getElementById("slidhtml");
let cssslid = document.getElementById("slidcss");
let jsslid = document.getElementById("slidjs");
let javaslid = document.getElementById("slidjava");
let figmaslid = document.getElementById("slidfigma");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let mobilenav = document.getElementById("mobile-nav");
let mobilebaar = document.querySelector(".ulclass");
let project = document.querySelector(".project");
let workimg1 = document.getElementById("workimg1");
let workimg2 = document.getElementById("workimg2");
let workimg3 = document.getElementById("workimg3");
let workimg4 = document.getElementById("workimg4");
let removeul =document.getElementById("about-remove");
let iconhover1 = document.getElementById("icon1");
let iconhover2 = document.getElementById("icon2");
let iconhover3 = document.getElementById("icon3");
let iconhover4 = document.getElementById("icon4");
console.log(iconhover1);
console.log(iconhover2);
console.log(iconhover3);
console.log(iconhover4);


window.onscroll = function(){
    if ( window.scrollY >= skills2.offsetTop - 500){
     //  skills.style.visibility ="visible";
        htmlslid.style.width ="80%";
        cssslid.style.width ="60%";
        jsslid.style.width ="10%";
        javaslid.style.width ="30%";
        figmaslid.style.width ="70%";
    }
    
        if ( window.scrollY >= about.offsetTop -400){
       
            icon1.style.top ="0";
            icon2.style.top ="0";
            icon3.style.top ="0";
            icon4.style.top ="0";
         }

        if (window.scrollY >= project.offsetTop -250){
           workimg1.style.right = 0; 
           workimg2.style.left = 0;          
        }
        if (window.scrollY >= project.offsetTop +270){
            workimg3.style.right = 0;
            workimg4.style.left = 0;
         }
}

mobilenav.addEventListener('click', function(){
    mobilebaar.classList.toggle("ulclass1");
});
removeul.addEventListener('click',function(){
   mobilebaar.classList.remove("ulclass1");
});

icon1.addEventListener('mouseover',function(){
     icon1.style.scale = 1.1;
     icon1.style.transition = '1S';
     icon2.style.opacity ='25%'
     icon3.style.opacity ='25%'
     icon4.style.opacity ='25%'
});
icon2.addEventListener('mouseover',function(){
    icon2.style.scale = 1.1;
    icon2.style.transition = '1s';
    icon1.style.opacity ='25%'
    icon3.style.opacity ='25%'
    icon4.style.opacity ='25%'
});
icon3.addEventListener('mouseover',function(){
    icon3.style.scale = 1.1;
    icon3.style.transition = '1s';
    icon1.style.opacity ='25%'
    icon2.style.opacity ='25%'
    icon4.style.opacity ='25%'
});
icon4.addEventListener('mouseover',function(){
    icon4.style.scale = 1.1;
    icon4.style.transition = '1s';
    icon1.style.opacity ='25%'
    icon2.style.opacity ='25%'
    icon3.style.opacity ='25%'
});
icon1.addEventListener('mouseout',function(){
    icon1.style.scale = 1;
    icon2.style.opacity ='100%'
    icon3.style.opacity ='100%'
    icon4.style.opacity ='100%'
});
icon2.addEventListener('mouseout',function(){
    icon2.style.scale = 1;
    icon1.style.opacity ='100%'
    icon3.style.opacity ='100%'
    icon4.style.opacity ='100%'
});
icon3.addEventListener('mouseout',function(){
    icon3.style.scale = 1;
    icon1.style.opacity ='100%'
    icon2.style.opacity ='100%'
    icon4.style.opacity ='100%'
});
icon4.addEventListener('mouseout',function(){
    icon4.style.scale = 1;
    icon1.style.opacity ='100%'
    icon2.style.opacity ='100%'
    icon3.style.opacity ='100%'
});

