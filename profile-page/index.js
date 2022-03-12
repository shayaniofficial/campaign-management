function makeContentEditable()
{
    document.getElementById("myfile").disabled = false;
    document.getElementById("filesubmit").disabled = false;
    document.getElementById("comment").disabled = false;
    document.getElementById("name").contentEditable = "true";
    document.getElementById("email").contentEditable = "true"
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("add-1").style.visibility = "visible";
    document.getElementById("add-2").style.visibility = "visible";
    document.getElementById("add-3").style.visibility = "visible";
    document.getElementById("add-4").style.visibility = "visible";
}

function makeFinal()
{
    document.getElementById("myfile").disabled = true;
    document.getElementById("filesubmit").disabled = true;
    document.getElementById("comment").disabled = true;
    document.getElementById("name").contentEditable = "false";
    document.getElementById("email").contentEditable = "false";
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn1").disabled = false;   
    document.getElementById("add-1").style.visibility = "hidden";
    document.getElementById("add-2").style.visibility = "hidden";
    document.getElementById("add-3").style.visibility = "hidden";
    document.getElementById("add-3").style.visibility = "hidden";
}
