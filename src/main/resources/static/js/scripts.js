document.getElementById('compressForm').onsubmit = function(event) {
    event.preventDefault();
    let fileInput = document.getElementById('compressFile');
    let formData = new FormData();
    formData.append('file', fileInput.files[0]);

    fetch('/compress', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = "Compressed text: " + data;
    })
    .catch(error => console.error('Error:', error));
};

document.getElementById('decompressForm').onsubmit = function(event) {
    event.preventDefault();
    let fileInput = document.getElementById('decompressFile');
    let formData = new FormData();
    formData.append('file', fileInput.files[0]);

    fetch('/decompress', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = "Decompressed text: " + data;
    })
    .catch(error => console.error('Error:', error));
};
