$(document).ready(function(){
$('#date_of_birth').on('input', function() {
    var datestr = $('#date_of_birth').val();
    var dob = +new Date(datestr);
    var age = (Date.now() - dob)/ (31557600000);
    age = Math.floor(age);
    $('#age').val(age);
    $('#age').trigger('input');
});

$('#height, #weight').on('input', function(){
    var height = parseFloat($('#height').val())/100;
    var weight = parseFloat($('#weight').val());
    var bmi = weight / (height * height);
    $('#bmi').val(bmi.toFixed(1));
});

$('.hasbled').on('input', function(){
    score = 0;
   $('.hasbled[type="checkbox"]').each(function(){
      var weight = parseFloat($(this).attr('Data-hasbledWeight'));
      if ($(this).is(":checked")){score+=weight;}
   });
   if (parseInt($('#age').val()) > 65) {score++};
   $('#has-bled-_score').val(score);
});

$('.euroscore').on('input', function(){
    score = 0;
   $('.euroscore[type="checkbox"]').each(function(){
      var weight = parseFloat($(this).attr('Data-euroscoreWeight'));
      if ($(this).is(":checked")){score+=weight;}
   });
   var age = parseInt($('#age').val());
   var agescore = (age-60)/5;
   agescore = Math.ceil(agescore);
   agescore = Math.max(0, agescore);
   score+=agescore;
   var age = parseFloat($('#ef').val());
   if (ef<50.0){score+=1;}
   if (ef<30.0){score+=2;
}
   if ($('#urgencyemergency').prop("checked")){score+=2;}

   if ($('#weight_of_the_intervention2_procedures').is(":checked")){score+=2;}
   if ($('#weight_of_the_intervention3_procedures').is(":checked")){score+=2;}

   if ($('#urgencyemergency').is(":checked")){score+=2;}
   if ($('#genderfemale').is(":checked")){score+=1;}
   var screatinine = parseFloat($('#serum_creatinine').val());
   if (screatinine > 2.27 ){score+=2;}
   $('#euroscore').val(score);
});
$('.cha2ds2').on('input', function(){
   var score = 0;
    $('.cha2ds2[type="checkbox"]').each(function(){
        var weight = parseFloat($(this).attr('Data-cha2ds2Weight'));
        if ($(this).is(":checked")){score+=weight;}
    });
    if ($('#genderfemale').is(":checked")){score+=1;}

    var age = parseInt($('#age').val());
    if (age>74){score++;}
    if (age>64){score++;}
    
    var stroke = $('#stroke').is(":checked");
    var tia = $('#tia').is(":checked");
    if (stroke || tia){score+=2;}

    var lv_dysfunction = $('#lv_dysfunction').is(":checked");
    var heart_failure = $('#heart_failure').is(":checked");
    if (lv_dysfunction || heart_failure){score+=1;}
    
    if ($('#diabetes_mellitustype_i').is(":checked")){score+=1;}
    if ($('#diabetes_mellitustype_ii').is(":checked")){score+=1;}
    $('#cha2ds2vasc_score').val(score);
});
$('#date_mi').on('input', function(){

    var datestr = $('#date_mi').val();
    var dob = +new Date(datestr);
    var dayssince = (Date.now() - dob)/ (1000*60*60*24);
    $('#recent_mi').prop("checked", dayssince<90);
    $('#recent_mi').prop("disabled", true);
    $("#recent_mi").trigger();
});
});
