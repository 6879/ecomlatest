$(document).ready(function() {
    $('.nav-link-collapse').on('click', function() {
      $('.nav-link-collapse').not(this).removeClass('nav-link-show');
      $(this).toggleClass('nav-link-show');
    });
  });
// wow js  



// wow js  

function openNav() {
  document.getElementById("mySidebar").style.width = "344px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
// conter
$(document).ready(function(){
  $('.count').prop('disabled', true);
   $(document).on('click','.plus',function(){
  $('.count').val(parseInt($('.count').val()) + 1 );
  });
    $(document).on('click','.minus',function(){
    $('.count').val(parseInt($('.count').val()) - 1 );
      if ($('.count').val() == 0) {
      $('.count').val(1);
    }
      });
});
$(document).ready(function(){
  $('#qty_input').prop('disabled', true);
  $('#plus-btn').click(function(){
    $('#qty_input').val(parseInt($('#qty_input').val()) + 1 );
        });
      $('#minus-btn').click(function(){
    $('#qty_input').val(parseInt($('#qty_input').val()) - 1 );
    if ($('#qty_input').val() == 0) {
    $('#qty_input').val(1);
  }

        });
});

//accordion
$(document).ready(function(){
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function(){
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});
