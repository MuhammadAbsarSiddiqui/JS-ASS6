// ********Q1*********
const btn1 = document.getElementById("btn1");
btn1.addEventListener('click', function(){
    alert("Button Clicked!");
})
// *********Q2********
const element = document.getElementById("element");
element.addEventListener('mouseover', function(){
    element.style.backgroundColor="red";
    
})
element.addEventListener('mouseleave', function(){
    element.style.backgroundColor="aquamarine";
})