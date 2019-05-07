$(document).ready(function(){

	//quando passar o mouse no logotipo irá executar uma função
	$("#logotipo").on("mouseover",function(){

			/*$("#banner h1").css("color","red");//Altera a cor do h1 no banner direto no jquery
			$("#banner h1").css({"color":"red", "font-size":"12em","transition":"1s"});//alterar várias propriedades.*/
			$("#banner h1").addClass("efeito");

	}).on("mouseout",function(){

			$("#banner h1").removeClass("efeito");

	});

	$("#input-search").on("focus",function(){

		$("li.search").addClass("ativo");

	}).on("blur",function(){ //blur=perder o foco no campo

		$("li.search").removeClass("ativo");

	});

	$(".thumbnails").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: ["Anterior","Próximo"],
		responsive: {
			0 :{
				items: 1
			},
			480 :{
				items: 2
			},
			768 :{
				items: 3
			},
			1200 :{
				items: 4
			}
		}
	});

	var owl = $(".thumbnails");
	owl.owlCarousel();
	$('#btn-news-prev').on("click", function(){

		owl.trigger('prev.owl.carousel');

	});

	$('#btn-news-next').on("click", function(){

		owl.trigger('next.owl.carousel');
		
	});

	$("#page-up").on("click", function(event){

		$("body").animate({
			scrollTop:0
		}, 1000); /*animação scrollTop, 0 é a posição e o 1000 é a quantidade de milissegundos*/

		event.preventDefault();
	});

	$("#btn-bars").on("click", function(){

		$("header").toggleClass("open-menu"); /*abrir e esconder menu responsivo */
	
	});

	$("#menu-mobile-mask, .btn-close").on("click", function(){

		$("header").removeClass("open-menu");

	});

	$("#btn-search").on("click", function(){

		$("header").toggleClass("open-search");
		$("#input-search-mobile").focus();

	});

});