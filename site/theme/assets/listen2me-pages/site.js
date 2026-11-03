'use strict';
// Small, local enhancements. Reading and navigation work without JavaScript.
(() => {
  const root = document.querySelector('script[src$="/listen2me-pages/site.js"]')?.src;
  const base = root ? new URL('../../../../', root) : null;
  const demo = document.querySelector('.readme-content img[src$="/assets/demo/listen2me-demo.webp"]');
  if (demo && base) {
    const figure = document.createElement('figure');
    figure.className = 'dictation-demo';
    const video = document.createElement('video');
    video.controls = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'none';
    video.width = 1058;
    video.height = 426;
    video.poster = new URL('site/theme/assets/listen2me-pages/demo-poster.webp', base).href;
    video.setAttribute('aria-label', demo.alt);
    video.src = new URL('assets/demo/listen2me-demo.mp4', base).href;
    figure.append(video);
    demo.closest('p').replaceWith(figure);
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let started = false;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) video.pause();
        else if (entry.intersectionRatio >= .3 && !started) {
          started = true;
          if (!motion.matches) video.play().catch(() => {});
        }
      }, {threshold: [0, .3]}).observe(video);
    }
    motion.addEventListener('change', () => { if (motion.matches) video.pause(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
  }
  for (const table of document.querySelectorAll('.readme-content table')) {
    const headings = [...table.querySelectorAll('thead th')];
    const cells = [...table.querySelectorAll('tbody td')];
    if (headings.length === 2 && cells.length === 2 && cells.every(cell => cell.querySelectorAll('img').length === 1 && !cell.textContent.trim())) {
      const gallery = document.createElement('div');
      gallery.className = 'screenshots';
      for (const [index, cell] of cells.entries()) {
        const figure = document.createElement('figure');
        const caption = document.createElement('figcaption');
        caption.textContent = headings[index].textContent;
        const image = cell.querySelector('img');
        image.width = index === 0 ? 696 : 697;
        image.height = index === 0 ? 955 : 952;
        image.loading = 'lazy';
        figure.append(image, caption);
        gallery.append(figure);
      }
      table.replaceWith(gallery);
      continue;
    }
    const wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', 'Scrollable comparison table');
    table.before(wrapper);
    wrapper.append(table);
  }
  const contents = document.querySelector('.section-sidebar details');
  if (contents && matchMedia('(max-width:900px)').matches) contents.open = false;
  for (const link of document.querySelectorAll('a[href^="#"]')) {
    link.addEventListener('click', () => {
      let target;
      try { target = document.getElementById(decodeURIComponent(link.hash.slice(1))); } catch { return; }
      for (let parent = target?.parentElement; parent; parent = parent.parentElement) {
        if (parent.tagName === 'DETAILS') parent.open = true;
      }
    });
  }
})();
