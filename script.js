document.getElementById('picCircle').addEventListener('click', function() {
    document.getElementById('fileInput').click();
  });

  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        document.getElementById('picCircle').innerHTML = '';
        document.getElementById('picCircle').appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });