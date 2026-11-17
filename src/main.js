const products = [
  {
    id: 'style-me-up',
    number: '01',
    name: 'Style Me Up',
    category: 'Personal care',
    status: 'Available',
    description:
      'A personal care and beauty-service platform that makes it easier to discover professionals, compare services and manage appointments.',
    features: [
      'Beauty and grooming discovery',
      'Salon and barbershop services',
      'Spa, massage, makeup and nails',
      'Provider profiles and appointments',
      'Rewards and referrals',
    ],
    url: 'https://www.stylemeup.ng/',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
  },
]

const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=88',
    alt: 'A stylist preparing and caring for a client hair treatment in studio',
    tag: 'Stylists & Salons',
    title: 'Precision hair styling and everyday care.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=88',
    alt: 'Professional barber grooming service in a clean modern barbershop',
    tag: 'Barbershop & Grooming',
    title: 'Sharp grooming built around reliable service.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=88',
    alt: 'Makeup brushes and beauty artistry tools prepared for a client session',
    tag: 'Makeup & Beauty',
    title: 'Trusted beauty specialists for every occasion.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=88',
    alt: 'Relaxing spa and massage treatment environment',
    tag: 'Spa & Wellness',
    title: 'Calm, restorative spa treatments and wellness care.',
  },
]

const services = [
  {
    number: '01',
    title: 'Salon & Barbershop Services',
    description:
      'Professional hair styling, braiding, hair care, clean fades, and everyday grooming delivered in welcoming studio environments.',
  },
  {
    number: '02',
    title: 'Spa & Massage Treatments',
    description:
      'Restorative body treatments, skincare facials, and therapeutic massage sessions focused on comfort, hygiene, and renewal.',
  },
  {
    number: '03',
    title: 'Makeup Artistry & Nail Care',
    description:
      'Bridal, editorial, and everyday makeup artistry paired with neat manicure, pedicure, and nail finishing services.',
  },
  {
    number: '04',
    title: 'Hair Weaves & Hair Products',
    description:
      'Carefully sourced hair weaves, extensions, and maintenance products selected for durability, natural finish, and daily care.',
  },
  {
    number: '05',
    title: 'Digital Beauty Platform (Style Me Up)',
    description:
      'Connecting customers and independent beauty professionals through dedicated profiles, appointment scheduling, and referral rewards.',
  },
]

const testimonials = [
  {
    quote:
      'Booking a reliable stylist used to take endless phone calls. Through Style Me Up, I found a studio near me, checked their work, and kept my appointment on time.',
    name: 'Tega O.',
    role: 'Customer · Warri, Delta State',
  },
  {
    quote:
      'Having a clear profile for my salon services made it straightforward for new clients to discover us and book without confusion over pricing or availability.',
    name: 'Chidinma E.',
    role: 'Hair Stylist · Lagos',
  },
  {
    quote:
      'From grooming appointments to hair product care, the attention to detail and professionalism feels consistent every single visit.',
    name: 'Kelechi N.',
    role: 'Regular Client · Port Harcourt',
  },
]

const nav = [
  ['Home', '#home'],
  ['About us', '#about-page'],
  ['Services', '#services'],
  ['Our products', '#products-page'],
  ['Contact us', '#contact'],
]

const legalNav = [
  ['Privacy policy', '#privacy-page'],
  ['Terms & conditions', '#terms-page'],
]

const iconArrow =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>'
const iconExternal =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8"/><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'
const iconChevronLeft =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>'
const iconChevronRight =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>'

let slideTimer = null

function Header() {
  return `<header class="site-header">
    <a class="brand" href="#home" aria-label="Havanatouch home">
      <span class="brand-mark">H</span>
      <span>Havanatouch<small>Ltd</small></span>
    </a>
    <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span>
    </button>
    <nav class="main-nav">
      ${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      <a class="nav-cta" href="#products">Explore products ${iconArrow}</a>
    </nav>
  </header>`
}

function ProductCard({ product, featured = false }) {
  return `<article class="product-card ${featured ? 'product-card-featured' : ''}">
    <div class="product-image">
      <img src="${product.image}" alt="A beauty professional at work, representing ${product.name}" loading="lazy">
      <span class="product-number">${product.number}</span>
      <span class="status-badge"><i></i>${product.status}</span>
    </div>
    <div class="product-info">
      <div class="eyebrow">${product.category}</div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="feature-list">
        ${product.features.map((feature) => `<span>${feature}</span>`).join('')}
      </div>
      <a class="text-link" href="${product.url}" target="_blank" rel="noopener noreferrer">Visit ${product.name} ${iconExternal}</a>
    </div>
  </article>`
}

function HeroSlider() {
  return `<div class="hero-slider" role="region" aria-label="Havanatouch featured scenes">
    <div class="slider-viewport">
      ${heroSlides
        .map(
          (slide, idx) => `<figure class="hero-slide ${idx === 0 ? 'is-active' : ''}" data-slide="${idx}">
            <img src="${slide.image}" alt="${slide.alt}" ${idx === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
            <figcaption class="slide-caption">
              <span class="slide-tag">${slide.tag}</span>
              <strong>${slide.title}</strong>
            </figcaption>
          </figure>`
        )
        .join('')}
    </div>
    <div class="slider-controls">
      <div class="slider-dots" role="tablist" aria-label="Slide selector">
        ${heroSlides
          .map(
            (slide, idx) =>
              `<button type="button" class="slider-dot ${idx === 0 ? 'is-active' : ''}" data-dot="${idx}" aria-label="Show slide ${idx + 1}: ${slide.tag}" aria-selected="${idx === 0}"></button>`
          )
          .join('')}
      </div>
      <div class="slider-arrows">
        <span class="slider-counter">01 / ${String(heroSlides.length).padStart(2, '0')}</span>
        <button type="button" class="slider-btn" data-dir="prev" aria-label="Previous slide">${iconChevronLeft}</button>
        <button type="button" class="slider-btn" data-dir="next" aria-label="Next slide">${iconChevronRight}</button>
      </div>
    </div>
  </div>`
}

function Footer() {
  return `<footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="brand brand-light" href="#home">
          <span class="brand-mark">H</span>
          <span>Havanatouch<small>Ltd</small></span>
        </a>
        <p>Building innovative products and personal care solutions designed for everyday reliability.</p>
        <div class="footer-registration">
          <span>Company registration</span>
          <strong>RC 8294313 · Active</strong>
        </div>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="#home">Home</a>
        <a href="#about-page">About us</a>
        <a href="#services">Services</a>
        <a href="#products-page">Our products</a>
        <a href="#how-it-works">How it works</a>
      </div>
      <div class="footer-col">
        <h4>Products</h4>
        <a href="https://www.stylemeup.ng/" target="_blank" rel="noopener noreferrer">Style Me Up ${iconExternal}</a>
        <h4 class="footer-legal-heading">Legal</h4>
        ${legalNav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </div>
      <div class="footer-col">
        <h4>Registered office</h4>
        <p>No. 1, Oku Layout,<br>Adanibo Street, Orhuwhorun,<br>Delta State, Nigeria.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Havanatouch Ltd. All Rights Reserved.</span>
      <span>Private Company Limited by Shares · RC 8294313</span>
    </div>
  </footer>`
}

function Home() {
  return `<main>
    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow">Havanatouch Ltd · Registered Nigerian company</p>
        <h1>One company.<br><em>Multiple solutions.</em></h1>
        <p class="hero-lede">We develop and manage useful products and personal care services that simplify everyday experiences, empower professionals, and create lasting value.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="#products">Explore our products ${iconArrow}</a>
          <a class="quiet-link" href="#about-page">Read about the company <span>→</span></a>
        </div>
      </div>
      <div class="hero-visual">
        ${HeroSlider()}
      </div>
    </section>

    <section class="intro section" id="about">
      <div class="section-label"><span>01</span><span>Who we are</span></div>
      <div class="intro-grid">
        <h2>Building products<br><em>that make a difference.</em></h2>
        <div>
          <p class="lead">Havanatouch Ltd is a registered Nigerian company (RC 8294313) developing and operating practical platforms and beauty &amp; grooming services.</p>
          <p>We believe the strongest businesses begin with everyday human needs. Whether through hands-on personal care operations or dedicated digital platforms like Style Me Up, our focus is consistent quality, trust, and steady growth.</p>
          <a class="text-link" href="#about-page">More about our company ${iconArrow}</a>
        </div>
      </div>
    </section>

    <section class="services section section-ivory" id="services">
      <div class="section-label"><span>02</span><span>What we offer</span></div>
      <div class="section-heading">
        <div><h2>Services we<br><em>offer today.</em></h2></div>
        <p>From salon, spa, and grooming operations to our digital platform connecting customers with beauty specialists, here is what Havanatouch delivers right now.</p>
      </div>
      <div class="services-grid">
        ${services
          .map(
            (service) => `<article class="service-card">
              <span class="service-num">${service.number}</span>
              <h3>${service.title}</h3>
              <p>${service.description}</p>
            </article>`
          )
          .join('')}
      </div>
    </section>

    <section class="products section" id="products">
      <div class="section-label"><span>03</span><span>Our portfolio</span></div>
      <div class="section-heading">
        <div><h2>Explore our<br><em>products.</em></h2></div>
        <p>Each product under Havanatouch has its own identity, website, and dedicated purpose. Start with our flagship platform.</p>
      </div>
      <div class="product-grid">
        ${products.map((product, index) => ProductCard({ product, featured: index === 0 })).join('')}
        <div class="portfolio-note">
          <span class="portfolio-line"></span>
          <p>Our portfolio is expanding.<br>Additional products will be introduced<br>here as each platform launches.</p>
        </div>
      </div>
    </section>

    <section class="principles section section-ivory" id="principles">
      <div class="section-label"><span>04</span><span>Why Havanatouch</span></div>
      <div class="principles-heading">
        <h2>Made with care.<br><em>Built to last.</em></h2>
        <p>We are deliberate about every service we provide and every digital platform we place in front of customers.</p>
      </div>
      <div class="principles-list">
        <article><span>01</span><h3>Customer-centred innovation</h3><p>We build around real everyday customer needs, not novelty for its own sake.</p></article>
        <article><span>02</span><h3>Quality and reliability</h3><p>We prioritise dependable platforms and consistent service standards.</p></article>
        <article><span>03</span><h3>Scalable solutions</h3><p>Each product operates independently so it can grow and serve expanding audiences.</p></article>
        <article><span>04</span><h3>Continuous improvement</h3><p>We listen, refine, and strengthen the details that shape better experiences.</p></article>
      </div>
    </section>

    <section class="how section section-dark" id="how-it-works">
      <div class="section-label"><span>05</span><span>How it works</span></div>
      <div class="how-heading">
        <h2>One destination.<br><em>Different experiences.</em></h2>
        <p>Havanatouch Ltd is the parent company behind each product. Every platform keeps its own independent website and experience.</p>
      </div>
      <div class="steps">
        <article><span>01</span><h3>Discover</h3><p>Learn about Havanatouch Ltd and browse the platforms in our directory.</p></article>
        <article><span>02</span><h3>Choose</h3><p>Select the service or product built for your specific need.</p></article>
        <article><span>03</span><h3>Get started</h3><p>Continue directly to the product's dedicated website to use it.</p></article>
      </div>
      <div class="flow">
        <span>HAVANATOUCH LTD</span><b>→</b><span>PRODUCT DIRECTORY</span><b>→</b><span>SELECT A PRODUCT</span><b>→</b><span>PRODUCT WEBSITE</span>
      </div>
    </section>

    <section class="testimonials section" id="testimonials">
      <div class="section-label"><span>06</span><span>Client feedback</span></div>
      <div class="section-heading">
        <div><h2>Voices from our<br><em>community.</em></h2></div>
        <p>Feedback from customers and beauty professionals experiencing our services and the Style Me Up platform.</p>
      </div>
      <div class="testimonials-grid">
        ${testimonials
          .map(
            (item) => `<blockquote class="testimonial-card">
              <span class="quote-mark" aria-hidden="true">“</span>
              <p>${item.quote}</p>
              <footer>
                <strong>${item.name}</strong>
                <span>${item.role}</span>
              </footer>
            </blockquote>`
          )
          .join('')}
      </div>
    </section>

    <section class="vision section section-ivory">
      <div class="vision-mark">H</div>
      <div>
        <div class="section-label"><span>07</span><span>Our vision</span></div>
        <h2>Creating opportunities<br><em>through useful products.</em></h2>
        <p>Our ambition is to develop and operate useful products across multiple industries that earn trust over time—supporting businesses, empowering service providers, and simplifying daily life.</p>
        <a class="text-link" href="#products-page">Explore our directory ${iconArrow}</a>
      </div>
    </section>

    <section class="contact section" id="contact">
      <div class="section-label"><span>08</span><span>Get in touch</span></div>
      <div class="contact-grid">
        <div>
          <h2>Let’s talk<br><em>about what’s next.</em></h2>
          <p>For general enquiries, partnerships, service questions, or product feedback, send us a message and our team will respond.</p>
          <div class="contact-details">
            <span>Company name</span>
            <strong>Havanatouch Ltd (RC 8294313)</strong>
            <span class="detail-gap">Registered office</span>
            <strong>No. 1, Oku Layout, Adanibo Street,<br>Orhuwhorun, Delta State, Nigeria.</strong>
          </div>
        </div>
        <form class="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact-success.html">
          <input type="hidden" name="form-name" value="contact">
          <p class="hidden"><label>Don’t fill this out: <input name="bot-field"></label></p>
          <label>Full name<input type="text" name="name" autocomplete="name" required placeholder="Your name"></label>
          <label>Email address<input type="email" name="email" autocomplete="email" required placeholder="you@example.com"></label>
          <label>Subject<input type="text" name="subject" required placeholder="How can we help?"></label>
          <label>Message<textarea name="message" rows="5" required placeholder="Tell us a little about your enquiry"></textarea></label>
          <button class="button button-dark" type="submit">Send enquiry ${iconArrow}</button>
          <p class="form-note">This form is securely handled by our hosting provider. We only use your details to respond to your enquiry.</p>
        </form>
      </div>
    </section>
  </main>`
}

function About() {
  return `<main class="inner-page">
    <section class="page-intro">
      <p class="eyebrow">About Havanatouch Ltd</p>
      <h1>A company built around<br><em>useful ideas.</em></h1>
      <p>Havanatouch Ltd is a registered Nigerian company that develops, owns, manages, and operates products and personal care services designed for everyday life.</p>
    </section>
    <section class="editorial section" id="about-detail">
      <div class="section-label"><span>01</span><span>Company overview</span></div>
      <div class="editorial-grid">
        <h2>We start with<br><em>real needs.</em></h2>
        <div>
          <p class="lead">Havanatouch Ltd is a Private Company Limited by Shares, registered with the Corporate Affairs Commission (CAC) on 24 February 2025 under RC Number 8294313.</p>
          <p>Our registered principal business activity encompasses operating beauty and grooming services—including salon and barbershop operations, spa treatments, makeup artistry, and the sale of hair weaves and hair products.</p>
          <p>Alongside our physical and service-industry roots, we develop independent digital platforms designed to improve discovery and access. Our first digital product, Style Me Up, connects customers with beauty and grooming professionals through its own dedicated platform at stylemeup.ng.</p>
        </div>
      </div>
    </section>
    <section class="company-facts section section-dark">
      <div class="section-label"><span>02</span><span>Verified corporate record</span></div>
      <div class="facts-grid">
        <div><span>Registered name</span><strong>Havanatouch Ltd</strong></div>
        <div><span>RC number</span><strong>8294313</strong></div>
        <div><span>Company status</span><strong>Active</strong></div>
        <div><span>Date of registration</span><strong>24 February 2025</strong></div>
        <div><span>Company type</span><strong>Private Company Limited by Shares</strong></div>
        <div><span>Registered office</span><strong>No. 1, Oku Layout, Adanibo Street, Orhuwhorun, Delta State, Nigeria</strong></div>
      </div>
    </section>
    <section class="mission section section-ivory">
      <div class="mission-block">
        <span class="eyebrow">Our mission</span>
        <h2>To develop and manage innovative, accessible, and customer-focused products that solve real problems and create meaningful value.</h2>
      </div>
      <div class="mission-block">
        <span class="eyebrow">Our vision</span>
        <h2>To become a trusted and recognised company known for developing valuable products that improve experiences and create opportunities across multiple industries.</h2>
      </div>
    </section>
    <section class="values section">
      <div class="section-label"><span>03</span><span>Core values</span></div>
      <div class="values-grid">
        ${['Innovation', 'Integrity', 'Excellence', 'Customer commitment', 'Growth', 'Reliability']
          .map((value, i) => `<div><span>0${i + 1}</span><h3>${value}</h3></div>`)
          .join('')}
      </div>
    </section>
  </main>`
}

function Products() {
  return `<main class="inner-page">
    <section class="page-intro">
      <p class="eyebrow">The product directory</p>
      <h1>Products with<br><em>their own purpose.</em></h1>
      <p>Explore the platforms developed under Havanatouch Ltd. Every product maintains its own independent website, brand identity, and customer experience.</p>
    </section>
    <section class="directory section section-ivory">
      <div class="directory-head">
        <div><span class="eyebrow">Available now</span><h2>Our products</h2></div>
        <span class="directory-count">${String(products.length).padStart(2, '0')} product</span>
      </div>
      ${products.map((product) => ProductCard({ product, featured: true })).join('')}
      <div class="coming-soon">
        <span class="eyebrow">Coming next</span>
        <h3>More products will be added as they are ready.</h3>
        <p>We introduce new products only when they are prepared to deliver a dependable experience.</p>
      </div>
    </section>
  </main>`
}

function LegalPage({ type }) {
  const privacy = type === 'privacy'
  return `<main class="inner-page legal-page">
    <section class="page-intro">
      <p class="eyebrow">Havanatouch Ltd · Legal</p>
      <h1>${privacy ? 'Privacy<br><em>policy.</em>' : 'Terms &amp;<br><em>conditions.</em>'}</h1>
      <p>Last updated: 17 November 2026</p>
    </section>
    <section class="legal-content section">
      <div class="legal-aside">
        <span>Havanatouch Ltd</span>
        <small>RC 8294313 · Active</small>
        <p>No. 1, Oku Layout, Adanibo Street, Orhuwhorun, Delta State, Nigeria.</p>
      </div>
      <div class="legal-copy">
        ${
          privacy
            ? `<h2>Our approach to privacy</h2>
            <p>Havanatouch Ltd respects your privacy. This policy explains what information we may receive when you use this corporate website and how we handle it.</p>
            <h3>Information you provide</h3>
            <p>If you contact us through the enquiry form, we receive the name, email address, subject, and message you submit. We use this information solely to review and respond to your enquiry.</p>
            <h3>Information collected automatically</h3>
            <p>This website may receive standard technical request information required to serve pages reliably. We do not sell personal information or build hidden marketing profiles from this website.</p>
            <h3>Independent product websites</h3>
            <p>This corporate website links to independent platforms operated under Havanatouch Ltd, including Style Me Up (stylemeup.ng). Each product maintains its own privacy policy and terms.</p>
            <h3>Contact</h3>
            <p>Questions about this policy can be submitted through the contact form on this website or sent to our registered office in Orhuwhorun, Delta State.</p>`
            : `<h2>Using this website</h2>
            <p>By accessing the Havanatouch Ltd website, you agree to use it lawfully and respectfully. This site provides corporate information about Havanatouch Ltd and directs visitors to independent products operated by the company.</p>
            <h3>Product information and access</h3>
            <p>Product descriptions and availability may evolve as our portfolio grows. Each product remains independent and is responsible for its own platform, booking rules, pricing, and user experience.</p>
            <h3>Intellectual property</h3>
            <p>Unless otherwise stated, the content, layout, and branding on this website belong to Havanatouch Ltd. You may view the site for personal or business reference, but you may not copy or republish its materials without written permission.</p>
            <h3>External links</h3>
            <p>Links to external product websites are provided for direct access. Each destination operates under its own terms of service.</p>
            <h3>Updates</h3>
            <p>We may revise these terms as our company and product portfolio grow. The updated date above reflects the latest published version.</p>`
        }
      </div>
    </section>
  </main>`
}

function initSlider() {
  if (slideTimer) {
    clearInterval(slideTimer)
    slideTimer = null
  }
  const slider = document.querySelector('.hero-slider')
  if (!slider) return

  const slides = [...slider.querySelectorAll('.hero-slide')]
  const dots = [...slider.querySelectorAll('.slider-dot')]
  const counter = slider.querySelector('.slider-counter')
  let active = 0

  function showSlide(index) {
    active = (index + slides.length) % slides.length
    slides.forEach((el, idx) => el.classList.toggle('is-active', idx === active))
    dots.forEach((el, idx) => {
      el.classList.toggle('is-active', idx === active)
      el.setAttribute('aria-selected', String(idx === active))
    })
    if (counter) {
      counter.textContent = `${String(active + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`
    }
  }

  function startAuto() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    clearInterval(slideTimer)
    slideTimer = setInterval(() => showSlide(active + 1), 4800)
  }

  slider.querySelector('[data-dir="prev"]')?.addEventListener('click', () => {
    showSlide(active - 1)
    startAuto()
  })
  slider.querySelector('[data-dir="next"]')?.addEventListener('click', () => {
    showSlide(active + 1)
    startAuto()
  })
  dots.forEach((dot) =>
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.dot))
      startAuto()
    })
  )

  slider.addEventListener('mouseenter', () => clearInterval(slideTimer))
  slider.addEventListener('mouseleave', startAuto)
  startAuto()
}

function mount() {
  const app = document.querySelector('#app')
  const path = window.location.hash
  const page =
    path === '#about-page'
      ? About()
      : path === '#products-page'
        ? Products()
        : path === '#privacy-page'
          ? LegalPage({ type: 'privacy' })
          : path === '#terms-page'
            ? LegalPage({ type: 'terms' })
            : Home()

  app.innerHTML = Header() + page + Footer()
  document.title =
    path === '#about-page'
      ? 'About Havanatouch Ltd | RC 8294313'
      : path === '#products-page'
        ? 'Our Products | Havanatouch Ltd'
        : path === '#privacy-page'
          ? 'Privacy Policy | Havanatouch Ltd'
          : path === '#terms-page'
            ? 'Terms & Conditions | Havanatouch Ltd'
            : 'Havanatouch Ltd | Corporate & Multi-Product Portal'

  if (!path || path === '#home' || path === '#services' || path === '#products' || path === '#how-it-works' || path === '#contact' || path === '#testimonials' || path === '#about') {
    initSlider()
  } else if (slideTimer) {
    clearInterval(slideTimer)
    slideTimer = null
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) =>
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href')
      if (!href) return
      if (href.endsWith('-page')) {
        event.preventDefault()
        window.location.hash = href.slice(1)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        mount()
      } else if (
        window.location.hash.endsWith('-page') &&
        ['#home', '#services', '#products', '#how-it-works', '#contact'].includes(href)
      ) {
        event.preventDefault()
        window.location.hash = href.slice(1)
        mount()
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 30)
      }
    })
  )

  const toggle = document.querySelector('.menu-toggle')
  toggle?.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open')
    toggle.setAttribute('aria-expanded', String(isOpen))
  })
  document.querySelectorAll('.main-nav a').forEach((link) =>
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open')
      toggle?.setAttribute('aria-expanded', 'false')
    })
  )

  const revealItems = document.querySelectorAll(
    'main > section:not(.hero), .product-card, .service-card, .testimonial-card, .principles-list article, .facts-grid div, .values-grid div'
  )
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.1 }
    )
    revealItems.forEach((item, index) => {
      item.classList.add('reveal-item')
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`)
      revealObserver.observe(item)
    })
  }

  document.querySelector('.site-header')?.classList.toggle('scrolled', window.scrollY > 20)
}

window.addEventListener('hashchange', mount)
window.addEventListener(
  'scroll',
  () => document.querySelector('.site-header')?.classList.toggle('scrolled', window.scrollY > 20),
  { passive: true }
)
mount()
