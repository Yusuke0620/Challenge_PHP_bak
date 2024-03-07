

(function() {
    const fh = document.getElementById('fixed-header');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        fh.classList.add('is-show');
      } else {
        fh.classList.remove('is-show');
      }
    });
}());
