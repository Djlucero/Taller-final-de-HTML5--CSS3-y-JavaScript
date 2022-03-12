function validarformulario(){
var enviar=true;  
var nombre = document.getElementById("nombre").value;
var asunto= document.getElementById("asunto").value;
var email= document.getElementById("email").value;
var mensaje=document.getElementById("mensaje").value;
var formulario=document.getElementById("formulario").value;
if (nombre==" "){
    alert("Digite su nombre.");
    document.getElementById("nombre").focus();
    verificar=false;
	return false;
}else{
    if(asunto==" "){
        alert("Digite Asunto.");
        document.getElementById("asunto").focus();
        verificar=false;
        return false;
    }else{
        if (email==" "){
            alert("Digite su Email.");
            document.getElementById("email").focus();
            verificar=false;
            return false;
        }else{
            if(mensaje==" "){
                alert("Digite su Mensaje.");
                document.getElementById("mensaje").focus();
                verificar=false;
                return false;
            }else{
                console.log(nombre+" "+email+" "+asunto+" "+mensaje);
                document.getElementById("nombre").value=" ";
                document.getElementById("asunto").value=" ";
                document.getElementById("email").value=" ";
                document.getElementById("mensaje").value=" ";
                document.getElementById("nombre").focus();
            }
        }
    }
}



}