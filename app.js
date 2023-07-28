  document.getElementById('language-select').addEventListener('change', function() {
      if (this.value !== '') {
          if (this.value === 'es') {
              window.location.href = './scorms/es/index.html';
          }     else if (this.value === 'en') {
        window.location.href = './scorms/en/index.html';
    }
  
    else if (this.value === 'es') {
        window.location.href = './scorms/es/index.html';
    }
  
    else if (this.value === 'fr') {
        window.location.href = './scorms/fr/index.html';
    }
  
      }
  });
  