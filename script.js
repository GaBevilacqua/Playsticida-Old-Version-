var i = setInterval(function () {
    
    clearInterval(i);
  
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 2200);


$(window).scroll(function() {
    var posicao = $('.efeito').offset().top;
    var alturaTela = $(window).height();
    var alturaObjeto = $('.efeito').outerHeight();
  
    if ($(window).scrollTop() > posicao - alturaTela + alturaObjeto/2) {
      $('.efeito').addClass('mostrar');
    }
  });

  $(window).scroll(function() {
    var posicao = $('.efeito-saida').offset().top;
    var alturaTela = $(window).height();
    var alturaObjeto = $('.efeito-saida').outerHeight();

    if ($(window).scrollTop() > posicao - alturaTela + alturaObjeto/2) {
        $('.efeito-saida').addClass('mostrar');
    } else {
        $('.efeito-saida').removeClass('mostrar');
    }
});
