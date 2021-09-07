var	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup');



  function exit(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    $("#popup").css('visibility', 'hidden')
  }

  function active(name) {
    var html = '<a href="#" id="btn-cerrar-popup" onclick="exit()" class="btn-cerrar-popup"><i class="fas fa-times"></i></a> <br>'+name+'<hr>'
  	if (name != "") {
  		popup.innerHTML = html;
  	}
    $("#popup").css('visibility', 'visible')
  	overlay.classList.add('active');
  	popup.classList.add('active');
  }
