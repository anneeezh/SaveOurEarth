
/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

$(".story_preview1").hover(function(){
  $(".picture1234").attr("src","https://cdn.glitch.global/eb34c122-163e-45c0-9120-dbff3a51f3c8/erefrgtghghfterweweqwdfsf.jpg?v=1659642451822");
});
$(".story_preview1").mouseout(function(){
  $(".picture1234").attr("src","https://cdn.glitch.global/eb34c122-163e-45c0-9120-dbff3a51f3c8/Global%20warming%20cover%20page.png?v=1659639847091");
});
$(".story_preview2").hover(function(){
  $(".pic564").attr("src","https://cdn.glitch.global/eb34c122-163e-45c0-9120-dbff3a51f3c8/qwerdrft.JPG?v=1659654147990");
});
$(".story_preview2").mouseout(function(){
  $(".pic564").attr("src","https://cdn.glitch.global/eb34c122-163e-45c0-9120-dbff3a51f3c8/air pollution.png?v=1659647511139");
});

const pages123= [".home_front123",".pagetwo123",".pagethree123",".pagefour123",".pagefive123",".pagesix123",".pageseven123",".pageeight123"] ;

let start=1;
while(start<pages123.length){
  $(pages123[start]).hide();
  start=start+1;
}
let counter=0;
if(counter==0){
  $(".back123").hide();
}
$(".forth123").click(function(){
  counter+=1;
  let c=0;
  if(counter==pages123.length){
    window.location.assign("./index.html");
  }
  else{
      while(c<pages123.length){
        if(c!=counter){
          $(pages123[c]).hide();
        }
        else if(c==counter){
          $(pages123[c]).show();
        }
        c=c+1;
    }
  }
  
  if(counter>0){
    $(".back123").show();
  }
});

$(".back123").click(function(){
  counter-=1;
  let c=0;
  if(counter==pages123.length || counter==-1){
    window.location.assign("./index.html");
  }
  else{
      while(c<pages123.length){
        if(c!=counter){
          $(pages123[c]).hide();
        }
        else if(c==counter){
          $(pages123[c]).show();
        }
        c=c+1;
    }
  }
  if(counter==0){
    $(".back123").hide();
  }
  else{
    $(".back123").show();
  }

});


const pages= ["#page1","#page2","#page3","#page4","#page5","#page6","#page7","#page8","#page9","#page10"] ;


let start1=1;
while(start1<pages.length){
  $(pages[start1]).hide();
  start1=start1+1;
}
let counter1=0;
if(counter1==0){
  $(".back").hide();
}
$(".forth").click(function(){
  counter1+=1;
  let c=0;
  if(counter1==pages.length){
    window.location.assign("./index.html");
  }
  else{
      while(c<pages.length){
        if(c!=counter1){
          $(pages[c]).hide();
        }
        else if(c==counter1){
          $(pages[c]).show();
        }
        c=c+1;
    }
  }
  
  if(counter1>0){
    $(".back").show();
  }
});

$(".back").click(function(){
  counter1-=1;
  let c=0;
  if(counter1==pages.length || counter1==-1){
    window.location.assign("./index.html");
  }
  else{
      while(c<pages.length){
        if(c!=counter1){
          $(pages[c]).hide();
        }
        else if(c==counter1){
          $(pages[c]).show();
        }
        c=c+1;
    }
  }
  if(counter1==0){
    $(".back").hide();
  }
  else{
    $(".back").show();
  }

});
