const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
     const height = parseInt(document.querySelector('#height').value);
     const weight = parseInt(document.querySelector('#weight').value);
     const results = document.querySelector('#results');

     if(height ==='' || height <0 || isNaN(height)){
         results.innerHTML = `Please provide a valid height ${height}`;
     }
         else if(weight ==='' || height <0 || isNaN(weight)){
         results.innerHTML = `Please provide a valid weight ${weight}`;
     }
     else{
       const bmi = (weight/((height*height)/10000)).toFixed(2)
       // display in results
         results.innerHTML = `<span> Your BMI is ${bmi}</span>`;

         if(bmi < 18.5){
             results.innerHTML += `<span  > and you are underweight ${bmi}</span>`;
            //  results.style.color = 'red';
            results.style.color = 'red';
         }
         else if(bmi >= 18.6 && bmi <24.9)
            results.innerHTML += `<span> and you are normal weight ${bmi}</span>`;
        else {
           const bmii = (bmi >=30.0 )
            results.innerHTML += `<span> and you are overweight ${bmii}</span>`;
        }
     }


});