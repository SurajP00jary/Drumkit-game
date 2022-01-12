const drumLength=document.querySelectorAll(".drum").length;
console.log(drumLength);
for(let i=0; i<drumLength; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(e){
       drumKit(this.innerHTML);
       animatingButtons(this.innerHTML);


   });
}
function drumKit(key){
switch(key){
    case "a":
        const first1=new Audio("sounds/crash.mp3");
        first1.play();
        break;
    case "b":
        const first2=new Audio("sounds/kick-bass.mp3");
        first2.play();
        break;
    case "c":
            const first3=new Audio("sounds/snare.mp3");
            first3.play();
            break;
    case "d":
                const first4=new Audio("sounds/tom-1.mp3");
                first4.play();
                break;
    case "e":
         const first5=new Audio("sounds/tom-2.mp3");
        first5.play();
        break;
        case "f":
            const first6=new Audio("sounds/tom-3.mp3");
           first6.play();
           break;
    case "g":
            const first7=new Audio("sounds/tom-4.mp3");
           first7.play();
           break;
           
}
}
function animatingButtons(key){
    const activeButton=document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
setTimeout(()=>{
    activeButton.classList.remove("pressed");
},500)
}