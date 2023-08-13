function updateTime() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const timeElement = document.getElementById('time');
            timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
        }

        updateTime();
        setInterval(updateTime, 1000)
    
var xhr = new XMLHttpRequest();
xhr.open('GET', 'quotes.txt', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var quotes = xhr.responseText.split('\n');
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerHTML = randomQuote;
  }
};
xhr.send();
