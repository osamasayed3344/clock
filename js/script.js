const hour_hand=document.querySelector(".hour-hand");
const second_hand=document.querySelector(".second-hand");
const minute_hand=document.querySelector(".minute-hand");
setInterval(function(){
	const nowdate=new Date();
	const hour = nowdate.getHours() * 30;
	const second = nowdate.getSeconds() * 6;
	const minutes=nowdate.getMinutes() * 6;
	hour_hand.style.transform="rotate("+hour+"deg)";
	second_hand.style.transform="rotate("+second+"deg)";
	minute_hand.style.transform="rotate("+minutes+"deg)";
},1000);