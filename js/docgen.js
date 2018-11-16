function loadFile(url,callback){
    JSZipUtils.getBinaryContent(url,callback);
}
function checkboxPrint(selector){
    var v = $(selector).is(':checked');
    if(v){ return "YES"};
    return "";
}
function generate() {
    loadFile("interfaccia.docx",function(error,content){
        if (error) { throw error };
        var zip = new JSZip(content);
        var doc=new window.docxtemplater().loadZip(zip);
        doc.setData({
            last_name:String($('#last_name').val()),
            first_name:String($('#first_name').val()),
            date_of_birth:String($('#date_of_birth').val()),
            age:String($('#age').val()),
            gender:$('[name=gender],:checked').val(),
            weight:String($('#weight').val()),
            height:String($('#height').val()),
            bmi:String($('#bmi').val()),
            death:checkboxPrint('#death'),
            date_of_death:String($('#date_of_death').val()),
            cardiovascular_death:checkboxPrint('#cardiovascular_death'),
            current_smoke:checkboxPrint('#current_smoke'),
            previous_smoke:checkboxPrint('#previous_smoke'),
            cigarettes_per_day:String($('#cigarettes_per_day').val()),
            drug_usage_history:checkboxPrint('#drug_usage_history'),
            alcohol_usage_history:checkboxPrint('#alcohol_usage_history'),
            dyslipidemia:String($('#dyslipidemia').val()),
            diabetes_mellitus:String($('#diabetes_mellitus').val()),
            diabetes_type_i:checkboxPrint('#diabetes_type_i'),
            diabetes_type_ii:checkboxPrint('#diabetes_type_ii'),
            arterial_hypertension:checkboxPrint('#arterial_hypertension'),
            peripheral_vascular_disease:checkboxPrint('#peripheral_vascular_disease'),
            familiarity_cvd:checkboxPrint('#familiarity_cvd'),
            chronic_kidney_disease:checkboxPrint('#chronic_kidney_disease'),
            mdc:String($('#mdc').val()),
            food_allergies_or_intolerances:String($('#food_allergies_or_intolerances').val()),
            latex:String($('#latex').val()),
            medicament:String($('#medicament').val()),
            respiratory_allergies:String($('#respiratory_allergies').val()),
            other_allergies:String($('#other_allergies').val()),
            aids:checkboxPrint('#aids'),
            hepatitis_a:checkboxPrint('#hepatitis_a'),
            hepatitis_b:checkboxPrint('#hepatitis_b'),
            hepatitis_c:checkboxPrint('#hepatitis_c'),
            other_infectious_diseases:String($('#other_infectious_diseases').val()),
            labile_inrs:String($('#labile_inrs').val()),
            dm_insulin_dependent:checkboxPrint('#dm_insulin_dependent'),
            creatinine_mgdl:String($('#creatinine_mgdl').val()),
            creatinine18_mgdl:checkboxPrint('#creatinine18_mgdl'),
            serum_creatinine_mgdl:String($('#serum_creatinine_mgdl').val()),
            creatinine_clearance_mlmin:String($('#creatinine_clearance_mlmin').val()),
            peak_creatinine_mgdl:String($('#peak_creatinine_mgdl').val()),
            discharge_creatinine_mgdl:String($('#discharge_creatinine_mgdl').val()),
            renal_impairment:$('[name=renal_impairment],:checked').val(),
            dialysis:checkboxPrint('#dialysis'),
            egfr_cockcroft_gault:String($('#egfr_cockcroft_gault').val()),
            baseline_creatinine:String($('#baseline_creatinine').val()),
            chronic_kidney_disease:checkboxPrint('#chronic_kidney_disease'),
            abnormal_renal_function:checkboxPrint('#abnormal_renal_function'),
            neurological_dysfunction_disease:checkboxPrint('#neurological_dysfunction_disease'),
            syncope:checkboxPrint('#syncope'),
            date_of_event:String($('#date_of_event').val()),
            cerebral_vascular_event:checkboxPrint('#cerebral_vascular_event'),
            tia:checkboxPrint('#tia'),
            date_of_event:String($('#date_of_event').val()),
            stroke:checkboxPrint('#stroke'),
            date_of_event:String($('#date_of_event').val()),
            poor_mobility:checkboxPrint('#poor_mobility'),
            type_of_surgery:String($('#type_of_surgery').val()),
            date_of_surgery:String($('#date_of_surgery').val()),
            urgency:$('[name=urgency],:checked').val(),
            bleeding:checkboxPrint('#bleeding'),
            critical_preoperative_state:checkboxPrint('#critical_preoperative_state'),
            weight_of_the_intervention:$('[name=weight_of_the_intervention],:checked').val(),
            previous_mi:checkboxPrint('#previous_mi'),
            recent_mi:checkboxPrint('#recent_mi'),
            date_mi:String($('#date_mi').val()),
            stemi:checkboxPrint('#stemi'),
            nstemi:checkboxPrint('#nstemi'),
            post_infarct_septal_rupture:checkboxPrint('#post_infarct_septal_rupture'),
            date_stemi:String($('#date_stemi').val()),
            date_nstemi:String($('#date_nstemi').val()),
            heart_failure:checkboxPrint('#heart_failure'),
            nyha_class:$('[name=nyha_class],:checked').val(),
            stable_angina:checkboxPrint('#stable_angina'),
            ccs_class:$('[name=ccs_class],:checked').val(),
            unstable_angina:checkboxPrint('#unstable_angina'),
            atrial_fibrillation:checkboxPrint('#atrial_fibrillation'),
            coronary_artery_disease:checkboxPrint('#coronary_artery_disease'),
            ef:String($('#ef').val()),
            lv_dysfunction:checkboxPrint('#lv_dysfunction'),
            pre_ar_grade:$('[name=pre_ar_grade],:checked').val(),
            eroa:String($('#eroa').val()),
            pre_mr_grade:$('[name=pre_mr_grade],:checked').val(),
            vena_contracta:String($('#vena_contracta').val()),
            pre_as_grade:$('[name=pre_as_grade],:checked').val(),
            ava:String($('#ava').val()),
            mean_gradient:String($('#mean_gradient').val()),
            jet_velocity:String($('#jet_velocity').val()),
            pre_ms_grade:$('[name=pre_ms_grade],:checked').val(),
            valve_area:String($('#valve_area').val()),
            last_follow_up:String($('#last_follow_up').val()),
            previous_cardiac_surgery:checkboxPrint('#previous_cardiac_surgery'),
            previous_pci:checkboxPrint('#previous_pci'),
            previous_cabg:checkboxPrint('#previous_cabg'),
            previous_pmk:checkboxPrint('#previous_pmk'),
            extracardiac_arteriopathy:checkboxPrint('#extracardiac_arteriopathy'),
            surgery_on_thoracic_aorta:checkboxPrint('#surgery_on_thoracic_aorta'),
            active_endocarditis:checkboxPrint('#active_endocarditis'),
            previous_surgery:String($('#previous_surgery').val()),
            oncological_diseases:checkboxPrint('#oncological_diseases'),
            active_oncological_diseases:checkboxPrint('#active_oncological_diseases'),
            previous_oncological_diseases:checkboxPrint('#previous_oncological_diseases'),
            chemotherapy:checkboxPrint('#chemotherapy'),
            active_chemotherapy:checkboxPrint('#active_chemotherapy'),
            previous_chemotherapy:checkboxPrint('#previous_chemotherapy'),
            radiotherapy:checkboxPrint('#radiotherapy'),
            active_radiotherapy:checkboxPrint('#active_radiotherapy'),
            previous_radiotherapy:checkboxPrint('#previous_radiotherapy'),
            abnormal_liver_function:checkboxPrint('#abnormal_liver_function'),
            pulmonary_hypertension_euroscore2:checkboxPrint('#pulmonary_hypertension_euroscore2'),
            pulmonary_hypertension_grade:$('[name=pulmonary_hypertension_grade],:checked').val(),
            paps:String($('#paps').val()),
            chronic_pulmonary_disease:checkboxPrint('#chronic_pulmonary_disease'),
            euroscore:String($('#euroscore').val()),
            log_euroscore:String($('#log_euroscore').val()),
            cha2ds2_vasc_score:String($('#cha2ds2_vasc_score').val()),
            has_bled_score:String($('#has_bled_score').val()),
            family_or_social_support:checkboxPrint('#family_or_social_support'),
            need_of_assistance:checkboxPrint('#need_of_assistance'),
            religion:String($('#religion').val()),
            profession:String($('#profession').val()),
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
