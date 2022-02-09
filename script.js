'use strict'

let header = document.querySelector("#header1");
let title = document.createElement("h1");
title.innerHTML = "DOM Demo";

header.appendChild(title);

function CreateName (createName){
  this.createName = createName;
}

function creator(){
   console.log('name was clicked');
   let jason = new CreateName ("jason");
   console.log(jason);
}

let nameSection = document.querySelector("#section1");
let nameCreator = document.createElement("h2");
nameCreator.innerHTML = "My Name";
nameSection.appendChild(nameCreator);
nameCreator.addEventListener('click', creator);