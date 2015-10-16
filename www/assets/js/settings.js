
document.getElementById('accept').style.marginRight = "100px";
document.getElementById('cancel').style.marginLeft = "100px";

 
    document.getElementById("descripcion").autofocus;
$('#cancel').click(function() { 

	parent.history.back();


});

function sendData(){

}

$('#accept').click(function() { 

	var edificio=$('#edificio').val();
	var criticidad=$('#criticidad').val();
	var categoria=$('#categoria').val();

	var descripcion=$('#descripcion').val();

	alert(descripcion);



});