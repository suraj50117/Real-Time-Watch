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
 
 
/* let hr=document.getElementById("hour");
let mn=document.getElementById("min");
let sc=document.getElementById("sec");

function showtime(){    
    let date= new Date();

    let hh=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let hrotact=30*hh+min/2;
    let mrotact=6*min;
    let srotact=6*sec;
    
    hr.style.transform=`rotate(${hrotact}deg)`;
    mn.style.transform=`rotate(${mrotact}deg)`;
    sc.style.transform=`rotate(${srotact}deg)`;
}
setInterval(showtime,1000); */