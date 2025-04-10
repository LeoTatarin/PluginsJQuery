$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 0 0000-0000')

    $('form').validate({
        rules:{
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculoInteresse: {
                required: false,
            },
        },
        messages:{
            nome: 'Por favor, digite seu nome.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
        }
    })

    $('#irsobre').click(function() {
        const irPara = $('#sobre-a-loja');
        const deslocamento = 200;
        $('nav').slideUp();

        $('html').animate({
            scrollTop: irPara.offset().top - deslocamento
        }, 1000)
    })

    $('#irdestaque').click(function() {
        const irPara = $('.em-destaque');
        const deslocamento = 200;
        $('nav').slideUp();

        $('html').animate({
            scrollTop: irPara.offset().top - deslocamento
        }, 1000)
    })

    $('#irpromocao').click(function() {
        const irPara = $('.promocao');
        const deslocamento = 200;
        $('nav').slideUp();

        $('html').animate({
            scrollTop: irPara.offset().top - deslocamento
        }, 1000)
    })

    $('#ircontato').click(function() {
        const irPara = $('#contato');
        $('nav').slideUp();

        $('html').animate({
            scrollTop: irPara.offset().top
        }, 1000)
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})