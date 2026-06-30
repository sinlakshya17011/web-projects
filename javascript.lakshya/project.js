let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let tunr0 ="true";  //playerX player0

const winPattern = [
           [0, 1, 2],
           [0, 3, 6],
           [0, 4, 8],
           [1, 4, 7],
           [2, 5, 8],
           [2, 4, 6],
           [3, 4, 5],
           [6, 7, 8],
];


           const resetgame = () =>{
            tunr0 ="true";
            EnableBoxes();
            msgcontainer.classList.add("hide");
           };

boxes.forEach((box) => {
       
    box.addEventListener("click" , () =>{
        if(tunr0){
            //player 0
            box.innerText = "O"
            tunr0 = false;
        } else {
            //player X
            box.innerText = "X"
            tunr0 = true;
        };
          box.disabled = true;
         
          checkWinner();
          
        });
    });
        


        const disableBoxes = () =>{
        for(let box of boxes) {
            box.disabled = true;
        };
       };
        
         const EnableBoxes = () =>{
        for(let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        };
       };


      const showWinner = (winner) => {
        msg.innerText = `congratulations , Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
      };


      const checkWinner = () => {
        for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
              
                
            };
        };
       };
     };

   newgamebtn.addEventListener("click" , resetgame);   
   resetbtn.addEventListener("click" , resetgame); 