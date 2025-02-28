let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('#reset');
let startcontainer=document.querySelector('#start');
let massage=document.querySelector('#massage');
let newgamebutton=document.querySelector('#new-game');



let turn0=true;
let array=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
        const resetGame= ()=>
        {
            turn0=true;
            enableBoxes();
            massage.classList.add('hide-massage');

        };

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("Box clicked");
        if(turn0)
        {
            box.innerHTML='O';
            turn0=false;
        }
        else{
            box.innerHTML='X';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>
{
    for(let box of boxes)
    { 
       box.disabled=true;
    }
};


const enableBoxes=()=>
    {
        for(let box of boxes)
        {  
             box.disabled=false;
             box.innerText="";
        }
    };


const showMassage=(winner)=>
{
    massage.innerText=`Congratulations ${winner} Won The Match`;
    massage.classList.remove('hide-massage');
    disableBoxes();
}

const checkWinner= ()=>
{
    for(let pattern of array)
    {
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val= boxes[pattern[1]].innerHTML;
        let pos3val= boxes[pattern[2]].innerHTML;
    
        if(pos1val!=""&& pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner",pos1val);
                showMassage(pos1val);
            }
        }
    }
};

reset.addEventListener("click",resetGame);
newgamebutton.addEventListener("click",resetGame)