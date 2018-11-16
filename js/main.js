$(document).ready(function(){
$('#date_of_birth').on('input', function() {
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

function loadFile(url,callback){
    JSZipUtils.getBinaryContent(url,callback);
}
function generate() {
    loadFile("interfaccia.docx",function(error,content){
        if (error) { throw error };
        var zip = new JSZip(content);
        var doc=new window.docxtemplater().loadZip(zip);
        doc.setData({
            last_name:$('#last_name').val(),
            first_name:$('#first_name').val(),
            date_of_birth:$('#date_of_birth').val(),
            age:$('#age').val(),
            gender:$('[name=gender],:checked').val(),
            weight:$('#weight').val(),
            height:$('#height').val(),
            bmi:$('#bmi').val(),
            death:$('[name=death],:checked').val(),
            date_of_death:$('#date_of_death').val(),
            cardiovascular_death:$('[name=cardiovascular_death],:checked').val(),
            current_smoke:$('[name=current_smoke],:checked').val(),
            previous_smoke:$('[name=previous_smoke],:checked').val(),
            cigarettes_per_day:$('#cigarettes_per_day').val(),
            drug_usage_history:$('[name=drug_usage_history],:checked').val(),
            alcohol_usage_history:$('[name=alcohol_usage_history],:checked').val(),
            dyslipidemia:$('#dyslipidemia').val(),
            diabetes_mellitus:$('#diabetes_mellitus').val(),
            diabetes_type_i:$('[name=diabetes_type_i],:checked').val(),
            diabetes_type_ii:$('[name=diabetes_type_ii],:checked').val(),
            arterial_hypertension:$('[name=arterial_hypertension],:checked').val(),
            peripheral_vascular_disease:$('[name=peripheral_vascular_disease],:checked').val(),
            familiarity_cvd:$('[name=familiarity_cvd],:checked').val(),
            chronic_kidney_disease:$('[name=chronic_kidney_disease],:checked').val(),
            mdc:$('#mdc').val(),
            food_allergies_or_intolerances:$('#food_allergies_or_intolerances').val(),
            latex:$('#latex').val(),
            medicament:$('#medicament').val(),
            respiratory_allergies:$('#respiratory_allergies').val(),
            other_allergies:$('#other_allergies').val(),
            aids:$('[name=aids],:checked').val(),
            hepatitis_a:$('[name=hepatitis_a],:checked').val(),
            hepatitis_b:$('[name=hepatitis_b],:checked').val(),
            hepatitis_c:$('[name=hepatitis_c],:checked').val(),
            other_infectious_diseases:$('#other_infectious_diseases').val(),
            labile_inrs:$('#labile_inrs').val(),
            dm_insulin_dependent:$('[name=dm_insulin_dependent],:checked').val(),
            creatinine_mgdl:$('#creatinine_mgdl').val(),
            creatinine18_mgdl:$('[name=creatinine18_mgdl],:checked').val(),
            serum_creatinine_mgdl:$('#serum_creatinine_mgdl').val(),
            creatinine_clearance_mlmin:$('#creatinine_clearance_mlmin').val(),
            peak_creatinine_mgdl:$('#peak_creatinine_mgdl').val(),
            discharge_creatinine_mgdl:$('#discharge_creatinine_mgdl').val(),
            renal_impairment:$('[name=renal_impairment],:checked').val(),
            dialysis:$('[name=dialysis],:checked').val(),
            egfr_cockcroft_gault:$('#egfr_cockcroft_gault').val(),
            baseline_creatinine:$('#baseline_creatinine').val(),
            abnormal_renal_function:$('[name=abnormal_renal_function],:checked').val(),
            neurological_dysfunction_disease:$('[name=neurological_dysfunction_disease],:checked').val(),
            syncope:$('[name=syncope],:checked').val(),
            date_of_event:$('#date_of_event').val(),
            cerebral_vascular_event:$('[name=cerebral_vascular_event],:checked').val(),
            tia:$('[name=tia],:checked').val(),
            date_of_event:$('#date_of_event').val(),
            stroke:$('[name=stroke],:checked').val(),
            date_of_event:$('#date_of_event').val(),
            poor_mobility:$('[name=poor_mobility],:checked').val(),
            type_of_surgery:$('#type_of_surgery').val(),
            date_of_surgery:$('#date_of_surgery').val(),
            urgency:$('[name=urgency],:checked').val(),
            bleeding:$('[name=bleeding],:checked').val(),
            critical_preoperative_state:$('[name=critical_preoperative_state],:checked').val(),
            weight_of_the_intervention:$('[name=weight_of_the_intervention],:checked').val(),
            previous_mi:$('[name=previous_mi],:checked').val(),
            recent_mi:$('[name=recent_mi],:checked').val(),
            date_mi:$('#date_mi').val(),
            stemi:$('[name=stemi],:checked').val(),
            nstemi:$('[name=nstemi],:checked').val(),
            post_infarct_septal_rupture:$('[name=post_infarct_septal_rupture],:checked').val(),
            date_stemi:$('#date_stemi').val(),
            date_nstemi:$('#date_nstemi').val(),
            heart_failure:$('[name=heart_failure],:checked').val(),
            nyha_class:$('[name=nyha_class],:checked').val(),
            stable_angina:$('[name=stable_angina],:checked').val(),
            ccs_class:$('[name=ccs_class],:checked').val(),
            unstable_angina:$('[name=unstable_angina],:checked').val(),
            atrial_fibrillation:$('[name=atrial_fibrillation],:checked').val(),
            coronary_artery_disease:$('[name=coronary_artery_disease],:checked').val(),
            ef:$('#ef').val(),
            lv_dysfunction:$('[name=lv_dysfunction],:checked').val(),
            pre_ar_grade:$('[name=pre_ar_grade],:checked').val(),
            eroa:$('#eroa').val(),
            pre_mr_grade:$('[name=pre_mr_grade],:checked').val(),
            vena_contracta:$('#vena_contracta').val(),
            pre_as_grade:$('[name=pre_as_grade],:checked').val(),
            ava:$('#ava').val(),
            mean_gradient:$('#mean_gradient').val(),
            jet_velocity:$('#jet_velocity').val(),
            pre_ms_grade:$('[name=pre_ms_grade],:checked').val(),
            valve_area:$('#valve_area').val(),
            last_follow_up:$('#last_follow_up').val(),
            chronic_pulmonary_disease:$('[name=chronic_pulmonary_disease],:checked').val(),
            transient_ischemic_attack:$('[name=transient_ischemic_attack],:checked').val(),
            myocardial_infarction:$('[name=myocardial_infarction],:checked').val(),
            date_of_event:$('#date_of_event').val(),
            recent_mi:$('[name=recent_mi],:checked').val(),
            post_infarct_septal_rupture:$('[name=post_infarct_septal_rupture],:checked').val(),
            previous_cardiac_surgery:$('[name=previous_cardiac_surgery],:checked').val(),
            previous_pci:$('[name=previous_pci],:checked').val(),
            previous_cabg:$('[name=previous_cabg],:checked').val(),
            previous_pmk:$('[name=previous_pmk],:checked').val(),
            extracardiac_arteriopathy:$('[name=extracardiac_arteriopathy],:checked').val(),
            surgery_on_thoracic_aorta:$('[name=surgery_on_thoracic_aorta],:checked').val(),
            active_endocarditis:$('[name=active_endocarditis],:checked').val(),
            arterial_hypertension:$('[name=arterial_hypertension],:checked').val(),
            peripheral_vascular_disease:$('[name=peripheral_vascular_disease],:checked').val(),
            chronic_obstructive_pulmonary_disease:$('[name=chronic_obstructive_pulmonary_disease],:checked').val(),
            cardio_vascular_disease:$('[name=cardio_vascular_disease],:checked').val(),
            paps:$('#paps').val(),
            pulmonary_hypertension:$('[name=pulmonary_hypertension],:checked').val(),
            pulmonary_hypertension_grade:$('[name=pulmonary_hypertension_grade],:checked').val(),
            euroscore:$('#euroscore').val(),
            euroscore_ii:$('#euroscore_ii').val(),
            log_euroscore:$('#log_euroscore').val(),
            cha2ds2_vasc_score:$('#cha2ds2_vasc_score').val(),
            has_bled_score:$('#has_bled_score').val(),
            current_oncological_diseases:$('[name=current_oncological_diseases],:checked').val(),
            active_oncological_diseases:$('[name=active_oncological_diseases],:checked').val(),
            previous_oncological_diseases:$('[name=previous_oncological_diseases],:checked').val(),
            current_chemotherapy:$('[name=current_chemotherapy],:checked').val(),
            active_chemotherapy:$('[name=active_chemotherapy],:checked').val(),
            previous_chemotherapy:$('[name=previous_chemotherapy],:checked').val(),
            current_radiotherapy:$('[name=current_radiotherapy],:checked').val(),
            active_radiotherapy:$('[name=active_radiotherapy],:checked').val(),
            previous_radiotherapy:$('[name=previous_radiotherapy],:checked').val(),
            family_or_social_support:$('[name=family_or_social_support],:checked').val(),
            need_of_assistance:$('[name=need_of_assistance],:checked').val(),
            religion:$('#religion').val(),
            profession:$('#profession').val(),            
        });
        try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render()
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
            console.log(JSON.stringify({error: e}));
            // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
            throw error;
        }
        var out=doc.getZip().generate({
            type:"blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }) //Output the document using Data-URI
        saveAs(out,"output.docx")
    })
}
});