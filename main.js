const kattadiv =document.querySelector(".kattadiv")
const oyna = document.querySelector(".oyna")
const x = document.querySelector(".x")
const otp =document.querySelector(".otp")
const button =document.querySelector(".button")
const conteiner =document.querySelector(".conteiner")
const kattadivde =document.querySelector(".kattadivde")
const oynade = document.querySelector(".oynade")
const otpde =document.querySelector(".otpde")
const menu = document.querySelector("#menu")
const menubosh =document.querySelector(".menu")
const menuqora =document.querySelector(".menuqora")
const txtburger = document.querySelector("#txtburger")
const x1de = document.querySelector(".x1de")
const menude = document.querySelector("#menude")
const xi =document.querySelector(".x1")
const txtburgerde =document.querySelector(".txtburgerde")
const btn = document.querySelector(".sa")
kattadiv.classList.remove("kattadiv")

txtburger.style.display ="none"
oyna.classList.remove("oynas")
button.onclick = ()=>{
kattadiv.classList.add("kattadivde")
oyna.classList.add("oynade")
oyna.style.display ="block"
otp.classList.add("otpde")
menubosh.style.display ="none"
}
x.onclick = () =>{
    kattadiv.classList.remove("kattadivde")
    oyna.classList.remove("oynade")
    oyna.style.display ="none"
    otp.classList.remove("otpde")   
    menubosh.style.display ="block"
}
menubosh.onclick =() =>{
  menubosh.classList.add("menuqora") 
  menu.classList.add("menude") 
  xi.classList.add("x1de") 
  txtburger.style.display ="block"
  txtburger.classList.add("txtburgerde")
}
xi.onclick =() =>{
  menubosh.classList.remove("menuqora") 
  menu.classList.remove("menude") 
  xi.classList.remove("x1de") 
  txtburger.style.display ="none"
  txtburger.classList.remove("txtburgerde")

}