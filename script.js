

//Globální proměnné - chyba?
var checkWin = [];
var player = "circle";
var array = ["circle"];
var btn = document.querySelectorAll("button");
//var gridArray = [];

//Funkce pro střídání hráče (křížku a kolečka)
function switchPlayer(){
    if(array == "circle"){
        player = "cross"
        array.fill(player);
    } else if (player == "cross"){
        player = "circle"
        array.fill(player);
    }
}

//Eventlistener pro přidání symbolu
for (let i = 0; i < 100; i++) {
    btn[i].addEventListener("click", addSymbol);
    function addSymbol() {
        btn[i].classList.add(player); 
        switchPlayer();
        //gridArray = [];   
        checkGame();
        if (btn[i].classList.contains("circle")){
            var crc = document.createElement("img");
            crc.src = "./circle.svg";
            btn[i].append(crc);
            btn[i].style.pointerEvents = 'none';
            crc.style.height = "95%";
            crc.style.minHeight = "10px";
            crc.style.width = "95%";
            crc.style.minWidth = "10px";
            crc.style.display = "block";
        } else {
            var crs = document.createElement("img");
            crs.src = "./cross.svg";
            btn[i].append(crs);
            btn[i].style.pointerEvents = 'none';
            crs.style.height = "95%";
            crs.style.minHeight = "10px";
            crs.style.width = "95%";
            crs.style.minWidth = "10px";
            crs.style.display = "block";
        }
    }
}

//pokus o kontrolu pravidel pomomcí array
/*function checkGame(){
    for(let j = 0; j < 100; j++){
        gridArray.push(btn[j]);
        }
    console.log(gridArray);  
}*/

/*function announceWinner(){
    var table = document.createElement("div");
    table.style.height = "200px";
    table.style.width = "300px";
    var grid = document.querySelectorAll(".grid")
    grid[0].appendChild(table);
    table.classList.add("announcer")
}*/




//Vyhodnocení hry podle pravidel
function checkGame(){
    function checkCircleHorizontal(){
        for(let k = 0; k < 100; k++){
            if(btn[k].classList.contains("circle")){
                if(btn[k+1] && btn[k+1].classList.contains("circle")){
                    if(btn[k+2] && btn[k+2].classList.contains("circle")){
                        if(btn[k+3] && btn[k+3].classList.contains("circle")){
                            if(btn[k+4] && btn[k+4].classList.contains("circle")){
                                alert("Circle wins!")
                                for(let x = 0; x < 100; x++){
                                    btn[x].style.pointerEvents = 'none';
                                }
                                console.log(k)
                                for (let y = k; y < k+5; y++){
                                    btn[y].style.backgroundColor = "#abe352"
                                }
                            }
                        }
                    }
                } 
            }
        }
    }
    function checkCircleVertical(){
        for(let k = 0; k < 100; k++){
            if(btn[k].classList.contains("circle")){
                if(btn[k+10] && btn[k+10].classList.contains("circle")){
                    if(btn[k+20] && btn[k+20].classList.contains("circle")){
                        if(btn[k+30] && btn[k+30].classList.contains("circle")){
                            if(btn[k+40] && btn[k+40].classList.contains("circle")){
                                alert("Circle wins!")
                                for(let x = 0; x < 100; x++){
                                    btn[x].style.pointerEvents = 'none';
                                }
                                console.log(k)
                                for (let y = k; y < k+50; y += 10){
                                    btn[y].style.backgroundColor = "#abe352"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function checkCircleDiagonalRight(){
        for(let k = 0; k < 100; k++){
            if(btn[k].classList.contains("circle")){
                if(btn[k+11] && btn[k+11].classList.contains("circle")){
                    if(btn[k+22] && btn[k+22].classList.contains("circle")){
                        if(btn[k+33] && btn[k+33].classList.contains("circle")){
                            if(btn[k+44] && btn[k+44].classList.contains("circle")){
                                alert("Circle wins!")
                                for(let l = 0; l < 100; l++){
                                    btn[l].style.pointerEvents = 'none';
                                }
                                console.log(k)
                                for (let y = k; y <= k+44; y += 11){
                                    btn[y].style.backgroundColor = "#abe352"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function checkCircleDiagonalLeft(){
        for(let k = 0; k < 100; k++){
            if(btn[k].classList.contains("circle")){
                if(btn[k+9] && btn[k+9].classList.contains("circle")){
                    if(btn[k+18] && btn[k+18].classList.contains("circle")){
                        if(btn[k+27] && btn[k+27].classList.contains("circle")){
                            if(btn[k+36] && btn[k+36].classList.contains("circle")){
                                alert("Circle wins!")
                                for(let l = 0; l < 100; l++){
                                    btn[l].style.pointerEvents = 'none';
                                }
                                console.log(k)
                                for (let y = k; y <= k+36; y += 9){
                                    btn[y].style.backgroundColor = "#abe352"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    function checkCrossHorizontal(){
        for(let k = 0; k < 100; k++){
            if(btn[k].classList.contains("cross")){
                if(btn[k+1] && btn[k+1].classList.contains("cross")){
                    if(btn[k+2] && btn[k+2].classList.contains("cross")){
                        if(btn[k+3] && btn[k+3].classList.contains("cross")){
                            if(btn[k+4] && btn[k+4].classList.contains("cross")){
                                alert("Cross wins!")
                                for(let l = 0; l < 100; l++){
                                    btn[l].style.pointerEvents = 'none';
                                }
                                console.log(k)
                                for (let y = k; y < k+5; y++){
                                    btn[y].style.backgroundColor = "#abe352"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function checkCrossVertical(){
        for(let k = 0; k < 100; k++){
            if(btn[k].classList.contains("cross")){
                if(btn[k+10] && btn[k+10].classList.contains("cross")){
                    if(btn[k+20] && btn[k+20].classList.contains("cross")){
                        if(btn[k+30] && btn[k+30].classList.contains("cross")){
                            if(btn[k+40] && btn[k+40].classList.contains("cross")){
                                alert("Cross wins!")
                                for(let l = 0; l < 100; l++){
                                    btn[l].style.pointerEvents = 'none';
                                }
                                for (let y = k; y < k+50; y += 10){
                                    btn[y].style.backgroundColor = "#abe352"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function checkCrossDiagonalRight(){
        for(let k = 0; k < 100; k++){
            if(btn[k].classList.contains("cross")){
                if(btn[k+11] && btn[k+11].classList.contains("cross")){
                    if(btn[k+22] && btn[k+22].classList.contains("cross")){
                        if(btn[k+33] && btn[k+33].classList.contains("cross")){
                            if(btn[k+44] && btn[k+44].classList.contains("cross")){
                                alert("Cross wins!")
                                for(let l = 0; l < 100; l++){
                                    btn[l].style.pointerEvents = 'none';
                                }
                                for (let y = k; y <= k+44; y += 11){
                                    btn[y].style.backgroundColor = "#abe352"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function checkCrossDiagonalLeft(){
        for(let k = 0; k < 100; k++){
            if(btn[k].classList.contains("cross")){
                if(btn[k+9] && btn[k+9].classList.contains("cross")){
                    if(btn[k+18] && btn[k+18].classList.contains("cross")){
                        if(btn[k+27] && btn[k+27].classList.contains("cross")){
                            if(btn[k+36] && btn[k+36].classList.contains("cross")){
                                alert("Cross wins!")
                                for(let l = 0; l < 100; l++){
                                    btn[l].style.pointerEvents = 'none';
                                }
                                for (let y = k; y <= k+36; y += 9){
                                    btn[y].style.backgroundColor = "#abe352"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    checkCircleHorizontal();
    checkCircleVertical();
    checkCircleDiagonalRight();
    checkCircleDiagonalLeft();
    checkCrossHorizontal();
    checkCrossDiagonalRight();
    checkCrossDiagonalLeft();
    checkCrossVertical();
}
       



      
                        
                    