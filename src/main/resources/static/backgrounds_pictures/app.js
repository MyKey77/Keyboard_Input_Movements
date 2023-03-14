let gameDiv=document.getElementById('game');
let charDiv=document.getElementById('character');

document.addEventListener('keydown', handleKeys)
var leftright=0;
var updown=0;


function handleKeys(e){
    let keypress=e.code;   //BAL GOMB
    if(keypress === "ArrowRight"){
        console.log('right arrow pressed');
        leftright +=10;
        charDiv.style.left=leftright+'px';}

    if(keypress === 'ArrowLeft'){ // JOBB GOMB
        console.log('left arrow pressed')
        leftright -=10;

        charDiv.style.left=leftright+'px';}


    if(keypress === 'ArrowUp'){ // FEL GOMB
        console.log('up arrow pressed')
        updown -=10;
        charDiv.style.top =updown+'px';
    }

    if(keypress === 'ArrowDown'){ // LE GOMB
        console.log('down arrow pressed')
        updown +=10;
        charDiv.style.top =updown+'px';
    }
}