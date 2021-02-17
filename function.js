const container = document.queryselector('.container');

window.addEventListener('scroll',() => {
    const scrolled = window.pageYoffset;
    const val = scrolled * 0.5;
    square.style.transform = `translatex($(0.45 * val)%)`;
     square.style.borderRadius = `$(0.1 * val)px`;
      square.style.height = `$(0.1 * val)px`;
      square.style.width = `$(0.1 * val)px`;
})