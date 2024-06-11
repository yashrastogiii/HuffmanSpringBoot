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
        downloadFile(data, 'encoded.txt');
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
        downloadFile(data, 'decoded.txt');
    })
    .catch(error => console.error('Error:', error));
};

function downloadFile(data, filename) {
    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
