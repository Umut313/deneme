function check(){
var soru1 = document.quiz.soru1.value;
var soru2 = document.quiz.soru2.value;
var soru3 = document.quiz.soru3.value;
var soru4 = document.quiz.soru4.value;
 var doğru = 0;
 

 if (soru1 == "TUĞRUL BEY" ) 
 	{
 		doğru++;
	}

 if (soru2 == "japonya") 
 	{
 		doğru++;
	}

 if (soru3 == "meşrutiyeti ilan etmek") 
 	{
 		doğru++;
 	}

 if (soru4 == "defterdar") 
 	{
 		doğru++;
 	}

 	var mesaj = ["Harika iş!", "Sorun değil!", "Gerçekten daha iyisini yapmalısın"];
 	var pictures = ["./win.gif", "./meh.gif", "./lose.gif"];
 	var range;

 	if (doğru < 1 )  
 	{
 		range = 2; 
 	}

 	if (doğru > 0 && doğru < 4) 
 	{
 		range = 1;
 	}

 	if (doğru > 2) 
 	{
 		range = 0;
 	}

	//alert("Tebrikler KPSS'den Torpille Atandınız!!!!")

	
	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("mesaj").innerHTML = mesaj[range];

	document.getElementById("number_correct").innerHTML = "\nTOPLAM "  + doğru + "\ndoğru.";
	document.getElementById("picture").src = pictures[range];
}

