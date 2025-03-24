const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#result");
  const resultVal = document.querySelector("#result1");

  // console.log(height,weight);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);

    //Showing BMI
    results.innerHTML = `Your BMI is ${bmi}`;
  }




  //Showing Guide
  const bmi = (weight / ((height * height)/10000)).toFixed(2);
  console.log(bmi);
  

  if(bmi <= 18.6){
    resultVal.innerHTML = "Underweight"
  }
  else if(bmi >= 18.6 && bmi <= 24.9){
    resultVal.innerHTML = "Normal"
  }
  else if(bmi >= 25 && bmi <= 29.9){
    resultVal.innerHTML = "Overweight"
  }

  
})