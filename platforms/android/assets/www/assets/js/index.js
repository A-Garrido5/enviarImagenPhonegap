

$(document).ready(function (){

	var value = window.localStorage.getItem("username");

	alert(value);

	if (value.lenght < 4)
	{
		alert("1");
		$("#linkPopUplogin").live();
	}
	else
	{	
		alert("2");
		$('#nameRight').text(value);
	}


});

function login(datos){

	
	var urlLogin="http://sae1.imatronix.com:2614/WEBAPI_SERVICE/api/Login/"+datos; 
	        
	$.ajax({
          url: urlLogin,
          type: "GET",
          dataType: "json",
          success: function(json) {
            alert(JSON.stringify(json));
            var sesionvalida = parseInt(json.sesionValida);
            if(sesionvalida!=1){
              alert(json.mensaje);
                                  }
            else{
              alert("            "+json.mensaje +'\n'+json.nombres);
//                     localStorage.setItem("username", json.nombres);
				
				$('#nameRight').text(json.nombres);
				localStorage.setItem("username", json.nombres);
              
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

var permanentStorage = window.localStorage;