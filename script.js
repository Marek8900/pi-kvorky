

//Globální proměnné - chyba?
var winArray = [];
var player = "circle";
var array = ["circle"];
var btn = document.querySelectorAll("button");

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
        checkGame();
        announceWin();
        if (btn[i].classList.contains("circle")){
            //var crc = document.createElement("img");
            //crc.src = "./circle.svg";
            var crc = document.createElement("div");
            crc.classList.add("crc")
            btn[i].appendChild(crc);
            btn[i].style.pointerEvents = 'none';
            /*crc.style.height = "95%";
            crc.style.minHeight = "10px";
            crc.style.width = "95%";
            crc.style.minWidth = "10px";
            crc.style.display = "block";*/
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

//funkce pro zastavení hry, volá se individuálně po každé "iteraci"
function stopGame(index){
    for(let x = 0; x < 100; x++){
        btn[x].style.pointerEvents = 'none';
    }
    winArray.push(index)
    
}

//funkce pro oznámení výherce
function announceWin(){
    if(winArray[0] == "Circle" || winArray[0] =="Cross"){
        console.log(winArray[0] + " wins!");
        //appendElement
       /* var winTable = document.createElement("div");
        winTable.style.maxHeight = "300px";
        winTable.style.maxWidth = "300px";
        winTable.style.minHeight = "100px";
        winTable.style.minWidth = "100px";
        winTable.style.height = "100%";
        winTable.style.width = "100%";
        winTable.style.backgroundColor = "white"
        document.body.appendChild(winTable)*/
    }
}


//Vyhodnocení hry podle pravidel
function checkGame(){
    function checkCircleHorizontal(){
        for(let k = 0; k < 100; k++){
            if(btn[k].classList.contains("circle")){
                if(btn[k+1] && btn[k+1].classList.contains("circle")){
                    if(btn[k+2] && btn[k+2].classList.contains("circle")){
                        if(btn[k+3] && btn[k+3].classList.contains("circle")){
                            if(btn[k+4] && btn[k+4].classList.contains("circle")){
                                stopGame("Circle");
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
                                stopGame("Circle");
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
                                stopGame("Circle");
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
                                stopGame("Circle");
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
                                stopGame("Cross");
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
                                stopGame("Cross");
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
                                stopGame("Cross");
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
                                stopGame("Cross");
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
       


//animace
/*
    for(let i = 0; i < 100; i++){
        btn[i].addEventListener('click', () => {
            function pulseRight() {
                let x = i
               // let borderNums = 
                const interval = setInterval(() => {
                    if(!(x > 99)){
                        btn[x].animate(animation, timing); 
                        x++;
                        if (x === i + 5) {
                            clearInterval(interval)  
                        }
                    }
                }, 80)
            }

            function pulseLeft() {
                let x = i
                const interval = setInterval(() => {
                    if(x !== 0){
                        btn[x].animate(animation, timing); 
                        x--;
                        if (x === i - 5) {
                            clearInterval(interval)
                        }
                    }
                }, 80)
            }
            pulseRight();
            pulseLeft();
        })
    }
        
*/


    const animation = [
        { transform: 'scale(1)'},
        { transform: 'scale(1.15)'},
        { transform: 'scale(1)'},
    ];

  

    const timing = {
        duration: 200,
        iterations: 1,
    }      
    for(let i = 0; i < 100; i++){
        btn[i].addEventListener('click', () => {
            btn[i].animate(animation, timing); 
        })
    }




