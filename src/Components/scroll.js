let scrollSpeed = 0.5

window.addEventListener('wheel', function(e) {
    e.preventDefault();
    let scrollAmount = e.deltaY * scrollSpeed;
    window.scrollBy({
        top:scrollAmount,
        behavior: 'smooth'
    })
}, {passive:false})