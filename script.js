write("Pushkar ","firstname");
setTimeout(()=>{
    write("Sharma","lastname")
},1000)












function write(text, id) {
  var char = document.getElementById(id);
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      char.innerHTML += text[i];
    }, 90 * i); 
  }
}