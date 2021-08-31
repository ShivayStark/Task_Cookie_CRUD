function add()
{
    let key=document.getElementById("addkey").value;
    let val=document.getElementById("addval").value;
    document.cookie = key + "=" + val;
    alert("COOKIE IS ADDED!!")
    showli();
}
function get(){
    let ke=document.getElementById("getkey").value;
        let sh=document.getElementById("show");
        let name = ke + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        sh.innerHTML=` <p>${c.substring(name.length, c.length)}</p>`;
        }
    }
}
function del(){
    let name=document.getElementById("delkey").value + "=";
    document.cookie = name + '=;max-age=0';
    alert("COOKIE IS DELETED!!")
    showli();
}
function showli(){
    let lis=document.cookie.split(';');
    let listt=document.getElementById("li");
    listt.innerHTML='';
    for(let l=0;l<lis.length;l++){
        
        listt.innerHTML+=
        `
        <p>${lis[l]} </p>
        `;
    }
}
