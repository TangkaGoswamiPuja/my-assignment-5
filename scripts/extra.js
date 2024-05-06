
// function changeColor(idname)
// {
    

//     const changeClick =document.getElementById(idname)
//     changeClick.classList.toggle('bg-[#1DD100]')
// }

function table(catchText){
    const showLIst = document.getElementById("adding-list")
    // console.log(showLIst)
    const div = document.createElement ("div")
        div.innerHTML=` <div class="grid grid-cols-3 mt-4">
        <p>${catchText}</p>
        <p>Economy</p>
        <p>500</p>
     </div>
    `
   showLIst.appendChild(div)
 }

function total(){
    newTK += 500 ;
        // console.log(newTK)
        const totalAmount = document.getElementById("price","price2")
        totalAmount.innerText = newTK
        // console.log(totalAmount)
}
function count(){
    add ++
    // console.log(add)
    const totalAdd = document.getElementById("add")
    totalAdd.innerText = add
}

function grand(){
    newgrandTK += 500 ;
        const totalAmount2 = document.getElementById("price2")
        totalAmount2.innerText =  newgrandTK
        // console.log(totalAmount2)
}

function updateTotalSeats() {
    document.getElementById("seats-left").textContent = (8 - selectedSeats);
}


// function next(){
        
//         const phnInput = document.getElementById("takePhn" ).value

//   const nextButton = document.getElementById("nextBtn");
//   const phoneNumber = parseInt(phnInput);

//   if(!isNaN(phoneNumber) && phoneNumber > 0 ){
//     nextButton.disabled = false;
//     } else {
//         nextButton.disabled = true;
//     }
//     console.log(phoneNumber, nextButton)
// }


