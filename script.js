const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .1 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelectorAll('.faq-item button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const open = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});

document.querySelectorAll('.choices button').forEach(button => {
  button.addEventListener('click', () => button.classList.toggle('active'));
});

const industryFilters = document.querySelectorAll('[data-filter]');
const industryCards = document.querySelectorAll('[data-category]');
industryFilters.forEach(button => {
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    industryFilters.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    industryCards.forEach(card => {
      const visible = selected === 'all' || card.dataset.category === selected;
      card.classList.toggle('filtered-out', !visible);
    });
  });
});

const serviceDetails = {
  strategy: {
    label: '01 · PRODUCT STRATEGY',
    title: 'วางรากฐานผลิตภัณฑ์ก่อนเริ่มลงทุนพัฒนา',
    intro: 'เราช่วยเปลี่ยนไอเดียที่ยังไม่ชัดให้เป็นแผนผลิตภัณฑ์ที่ทีมธุรกิจและทีมพัฒนาเข้าใจตรงกัน ลดความเสี่ยงจากการสร้างฟีเจอร์ที่ผู้ใช้ไม่ต้องการ',
    items: ['Discovery Workshop กับผู้มีส่วนเกี่ยวข้อง', 'วิเคราะห์กลุ่มผู้ใช้ ปัญหา และ Customer Journey', 'จัดลำดับฟีเจอร์สำหรับ MVP และวาง Product Roadmap', 'กำหนดตัวชี้วัดความสำเร็จและขอบเขตโครงการ'],
    outcome: 'ได้ Product Brief, User Flow, Feature Scope และ Roadmap ที่พร้อมใช้ประเมินเวลาและงบประมาณอย่างเป็นระบบ',
    art: `<svg viewBox="0 0 560 400"><defs><linearGradient id="sg" x1="0" x2="1"><stop stop-color="#7479ff"/><stop offset="1" stop-color="#45d4f3"/></linearGradient></defs><rect x="70" y="56" width="420" height="288" rx="22" fill="#fff" opacity=".96"/><text x="105" y="104" class="art-overline">PRODUCT ROADMAP</text><text x="105" y="139" class="art-title">From idea to impact</text><path d="M112 252C173 246 176 175 244 190s75 73 137 34 47-75 79-84" fill="none" stroke="url(#sg)" stroke-width="6" stroke-linecap="round"/><g fill="#fff" stroke="#6368ef" stroke-width="4"><circle cx="112" cy="252" r="12"/><circle cx="244" cy="190" r="12"/><circle cx="381" cy="224" r="12"/><circle cx="460" cy="140" r="12"/></g><g class="art-label"><text x="91" y="286">DISCOVER</text><text x="224" y="166">DEFINE</text><text x="358" y="258">VALIDATE</text><text x="437" y="116">LAUNCH</text></g><rect x="104" y="309" width="100" height="8" rx="4" fill="#e2e4ec"/><rect x="218" y="309" width="67" height="8" rx="4" fill="#d7f39a"/></svg>`
  },
  design: {
    label: '02 · UX/UI DESIGN',
    title: 'ออกแบบประสบการณ์ที่ชัดเจนและน่าเชื่อถือ',
    intro: 'ทุกหน้าจอถูกออกแบบจากพฤติกรรมผู้ใช้จริง ควบคู่กับภาพลักษณ์ของแบรนด์ เพื่อให้ระบบเรียนรู้ได้เร็ว ใช้งานง่าย และสม่ำเสมอทุกอุปกรณ์',
    items: ['Information Architecture และ User Flow', 'Wireframe และ Interactive Prototype', 'Visual Direction, UI Design และ Responsive Layout', 'Design System พร้อม Component สำหรับพัฒนาต่อ'],
    outcome: 'ได้ Prototype ที่ทดสอบได้จริง ไฟล์ UI ครบทุกหน้าจอ และ Design System ที่ช่วยให้การพัฒนารวดเร็วและสม่ำเสมอ',
    art: `<svg viewBox="0 0 560 400"><rect x="58" y="46" width="444" height="308" rx="22" fill="#fff"/><rect x="58" y="46" width="444" height="42" rx="22" fill="#172038"/><circle cx="84" cy="67" r="5" fill="#6ae2ff"/><circle cx="101" cy="67" r="5" fill="#d0f46e"/><rect x="90" y="117" width="112" height="204" rx="10" fill="#edf0f6"/><rect x="221" y="117" width="246" height="54" rx="10" fill="#dcdfff"/><rect x="221" y="188" width="112" height="133" rx="10" fill="#dff8fd"/><rect x="350" y="188" width="117" height="62" rx="10" fill="#eef8da"/><rect x="350" y="266" width="117" height="55" rx="10" fill="#f0f1f5"/><g fill="#bcc2ce"><rect x="108" y="144" width="72" height="8" rx="4"/><rect x="108" y="166" width="53" height="8" rx="4"/><rect x="108" y="208" width="72" height="8" rx="4"/></g><circle cx="425" cy="145" r="9" fill="#656bf1"/><path d="M457 303l30 21-17 4-8 17z" fill="#172038" stroke="#fff" stroke-width="3"/></svg>`
  },
  development: {
    label: '03 · WEB DEVELOPMENT',
    title: 'พัฒนาระบบที่เร็ว ปลอดภัย และขยายต่อได้',
    intro: 'เราแปลงงานออกแบบเป็น Web Application ที่พร้อมใช้งานจริง ด้วยโครงสร้างโค้ดที่เป็นระบบ ทดสอบได้ และดูแลต่อได้ในระยะยาว',
    items: ['Frontend และ Responsive Web Application', 'Backend, Database และ API Architecture', 'เชื่อมต่อ Payment, CRM หรือบริการภายนอก', 'Automated Test, Security Review และ Cloud Deployment'],
    outcome: 'ได้ Source Code ระบบ Production และเอกสารทางเทคนิคครบถ้วน พร้อม Monitoring และกระบวนการส่งมอบให้ทีมของคุณ',
    art: `<svg viewBox="0 0 560 400"><rect x="55" y="48" width="450" height="304" rx="20" fill="#151a2e"/><rect x="55" y="48" width="450" height="42" rx="20" fill="#252b43"/><circle cx="82" cy="69" r="5" fill="#6ae2ff"/><circle cx="99" cy="69" r="5" fill="#c9f36a"/><g class="code"><text x="91" y="129"><tspan fill="#8b91a8">01</tspan><tspan x="128" fill="#73e1ff">const</tspan><tspan fill="#fff"> product = {</tspan></text><text x="91" y="166"><tspan fill="#8b91a8">02</tspan><tspan x="148" fill="#c9f36a">experience:</tspan><tspan fill="#ffb2d0"> 'clear'</tspan><tspan fill="#fff">,</tspan></text><text x="91" y="203"><tspan fill="#8b91a8">03</tspan><tspan x="148" fill="#c9f36a">performance:</tspan><tspan fill="#b8adff"> 98</tspan><tspan fill="#fff">,</tspan></text><text x="91" y="240"><tspan fill="#8b91a8">04</tspan><tspan x="148" fill="#c9f36a">scalable:</tspan><tspan fill="#73e1ff"> true</tspan></text><text x="91" y="277"><tspan fill="#8b91a8">05</tspan><tspan x="128" fill="#fff">}</tspan></text></g><rect x="347" y="286" width="121" height="36" rx="8" fill="#656bf1"/><text x="378" y="309" fill="#fff" class="art-button">DEPLOY ↗</text></svg>`
  },
  growth: {
    label: '04 · GROWTH & SUPPORT',
    title: 'พัฒนาต่อจากข้อมูลจริงหลังเปิดใช้งาน',
    intro: 'การ Launch ไม่ใช่จุดสิ้นสุด เราติดตามสุขภาพระบบและพฤติกรรมผู้ใช้ เพื่อนำข้อมูลมาปรับปรุง Conversion ประสิทธิภาพ และความเสถียรอย่างต่อเนื่อง',
    items: ['Analytics, Error Tracking และ Performance Monitoring', 'Preventive Maintenance และ Security Update', 'วิเคราะห์ Funnel และวางแผน Improvement Sprint', 'พัฒนาฟีเจอร์ใหม่พร้อม SLA ที่เหมาะกับธุรกิจ'],
    outcome: 'ระบบทำงานได้ต่อเนื่อง มีข้อมูลประกอบการตัดสินใจ และมีแผนพัฒนาที่เชื่อมโยงกับเป้าหมายธุรกิจในแต่ละช่วง',
    art: `<svg viewBox="0 0 560 400"><rect x="61" y="52" width="438" height="296" rx="22" fill="#fff"/><text x="96" y="96" class="art-overline">GROWTH OVERVIEW</text><text x="96" y="135" class="art-big">+38.6%</text><text x="249" y="131" class="art-positive">↑ ABOVE TARGET</text><path d="M96 294H466M96 247H466M96 200H466M96 153H466" stroke="#e5e8ed"/><path d="M96 290C145 281 163 259 201 267s58-27 89-19 47-66 84-53 58-64 92-74" fill="none" stroke="#9acd3f" stroke-width="7" stroke-linecap="round"/><path d="M440 121h26v26" fill="none" stroke="#6970ef" stroke-width="5"/><circle cx="290" cy="248" r="9" fill="#6970ef" stroke="#fff" stroke-width="4"/><rect x="96" y="314" width="92" height="8" rx="4" fill="#dce0e7"/><rect x="199" y="314" width="58" height="8" rx="4" fill="#dff2aa"/></svg>`
  }
};

const serviceModal = document.querySelector('#service-modal');
const modalTitle = document.querySelector('#modal-title');
const modalLabel = document.querySelector('#modal-label');
const modalIntro = document.querySelector('#modal-intro');
const modalList = document.querySelector('#modal-list');
const modalOutcome = document.querySelector('#modal-outcome');
const modalArt = document.querySelector('#modal-art');
let lastServiceTrigger;

function openServiceModal(key, trigger) {
  const detail = serviceDetails[key];
  if (!detail) return;
  lastServiceTrigger = trigger;
  modalLabel.textContent = detail.label;
  modalTitle.textContent = detail.title;
  modalIntro.textContent = detail.intro;
  modalList.innerHTML = detail.items.map(item => `<li>${item}</li>`).join('');
  modalOutcome.textContent = detail.outcome;
  modalArt.innerHTML = detail.art;
  serviceModal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => serviceModal.classList.add('open'));
  serviceModal.querySelector('.modal-close').focus();
}

function closeServiceModal() {
  serviceModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  setTimeout(() => { serviceModal.hidden = true; }, 260);
  lastServiceTrigger?.focus();
}

document.querySelectorAll('[data-service]').forEach(card => {
  card.addEventListener('click', () => openServiceModal(card.dataset.service, card));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openServiceModal(card.dataset.service, card);
    }
  });
});

serviceModal.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeServiceModal));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && serviceModal.classList.contains('open')) closeServiceModal();
});

const industryShowcases = [
  {
    key: 'ecommerce',
    layout: 'slide-style-showcase',
    title: 'ค้าปลีกและร้านค้าออนไลน์',
    label: '01 · RETAIL & E-COMMERCE',
    intro: 'ตัวอย่างหน้าเว็บสำหรับร้านค้าออนไลน์ ตั้งแต่สินค้าแฟชั่น สกินแคร์ อุปกรณ์ไอที ไปจนถึง Marketplace ที่ต้องเน้นสินค้า โปรโมชัน และเส้นทางสั่งซื้อที่ชัดเจน',
    tags: ['Online Store', 'Marketplace', 'Inventory', 'Loyalty'],
    images: ['E Com/01-fashion-mora-homepage.png', 'E Com/02-skincare-luma-homepage.png', 'E Com/03-electronics-nexora-homepage.png', 'E Com/04-home-decor-haven-oak-homepage.png', 'E Com/05-grocery-freshbasket-homepage.png', 'E Com/06-fitness-pulse-active-homepage.png', 'E Com/07-toys-little-sprout-homepage.png', 'E Com/08-coffee-ember-grain-homepage.png', 'E Com/09-eco-evergreen-goods-homepage.png', 'E Com/10-marketplace-cartera-homepage.png']
  },
  {
    key: 'hospitality',
    layout: 'slide-style-postcard',
    title: 'โรงแรม ร้านอาหาร และท่องเที่ยว',
    label: '02 · HOSPITALITY & FOOD',
    intro: 'เหมาะกับธุรกิจที่ขายประสบการณ์ ภาพต้องเล่าอารมณ์ บรรยากาศ และทำให้ผู้ชมอยากจองทันที ไม่ว่าจะเป็นโรงแรม ร้านอาหาร คาเฟ่ หรือทัวร์',
    tags: ['Booking', 'Guest Portal', 'Restaurant', 'Travel'],
    images: ['hospitality-restaurants-travel/01-luxury-hotel-aurelia-en.png', 'hospitality-restaurants-travel/02-island-resort-azura-en.png', 'hospitality-restaurants-travel/03-boutique-hotel-maison-arden-en.png', 'hospitality-restaurants-travel/04-fine-dining-sable-en.png', 'hospitality-restaurants-travel/05-family-restaurant-table-town-en.png', 'hospitality-restaurants-travel/06-cafe-morning-fold-en.png', 'hospitality-restaurants-travel/07-travel-agency-voyara-en.png', 'hospitality-restaurants-travel/08-adventure-tours-wildroam-en.png', 'hospitality-restaurants-travel/09-wellness-retreat-serenya-en.png', 'hospitality-restaurants-travel/10-local-experiences-localy-en.png', 'hospitality-restaurants-travel/11-luxury-hotel-aurelia-th.png', 'hospitality-restaurants-travel/12-island-resort-azura-th.png', 'hospitality-restaurants-travel/13-family-restaurant-krua-prom-na-th.png', 'hospitality-restaurants-travel/14-thailand-travel-agency-th.png', 'hospitality-restaurants-travel/15-wellness-retreat-sirinya-th.png']
  },
  {
    key: 'realestate',
    layout: 'slide-style-architect',
    title: 'อสังหาริมทรัพย์และที่อยู่อาศัย',
    label: '03 · REAL ESTATE',
    intro: 'ตัวอย่างสำหรับโครงการบ้าน คอนโด แพลตฟอร์มเช่า และระบบขายอสังหา เน้นภาพใหญ่ ข้อมูลโครงการ และทางลัดสำหรับนัดชม/ติดต่อฝ่ายขาย',
    tags: ['Property Portal', 'Sales CRM', 'Resident App', 'Booking'],
    images: ['real-estate-housing/01-luxury-condo-vera-th.png', 'real-estate-housing/02-family-homes-willowbrook-en.png', 'real-estate-housing/03-property-marketplace-baandd-th.png', 'real-estate-housing/04-architecture-developer-atelier-north-en.png', 'real-estate-housing/05-rental-platform-yuusabai-th.png', 'real-estate-housing/06-senior-living-harbour-grove-en.png', 'real-estate-housing/07-housing-developer-phumisuk-th.png', 'real-estate-housing/08-coliving-commonly-en.png', 'real-estate-housing/09-home-builder-ruendee-th.png', 'real-estate-housing/10-property-investment-stonebridge-en.png']
  },
  {
    key: 'health',
    layout: 'slide-style-care',
    title: 'สุขภาพ คลินิก และ Wellness',
    label: '04 · HEALTHCARE & WELLNESS',
    intro: 'เหมาะกับคลินิก โรงพยาบาล ศูนย์สุขภาพ และ Wellness Studio ที่ต้องสื่อสารความน่าเชื่อถือ ความอบอุ่น และขั้นตอนนัดหมายที่ง่าย',
    tags: ['Appointment', 'Patient Portal', 'Telehealth', 'Wellness'],
    images: ['health-clinic-wellness/01-family-clinic-unjai-th.png', 'health-clinic-wellness/02-dental-brightline-en.png', 'health-clinic-wellness/03-derma-lamoon-th.png', 'health-clinic-wellness/04-counseling-open-sky-en.png', 'health-clinic-wellness/05-physiotherapy-kaodee-th.png', 'health-clinic-wellness/06-womens-health-elara-en.png', 'health-clinic-wellness/07-wellness-studio-somdul-th.png', 'health-clinic-wellness/08-pediatrics-little-oak-en.png', 'health-clinic-wellness/09-health-screening-cheewadee-th.png', 'health-clinic-wellness/10-holistic-wellness-root-river-en.png']
  },
  {
    key: 'education',
    layout: 'slide-style-learning',
    title: 'การศึกษาและฝึกอบรม',
    label: '05 · EDUCATION & TRAINING',
    intro: 'ตัวอย่างสำหรับโรงเรียน คอร์สออนไลน์ LMS สถาบันติว และ Corporate Training ที่ควรทำให้หลักสูตร ตารางเรียน และผลลัพธ์การเรียนเข้าใจง่าย',
    tags: ['LMS', 'Online Course', 'Student System', 'Certificate'],
    images: ['education-training/01-language-school-kru-jaidee-th.png', 'education-training/02-online-learning-skillforge-en.png', 'education-training/03-kids-learning-baankids-th.png', 'education-training/04-university-northbridge-en.png', 'education-training/05-exam-prep-tiwtidpro-th.png', 'education-training/06-creative-academy-canvas-code-en.png', 'education-training/07-vocational-chang-keng-th.png', 'education-training/08-corporate-training-leadwise-en.png', 'education-training/09-music-school-siang-sai-th.png', 'education-training/10-coding-ai-neuralpath-en.png']
  },
  {
    key: 'media',
    layout: 'slide-style-stage',
    title: 'สื่อ อีเวนต์ และครีเอเตอร์',
    label: '06 · MEDIA & EVENTS',
    intro: 'เหมาะกับงานอีเวนต์ เทศกาล ครีเอเตอร์ สตูดิโอ และแพลตฟอร์มคอนเทนต์ ที่ต้องดึงสายตา เล่าเรื่องเร็ว และพาผู้ชมไปลงทะเบียน/ซื้อบัตร',
    tags: ['Ticketing', 'Event Portal', 'Content', 'Membership'],
    images: ['media-events-creators/01-media-agency-pixelpulse-en.png', 'media-events-creators/02-event-planner-weteewow-th.png', 'media-events-creators/03-creator-portfolio-mika-en.png', 'media-events-creators/04-podcast-live-onair-bangkok-mixed.png', 'media-events-creators/05-music-festival-neon-field-en.png', 'media-events-creators/06-wedding-event-rakruen-th.png', 'media-events-creators/07-film-studio-framecraft-en.png', 'media-events-creators/08-creator-marketplace-hub-th.png', 'media-events-creators/09-art-community-blank-wall-en.png', 'media-events-creators/10-creator-academy-pun-creator-th.png', 'media-events-creators/11-hybrid-event-gathergrid-en.png']
  },
  {
    key: 'finance',
    layout: 'slide-style-finance',
    title: 'การเงิน ประกัน และ FinTech',
    label: '07 · FINANCE & INSURANCE',
    intro: 'ตัวอย่างสำหรับธนาคารดิจิทัล ประกัน การชำระเงิน การลงทุน และระบบ Claim ที่ต้องดูเป็นมืออาชีพ ปลอดภัย และอธิบายข้อมูลยากให้ง่ายขึ้น',
    tags: ['FinTech', 'Claims', 'Dashboard', 'Onboarding'],
    images: ['finance-insurance-fintech/01-digital-bank-northstar-en.png', 'finance-insurance-fintech/02-insurance-asteria-en.png', 'finance-insurance-fintech/03-wealth-vellum-capital-en.png', 'finance-insurance-fintech/04-payments-flowpay-en.png', 'finance-insurance-fintech/05-insuretech-khumkrongwai-th.png', 'finance-insurance-fintech/06-mortgage-harborhome-en.png', 'finance-insurance-fintech/07-accounting-ledgerly-en.png', 'finance-insurance-fintech/08-private-bank-maison-argent-en.png', 'finance-insurance-fintech/09-claims-claimpilot-en.png', 'finance-insurance-fintech/10-retirement-evergreen-en.png', 'finance-insurance-fintech/11-digital-assets-atlas-ledger-en.png']
  },
  {
    key: 'professional',
    layout: 'slide-style-corporate',
    title: 'บริการวิชาชีพและองค์กร',
    label: '08 · PROFESSIONAL SERVICES',
    intro: 'เหมาะกับสำนักงานกฎหมาย ที่ปรึกษา HR บัญชี สถาปนิก และบริการองค์กร ที่ต้องสร้างความน่าเชื่อถือ พร้อมพื้นที่ให้ลูกค้าเข้าถึงเอกสาร/งานบริการ',
    tags: ['Client Portal', 'Workflow', 'Billing', 'Document'],
    images: ['professional-corporate-services/01-law-firm-caldwell-stone-en.png', 'professional-corporate-services/02-business-consulting-kolayutdee-th.png', 'professional-corporate-services/03-hr-recruitment-talentbridge-en.png', 'professional-corporate-services/04-accounting-tax-bancheeprom-th.png', 'professional-corporate-services/05-architecture-engineering-arcline-en.png', 'professional-corporate-services/06-corporate-services-ongkornprom-th.png']
  },
  {
    key: 'saas',
    layout: 'slide-style-saas',
    title: 'Startup และ SaaS Product',
    label: '09 · STARTUP & SAAS',
    intro: 'ตัวอย่างหน้าผลิตภัณฑ์ SaaS และ MVP ที่ต้องอธิบายคุณค่าเร็ว โชว์ฟีเจอร์ชัด และช่วยให้ผู้ชมทดลองใช้ สมัครสมาชิก หรือนัด Demo ได้ง่าย',
    tags: ['MVP', 'SaaS', 'Subscription', 'Product Analytics'],
    images: ['startup-saas-product/01-project-management-orbitflow-en.png', 'startup-saas-product/02-ai-support-replynest-en.png', 'startup-saas-product/03-analytics-metriclake-en.png', 'startup-saas-product/04-booking-jongngai-pro-th.png', 'startup-saas-product/05-cybersecurity-shieldlayer-en.png', 'startup-saas-product/06-design-collab-canvasloop-en.png', 'startup-saas-product/07-sales-crm-leadspark-en.png', 'startup-saas-product/08-automation-taskbloom-en.png', 'startup-saas-product/09-developer-api-hookbase-en.png', 'startup-saas-product/10-hr-payroll-teamprom-th.png', 'startup-saas-product/11-product-onboarding-guideglow-en.png', 'startup-saas-product/12-ai-writing-draftwave-en.png']
  },
  {
    key: 'manufacturing',
    layout: 'slide-style-factory',
    title: 'โรงงานและการผลิต',
    label: '10 · MANUFACTURING',
    intro: 'ตัวอย่างสำหรับโรงงาน ผู้ผลิต และระบบอุตสาหกรรมที่ต้องสื่อสารความเชี่ยวชาญ กระบวนการผลิต มาตรฐานคุณภาพ และ Dashboard ภายใน',
    tags: ['ERP', 'Production', 'Quality', 'IoT Dashboard'],
    images: ['factory-manufacturing/01-automotive-apexauto-en.png', 'factory-manufacturing/02-cosmetics-lumaderm-en.png', 'factory-manufacturing/03-bottled-water-purespring-en.png', 'factory-manufacturing/04-motorcycle-voltrider-en.png', 'factory-manufacturing/05-it-components-microcore-en.png', 'factory-manufacturing/06-food-processing-harvestline-en.png', 'factory-manufacturing/07-packaging-packora-en.png', 'factory-manufacturing/08-pcb-ems-circuitforge-en.png', 'factory-manufacturing/09-furniture-oakline-en.png', 'factory-manufacturing/10-apparel-threadworks-en.png', 'factory-manufacturing/11-smart-factory-factorygrid-en.png']
  },
  {
    key: 'logistics',
    layout: 'slide-style-logistics',
    title: 'โลจิสติกส์ ขนส่ง และคลังสินค้า',
    label: '11 · LOGISTICS & DELIVERY',
    intro: 'เหมาะกับระบบขนส่ง คลังสินค้า Tracking และ Fleet Management ที่ต้องโชว์สถานะ เส้นทาง ความเร็ว และความแม่นยำของข้อมูล',
    tags: ['Tracking', 'Fleet', 'Warehouse', 'Route'],
    images: ['logistics-transport-warehouse/01-freight-borderline-en.png', 'logistics-transport-warehouse/02-warehouse-stackhub-en.png', 'logistics-transport-warehouse/03-trucking-rapidroute-en.png', 'logistics-transport-warehouse/04-cold-chain-coldpath-en.png', 'logistics-transport-warehouse/05-port-terminal-harborgate-en.png', 'logistics-transport-warehouse/06-visibility-tracepilot-en.png', 'logistics-transport-warehouse/07-parcel-songwai-th.png']
  },
  {
    key: 'public',
    layout: 'slide-style-public',
    title: 'ภาครัฐ สมาคม และองค์กรไม่แสวงกำไร',
    label: '12 · PUBLIC & NONPROFIT',
    intro: 'ตัวอย่างสำหรับหน่วยงาน สมาคม มูลนิธิ และระบบสาธารณะ ที่ต้องเน้นความชัดเจน ความเข้าถึงง่าย และสร้างความไว้วางใจให้กับผู้ใช้งานหลากหลายกลุ่ม',
    tags: ['E-Service', 'Membership', 'Donation', 'Public Dashboard'],
    images: ['government-association-nonprofit/01-government-portal-civicaccess-en.png', 'government-association-nonprofit/02-municipal-mueangsukjai-th.png', 'government-association-nonprofit/03-professional-association-design-en.png', 'government-association-nonprofit/04-environment-ngo-earthharbor-en.png', 'government-association-nonprofit/05-education-foundation-saengrian-th.png', 'government-association-nonprofit/06-volunteer-helpinghands-en.png']
  }
];

const industryModal = document.querySelector('#industry-showcase');
const industryModalTitle = document.querySelector('#industry-modal-title');
const industryModalLabel = document.querySelector('#industry-modal-label');
const industryModalIntro = document.querySelector('#industry-modal-intro');
const industryModalTags = document.querySelector('#industry-modal-tags');
const industrySlider = document.querySelector('#industry-slider');
const industrySlideCount = document.querySelector('#industry-slide-count');
const industrySlideTitle = document.querySelector('#industry-slide-title');
const industryDots = document.querySelector('#industry-dots');
const industryPrev = document.querySelector('.industry-prev');
const industryNext = document.querySelector('.industry-next');
const fullPicture = document.querySelector('#full-picture');
const fullPictureImg = document.querySelector('#full-picture-img');
const fullPictureCaption = document.querySelector('#full-picture-caption');
const fullPictureClose = document.querySelector('.full-picture-close');
let activeIndustry;
let activeIndustrySlide = 0;
let lastIndustryTrigger;
let industryAutoTimer;

function readableSlideName(path) {
  const file = path.split('/').pop().replace(/\.(png|jpe?g|webp|gif|svg)$/i, '');
  return file.replace(/^\d+-/, '').replace(/-(en|th|mixed)$/i, '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function setIndustrySlide(index) {
  if (!activeIndustry) return;
  activeIndustrySlide = (index + activeIndustry.images.length) % activeIndustry.images.length;
  industrySlider.querySelectorAll('.industry-slide').forEach((slide, slideIndex) => {
    const total = activeIndustry.images.length;
    const previous = (activeIndustrySlide - 1 + total) % total;
    const next = (activeIndustrySlide + 1) % total;
    const farPrevious = (activeIndustrySlide - 2 + total) % total;
    const farNext = (activeIndustrySlide + 2) % total;
    slide.classList.toggle('active', slideIndex === activeIndustrySlide);
    slide.classList.toggle('before', slideIndex === previous);
    slide.classList.toggle('after', slideIndex === next);
    slide.classList.toggle('far-before', slideIndex === farPrevious);
    slide.classList.toggle('far-after', slideIndex === farNext);
  });
  industryDots.querySelectorAll('button').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === activeIndustrySlide));
  industrySlideCount.textContent = `${String(activeIndustrySlide + 1).padStart(2, '0')} / ${String(activeIndustry.images.length).padStart(2, '0')}`;
  industrySlideTitle.textContent = readableSlideName(activeIndustry.images[activeIndustrySlide]);
  const shell = document.querySelector('.industry-slider-shell');
  shell?.style.setProperty('--active-industry-image', `url("${encodeURI(activeIndustry.images[activeIndustrySlide])}")`);
  const progress = document.querySelector('.industry-progress i');
  progress?.classList.remove('running');
  void progress?.offsetWidth;
  progress?.classList.add('running');
}

function startIndustryAutoplay() {
  clearInterval(industryAutoTimer);
  industryAutoTimer = setInterval(() => setIndustrySlide(activeIndustrySlide + 1), 4200);
}

function restartIndustryAutoplay() {
  startIndustryAutoplay();
}

function openFullPicture() {
  if (!activeIndustry || !fullPicture) return;
  const image = activeIndustry.images[activeIndustrySlide];
  clearInterval(industryAutoTimer);
  fullPictureImg.src = encodeURI(image);
  fullPictureImg.alt = `${activeIndustry.title} - ${readableSlideName(image)}`;
  fullPictureCaption.textContent = readableSlideName(image);
  fullPicture.hidden = false;
  requestAnimationFrame(() => fullPicture.classList.add('open'));
  fullPictureClose?.focus();
}

function closeFullPicture() {
  if (!fullPicture || fullPicture.hidden) return;
  fullPicture.classList.remove('open');
  setTimeout(() => {
    fullPicture.hidden = true;
    fullPictureImg.src = '';
  }, 220);
  restartIndustryAutoplay();
}

function openIndustryShowcase(index, trigger) {
  const detail = industryShowcases[index];
  if (!detail || !industryModal) return;
  activeIndustry = detail;
  activeIndustrySlide = 0;
  lastIndustryTrigger = trigger;
  industryModalTitle.textContent = detail.title;
  industryModalLabel.textContent = detail.label;
  industryModalIntro.textContent = detail.intro;
  industryModalTags.innerHTML = detail.tags.map(tag => `<b>${tag}</b>`).join('');
  industrySlider.className = `industry-slider ${detail.layout}`;
  industrySlider.innerHTML = detail.images.map((image, imageIndex) => `<figure class="industry-slide"><img src="${encodeURI(image)}" alt="${detail.title} ตัวอย่างที่ ${imageIndex + 1}" loading="lazy"><button type="button" class="picture-zoom" aria-label="ดูภาพตัวอย่างที่ ${imageIndex + 1} แบบเต็มจอ">ขยายภาพ</button></figure>`).join('');
  industrySlider.querySelectorAll('.industry-slide').forEach((slide, slideIndex) => {
    slide.addEventListener('click', () => {
      if (slideIndex !== activeIndustrySlide) {
        setIndustrySlide(slideIndex);
        restartIndustryAutoplay();
        return;
      }
      openFullPicture();
    });
  });
  industryDots.innerHTML = detail.images.map((_, dotIndex) => `<button type="button" aria-label="ดูภาพที่ ${dotIndex + 1}"></button>`).join('');
  industryDots.querySelectorAll('button').forEach((dot, dotIndex) => dot.addEventListener('click', () => {
    setIndustrySlide(dotIndex);
    restartIndustryAutoplay();
  }));
  setIndustrySlide(0);
  startIndustryAutoplay();
  industryModal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => industryModal.classList.add('open'));
  industryModal.querySelector('.industry-close').focus();
}

function closeIndustryShowcase() {
  if (!industryModal) return;
  closeFullPicture();
  industryModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  clearInterval(industryAutoTimer);
  setTimeout(() => { industryModal.hidden = true; }, 260);
  lastIndustryTrigger?.focus();
}

document.querySelectorAll('.industry-grid .industry-card').forEach((card, index) => {
  const detail = industryShowcases[index];
  if (!detail) return;
  card.dataset.industry = detail.key;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-haspopup', 'dialog');
  if (!card.querySelector('.industry-view')) {
    const hint = document.createElement('span');
    hint.className = 'industry-view';
    hint.innerHTML = 'ดูตัวอย่างสไลด์ <b>↗</b>';
    card.appendChild(hint);
  }
  card.addEventListener('click', () => openIndustryShowcase(index, card));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openIndustryShowcase(index, card);
    }
  });
});

industryPrev?.addEventListener('click', () => { setIndustrySlide(activeIndustrySlide - 1); restartIndustryAutoplay(); });
industryNext?.addEventListener('click', () => { setIndustrySlide(activeIndustrySlide + 1); restartIndustryAutoplay(); });
industryModal?.querySelectorAll('[data-close-industry]').forEach(element => element.addEventListener('click', closeIndustryShowcase));
fullPictureClose?.addEventListener('click', closeFullPicture);
fullPicture?.addEventListener('click', event => {
  if (event.target === fullPicture) closeFullPicture();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && fullPicture?.classList.contains('open')) {
    closeFullPicture();
    return;
  }
  if (event.key === 'Escape' && industryModal?.classList.contains('open')) closeIndustryShowcase();
  if (fullPicture?.classList.contains('open')) return;
  if (event.key === 'ArrowLeft' && industryModal?.classList.contains('open')) {
    setIndustrySlide(activeIndustrySlide - 1);
    restartIndustryAutoplay();
  }
  if (event.key === 'ArrowRight' && industryModal?.classList.contains('open')) {
    setIndustrySlide(activeIndustrySlide + 1);
    restartIndustryAutoplay();
  }
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  window.addEventListener('pointermove', event => {
    const x = ((event.clientX / window.innerWidth) - .5) * 12;
    const y = ((event.clientY / window.innerHeight) - .5) * 8;
    document.documentElement.style.setProperty('--px', `${x}px`);
    document.documentElement.style.setProperty('--py', `${y}px`);
    document.querySelector('.product-scene')?.style.setProperty('transform', `translate3d(${x * .28}px,${y * .28}px,0)`);
  }, { passive: true });
}

// ---- EmailJS ----
const EMAILJS_SERVICE_ID = 'service_ksyk64i';
const EMAILJS_TEMPLATE_ID = 'template_pgaekwg';
const EMAILJS_PUBLIC_KEY = 'FwWZcFeg-PhhqpMyV';

if (window.emailjs) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

document.querySelector('#brief-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const note = document.querySelector('#form-note');
  const submitButton = form.querySelector('button[type="submit"]');
  const services = document.querySelectorAll('.choices button.active');
  if (!services.length) {
    note.textContent = 'กรุณาเลือกบริการที่สนใจอย่างน้อย 1 รายการ';
    return;
  }
  const servicesValue = Array.from(services).map(button => button.textContent.trim()).join(', ');
  const servicesField = document.querySelector('#brief-services');
  if (servicesField) servicesField.value = servicesValue;

  // รวมข้อมูลทุกช่องเป็นข้อความเดียว เผื่อ template ใช้ {{message}}
  const get = selector => (form.querySelector(selector)?.value || '').trim();
  const messageField = document.querySelector('#brief-message');
  if (messageField) {
    messageField.value = [
      'ชื่อผู้ติดต่อ: ' + (get('[name="name"]') || '-'),
      'อีเมล: ' + (get('[name="email"]') || '-'),
      'เบอร์โทรศัพท์: ' + (get('[name="phone"]') || '-'),
      'องค์กร/บริษัท: ' + (get('[name="company"]') || '-'),
      'บริการที่สนใจ: ' + (servicesValue || '-'),
      'งบประมาณ: ' + (get('[name="budget"]') || '-'),
      'ต้องการเริ่ม: ' + (get('[name="timeline"]') || '-'),
      'รายละเอียดโปรเจกต์: ' + (get('[name="detail"]') || '-')
    ].join('\n');
  }

  if (!window.emailjs) {
    note.textContent = 'ไม่สามารถโหลดระบบส่งอีเมลได้ กรุณาลองใหม่อีกครั้ง';
    return;
  }
  note.textContent = 'กำลังส่งรายละเอียด...';
  if (submitButton) submitButton.disabled = true;
  emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
    .then(() => {
      note.textContent = 'ส่งรายละเอียดเรียบร้อยแล้ว — ทีมงานจะติดต่อกลับภายใน 1–2 วันทำการครับ';
      form.reset();
      document.querySelectorAll('.choices button.active').forEach(button => button.classList.remove('active'));
    })
    .catch(() => {
      note.textContent = 'ส่งไม่สำเร็จ กรุณาลองใหม่ หรือติดต่อ hello@nexora.studio โดยตรง';
    })
    .finally(() => {
      if (submitButton) submitButton.disabled = false;
    });
});
