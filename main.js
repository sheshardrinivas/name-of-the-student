theof=[];
function hi(){

var name1= document.getElementById("name1").value;
var name2= document.getElementById("name2").value;
var name3= document.getElementById("name3").value;
var name4= document.getElementById("name4").value;


theof.push(name1,  name2,  name3,  name4)

console.log(theof)

document.getElementById("name45").innerHTML=theof;

}