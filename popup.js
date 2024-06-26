document.getElementById('checkButton').addEventListener('click', function() {   //no onclick. only event listener
    const url = document.getElementById('urlInput').value;
    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({url: url})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = data.result;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error checking URL';
    });
})