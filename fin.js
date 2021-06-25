
$(document).ready(function(){
  $("#one_slider").click(function(){
    $("#one_panel").slideToggle("slow");
     $("#one").toggleClass("backgroundC");
     $("#onepercent").toggleClass("Addpercent");
     $("#one_slider").toggleClass("backgroundC");
     $(this).find('i').toggleClass('fa-angle-down fa-angle-up');


  });
});

$(document).ready(function(){
  $("#two_slider").click(function(){
    $("#two_panel").slideToggle("slow");
    $("#two").toggleClass("backgroundC");
     $("#twopercent").toggleClass("Addpercent");
     $("#two_slider").toggleClass("backgroundC");
     $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    
  });
});

$(document).ready(function(){
  $("#three_slider").click(function(){
    $("#three_panel").slideToggle("slow");
    $("#three").toggleClass("backgroundC");
     $("#threepercent").toggleClass("Addpercent");
     $("#three_slider").toggleClass("backgroundC");
     $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    
  });
});

$(document).ready(function(){
  $("#four_slider").click(function(){
    $("#four_panel").slideToggle("slow");
    $("#four").toggleClass("backgroundC");
     $("#fourpercent").toggleClass("Addpercent");
     $("#four_slider").toggleClass("backgroundC");
     $(this).find('i').toggleClass('fa-angle-down fa-angle-up');

    
  });
});

$(document).ready(function(){
  $("#five_slider").click(function(){
    $("#five_panel").slideToggle("slow");
    $("#five").toggleClass("backgroundC");
     $("#fivepercent").toggleClass("Addpercent");
     $("#five_slider").toggleClass("backgroundC");
     $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    
  });
});

$(document).ready(function(){
  $("#six_slider").click(function(){
    $("#six_panel").slideToggle("slow");
    $("#six").toggleClass("backgroundC");
     $("#sixpercent").toggleClass("Addpercent");
     $("#six_slider").toggleClass("backgroundC");
     $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    
  });
});

$(document).ready(function(){
  $("#seven_slider").click(function(){
    $("#seven_panel").slideToggle("slow");
    $("#seven").toggleClass("backgroundC");
     $("#sevenpercent").toggleClass("Addpercent");
     $("#seven_slider").toggleClass("backgroundC");
     $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    
  });
});

$(document).ready(function(){
  $("#eight_slider").click(function(){
    $("#eight_panel").slideToggle("slow");
    $("#eight").toggleClass("backgroundC");
     $("#eightpercent").toggleClass("Addpercent");
     $("#eight_slider").toggleClass("backgroundC");
     $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    
  });
});

// function show_details(id){

// var slider_name=document.getElementById(id);

// slider_name.innerHTML="&#10505";

// console.log(id);

// }

function disp_pagn_show(){
    
    // document.getElementById("next_anime").className +="anime_class";
	// const myCollection = document.getElementsByClassName("disp");

 //   for (let i = 0; i < myCollection.length; i++) {
 //  myCollection[i].style.opacity = 1;
// }

var dispData=document.getElementsByClassName("disp");

if(dispData[0]==undefined){



var page_number=16;


for(var i=0; i<5; i++){
var sixtn=document.createElement("a");
var text=document.createTextNode(page_number);
sixtn.appendChild(text);
sixtn.classList.add("pag_size");
sixtn.classList.add("disp");
if(page_number==16){

sixtn.classList.add("change_col");

}

else if(page_number==18){

sixtn.classList.add("change_col_three");

}

else if(page_number==19){

sixtn.classList.add("change_col_two");

}

else{
sixtn.classList.add("change_col_four");
}

var cont=document.getElementById("pagination");
var before_elem=document.getElementById("arr");

cont.insertBefore(sixtn,before_elem);

page_number++;

console.log(cont); 

}

}

else{

	return;
}

}

function disp_pagn_hide(){

	const myCollection = document.getElementsByClassName("disp");
   for (let i = 0; i < myCollection.length; i++) {
   	
  myCollection[i].remove();

  
}
myCollection[1].remove();
myCollection[0].remove();
}