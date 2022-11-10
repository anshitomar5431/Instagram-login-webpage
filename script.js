$(".column_2").hide();
$("#1,#2").on(
  'click',function(){
    $('.column_1,.column_2').toggle()
  });
 

  $(document).ready(function(){
    $('#log1').attr('disabled',true);
      $('.login input').on('change',function(){
        if(($(this).val.length!=0)){
          $('#log1').attr('disabled',false);
         }
      })
});
 
$(document).ready(function(){
  $('#log2').attr('disabled',true);
    $('.signup input').on('blur',function(){
      if(($(this).val.length!=0)){
        $('#log2').attr('disabled',false);
       }
    })

});



 