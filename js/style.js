$('#body-row .collapse').collapse('hide');

$('[data-toggle=sidebar-colapse]').click(function () {
    SidebarCollapse();
});


function SidebarCollapse() {
    //$('.menu-collapsed').toggleClass('d-none');
    //$('.sidebar-submenu').toggleClass('d-none');
    //$('.submenu-icon').toggleClass('d-none');
    //$('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    $('#sidebar-container').toggleClass('d-block');
    $('#navbar').toggleClass('d-none');
    $('#nav').toggleClass('bg-consys text-white-50 py-2');
    $('#logo').toggleClass('d-flex');

    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if (SeparatorTitle.hasClass('d-flex')) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
}
$(document).ready(function () {

    $('.navbar .dropdown-item.dropdown').on('click', function (e) {
        var $el = $(this).children('.dropdown-toggle');
        if ($el.length > 0 && $(e.target).hasClass('dropdown-toggle')) {
            var $parent = $el.offsetParent(".dropdown-menu");
            $(this).parent("li").toggleClass('open');

            if (!$parent.parent().hasClass('navbar-nav')) {
                if ($parent.hasClass('show')) {
                    $parent.removeClass('show');
                    $el.next().removeClass('show');
                    $el.next().css({"top": -999, "left": -999});
                } else {
                    $parent.parent().find('.show').removeClass('show');
                    $parent.addClass('show');
                    $el.next().addClass('show');
                    $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
                }
                e.preventDefault();
                e.stopPropagation();
            }
            return;
        }
    });

    $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
    });

});

function trocar() {

    $('body').toggleClass('fundo1');
    $('#navbar').toggleClass('bg-dark');
    $('#nav').toggleClass('bg-night');

    var obj2 = document.getElementById('fa');
    if (obj2.className == 'fa fa-toggle-on') {
        obj2.className = 'fa fa-toggle-off';
    } else {
        obj2.className = 'fa fa-toggle-on';
    }
    var obj3 = document.getElementById('lixeira');
    if (obj3.className == 'lixeira2 wrap') {
        obj3.className = 'lixeira wrap';
    } else {
        obj3.className = 'lixeira2 wrap';
    }
    var obj4 = document.getElementById('modal');
    if (obj4.className == 'modal-header1') {
        obj4.className = 'modal-header';
    } else {
        obj4.className = 'modal-header1';
    }
    var obj5 = document.getElementById('add');
    if (obj5.className == 'add2 wrap') {
        obj5.className = 'add wrap';
    } else {
        obj5.className = 'add2 wrap';
    }
    var obj6 = document.getElementById('titulo-iconesa');
    if (obj6.className == 'titulo-icones2') {
        obj6.className = 'titulo-icones';
    } else {
        obj6.className = 'titulo-icones2';
    }
    var obj7 = document.getElementById('titulo-iconesb');
    if (obj7.className == 'titulo-icones2') {
        obj7.className = 'titulo-icones';
    } else {
        obj7.className = 'titulo-icones2';
    }
    var obj8 = document.getElementById('titulo-iconesc');
    if (obj8.className == 'titulo-icones2') {
        obj8.className = 'titulo-icones';
    } else {
        obj8.className = 'titulo-icones2';
    }
    var obj9 = document.getElementById('titulo-iconesd');
    if (obj9.className == 'titulo-icones2') {
        obj9.className = 'titulo-icones';
    } else {
        obj9.className = 'titulo-icones2';
    }

}

$(function () {
    $('.drag').draggable({
        connectToSortable: '.drop-container',
        helper: 'clone'
    });

    $('.drop-container').sortable({
        placeholder: 'placeholder',
        activate: function (event, ui) {
            $('.drop-container p').remove();
        }
    });

    $('.lixeira').droppable({
        hoverClass: 'lixeira-ativa',
        drop: function (event, ui) {
            $(ui.draggable).remove();
            var valores = new Array();
            $('.drop-container .drag').each(function () {
                valores.push($(this).html());
            });
        }
    });

    $('.salvar').click(function () {
        var valores = new Array();

        $('.drop-container .drag').each(function () {
            valores.push($(this).html());
        });
        alert(valores);
    });
});

$(document).ready(function () {
    $('.headline').hover(function () {
        $(this).addClass('animated pulse');
    });
    $('.headline').mouseout(function () {
        $(this).removeClass('animated pulse');
    });
});
$(".default, .hover").click(function () {
    $(this).parent(".button").toggleClass('active');
});
$("input, a", "form") // busca input e select no form
.keypress(function(e){ // evento ao presionar uma tecla válida keypress
   
   var k = e.which || e.keyCode; // pega o código do evento
   
   if(k == 13){ // se for ENTER
      e.preventDefault(); // cancela o submit
      $(this)
      .closest('div') // seleciona a linha atual
      .next() // seleciona a próxima linha
      .find('input, a') // busca input ou select
      .first() // seleciona o primeiro que encontrar
      .focus(); // foca no elemento
   }

});