function replaceChr(chr) {
      var chrs = {'a':'4','e':'3','l':'1','t':'7','s':'5','o':'0'};
      return chrs[chr] || chr;
    }
     
    var message = prompt("Veuillez saisir votre mot").toLowerCase();
     
    alert( message.replace(/[aeltso]/g, replaceChr) );

    
// var message = "Ceci est un message sans leet speak !";
//  
// var messageLeet = "";
//  
// for (var i = 0; i < message.length; i++) {
//     if (message[i].toLowerCase() === "l") { messageLeet += "1"; }
//     else if (message[i].toLowerCase() === "e") { messageLeet += "3"; }
//     else if (message[i].toLowerCase() === "a") { messageLeet += "4"; }
//     else if (message[i].toLowerCase() === "t") { messageLeet += "7"; }
//     else if (message[i].toLowerCase() === "s") { messageLeet += "5"; }
//   else if (message[i].toLowerCase() === "o") { messageLeet += "0"; }
//     else { messageLeet += message[i].toLowerCase(); }
// }

// alert(messageLeet);