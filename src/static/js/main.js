
function mostrar() {
	$(".p_n").css('visibility', 'hidden')
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("all_display").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("all_display").style.display = "none";
    $(".p_n").css('visibility', 'visible')
}

$("#all_display").on("click",function() { ocultar() })


function sol(p){
        $(p).css('width', '50px')
        $(p).css('border-radius', '50%')
        $(p).removeClass('cliker')
        $(p).css('margin-left', '40%')
}

var cont = 0

function deslize(n, element) {
    if (cont == 2) {
        sol(element)
        cont = 0
    }
}

$(".price_acord").on("click",function() {
    $(this).css('width', '145px')
    $(this).css('border-radius', '4px')
    $(this).css('margin-left', '20%')
    $(this).addClass('cliker')
    cont = cont + 1
    deslize(cont, this)
})



