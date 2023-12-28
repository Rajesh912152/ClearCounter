let counterEl=document.getElementById('counter')
let clearBtn=document.getElementById('clear')

let count=0
let uniqueNo=setInterval(function(){
    counterEl.textContent=count
    count+=1
},1000)


clearBtn.addEventListener('click',function(){
    counterEl.textContent=0
    clearInterval(uniqueNo)
})