
// function changeColor(idname)
// {
    

//     const changeClick =document.getElementById(idname)
//     changeClick.classList.toggle('bg-[#1DD100]')
// }

function table(){
    const showLIst = document.getElementById("adding-list")
        showLIst.innerHTML=` <div class="grid grid-cols-3 mt-4">
        <p>A3</p>
        <p>Economy</p>
        <p>500</p>
    </div>
    <div class="grid grid-cols-3 mt-2">
        <p>A4</p>
        <p>Economy</p>
        <p>500</p>
    </div>`
   
}

function updateTotalSeats() {
    document.getElementById("seats-left").textContent = (8 - selectedSeats);
}