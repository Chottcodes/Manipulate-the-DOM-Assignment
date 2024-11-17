let body= document.getElementById('body');
let blueBtn=document.getElementById('blue');
let redBtn=document.getElementById('red');
let showText=document.getElementById('show-Text');
let helloHeader=document.getElementById('Hello-Header');
let HelloTXT=document.getElementById('Hello-Header');
let yellowBtn=document.getElementById('yellow');
let dayElement=document.getElementById('day-p-element');
let changePtext=document.getElementById('changeMeBTN');
let showImg=document.getElementById('showimg');
let videoGameIMG=document.getElementById('favorite-game');
let videoGameCover=document.getElementById('video-game-cover');
let tf2video=document.getElementById('tf2video');
let gameplaytitle=document.getElementById('gameplay-title');
let adjustBTN=document.getElementById('adjustBTN');
let submitBtn=document.getElementById('submitBTN');
let userdiv=document.getElementById('user-submit');
let titleprompt=document.getElementById('title-user-input');
let input=document.getElementById('input');
let useroutput=document.getElementById('users-output');
let orangeBtn=document.getElementById('orange');
let goldBtn=document.getElementById('gold');

blueBtn.addEventListener('click', function(){
    body.style.backgroundColor='blue';
});
redBtn.addEventListener('click',function(){
    body.style.backgroundColor='red';
    redBtn.innerText='My Favorite color';
});
showText.addEventListener('click',function(){
    helloHeader.innerText="Hello!";
    dayElement.style.display='block';

});
yellowBtn.addEventListener('click',function(){
    body.style.backgroundColor='black';
    helloHeader.style.color='yellow'
    dayElement.style.color='white';
});
changePtext.addEventListener('click',function(){
    dayElement.innerText='How is your day?';
    dayElement.style.color='white';
   
});
showImg.addEventListener('click',function(){
    videoGameCover.style.display='block';
    videoGameIMG.style.display='block';
    helloHeader.innerText="Wow that image is huge! click the adjust button";
    dayElement.innerText="My Favorite Video Game";

});
adjustBTN.addEventListener('click',function(){
    helloHeader.innerText="Thats Much Better!"
    gameplaytitle.style.color='white';
    gameplaytitle.style.textAlign='center';
    gameplaytitle.innerText="Here is some gameplay click the Image to watch";
    videoGameIMG.style.height='500px';
    videoGameIMG.style.width='700px';
    videoGameCover.style.width='100%';
    videoGameCover.style.height='100%';
    videoGameIMG.style.margin='auto';
    tf2video.style.display='none';
});
videoGameIMG.addEventListener('click',function(){
    videoGameCover.style.display='none';
    gameplaytitle.style.display='none';
    tf2video.style.display='block';
    userdiv.style.display ='block';
    titleprompt.style.color='white';
})
submitBtn.addEventListener('click',function(){
    let li =document.createElement('li');
    li.textContent=input.value;
    li.style.color='white';
    useroutput.appendChild(li);
    input.value='';
   

});
orangeBtn.addEventListener('click',function(){
    body.style.backgroundColor='orange';
});
goldBtn.addEventListener('click',function(){
    body.style.backgroundColor='gold';
});