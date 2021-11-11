document.getElementById("submit").addEventListener("click",submitform)
function submitform(){
    var name=document.getElementById("name").value;
    var proffesion=document.getElementById("proff").value; 
    var email=document.getElementById("email").value;
    var state=document.getElementById("state").value;
    alert(name+proffesion+email+state)
    savedata(name,proffesion,email,state)
}
savedata(name,proffesion,email,state){
    
}