const boxes=document.querySelectorAll(".box");
const gradients=["linear-gradient(to right, #ed213a, #93291e)",
" linear-gradient(to right, #74ebd5, #acb6e5)",
"linear-gradient(to right, #d9a7c7, #fffcdc)",
"linear-gradient(to right, #ed213a, #93291e)",
" linear-gradient(to right, #74ebd5, #acb6e5)",
"linear-gradient(to right, #d9a7c7, #fffcdc)"];
const clicked=function(e){
   
    if(e.propertyName.includes('flex')){
    this.classList.toggle('class-active');
    const gradientIndex=this.getAttribute('data-index');
    console.log(gradientIndex);
    this.style.background=gradients[gradientIndex];

  
}
   


}
const clickednot=function(){
    this.classList.toggle('open');

}
boxes.forEach(box=>box.addEventListener('transitionend',clicked));
boxes.forEach(box=>box.addEventListener('click',clickednot));
const audio=document.querySelectorAll("audio");


