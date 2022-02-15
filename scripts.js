function isletter(ch) {
    return ch.toLowerCase() != ch.toUpperCase();
}
const nom =document.getElementById("nom");
const prenom =document.getElementById("prenom");
const em =document.getElementById("email");
const pass =document.getElementById("password");
function verif()
{
    n = nom.value;
    p = prenom.value;
    e = em.value;
    pa = pass.value;
    if(isletter(n)==false)
    {
        alert("error nom");
        return false;
    }
    else if(isletter(p)==false)
    {
        alert("error prenom");
        return false;
    }
    else
    if(e.length==0 || e.indexOf("@")==-1 || e.indexOf(".")==-1)
    {
        alert("error email")
        return false;
    }
    else
    if(pa.length()<8 || pa.length()>15)
    {
        alert("error password");
        return false;
    }


    
    
}