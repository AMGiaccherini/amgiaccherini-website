let _raf = null;
function smoothScroll(selector, duration = 800) {
    const el = document.querySelector(selector); 
    if (!el) return;
    if (_raf) cancelAnimationFrame(_raf);

    const start = window.pageYOffset;
    const end = el.getBoundingClientRect().top + start;
    const dist = end - start;

    const onCancel = () => { 
        if(_raf) cancelAnimationFrame(_raf); 
        removeListeners(); _raf = null; 
    };
  
    function removeListeners() { 
        window.removeEventListener('wheel', onCancel, { passive: true }); 
        window.removeEventListener('touchmove', onCancel, { passive: true }); 
    }
    window.addEventListener('wheel', onCancel, { passive: true }); 
    window.addEventListener('touchmove', onCancel, { passive: true }); 

    const t0 = performance.now();
    const ease = p => p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p; // eased 0..1

    function step(now) {
        const p = Math.min((now - t0) / duration, 1);
        window.scrollTo(0, start + dist * ease(p));
        if (p < 1) _raf = requestAnimationFrame(step); else removeListeners();
    }

    _raf = requestAnimationFrame(step);
}