console.log("allen");
const clicked = async (event)=>{
  let element = event.currentTarget;
  console.log(element);
}



let ele = document.querySelectorAll(".changecolor");

ele.forEach(element =>{
    element.addEventListener("click", clicked);
})