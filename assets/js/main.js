document.addEventListener('DOMContentLoaded', () => {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = 'assets/images/favicon.svg';
  document.head.append(favicon);

  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = textWalker.nextNode())) {
    textNode.nodeValue = textNode.nodeValue.replace(/[—–]/g, ' ');
  }

  const trustGrid = document.querySelector('.trust-grid');
  if (trustGrid) {
    [
      ['↗', 'Free estimates'],
      ['✦', 'Clear communication'],
      ['✓', 'Careful clean-up']
    ].forEach(([icon, label]) => {
      const item = document.createElement('div');
      item.innerHTML = `<span class="trust-icon" aria-hidden="true">${icon}</span><span>${label}</span>`;
      trustGrid.append(item);
    });
    trustGrid.setAttribute('role', 'list');
    trustGrid.setAttribute('aria-label', 'Rapid Edge service commitments and benefits');
    const trustItems = Array.from(trustGrid.children);
    trustItems.forEach((item) => item.setAttribute('role', 'listitem'));
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      trustItems.forEach((item) => {
        const duplicate = item.cloneNode(true);
        duplicate.setAttribute('aria-hidden', 'true');
        duplicate.removeAttribute('role');
        trustGrid.append(duplicate);
      });
    }
  }

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.href = 'https://wa.me/61425445124?text=Hi%20Rapid%20Edge%20Lawn%20Care%2C%20I%27d%20like%20to%20ask%20about%20lawn%20care.';
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.href = 'mailto:deepakparaye100@gmail.com';
  });

  const promisePhoto = document.querySelector('.promise-photo img');
  if (promisePhoto) {
    promisePhoto.src = 'https://images.unsplash.com/photo-1758922565071-014462d53878?auto=format&fit=crop&w=1400&q=88';
    promisePhoto.alt = 'Lush green lawn leading through a vibrant garden';
  }

  const galleryPhoto = document.querySelector('.gallery-large img');
  if (galleryPhoto) {
    galleryPhoto.src = 'https://images.unsplash.com/photo-1758922565071-014462d53878?auto=format&fit=crop&w=1600&q=88';
    galleryPhoto.alt = 'A lawn care professional mowing a green backyard lawn';
  }

  const galleryDetailPhoto = document.querySelector('.gallery-item:nth-child(2) img');
  if (galleryDetailPhoto) {
    galleryDetailPhoto.src = 'https://images.unsplash.com/photo-1746487836069-f49377d820c3?auto=format&fit=crop&w=1000&q=88';
    galleryDetailPhoto.alt = 'Colorful flowers in a carefully maintained garden bed';
  }

  const galleryCaptionUpdates = [
    ['.gallery-large figcaption span:last-child', 'A crisp, even cut and tidy edges give the whole yard a clean, welcoming finish.'],
    ['.gallery-item:nth-child(3) figcaption span:last-child', 'More time outside, with clean edges and a fresh, even cut.'],
    ['.gallery-item.gallery-wide figcaption span:last-child', 'Little details make a lasting first impression. Thoughtful care around paths, beds, and edges makes every approach feel inviting.']
  ];
  galleryCaptionUpdates.forEach(([selector, copy]) => {
    const caption = document.querySelector(selector);
    if (caption) caption.textContent = copy;
  });

  const galleryStyle = document.createElement('style');
  galleryStyle.textContent = `
    .gallery-item:nth-child(2) img { display: block; width: 100%; height: 190px; margin: 0 0 16px; object-fit: cover; }
    .gallery-wide figcaption { padding: 0 32px; align-self: center; }
    .gallery-hero .page-hero-content { display: none; }
    .gallery-hero .hero-shade { background: linear-gradient(0deg, rgba(10,30,19,.12), rgba(10,30,19,.12)); }
    @media (max-width: 680px) {
      .gallery-item:nth-child(2) img { height: 160px; }
      .gallery-wide figcaption { padding: 20px; }
    }
  `;
  document.head.appendChild(galleryStyle);

  const galleryDetailPhoto = document.querySelector('.gallery-item:nth-child(2) img');
  if (galleryDetailPhoto) {
    galleryDetailPhoto.src = 'https://images.unsplash.com/photo-1746487836069-f49377d820c3?auto=format&fit=crop&w=1000&q=88';
    galleryDetailPhoto.alt = 'Colorful flowers in a carefully maintained garden bed';
  }
  const galleryCaptions = [
    ['.gallery-large figcaption span:last-child', 'A crisp, even cut and tidy edges give the whole yard a clean, welcoming finish.'],
    '.gallery-item:nth-child(3) figcaption span:last-child',
    ['.gallery-item.gallery-wide figcaption span:last-child', 'Little details make a lasting first impression. Thoughtful care around paths, beds, and edges makes every approach feel inviting.']
  ];
  galleryCaptions.forEach((entry) => {
    if (typeof entry === 'string') return;
    const caption = document.querySelector(entry[0]);
    if (caption) caption.textContent = entry[1];
  });
  const lawnCaption = document.querySelector('.gallery-item:nth-child(3) figcaption span:last-child');
  if (lawnCaption) lawnCaption.textContent = 'More time outside, with clean edges and a fresh, even cut.';

  const servicePhotos = [
    ['#lawn-mowing .detail-image img', 'https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&w=1200&q=88', 'A lawn care professional mowing a residential lawn'],
    ['#seasonal-cleanups .detail-image img', 'https://images.unsplash.com/photo-1742519787699-df9581475f0a?auto=format&fit=crop&w=1200&q=88', 'Autumn leaves scattered across a green lawn'],
    ['#landscape-care .detail-image img', 'https://images.unsplash.com/photo-1744353529146-cc5a547f8ae0?auto=format&fit=crop&w=1200&q=88', 'A decorative garden bed with established plants']
  ];
  servicePhotos.forEach(([selector, src, alt]) => {
    const image = document.querySelector(selector);
    if (image) {
      image.src = src;
      image.alt = alt;
    }
  });

  const landscapeService = document.querySelector('#landscape-care');
  if (landscapeService && !document.querySelector('.additional-services')) {
    const additions = document.createElement('section');
    additions.className = 'additional-services';
    additions.setAttribute('aria-labelledby', 'additional-services-title');
    additions.innerHTML = `
      <div class="additional-services-heading">
        <p class="eyebrow"><span></span> MORE OPTIONS FOR YOUR YARD</p>
        <h2 id="additional-services-title">Need a little <em>extra?</em></h2>
        <p>Ask us about these add-on services when you request an estimate. Availability can depend on the property and season.</p>
      </div>
      <div class="additional-service-grid">
        <a href="contact.html"><span>04 / DETAIL WORK</span><strong>Hedge & shrub trimming</strong><small>Keep borders and greenery neat.</small><b>↗</b></a>
        <a href="contact.html"><span>05 / GARDEN BEDS</span><strong>Weeding & bed upkeep</strong><small>Give planting areas a clean finish.</small><b>↗</b></a>
        <a href="contact.html"><span>06 / TURF CARE</span><strong>Aeration & overseeding</strong><small>Ask about a seasonal lawn refresh.</small><b>↗</b></a>
      </div>`;
    landscapeService.closest('.service-detail').insertAdjacentElement('afterend', additions);
  }

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (finePointer && !reducedMotion) {
    document.querySelectorAll('.service-card, .promise-photo').forEach((surface) => {
      surface.addEventListener('pointermove', (event) => {
        const bounds = surface.getBoundingClientRect();
        const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
        surface.style.setProperty('--cursor-x', `${50 + horizontal * 5}%`);
        surface.style.setProperty('--cursor-y', `${50 + vertical * 5}%`);
      });
      surface.addEventListener('pointerleave', () => {
        surface.style.setProperty('--cursor-x', '50%');
        surface.style.setProperty('--cursor-y', '50%');
      });
    });
  }

  const emailOption = document.querySelector('.contact-option[href^="mailto:"] strong');
  if (emailOption) emailOption.textContent = 'Connect us';
  const whatsappOption = document.querySelector('.contact-option[href^="https://wa.me/"] strong');
  if (whatsappOption) whatsappOption.textContent = 'WhatsApp us';

  if (location.pathname.toLowerCase().endsWith('/contact.html')) {
    document.title = 'Contact Rapid Edge Lawn Care';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = 'Contact Rapid Edge Lawn Care by email or WhatsApp to talk about lawn mowing, seasonal cleanup, and landscape maintenance.';
  }
});
