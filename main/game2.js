let numSelected = null;
let tileSelected =null;
 let error = 0;
 let res = false;

  
 let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----", 
    "81--45---" 
];
let solution=[
    "387491625",
    "241568379",
    "569327418",
    "756819234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];

function setDigit(){
    for(let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.classList.add("number");
        number.addEventListener("click",selectNumber);
        document.getElementById("digit").appendChild(number);
    }
}

function setBoard() {
    for(let r = 0; r <   9; r++) {
        for(let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c] != "-")
            {
                tile.innerText= board[r][c];
                tile.classList.add("filled-number")  
            }
            if( r===2 || r===5)
            {
              tile.classList.add("horizontal-line");
            }
            if( c===2 || c===5)
                {
                  tile.classList.add("vertical-line");
                }
    
            tile.classList.add("tile");
            tile.addEventListener("click",selectedTile);
            document.getElementById("board").appendChild(tile);
        }
    }
}

function selectNumber(){
    if(numSelected != null)
    {
        numSelected.classList.remove("number-selected");
    }
    numSelected= this;
    numSelected.classList.add("number-selected");
}
function selectedTile(){
    if(numSelected)
    {
        if(this.innerText != "")
        {
            return;
        }
        let colm= this.id.split("-");
        let r = parseInt(colm[0]);
        let c = parseInt(colm[1]);
        
        if(solution[r][c] === numSelected.id)
        {
            this.innerText = numSelected.id;
            this.classList.add("correct-number");
        }
        else
        {
            error += 1;
            document.getElementById("error").innerHTML =` <div id="error"> ERROR : ${error}</div>`;
        }

    }
    

}

document.getElementById("btn").addEventListener("click",()=>{
    window.location.reload();

});


setDigit();
setBoard();