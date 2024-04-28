import React from 'react';
import "../../public/Stylesheet/Style.css"
const Modal = () => {
	
function createModal(messageText,okBtn,cencelBtn,type,callback) {
		const modals = document.getElementsByClassName('main');
	
	
if(modals[0]===undefined){
	
 let imgSrc=imgSellect(type).imgSrc;
 let titleSrc=imgSellect(type).title;
 
 console.log(imgSrc)
 
  let status=true;
 let div=document.createElement("div");
 let title=document.createElement("div");
 let message=document.createElement("div");
 let buttonBox=document.createElement("div");
 let imageBox=document.createElement("div");
let titleValue=document.createTextNode(`${titleSrc}`)
let messageValue = document.createTextNode(messageText)
let imageValue = document.createElement("img");
   imageValue.src=`${imgSrc}`;

//all elem class add
 imageValue.classList.add("image")
 title.classList.add("title")
 div.classList.add("main")
 message.classList.add("message")
 buttonBox.classList.add("buttonBox")
 imageBox.classList.add("imageBox")
 //div element append
 div.appendChild(imageBox)
 div.appendChild(title)
 div.appendChild(message);
 div.appendChild(buttonBox);
 imageBox.appendChild(imageValue);
 
 title.append(titleValue);
 message.append(messageText);
 
 typeModalStyle(title,type);
 
 
 
 if(cencelBtn === false || okBtn === false ){
  
   buttonBox.classList.toggle("single")
   
 }
 
 
 
 
 
 //Create cancel button
 
 if (cencelBtn !== false) {

  let cencelButton = document.createElement("button");
  let cencelButtonValue = document.createTextNode("Cencel");

  cencelButton.classList.add("cencelButton");

  cencelButton.append(cencelButtonValue);
  buttonBox.appendChild(cencelButton)
  
  cencelButton.addEventListener("click",()=>{
    status = false;
callback(status);
document.body.removeChild(div);
  })

}
 
 
 
 
 
 //Create Ok button
 
 
 if (okBtn !== false) {
  
   let okButton=document.createElement("button");
   let okButtonValue=document.createTextNode("Ok");
   
   okButton.classList.add("okButton");
   
   okButton.append(okButtonValue);
   buttonBox.appendChild(okButton)
   okButton.addEventListener("click",()=>{
     status = true;
callback(status);
document.body.removeChild(div);
   })
   
 }
 
 //single button design
 
 
 if(okBtn===null || cencelBtn ===null){
   buttonBox.classList.toggle("singleButton")
 }
 
 
 
 document.body.appendChild(div)
 
 return status;
}
} 

//imaage sellect function

function imgSellect(type) {
  let imgSrc;
  let title;
  let typeModal=type.toLowerCase();
 
 
 if(typeModal==="warning"){
   imgSrc="../../node_modules/package-run/public/images/Warning.svg";


   title="Warning! ";
 } else if (typeModal==="success") {
   imgSrc="../../node_modules/dynamic-alert-modal/public/images/Success.svg";
   title="Successfully!"
 } else if (typeModal==="danger") {
   imgSrc="../../node_modules/dynamic-alert-modal/public/images/Danger.svg"
   title="Danger!"
 } else if (typeModal==="question") {
   imgSrc="../../node_modules/dynamic-alert-modal/public/images/Question.svg"
   title="are you sure? "
 } else {
   imgSrc=null;
   title=null;
 }
 
 let x="ff"
 return {imgSrc,title};
 
}


function typeModalStyle(title,typeModal) {
  if(typeModal==="warning"){
 title.style.color="yellow"
 } else if (typeModal==="success") {
   title.style.color="green";
 } else if (typeModal==="danger") {
   title.style.color="red";
 } else if (typeModal==="question") {
   title.style.color="blue";
 } else {
   imgSrc=null;
   title=null;
 }
 
  
}




return {createModal}
	
	
}

export default Modal;