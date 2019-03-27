$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $widthValidation = $('#width-validation'),
      $heightValidation = $('#height-validation'),
      $area = $('#area');
  

  $width.focusout(function(){
    var w = $width.val();
    if(w === ''){
      $widthValidation.html('宽度不能为空!');
      $width.select();
    }else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(w)){
      $widthValidation.html('字符非法！');
    }else if(w <0){
      $widthValidation.html('宽度不能小于零！');
      $width.select();
    }else{
      $widthValidation.html('');
    }
  });
  $height.focusout(function(){
    var h = $height.val();
    if(h === ''){
      $heightValidation.html('高度不能为空！');
      $height.select();
    }else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(h)){
      $heightValidation.html('字符非法！');
      $height.select();
    }else if(h < 0){
      $heightValidation.html('高度不能小于0！');
      $height.select();
    }else{
      $heightValidation.html('');
    }
  });
  $btnCal.click(function(){
    var w = $width.val();
    var h = $height.val();
    if(w === ''){
      $widthValidation.html('宽度不能为空!');
      
    }else if(h === ''){
      $heightValidation.html('高度不能为空！');

    }else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(h)){
      $heightValidation.html('字符非法！');
    }else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(w)){
      $widthValidation.html('字符非法！');
    }else if(h<0){
      $heightValidation.html('高度不能小于零！');
    }else if(w<0){
      $widthValidation.html('宽度不能小于零！');
    }else{
      var p = 2 * (Number(w)+Number(h)),
          a = w * h;
      $perimeter.val(p);
      $area.val(a);

    }
  });
});
