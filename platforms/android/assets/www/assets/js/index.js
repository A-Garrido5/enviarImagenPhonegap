



$(document).ready(function (){



	var value = window.localStorage.getItem("username");

	

	if (value===null){



    var ubicacionActual= window.location.pathname;

    
   //if(ubicacionActual!="login.html"){

    if(ubicacionActual==="/data/data/com.adobe.phonegap.app/files/files/phonegapdevapp/www/index.html"){

    }

    else if(ubicacionActual==="/data/data/com.adobe.phonegap.app/files/files/phonegapdevapp/www/login.html"){

    }

    else if(ubicacionActual==="/data/data/com.adobe.phonegap.app/files/files/phonegapdevapp/www/crearUsuario.html"){

    }

    else if(ubicacionActual!="/android_asset/www/login.html" && ubicacionActual!="/login.html" && ubicacionActual!="/crearUsuario.html" && ubicacionActual!="/android_asset/www/crearUsuario.html"){
        
        location.href="login.html";  
    }


  
		
		//$('#dialogLogin').show();
		//$( "#dialogLogin" ).trigger( "click" );

		//$( '#dialogLogin' ).click ();

//		document.getElementById('dialogLogin').onclick();

		


	}
	else
	{	
		
		$('#nameRight').text(value);
	}




});

function redirigir(ruta){

	location.href=ruta;

}

function logout(){

  localStorage.removeItem("username");

  location.href="login.html";


}

function login(datos){

	
	var urlLogin="http://sae1.imatronix.com:2614/WEBAPI_SERVICE/api/Login/"+datos; 
	        
	$.ajax({
          url: urlLogin,
          type: "GET",
          dataType: "json",
          success: function(json) {
            //alert(JSON.stringify(json));

            var sesionvalida = parseInt(json.sesionValida);
            if(sesionvalida!=1){
              alert(json.mensaje);
                                  }
            else{
             // alert("            "+json.mensaje +'\n'+json.nombres);

				
      				$('#nameRight').text(json.nombres);
      				localStorage.setItem("username", json.nombres);

              location.href="/android_asset/www/index.html";
              
            }
                            
            //document.getElementById('nombres').innerHTML=json.nombres.toString();
            
            //alert(json.nombres);
               
               
      
            
          },
          error:function (xhr, ajaxOptions, thrownError) {
             alert(JSON.stringify(thrownError));
             alert(JSON.stringify(xhr));
          }
    });

}

function isNumber(e) {
      k = (document.all) ? e.keyCode : e.which;
      if (k==8 || k==0) return true;
      patron = /\w/ ;
      n = String.fromCharCode(k);
      return patron.test(n);
}

$('#botonLogin').click(function() {


        var datosUsuario = $("#nombredeusuario").val()
        var datosPassword = $("#clave").val()
        var cripto = window.btoa(datosUsuario+'|'+datosPassword);

        login(cripto);
        


});


function crearCuenta(){
  location.href="crearUsuario.html";
}

function crearUsuario(nombre, apellidos, mail, telefono, celular, direccion, idPais){

  var urlCreate ="";

  $.ajax({
          url: urlCreate,
          type: "GET",
          dataType: "json",
          success: function(json) {
            alert(JSON.stringify(json));

               
      
            
          },
          error:function (xhr, ajaxOptions, thrownError) {
             alert(JSON.stringify(thrownError));
             alert(JSON.stringify(xhr));
          }
    });



}

function obtenerRegiones(){
  alert("Obteniendo regiones");

  var urlGetRegion ="http://sae1.imatronix.com:2614/WEBAPI_SERVICE/api/Region";

  $.ajax({
          url: urlGetRegion,
          type: "GET",
          dataType: "json",
          success: function(json) {
            alert(JSON.stringify(json));

            if (json != "") {

               var selectObject = $('#region');

               var jsonObject = eval(json);

               alert(jsonObject[0].glosa);


                

               for (var n = 0; n < jsonObject.length; n++) {
                    selectObject.append(new Option(jsonObject[n].glosa, jsonObject[n].glosa.Value));
               };
            }

               
      
            
          },
          error:function (xhr, ajaxOptions, thrownError) {
             alert(JSON.stringify(thrownError));
             alert(JSON.stringify(xhr));
          }
    });
}


function validarCampos(){

  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var filter6=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
  var num = /^([0-9])*$/;

  var errores=0;


  
  if (!filter6.test(document.getElementById("userName").value)){
    alert("Nombre de usuario inválido");
    errores++;
  }
  
  if (!filter6.test(document.getElementById("userLastName").value)){
    alert("Apellido inválido");
    errores++;
  }
  

  if (!expr.test(document.getElementById("email").value)){
    alert("Correo inválido");
    errores++;
  }

  if(document.getElementById("pass").value.length<4){
    alert("La contraseña debe ser mayor a 4 caracteres");
    errores++;
  }

  if(document.getElementById("pass").value != document.getElementById("passConfirm").value){
    alert("Las contraseñas no coinciden");
    errores++;
  }

  if(!num.test(document.getElementById("mobileFono").value)){
    alert("Número de celular inválido");
    errores++;
  }

  if(errores>0){
    alert("Errores: "+errores);
    return false;  
  }  

  else{
    return true;  
  }

  

}




$('#sendToCreate').click(function() {

        var esValido=validarCampos();

        var nombres = $("#userName").val();
        var apellidos = $("#userLastName").val();
        var mail = $("#email").val();
        var contrasena = $("#pass").val();
        var repetirPass = $("#passConfirm").val();
        var telefono = $("#fono").val();
        var celular = $("#mobileFono").val();
        var direccion = $("#address").val();
        var idPais = document.getElementById("idCountry");

        var i = idPais.selectedIndex;

        var realIdPais = idPais.options[i].text;

        if(esValido){
          alert("Todo bien");
        }



        

        

        

        
        
        

        
        //location.href="login.html"

});



var permanentStorage = window.localStorage;