(() => {
  document.documentElement.classList.add('js');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-nav-links]');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded','false');
      menuButton.setAttribute('aria-label','Open navigation');
    }));
  }
  const progress = document.querySelector('[data-progress]');
  if (progress) {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = `${max > 0 ? Math.max(0, Math.min(100, scrollY / max * 100)) : 0}%`;
    };
    document.addEventListener('scroll', update, {passive: true});
    addEventListener('resize', update);
    update();
  }
  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold:.12});
    reveal.forEach(item => observer.observe(item));
  } else { reveal.forEach(item => item.classList.add('visible')); }
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
