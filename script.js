const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modalBg = document.getElementById('modalBg');
const searchBtn = document.getElementById('searchBtn');
const resultBox = document.getElementById('result');
const checkDocLink = document.getElementById('checkDoc');
const languageToggle = document.getElementById('languageToggle');

const translations = {
  ko: {
    logo: '치앙마이 한인회',
    'nav-home': '홈',
    'nav-about': '한인회 소개',
    'nav-services': '주요 서비스',
    'nav-news': '소식 & 홍보',
    'nav-business': '회원 비즈니스',
    'nav-contact': '문의',
    'nav-check': '문서 조회',
    'hero-eyebrow': '커뮤니티 & 영사 지원',
    'hero-heading': '치앙마이 한인회',
    'hero-description': '치앙마이 한인회는 지역 한인과 가족을 위해 신뢰할 수 있는 영사 지원, 문화 행사, 지역 네트워크를 제공합니다.',
    'hero-primary': '문서 진행상황 조회',
    'hero-secondary': '문의하기',
    'hero-placeholder': '행사 사진 또는 홍보 이미지를 위한 자리',
    'about-title': '한인회 소개',
    'about-body': '치앙마이 한인회는 영사 업무 지원, 지역 정보 제공, 커뮤니티 행사를 통해 한인 사회를 돕고 있습니다. 또한 주태국 대한민국 대사관의 지침 아래 명예영사관 역할을 수행하고 있습니다.',
    'service1-title': '커뮤니티 지원',
    'service1-desc': '영사 서류 처리, 지역 생활 안내, 대사관 연계를 통해 회원들의 필요를 신속하게 돕습니다.',
    'service2-title': '행사 & 문화교류',
    'service2-desc': '워크숍, 문화 축제, 봉사 활동을 통해 회원과 가족이 함께 어울릴 수 있는 기회를 만듭니다.',
    'service3-title': '비즈니스 네트워크',
    'service3-desc': '치앙마이의 한인 상점, 음식점, 전문 서비스 정보를 공유하여 지역 경제를 활성화합니다.',
    'news-title': '소식 & 홍보 공간',
    'news-description': '한인회 소식, 주요 안내, 회원 비즈니스 홍보를 위한 콘텐츠를 이곳에 채워갈 예정입니다.',
    'news-card1-media': '최근 행사 사진 자리',
    'news-card1-title': '행사 소식 미리보기',
    'news-card1-body': '곧 업데이트될 행사 및 공지 요약을 담아 회원들이 세부 내용을 쉽게 확인할 수 있도록 준비합니다.',
    'news-card2-media': '회원 비즈니스 홍보 자리',
    'news-card2-title': '추천 매장 & 서비스',
    'news-card2-body': '치앙마이에 위치한 한인 업체를 소개하고 특별 프로모션이나 연락처를 연결할 수 있도록 마련한 공간입니다.',
    'news-card3-media': '다음 행사 포스터 자리',
    'news-card3-title': '다가오는 일정',
    'news-card3-body': '예정된 모임과 프로그램을 사전에 안내하여 회원들이 준비하고 참여할 수 있도록 돕습니다.',
    'business-title': '회원 비즈니스 안내',
    'business-body': '회원 편의를 위해 업종별 리스트를 제공하고 있으며, 후원사를 통해 한인회의 운영과 커뮤니티 활동을 함께 만들어갑니다.',
    'contact-title': '문의 및 방문',
    'contact-body': '📍 Huay Kaew Rd, Chiang Mai, Thailand<br>📞 05x-xxx-xxxx<br>✉️ info@hanincnx.org',
    'footer-text': '© 2025 치앙마이 한인회. All rights reserved.',
    'modal-title': '문서 진행상황 조회',
    'modal-label': '회원번호 (Member ID)',
    'modal-placeholder': '예: 00123',
    'modal-button': '조회하기'
  },
  en: {
    logo: 'Korean Association Chiang Mai',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-news': 'Highlights',
    'nav-business': 'Member Businesses',
    'nav-contact': 'Contact',
    'nav-check': 'Check Status',
    'hero-eyebrow': 'Community & Consular Support',
    'hero-heading': 'Korean Association Chiang Mai',
    'hero-description': 'Welcome to the Korean Association of Chiang Mai—supporting our community with reliable consular services, cultural programs, and local connections.',
    'hero-primary': 'Check Document Status',
    'hero-secondary': 'Contact Us',
    'hero-placeholder': 'Reserved space for event photos or promotional media',
    'about-title': 'About Us',
    'about-body': 'The Korean Association of Chiang Mai provides consular assistance, local information, and community events for residents and families. We also operate as the Honorary Consulate Office under the guidance of the Embassy of the Republic of Korea in Thailand.',
    'service1-title': 'Community Support',
    'service1-desc': 'Assisting members with documentation, local guidance, and coordination with the embassy.',
    'service2-title': 'Events & Culture',
    'service2-desc': 'Workshops, cultural festivals, and volunteer programs that bring members and friends together.',
    'service3-title': 'Business Network',
    'service3-desc': 'Sharing information about Korean-owned shops, restaurants, and professional services across Chiang Mai.',
    'news-title': 'News & Promotion Board',
    'news-description': 'We will feature association updates, important notices, and member business spotlights here.',
    'news-card1-media': 'Space for latest event photos',
    'news-card1-title': 'Event Headlines Preview',
    'news-card1-body': 'Quick summaries of upcoming or recent activities so members can read more details later.',
    'news-card2-media': 'Member business spotlight space',
    'news-card2-title': 'Featured Shops & Services',
    'news-card2-body': 'Highlight Korean-owned businesses in Chiang Mai and share links or special promotions.',
    'news-card3-media': 'Next event poster space',
    'news-card3-title': 'Upcoming Schedule',
    'news-card3-body': 'Preview gatherings and programs so members can prepare and stay informed.',
    'business-title': 'Member Businesses',
    'business-body': 'Business listings are curated for member convenience and supported by sponsorship contributions that sustain association programs.',
    'contact-title': 'Contact & Visit',
    'contact-body': '📍 Huay Kaew Rd, Chiang Mai, Thailand<br>📞 05x-xxx-xxxx<br>✉️ info@hanincnx.org',
    'footer-text': '© 2025 Korean Association Chiang Mai. All rights reserved.',
    'modal-title': 'Check Document Status',
    'modal-label': 'Member ID',
    'modal-placeholder': 'e.g. 00123',
    'modal-button': 'Search'
  }
};

const resultTranslations = {
  ko: {
    name: '신청인',
    doc: '서류명',
    status: '상태',
    notFound: '⚠️ 해당 번호의 정보를 찾을 수 없습니다.'
  },
  en: {
    name: 'Applicant',
    doc: 'Document',
    status: 'Status',
    notFound: '⚠️ No records found for that number.'
  }
};

const data = {
  '00123': { name: '민 민트라', doc: { ko: '관광비자 신청', en: 'Tourist Visa Application' }, status: { ko: '완료', en: 'Complete' } },
  '00124': { name: '박 지은', doc: { ko: '서류 인증', en: 'Document Authentication' }, status: { ko: '진행 중', en: 'In Progress' } },
  '00999': { name: '김 성민', doc: { ko: '추가 서류 제출', en: 'Additional Document Submission' }, status: { ko: '대기 중', en: 'Pending' } }
};

let currentLanguage = 'ko';
const i18nElements = document.querySelectorAll('[data-i18n]');

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;

  i18nElements.forEach(el => {
    const key = el.dataset.i18n;
    const target = el.dataset.i18nTarget || 'text';
    const translation = translations[lang][key];
    if (!translation) return;

    if (target === 'text') {
      el.textContent = translation;
    } else if (target === 'html') {
      el.innerHTML = translation;
    } else if (target.startsWith('attr:')) {
      const attr = target.split(':')[1];
      el.setAttribute(attr, translation);
    }
  });

  if (languageToggle) {
    languageToggle.textContent = lang === 'ko' ? 'EN' : '한국어';
    languageToggle.setAttribute('aria-label', lang === 'ko' ? 'Switch to English' : 'Switch to Korean');
  }
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const nextLang = currentLanguage === 'ko' ? 'en' : 'ko';
    applyLanguage(nextLang);
  });
}

if (openModal) {
  openModal.onclick = () => (modalBg.style.display = 'flex');
}

if (checkDocLink) {
  checkDocLink.addEventListener('click', event => {
    event.preventDefault();
    if (modalBg) {
      modalBg.style.display = 'flex';
    }
  });
}

if (closeModal) {
  closeModal.onclick = () => (modalBg.style.display = 'none');
}

window.onclick = e => {
  if (e.target === modalBg) modalBg.style.display = 'none';
};

if (searchBtn) {
  searchBtn.onclick = () => {
    const id = document.getElementById('mid').value.trim();
    if (data[id]) {
      const d = data[id];
      const labels = resultTranslations[currentLanguage];
      resultBox.innerHTML = `<strong>${labels.name}:</strong> ${d.name}<br><strong>${labels.doc}:</strong> ${d.doc[currentLanguage]}<br><strong>${labels.status}:</strong> ${d.status[currentLanguage]}`;
      resultBox.style.display = 'block';
    } else {
      resultBox.innerHTML = resultTranslations[currentLanguage].notFound;
      resultBox.style.display = 'block';
    }
  };
}

applyLanguage('ko');
