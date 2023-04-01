
//add active class
const addActive = async (element)=>{
    let arr = document.getElementsByClassName("boxsizes");
    Array.from(arr).forEach(element =>{
         if(element.classList.contains('active')){
            element.classList.remove('active');
         }
    })
    element.classList.add('active');
}



