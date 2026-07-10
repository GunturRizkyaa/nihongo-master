let cards=[];

let first=null;

let second=null;

let score=0;

// ambil 8 huruf pertama
let data=hiragana.slice(0,8);

data.forEach(item=>{

cards.push({
text:item.kana,
id:item.id
});

cards.push({
text:item.romaji,
id:item.id
});

});

// acak
cards.sort(()=>Math.random()-0.5);

const board=document.getElementById("gameBoard");

cards.forEach(card=>{

const div=document.createElement("div");

div.className="game-card";

div.innerHTML=card.text;

div.dataset.id=card.id;

div.onclick=function(){

selectCard(div);

};

board.appendChild(div);

});

function selectCard(card){

if(card.classList.contains("matched")) return;

if(first==null){

first=card;

card.classList.add("selected");

return;

}

if(second==null && card!=first){

second=card;

card.classList.add("selected");

check();

}

}

function check(){

if(first.dataset.id==second.dataset.id){

first.classList.remove("selected");

second.classList.remove("selected");

first.classList.add("matched");

second.classList.add("matched");

score++;

document.getElementById("score").innerHTML="Skor : "+score;

first=null;

second=null;

}else{

setTimeout(()=>{

first.classList.remove("selected");

second.classList.remove("selected");

first=null;

second=null;

},700);

}

}