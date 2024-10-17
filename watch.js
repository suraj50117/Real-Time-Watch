  let hour=document.getElementById("hour");
 let min=document.getElementById("min");
 let sec=document.getElementById("sec");
 
 function checkdate(){
	 let date=new Date();
	 
	 let hou=date.getHours();
	 let mi=date.getMinutes();
	 let se=date.getSeconds();
	 
	 let hrotact=30*hou+mi/2;
	 let mrotact=6*mi;
	 let serotate=6*se;
	 
	 hour.style.transform=`rotate(${hrotact}deg)`;
	 min.style.transform=`rotate(${mrotact}deg)`;
	 sec.style.transform=`rotate(${serotate}deg)`;
 }
 setInterval(checkdate,1000); 
 
 

   
