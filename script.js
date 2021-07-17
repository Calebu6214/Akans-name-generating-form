
function akanName(){
    var date = document.getElementById("date").value;
    var month =document.getElementById("month").value;
    var year = document.getElementById("year").value; 
    var Gender = document.getElementById("gender").value; 
    var Male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    var Female = ['Akosua', 'Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    var weekday= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var caleb = parseInt(date)
    var ball = parseInt(month)
    var hand= parseInt(year)
    var leg = parseInt(century)
    var head = parseInt(y_digit)
    var foot = parseInt(dayOfTheWeek)
    var century = year.slice(0,2)
    var y_digit = year.slice(2,4)
   var dayOfTheWeek = (((century/4) -2*century-1) + ((5*y_digit/4)) + ((26*(month+1)/10)) + date) % 7;
  if(Gender ==="Male")
    {
       document.getElementById("output-name").innerHTML= "The name is " + Male[Math.round(dayOfTheWeek)];
    }
    else{
       document.getElementById("output-name").innerHTML= "The name is " + Female[Math.round(dayOfTheWeek)];
    }
    

   
}