document.getElementById("google").addEventListener("click", function() { 
window.location = "https://www.google.com";
win.focus();
})   

document.getElementById("facebook").addEventListener("click", function() { 
window.location = "https://www.facebook.com";
win.focus();
})  

document.getElementById("twitter").addEventListener("click", function() { 
window.location = "https://www.twitter.com";
win.focus();
})  

document.getElementById("instagram").addEventListener("click", function() { 
window.location = "https://www.instagram.com";
win.focus();
}) 

const fetchContent = async (url) => {
con = await fetch(url);
let a = await con.json()
return a;
}

setInterval(async function() {
let url = "https://jsonplaceholder.typicode.com/todos/1"
console.log(await fetchContent(url))
}, 3000)