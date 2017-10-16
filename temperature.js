function convertTemp() {
    
    var temperature = Number(document.form.temp.value);
    var tempFC;
    var result;

    for (var i=0; i < document.form.choice.length; i++) {
        
        if (document.form.choice[i].checked) {
            tempCF = document.form.choice[i].value;
        }
    }

    if (tempCF == 'fahrenheit') {
        result = temperature * 9/5 + 32;
    }
    
    else {
        result = (temperature -  32)  *  5/9;
    }
    
    document.form.resultField.value = result;
}