var pingpong = function(number){
  var numbers = [];
  for(var i = 1; i <= number; i++){
    if((i % 15 === 0)){
      numbers.push("pingpong");
    }else if(i % 5 === 0){
      numbers.push("pong");
    }else if(i % 3 === 0){
      numbers.push("ping");
    }else{
      numbers.push(i);
    }
  }
   return numbers;
};

function listmaker(insert){
  // var item = document.getElementById("resultlist");
  for(i = 0; i < insert.length; i++){
    var newli = document.createElement("li");
    var content = insert[i];
    var newContent = document.createTextNode(content);
    newli.appendChild(newContent);
    var displayList = document.getElementById("resultlist");
    displayList.appendChild(newli);
  }
}


$(document).ready(function(){
  $("#pingpong").submit(function(){
    var number = parseInt($("input#number").val());
    var insert = pingpong(number);
    listmaker(insert);
    event.preventDefault();
  });

  $("button#convert").click(function(){
    $("#pingpong").hide();
    $("#clear").show();
    $("#results").show();
    $(".text").addClass("height");
  });

  $("button#clear").click(function(){
    $("#pingpong").show();
    $("#clear").hide();
    $("#results").hide();
    $("ul").empty();
    $(".text").removeClass("height");
  });


});
