

 
var bananasCount = 0;
var applesCount = 0;
var kiviCount = 0;
var total = 0;
 
 /* bananas */
  document.getElementById("bananas").addEventListener("click", function(){
  bananasCount += 1;
  total += 1;
  document.getElementById("bananasTotal").innerHTML = "Total: " + bananasCount;
  document.getElementById("total").innerHTML = "Total: " + total;
});
document.getElementById("l-bananas-button").addEventListener("click", function(){
  bananasCount += 1;
  total += 1;
  document.getElementById("bananasTotal").innerHTML = "Total: " + bananasCount;
  document.getElementById("total").innerHTML = "Total: " + total;
});
document.getElementById("r-bananas-button").addEventListener("click", function(){
  bananasCount -= 1;
  total -= 1;
  document.getElementById("bananasTotal").innerHTML = "Total: " + bananasCount;
  document.getElementById("total").innerHTML = "Total: " + total;
});

/* apples */
document.getElementById("apples").addEventListener("click", function(){
  applesCount += 2.5;
  total += 2.5;
  document.getElementById("applesTotal").innerHTML = "Total: " + applesCount;
  document.getElementById("total").innerHTML = "Total: " + total;
});
document.getElementById("l-apples-button").addEventListener("click", function(){
  applesCount += 2.5;
  total += 2.5;
  document.getElementById("applesTotal").innerHTML = "Total: " + applesCount;
  document.getElementById("total").innerHTML = "Total: " + total;
});
document.getElementById("r-apples-button").addEventListener("click", function(){
  applesCount -= 2.5;
  total -= 2.5;
  document.getElementById("applesTotal").innerHTML = "Total: " + applesCount;
  document.getElementById("total").innerHTML = "Total: " + total;
});

/* kivi */
document.getElementById("kivi").addEventListener("click", function(){
  kiviCount += 3;
  total += 3;
  document.getElementById("kiviTotal").innerHTML = "Total: " + kiviCount;
  document.getElementById("total").innerHTML = "Total: " + total;
});
document.getElementById("l-kivi-button").addEventListener("click", function(){
  kiviCount += 3;
  total += 3;
  document.getElementById("kiviTotal").innerHTML = "Total: " + kiviCount;
  document.getElementById("total").innerHTML = "Total: " + total;
});
document.getElementById("r-kivi-button").addEventListener("click", function(){
  kiviCount -= 3;
  total -= 3;
  document.getElementById("kiviTotal").innerHTML = "Total: " + kiviCount;
  document.getElementById("total").innerHTML = "Total: " + total;  
});




