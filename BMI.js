function calculateBmi(){
    var weight = document.getElementById("kgs").value
    var height = document.getElementById("cm").value 
    var CM = height / 100
    var bmaye = (weight) / (CM * CM)
    if(bmaye <= 18.4 ){
        document.getElementById("print").innerHTML = "Your BMI is "+ bmaye + " which means You are Obese"
    }
    else if(bmaye >= 18.5 && bmaye <= 24.9 ){
        document.getElementById("print").innerHTML = "Your BMI is "+ bmaye + " which means You are Obese"
    }
    else if(bmaye >= 25 && bmaye <= 29.9 ){
        document.getElementById("print").innerHTML = "Your BMI is "+ bmaye + " which means You are Obese"
    }
    else if(bmaye >= 30 ){
        document.getElementById("print").innerHTML = "Your BMI is "+ bmaye + " which means You are Obese"
    }


}