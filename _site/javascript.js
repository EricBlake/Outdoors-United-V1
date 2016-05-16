$('.tab').click(function(){
  $('.tab').removeClass('active');
  $(this).addClass('active');
  
  $('.tab-content').removeClass('active');
  
  var toggleId = $(this).attr('data-ui');
  
  console.log(toggleId);
  
  $('#' + toggleId).addClass('active');
 
   
});