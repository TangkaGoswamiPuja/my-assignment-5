
    const hitBUtton = document.getElementById("hit-btn").addEventListener("click",function(){
        const getTicketSec = document.getElementById('ticket-sec')
getTicketSec.scrollIntoView({behavior:"smooth"})
        // console.log(getTicketSec)

    })

  
// function color()
// {
    
//      const showLIst = document.getElementById("adding-list")
//      showLIst.innerHTML=` <div class="grid grid-cols-3 mt-4">
//      <p>A3</p>
//      <p>Economy</p>
//      <p>500</p>
//  </div>
//  <div class="grid grid-cols-3 mt-2">
//      <p>A4</p>
//      <p>Economy</p>
//      <p>500</p>
//  </div>`

// }
let selectedSeats = 0;
// let phnInput = false;

let add = 0;
 let newTK = 0
 let newgrandTK=0
 function changeColor(id)
    { const changeClick =document.getElementById(id)
        if (!changeClick.classList.contains('bg-[#1DD100]')) {
            if (selectedSeats >= 4) {
                alert("You can't select more than 4 seats.");
                return;
            }
            selectedSeats++;
        } else {
            selectedSeats--;
        }
        changeClick.classList.toggle('bg-[#1DD100]')
        updateTotalSeats();
        const catchText = changeClick.innerText
        // console.log(catchText)
        count()
        table(catchText)
        total()
        grand()
     
    }
    updateTotalSeats()
// function call(){
//     console.log(next())
//     modal()
// }

function next(){
        
    const phnInput = document.getElementById("takePhn" ).value

const nextButton = document.getElementById("nextBtn");
const phoneNumber = parseInt(phnInput);

if(!isNaN(phoneNumber) && phoneNumber > 0 && selectedSeats>0 ){

    
     alert("plz go next")
} else {

    alert("plz input number")
}
console.log(phoneNumber, nextButton)
}

function apply(){
    const coupon = document.getElementById("apply")
    const take = document.getElementById("search").value
    const discountElement = document.getElementById("price2");
    console.log(coupon,take,newgrandTK)
    if(take==="NEW15" || take==="Couple 20")

    { 
    coupon.removeAttribute("disabled")

        // alert("Coupon applied successfully!");
    let discountPercent;
        if (take === "NEW15") {
            discountPercent = 0.15
        } else if (take === "Couple 20") {
            discountPercent = 0.20
        }
        const discountAmount = newgrandTK * discountPercent;

        const discountedPrice = newgrandTK - discountAmount;

        discountElement.textContent = discountedPrice;

    }
    else{
        coupon.setAttribute("disabled",false)

        // alert("Please enter a valid coupon code.");

    }
}
    