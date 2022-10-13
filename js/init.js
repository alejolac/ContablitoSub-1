let productsArray ={}
const url = "js/db.json"


async function getJSON(url){
  response = await fetch(url);
  result = await response.json()
  return result
}

document.addEventListener("DOMContentLoaded", () => {
  getJSON(url).then((result) =>{
    actualResult = result
    return actualResult;
  }).then((actualResult)=>{
    if(localStorage.getItem("productsArray") == undefined){
      localStorage.setItem('productsArray', JSON.stringify(actualResult));
    }
  })
  productsArray = JSON.parse(localStorage.getItem('productsArray')) 
})




