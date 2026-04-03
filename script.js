let cart = [];

function addItem(item){
  cart.push(item);
  alert(item + " added!");
}

function orderNow(){
  document.getElementById("menu").scrollIntoView({
    behavior:"smooth"
  });
}

function sendWhatsApp(){
  if(cart.length === 0){
    alert("Select item first!");
    return;
  }

  let number = "91XXXXXXXXXX"; // apna number daal
  let message = "Hello, I want to order:\n";

  cart.forEach(item => {
    message += "- " + item + "\n";
  });

  let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
