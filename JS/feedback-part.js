var dem=1;
setInterval(function(){
 document.getElementById('radio-fb'+dem).checked=true;
 dem++;
 if(dem>3){
     dem=1;
 }
},3000);