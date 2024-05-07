let button=document.getElementById("btn")
let wrap=document.getElementById("wrap")
let color=document.getElementById("color")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

button.addEventListener('click',changeBg)
function changeBg(){
  let hexValue='#'
  //console.log(randHexValue())
  for(i=0;i<6;i++){
    hexValue+=randHexValue()
  }  
  console.log(hexValue)
  wrap.style.backgroundColor=hexValue
  color.innerHTML=hexValue
  
}
function randHexValue(){
  let randIndex=Math.floor(Math.random()*16)
  return hex[randIndex]
}