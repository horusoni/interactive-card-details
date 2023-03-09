let btn = document.getElementById('btn')

//card name and number
let inpName = document.getElementById('name-inp')

//exp
let mm = document.getElementById('inp-mm')
let yy = document.getElementById('inp-yy')
let cvc = document.getElementById('inp-cvc')

//card data
let cardNum = document.getElementById('card-number')
let cardName = document.getElementById('card-name')
let cardEx = document.getElementById('card-mm-yy')
let cardCvc = document.getElementById('card-cvc')

//error menseger
let erroNumber = document.getElementById('erro-number')
let erroName = document.getElementById('erro-name')
let erroXp = document.getElementById('exp-error')
// tratando input name
inpName.addEventListener('keyup',(e)=>{
   inpName.value.length < 1? erroName.innerHTML = "Can't be blank" : erroName.innerHTML = ""
   cardName.innerHTML = inpName.value.toUpperCase()   

   e.key == "Enter" ? inpNumber.focus() :  null
   
})
// tratando input numero
let inpNumber = document.getElementById('number-inp')
inpNumber.addEventListener('keyup',(e)=>{

    //formatando dígitos
    let FN = inpNumber.value.replace(/\d{4}(?=\d)/g, "$& ")
    inpNumber.value = FN 
    cardNum.innerHTML = inpNumber.value

    let FNnum = FN.replace(/\s+/g, "")

    if(Number(FNnum) || inpNumber.value.length == 0){
        inpNumber.style.borderImage = 'linear-gradient(to right,  hsl(249, 99%, 64%), hsl(278, 94%, 30%))'
        inpNumber.style.borderImageSlice = "1"
        erroNumber.innerHTML = ""
    }else{
        inpNumber.style.border = "1px solid red"
        erroNumber.innerHTML = "Wrong format, numbers only"
    }
    e.key == 'Enter'? mm.focus() :null
})

// tratando input mm
mm.addEventListener('keyup',(e)=>{
    cardEx.innerHTML = `${mm.value}/${yy.value}`

    if(mm.value.length <1 || mm.value != Number(mm.value)){
        mm.style.border = "1px solid red"
        erroXp.innerHTML = "Can't be blank"
    }else{
        mm.style.borderImage = 'linear-gradient(to right,  hsl(249, 99%, 64%), hsl(278, 94%, 30%))'
        mm.style.borderImageSlice = "1"
        erroXp.innerHTML = ""
    }
    e.key == "Enter" ? yy.focus() : null
})
// tratando input yy
yy.addEventListener('keyup',(e)=>{
    cardEx.innerHTML = `${mm.value}/${yy.value}`
    if(yy.value.length <1 || yy.value != Number(yy.value)){
        yy.style.border = "1px solid red"
        erroXp.innerHTML = "Can't be blank"
    }else{
        yy.style.borderImage = 'linear-gradient(to right,  hsl(249, 99%, 64%), hsl(278, 94%, 30%))'
        yy.style.borderImageSlice = "1"
        erroXp.innerHTML = ""
    }
    e.key == 'Enter' ? cvc.focus() : null
})

// tratando input cvc
cvc.addEventListener('keyup',()=>{
    if(cvc.value.length < 1 || cvc.value != Number(cvc.value) ){
        cvc.style.border = "1px solid red"
        erroXp.style.marginLeft ="20%"
        erroXp.innerHTML = "Can't be blank"
    }else{      
        cvc.style.borderImage = 'linear-gradient(to right,  hsl(249, 99%, 64%), hsl(278, 94%, 30%))'
        cvc.style.borderImageSlice = "1"
        erroXp.style.marginLeft ="40%"
        erroXp.innerHTML = ""
    }
    cardCvc.innerHTML = cvc.value
})

let formCont = document.getElementById('form-cont')
let success = document.getElementById('success')

btn.addEventListener('click',()=>{
  
    if(inpName.value == ""){
        erroName.innerHTML = "Can't be blank" 
    }else if(inpNumber.value == ""){
        erroNumber.innerHTML = "Can't be blank"
    }else if(yy.value == ""){
        erroXp.innerHTML = "Can't be blank"
    }else if(mm.value == ""){
        erroXp.innerHTML = "Can't be blank"
    }else if(cvc.value == ""){
        erroXp.innerHTML = "Can't be blank"
    }else{
        addSuccess()
    }

})

function addSuccess(){
    erroName.innerHTML = ""
    formCont.classList.add('hidden')
    success.classList.remove('hidden')
}

let btnContinue = document.getElementById('btn-continue')
btnContinue.addEventListener('click',()=>{
    formCont.classList.remove('hidden')
    success.classList.add('hidden')

    inpName.value = ""
    inpNumber.value = ""
    yy.value = ""
    mm.value = ""
    cvc.value = ""
    cardNum.innerHTML = ""
    cardName.innerHTML = ""
    cardEx.innerHTML = ""
    cardCvc.innerHTML = ""
})