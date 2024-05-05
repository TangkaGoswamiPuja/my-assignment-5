
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
        table()
    }
    updateTotalSeats()
