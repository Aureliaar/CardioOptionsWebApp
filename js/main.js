$('#date_of_birth').on('input', function() {
    //alert("dark side");
    var datestr = $('#date_of_birth').val();
    var dob = +new Date(datestr);
    var age = (Date.now() - dob)/ (31557600000);
    age = Math.floor(age);
    $('#age').val(age);
    $('#age').trigger('input');
});
$('#age').on('input', function()   {
    //TODO recent MI
});
$('#height, #weight').on('input', function(){
    var height = parseFloat($('#height').val())/100;
    var weight = parseFloat($('#weight').val());
    var bmi = weight / (height * height);
    $('#body_mass_index').val(bmi.toFixed(1));
});
$('#age, #arterial_hypertension, #abnormal_liver_function, #abnormal_renal_function, #transient_ischemic_attack, #labile_inrs, #bleeding, #alcohol_usage_history, #drug_usage_history').on('input', function(){
   var score = 0;
   if (parseInt($('#age').val()) > 65) {score++};
    if ($(' #arterial_hypertension').is(":checked")){score++};
    if ($(' #abnormal_liver_function').is(":checked")){score++};
    if ($(' #abnormal_renal_function').is(":checked")){score++};
    if ($(' #transient_ischemic_attack').is(":checked")){score++};
    if ($(' #labile_inrs').is(":checked")){score++};
    if ($(' #bleeding').is(":checked")){score++};
    if ($(' #alcohol_usage_history').is(":checked")){score++};
    if ($(' #drug_usage_history').is(":checked")){score++};
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
   if ($('#urgencyemergency').prop("checked")){score+=2;}
   if (!($('#weight_of_the_interventionisolated_cabg').is("checked"))){score+=2;}
   if ($('#sexfemale').is("checked")){score+=1;}
   $('#euroscore').val(score);
});
$('.cha2ds2').on('input', function(){
   var score = 0;
    $('.cha2ds2[type="checkbox"]').each(function(){
        var weight = parseFloat($(this).attr('Data-cha2ds2Weight'));
        if ($(this).is(":checked")){score+=weight;}
    });
    if ($('#sexfemale').is("checked")){score+=1;}
    var age = parseInt($('#age').val());
    if (age>74){score++;}
    if (age>64){score++;}

    $('#cha2ds2-vasc_score').val(score);
});
$('#date_of_event').on('input', function(){

    var datestr = $('#date_of_event').val();
    var dob = +new Date(datestr);
    var dayssince = (Date.now() - dob)/ (1000*60*60*24);
    $('#recent_mi').prop("checked", dayssince<90);
    $('#recent_mi').prop("disabled", true);
    $("#recent_mi").trigger();
});
