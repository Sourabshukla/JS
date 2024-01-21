const form=document.querySelector('form')
// const height=parseInt(document.querySelector('#height').value)    
// this usecasse will give empty



form.addEventListener('submit' , function(e){
    e.preventDefault()
    
    const height=parseInt(document.querySelector('#height').value)    
    const weight=parseInt(document.querySelector('#weight').value)    
    const results=document.querySelector('#results')    
    
    if (height ===' ' || height<0 || isNaN(height )) {
        results.innerHTML = `pleae give a valid height ${height}`
    }else if(weight===' '|| weight<0 || isNaN(weight)){
        results.innerHTML=`Please provide a valid weight ${weight} `
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);  // tofixed(2)   because to get the decimal number till 2 digit
        //showing result

        if (bmi < 18.6) {
            results.innerHTML = `You are underweight with a BMI of ${bmi}`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `You have a normal weight with a BMI of ${bmi}`;
        } else if (bmi > 24.9) {
            results.innerHTML = `You are overweight with a BMI of ${bmi}`;
        } else {
            results.innerHTML = `Please provide valid inputs for height and weight`;
        }   
    }
})
