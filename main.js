
    let amount = 0;
  
    document.getElementById("addBtn").addEventListener("click", function(){
      amount += 550;
      document.getElementById("price").innerHTML = amount;
    });
  
    document.getElementById("subtractBtn").addEventListener("click", function(){
      amount -= 550;
      document.getElementById("price").innerHTML = amount;
    });


    var addbtn = document.getElementById("addBtn");
    var counter = document.getElementById("qty");
    
    // Initialize the counter value
    var count = 0;
    
    // Add a click event listener to the button
    addbtn.addEventListener("click", function() {
        // Increment the counter value
        count++;
        
        // Update the counter display
        counter.innerHTML = count;
    });
    
    
    var subbtn = document.getElementById("subtractBtn");
    var counter = document.getElementById("qty");

    var count = 0;

    subbtn.addEventListener("click", function(){

        count--;

        counter.innerHTML = count;
    })