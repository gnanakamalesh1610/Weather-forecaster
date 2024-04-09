 const txtValue=document.querySelector(".i1 .input-tag .input-name");
 const btn=document.querySelector(".i1 .input-tag .input-btn");
async function weather1(txtvalue1)
{
  const apikey="KPLMWKCKDFXMELHN2NAZGVQ58";
  const apiurl=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${txtvalue1}?unitGroup=metric&key=${apikey}`;
  const response=await fetch(apiurl);
  const data= await response.json();
  console.log(data);
   
let placeName1=data.address;
let placeName2=placeName1.toUpperCase();
document.querySelector(".i3 .temp-info .placeName").innerHTML=`${placeName2}`;
document.querySelector(".i3 .temp-info .content .vtemp").textContent=`${data.days[0].tempmax} °C`;
document.querySelector(".i3 .temp-info .content .vwind").innerHTML=`${data.days[0].windspeed} Km/hr`;
document.querySelector(".i3 .temp-info .vhum").innerHTML=`${data.currentConditions.humidity} %`;
document.querySelector(".i3 .temp-info .content .vpres").innerHTML=`${data.days[0].pressure} mb`;
document.querySelector(".i3 .temp-info .content .vsr").innerHTML=`${data.days[0].sunrise} AM`;
document.querySelector(".i3 .temp-info .vss").innerHTML=`${data.days[0].sunset} PM`;
document.querySelector(".i2 .text-content .date-info").innerHTML=`${data.days[0].datetime}`;

/* image changing setion*/
const iconName=data.days[0].icon;
const imagePath="./assest/"+iconName+".jpg";
console.log(imagePath);
const body=document.body;
body.style.backgroundImage=`url(${imagePath})`;
body.style.backgroundSize="cover";
body.style.backgroundRepeat="no-repeat";

const i2Element = document.querySelector('.items.i2');
const imgInfoElement = i2Element.querySelector('.text-content .img-info');
const iconPath="./assest/icons/"+iconName+".png";
imgInfoElement.setAttribute("src", iconPath);

/* ending */
/* changing temp of various days*/
document.querySelector(".i4 .v1").innerHTML=`${Math.round(data.days[1].tempmax)}°C`;
document.querySelector(".i4 .v2").innerHTML=`${Math.round(data.days[2].tempmax)}°C`;
document.querySelector(".i4 .v3").innerHTML=`${Math.round(data.days[3].tempmax)}°C`;
document.querySelector(".i4 .v4").innerHTML=`${Math.round(data.days[4].tempmax)}°C`;
document.querySelector(".i4 .v5").innerHTML=`${Math.round(data.days[5].tempmax)}°C`;

 
/* changing temp of various days*/

/* box 4 image */

const image1=data.days[1].icon;
const image2=data.days[2].icon;
const image3=data.days[3].icon;
const image4=data.days[4].icon;
const image5=data.days[5].icon;
const imgpath1="./assest/icons/"+image1+".png";
const imgpath2="./assest/icons/"+image2+".png";
const imgpath3="./assest/icons/"+image3+".png";
const imgpath4="./assest/icons/"+image4+".png";
const imgpath5="./assest/icons/"+image5+".png"; 
const imginfo1=document.querySelector(".image1");
const imginfo2=document.querySelector(".image2");
const imginfo3=document.querySelector(".image3");
const imginfo4=document.querySelector(".image4");
const imginfo5=document.querySelector(".image5");
imginfo1.setAttribute("src",imgpath1);
imginfo2.setAttribute("src",imgpath2);
imginfo3.setAttribute("src",imgpath3);
imginfo4.setAttribute("src",imgpath4);
imginfo5.setAttribute("src",imgpath5);
}
btn.addEventListener("click",(event)=>
{
  event.preventDefault();
   weather1(txtValue.value);
});
 
/* box 4 image */


/* 2nd function */
 async function weather2(txtvalue2)
 {
   const apikey2='fe970b40fb68c30e02527f01d21755d3';
   const apiurl2=`https://api.openweathermap.org/data/2.5/weather?q=${txtvalue2}&appid=${apikey2}`;
   const response2= await fetch(apiurl2);
   const data2=await response2.json();
   console.log(data2);
   const timestamps=data2.dt;
   console.log(timestamps);
   const date2=new Date(timestamps*1000);
   
   const day2=date2.toLocaleString('en-US', { weekday: 'long' });
   console.log(day2);
   document.querySelector(".i2 .day-info").innerHTML=day2;
   

   if(day2=="Saturday")
   {
     document.querySelector(".i4 .n1").innerHTML=`${"SUNDAY"}`;
     document.querySelector(".i4 .n2").innerHTML=`${"MONDAY"}`;
     document.querySelector(".i4 .n3").innerHTML=`${"TUESDAY"}`;
     document.querySelector(".i4 .n4").innerHTML=`${"WEDNESDAY"}`;
     document.querySelector(".i4 .n5").innerHTML=`${"THURSDAY"}`;
   }
   else if(day2=="Sunday")
   {
    document.querySelector(".i4 .n1").innerHTML=`${"MONDAY"}`;
     document.querySelector(".i4 .n2").innerHTML=`${"TUESDAY"}`;
     document.querySelector(".i4 .n3").innerHTML=`${"WEDNESDAY"}`;
     document.querySelector(".i4 .n4").innerHTML=`${"THURSDAY"}`;
     document.querySelector(".i4 .n5").innerHTML=`${"FRIDAY"}`;
   }
   else if(day2=="Monday")
   {
     document.querySelector(".i4 .n1").innerHTML=`${"TUESDAY"}`;
     document.querySelector(".i4 .n2").innerHTML=`${"WEDNESDAY"}`;
     document.querySelector(".i4 .n3").innerHTML=`${"THURSDAY"}`;
     document.querySelector(".i4 .n4").innerHTML=`${"FRIDAY"}`;
     document.querySelector(".i4 .n5").innerHTML=`${"SATURDAY"}`;
   }
   else if(day2=="Tuesday")
   {
     document.querySelector(".i4 .n1").innerHTML=`${"WEDNESDAY"}`;
     document.querySelector(".i4 .n2").innerHTML=`${"THURSDAY"}`;
     document.querySelector(".i4 .n3").innerHTML=`${"FRIDAY"}`;
     document.querySelector(".i4 .n4").innerHTML=`${"SATURDAY"}`;
     document.querySelector(".i4 .n5").innerHTML=`${"SUNDAY"}`;
   }
   else if(day2=="Wednesday")
   {
     document.querySelector(".i4 .n1").innerHTML=`${"THURSDAY"}`;
     document.querySelector(".i4 .n2").innerHTML=`${"FRIDAY"}`;
     document.querySelector(".i4 .n3").innerHTML=`${"SATURDAY"}`;
     document.querySelector(".i4 .n4").innerHTML=`${"SUNDAY"}`;
     document.querySelector(".i4 .n5").innerHTML=`${"MONDAY"}`;
   }
   else if(day2=="Thursday")
   {
     document.querySelector(".i4 .n1").innerHTML=`${"FRIDAY"}`;
     document.querySelector(".i4 .n2").innerHTML=`${"SATURDAY"}`;
     document.querySelector(".i4 .n3").innerHTML=`${"SUNDAY"}`;
     document.querySelector(".i4 .n4").innerHTML=`${"MONDAY"}`;
     document.querySelector(".i4 .n5").innerHTML=`${"TUESDAY"}`;
   }
   else if(day2=="Friday")
   {
     document.querySelector(".i4 .n1").innerHTML=`${"SATURDAY"}`;
     document.querySelector(".i4 .n2").innerHTML=`${"SUNDAY"}`;
     document.querySelector(".i4 .n3").innerHTML=`${"MONDAY"}`;
     document.querySelector(".i4 .n4").innerHTML=`${"TUESDAY"}`;
     document.querySelector(".i4 .n5").innerHTML=`${"WEDNESDAY"}`;
   }
  }


/* 2nd function */

btn.addEventListener("click",(event)=>
{
  event.preventDefault();
  weather2(txtValue.value); 
});
document.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') { // Check if Enter key is pressed
    event.preventDefault();
    weather1(txtValue.value);
    weather2(txtValue.value);
  }
});
