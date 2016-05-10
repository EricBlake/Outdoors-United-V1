// $('#tab-1-link').click(function(){
//   $('.tab').removeClass('active');
//   $(this).addClass('active'); 
  
//   $('.tab-content').removeClass('active');
//   $('#tab-1').addClass('active');
  
// });

// $('#tab-2-link').click(function(){
//   $('.tab').removeClass('active');
//   $(this).addClass('active'); 
  
//   $('.tab-content').removeClass('active');
//   $('#tab-2').addClass('active');
  
// });

$('.tab').click(function(){
  $('.tab').removeClass('active');
  $(this).addClass('active');
  
  $('.tab-content').removeClass('active');
  
  var toggleId = $(this).attr('data-ui');
  
  console.log(toggleId);
  
  $('#' + toggleId).addClass('active');
 
   
});