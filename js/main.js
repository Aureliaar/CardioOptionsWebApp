$('#date_of_birth').on('input', function() {
    //alert("dark side");
    var datestr = $('#date_of_birth').val();
    var year = datestr.slice(6, 12);
    $('#age').val(2018-parseInt(year));
    //TODO
});
$('#height, #weight').on('input', function(){
    var height = parseFloat($('#height').val())/100;
    var weight = parseFloat($('#weight').val());
    var bmi = weight / (height * height);
    $('#body_mass_index').val(bmi.toFixed(1));
});
$('#age, #arterial_hypertension, #abnormal_liver_function, #abnormal_renal_function, #transient_ischemic_attack, #labile_inrs, #bleeding, #alcohol_usage_history, #drug_usage_history').on('input', function(){
   var score = 0;
   if (parseInt($('#age')) > 65) {score++};
    if ($('#age').is(":checked")){score++};
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
