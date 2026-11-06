// ========================================================
// 돈까스에 빠지다 브랜드 공식 다국어 스크립트
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 상태 변수
  let currentLang = 'ko';
  let currentCategory = 'all';

  // 1. 공식 국가별 고해상도 SVG 국기 맵 (태극기 왜곡 수정 및 전 세계 표준 규격)
  const FLAGS = {
    "ko": "<svg class=\"flag-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"900\" height=\"600\" viewBox=\"-72 -48 144 96\"><path fill=\"#fff\" d=\"M-72-48v96H72v-96z\"/><g stroke=\"#000\" stroke-width=\"4\"><path d=\"M-34.946-37.72-48.26-17.75m4.992 3.328 13.313-19.97m4.992 3.329-13.312 19.969m63.236 42.157 6.101-9.152m1.11-1.664 6.101-9.153m4.993 3.328-6.102 9.153m-1.11 1.664-6.101 9.152m4.992 3.329 6.102-9.153m1.11-1.664 6.1-9.153M-48.259 17.75l13.313 19.97m4.992-3.329-6.102-9.152m-1.109-1.664-6.102-9.153m4.993-3.328 13.312 19.97m63.236-42.158-6.101-9.153m-1.11-1.664-6.101-9.152m4.992-3.328 13.313 19.969m4.992-3.328-6.102-9.153m-1.11-1.664-6.1-9.153\"/></g><path fill=\"#cd2e3a\" d=\"M9.985 6.656A18 18 0 1 1-19.97-13.313a24 24 0 1 1 39.938 26.626\"/><path fill=\"#0047a0\" d=\"M0 0a12 12 0 1 1 19.97 13.313 24 24 0 1 1-39.94-26.626A12 12 0 1 0 0 0\"/></svg>",
    "en": "<svg class=\"flag-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1235\" height=\"650\" viewBox=\"0 0 7410 3900\"><path fill=\"#b31942\" d=\"M0 0h7410v3900H0\"/><path stroke=\"#FFF\" stroke-width=\"300\" d=\"M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0\"/><path fill=\"#0a3161\" d=\"M0 0h2964v2100H0\"/><g fill=\"#FFF\"><g id=\"d\"><g id=\"c\"><g id=\"e\"><g id=\"b\"><path id=\"a\" d=\"m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z\"/><use xlink:href=\"#a\" y=\"420\"/><use xlink:href=\"#a\" y=\"840\"/><use xlink:href=\"#a\" y=\"1260\"/></g><use xlink:href=\"#a\" y=\"1680\"/></g><use xlink:href=\"#b\" x=\"247\" y=\"210\"/></g><use xlink:href=\"#c\" x=\"494\"/></g><use xlink:href=\"#d\" x=\"988\"/><use xlink:href=\"#c\" x=\"1976\"/><use xlink:href=\"#e\" x=\"2470\"/></g></svg>",
    "ja": "<svg class=\"flag-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"><path fill=\"#fff\" d=\"M0 0h900v600H0z\"/><circle fill=\"#bc002d\" cx=\"450\" cy=\"300\" r=\"180\"/></svg>",
    "zh-CN": "<svg class=\"flag-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 900 600\"><path fill=\"#EE1C25\" d=\"M0 0h900v600H0\"/><g transform=\"matrix(3 0 0 3 150 150)\"><path id=\"zh_s\" fill=\"#FF0\" d=\"m0-30 17.634 54.27-46.166-33.54h57.064l-46.166 33.54Z\"/></g><use xlink:href=\"#zh_s\" transform=\"rotate(23.036 2.784 766.082)\"/><use xlink:href=\"#zh_s\" transform=\"rotate(45.87 38.201 485.396)\"/><use xlink:href=\"#zh_s\" transform=\"rotate(69.945 29.892 362.328)\"/><use xlink:href=\"#zh_s\" transform=\"rotate(20.66 -590.66 957.955)\"/></svg>",
    "zh-TW": "<svg class=\"flag-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"900\" height=\"600\" viewBox=\"0 0 120 80\"><path fill=\"#fe0000\" d=\"M0 0h120v80H0z\"/><path fill=\"#000094\" d=\"M0 0h60v40H0z\"/><path id=\"a\" fill=\"#fff\" d=\"m30 5 4 15-4 15-4-15zM15 20l15 4 15-4-15-4z\"/><use href=\"#a\" transform=\"rotate(30 30 20)\"/><use href=\"#a\" transform=\"rotate(60 30 20)\"/><circle cx=\"30\" cy=\"20\" r=\"8\" fill=\"#fff\" stroke=\"#000094\"/></svg>",
    "vi": "<svg class=\"flag-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"900\" height=\"600\" viewBox=\"0 0 30 20\"><path fill=\"red\" d=\"M0 0h30v20H0z\"/><path fill=\"#ffeb00\" d=\"m15 4-3.53 10.85 9.24-6.7H9.29l9.24 6.7z\"/></svg>"
  };

  // URL 파라미터에서 초기 언어 감지 (?lang=ko/en/ja/zh-CN/zh-TW/vi)
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  if (paramLang && STORE_DATA.languages.some(l => l.code === paramLang)) {
    currentLang = paramLang;
  }

  // DOM 캐싱
  const headerStoreName = document.getElementById('headerStoreName');
  const langSwitcher = document.getElementById('langSwitcher');
  const langChipBtn = document.getElementById('langChipBtn');
  const currentLangFlag = document.getElementById('currentLangFlag');
  const currentLangLabel = document.getElementById('currentLangLabel');
  const langMenu = document.getElementById('langMenu');

  // 브랜드 소개 카드 요소
  const storeCategoryText = document.getElementById('storeCategoryText');
  const storeTitleName = document.getElementById('storeTitleName');
  const storeSubName = document.getElementById('storeSubName');
  const storeDescText = document.getElementById('storeDescText');

  // 메뉴 컨테이너 및 카테고리 네비
  const sectionNavWrapper = document.getElementById('sectionNavWrapper');
  const sectionNav = document.getElementById('sectionNav');
  const navArrowLeft = document.getElementById('navArrowLeft');
  const navArrowRight = document.getElementById('navArrowRight');
  const menuSectionsContainer = document.getElementById('menuSectionsContainer');

  // 모달 요소
  const menuModalOverlay = document.getElementById('menuModalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalPhotoWrap = document.getElementById('modalPhotoWrap');
  const modalPhoto = document.getElementById('modalPhoto');
  const modalCatTag = document.getElementById('modalCatTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalPriceLabel = document.getElementById('modalPriceLabel');
  const modalPriceVal = document.getElementById('modalPriceVal');

  // 카테고리 스크롤 및 인터랙션 제어 변수
  let draggedDist = 0;
  let isDraggingNav = false;
  let isAutoScrolling = false;
  let autoScrollTimer = null;

  // 2. 언어 선택 칩 및 드롭다운 메뉴 렌더링
  function updateLangChipUI() {
    const langObj = STORE_DATA.languages.find(l => l.code === currentLang) || STORE_DATA.languages[0];
    if (currentLangLabel) currentLangLabel.textContent = langObj.label;
    if (currentLangFlag) currentLangFlag.innerHTML = FLAGS[langObj.code] || '';
  }

  function renderLangMenu() {
    langMenu.innerHTML = STORE_DATA.languages.map(l => {
      const isSelected = l.code === currentLang;
      const flagSvg = FLAGS[l.code] || '';
      return `
        <div class="lang-option ${isSelected ? 'selected' : ''}" data-code="${l.code}" role="menuitem">
          <span class="flag-icon-wrap">${flagSvg}</span>
          <span class="lang-name-text">${l.fullName}</span>
          <span class="lang-label-sub">(${l.label})</span>
          <span class="check-icon-wrap">
            ${isSelected ? `
              <svg class="check-icon" viewBox="0 0 12 12" width="12" height="12">
                <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              </svg>
            ` : ''}
          </span>
        </div>
      `;
    }).join('');

    langMenu.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const selectedCode = opt.getAttribute('data-code');
        changeLanguage(selectedCode);
        langSwitcher.classList.remove('open');
      });
    });
  }

  // 언어 드롭다운 토글
  if (langChipBtn) {
    langChipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSwitcher.classList.toggle('open');
    });
  }

  document.addEventListener('click', (e) => {
    if (langSwitcher && !langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove('open');
    }
  });

  // 3. 언어 변경 처리
  function changeLanguage(langCode) {
    currentLang = langCode;
    currentCategory = 'all'; // 언어 변경 시 항상 첫 번째 '전체' 탭으로 깔끔하게 초기화
    document.documentElement.lang = langCode;
    document.body.className = `lang-${langCode}`;

    // 상단 칩 갱신
    updateLangChipUI();

    // URL 파라미터 업데이트
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('lang', langCode);
    window.history.replaceState({}, '', newUrl);

    // 전체 UI 리렌더링
    renderLangMenu();
    updateBrandInfo();
    renderCategories();
    renderMenus();

    // 언어 변경 시 카테고리 스크롤 위치를 즉시 맨 처음(0)으로 리셋 (반쪽 잘림 원천 방지)
    if (sectionNav) {
      sectionNav.scrollLeft = 0;
      updateNavArrows();
    }
  }

  // 4. 브랜드 소개 정보 업데이트
  function updateBrandInfo() {
    const info = STORE_DATA.storeInfo[currentLang] || STORE_DATA.storeInfo['ko'];

    if (headerStoreName) headerStoreName.textContent = info.name;
    if (storeCategoryText) storeCategoryText.textContent = info.category;
    if (storeTitleName) storeTitleName.textContent = info.name;
    if (storeSubName) {
      if (info.subName) {
        storeSubName.textContent = info.subName;
        storeSubName.style.display = 'inline-block';
      } else {
        storeSubName.textContent = '';
        storeSubName.style.display = 'none';
      }
    }
    if (storeDescText) storeDescText.textContent = info.desc;

    const footerBrand = document.getElementById('footerBrand');
    if (footerBrand) {
      footerBrand.textContent = info.subName ? `${info.name} (${info.subName})` : info.name;
    }
    document.title = info.subName ? `${info.name} (${info.subName}) - 공식 메뉴 안내` : `${info.name} - 공식 메뉴 안내`;
  }

  // 카테고리 탭 부드러운 위치 정렬 헬퍼 (반쪽 잘림 원천 차단)
  function scrollToCategoryTab(btn, behavior = 'smooth') {
    if (!btn || !sectionNav) return;
    const navWidth = sectionNav.clientWidth;
    const maxScroll = sectionNav.scrollWidth - navWidth;
    if (maxScroll <= 0) return;

    // 첫 번째 탭("전체" / "All" / "Tất cả")이면 무조건 0으로 정렬 (왼쪽 잘림 절대 방지)
    if (btn === sectionNav.firstElementChild) {
      sectionNav.scrollTo({ left: 0, behavior });
      return;
    }
    // 마지막 탭("음료 · 주류" / "Drinks" / "Đồ uống & Rượu")이면 맨 끝으로 정렬
    if (btn === sectionNav.lastElementChild) {
      sectionNav.scrollTo({ left: maxScroll, behavior });
      return;
    }

    // 중간 탭은 화면 중앙에 오도록 스크롤 정렬
    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.offsetWidth;
    const targetLeft = btnLeft - (navWidth / 2) + (btnWidth / 2);
    const clampedLeft = Math.max(0, Math.min(targetLeft, maxScroll));
    sectionNav.scrollTo({ left: clampedLeft, behavior });
  }

  // 카테고리 좌우 네비게이션 화살표 및 그라데이션 표시 갱신
  function updateNavArrows() {
    if (!sectionNav || !navArrowLeft || !navArrowRight) return;
    const scrollLeft = sectionNav.scrollLeft;
    const maxScroll = sectionNav.scrollWidth - sectionNav.clientWidth;

    // 한 화면에 모든 카테고리가 다 들어오는 경우 (예: 한국어 등) 화살표 미표시
    if (maxScroll <= 6) {
      navArrowLeft.style.display = 'none';
      navArrowRight.style.display = 'none';
      if (sectionNavWrapper) {
        sectionNavWrapper.classList.remove('has-overflow-left', 'has-overflow-right');
      }
      return;
    }

    // 왼쪽 스크롤 가능 여부
    if (scrollLeft > 6) {
      navArrowLeft.style.display = 'flex';
      if (sectionNavWrapper) sectionNavWrapper.classList.add('has-overflow-left');
    } else {
      navArrowLeft.style.display = 'none';
      if (sectionNavWrapper) sectionNavWrapper.classList.remove('has-overflow-left');
    }

    // 오른쪽 스크롤 가능 여부
    if (scrollLeft < maxScroll - 6) {
      navArrowRight.style.display = 'flex';
      if (sectionNavWrapper) sectionNavWrapper.classList.add('has-overflow-right');
    } else {
      navArrowRight.style.display = 'none';
      if (sectionNavWrapper) sectionNavWrapper.classList.remove('has-overflow-right');
    }
  }

  // 5. 스티키 카테고리 탭 렌더링
  function renderCategories() {
    const catMap = STORE_DATA.categoryMap[currentLang] || STORE_DATA.categoryMap['ko'];
    const categories = [
      { key: 'all', name: catMap.all },
      { key: 'sig', name: catMap.sig },
      { key: 'set', name: catMap.set },
      { key: 'single', name: catMap.single },
      { key: 'noodle', name: catMap.noodle },
      { key: 'side', name: catMap.side },
      { key: 'addon', name: catMap.addon },
      { key: 'drink', name: catMap.drink }
    ];

    sectionNav.innerHTML = categories.map(cat => `
      <button type="button" class="section-nav-item ${cat.key === currentCategory ? 'is-active' : ''}" data-cat-key="${cat.key}">
        ${cat.name}
      </button>
    `).join('');

    sectionNav.querySelectorAll('.section-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        if (draggedDist > 6 || isDraggingNav) return; // 드래그 중 실수 클릭 방지

        const catKey = btn.getAttribute('data-cat-key');
        currentCategory = catKey;
        isAutoScrolling = true;
        clearTimeout(autoScrollTimer);
        autoScrollTimer = setTimeout(() => { isAutoScrolling = false; }, 900);

        sectionNav.querySelectorAll('.section-nav-item').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        scrollToCategoryTab(btn, 'smooth');

        // 본문 해당 섹션으로 부드럽게 스크롤
        if (catKey === 'all') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const targetSection = document.getElementById(`sec-${catKey}`);
          if (targetSection) {
            const headerOffset = 110;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // 렌더링 완료 후 화살표 표시 상태 갱신
    requestAnimationFrame(updateNavArrows);
  }

  // 6. 카테고리 좌우 이동 인터랙션 (화살표 버튼, 마우스 휠, 드래그 스크롤, 리사이즈)
  if (navArrowLeft) {
    navArrowLeft.addEventListener('click', (e) => {
      e.stopPropagation();
      sectionNav.scrollBy({ left: -160, behavior: 'smooth' });
    });
  }
  if (navArrowRight) {
    navArrowRight.addEventListener('click', (e) => {
      e.stopPropagation();
      sectionNav.scrollBy({ left: 160, behavior: 'smooth' });
    });
  }

  if (sectionNav) {
    // 스크롤 시 화살표 상태 갱신
    sectionNav.addEventListener('scroll', updateNavArrows, { passive: true });

    // PC 마우스 휠로 가로 스크롤 (세로 휠을 부드러운 가로 스크롤로 변환)
    sectionNav.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && e.deltaY !== 0) {
        e.preventDefault();
        sectionNav.scrollLeft += e.deltaY;
        updateNavArrows();
      }
    }, { passive: false });

    // PC 마우스 클릭 & 드래그 인터랙션 (창 전체를 추적하여 부드럽고 끊김 없이 이동)
    let isDown = false;
    let startX = 0;
    let scrollLeftVal = 0;

    sectionNav.addEventListener('mousedown', (e) => {
      if (e.target.closest('.nav-arrow-btn')) return;
      isDown = true;
      draggedDist = 0;
      isDraggingNav = false;
      startX = e.pageX;
      scrollLeftVal = sectionNav.scrollLeft;
      sectionNav.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const walk = e.pageX - startX;
      draggedDist = Math.abs(walk);
      if (draggedDist > 3) {
        isDraggingNav = true;
        e.preventDefault();
        sectionNav.scrollLeft = scrollLeftVal - walk;
        updateNavArrows();
      }
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        sectionNav.classList.remove('is-dragging');
        setTimeout(() => {
          draggedDist = 0;
          isDraggingNav = false;
        }, 60);
      }
    });
  }

  // 화면 크기 변경 시 화살표 상태 자동 갱신
  window.addEventListener('resize', updateNavArrows, { passive: true });

  // 화면 세로 스크롤 시 카테고리 자동 하이라이트 (Scroll Spy - 전역 단 1회 등록)
  function handleScrollSpy() {
    if (isAutoScrolling || isDraggingNav) return;
    const scrollPos = window.pageYOffset + 130;
    const sections = ['sig', 'set', 'single', 'noodle', 'side', 'addon', 'drink'];
    let currentId = 'all';

    if (window.pageYOffset < 150) {
      currentId = 'all';
    } else {
      for (const key of sections) {
        const sec = document.getElementById(`sec-${key}`);
        if (sec && sec.offsetTop <= scrollPos) {
          currentId = key;
        }
      }
    }

    if (currentCategory !== currentId) {
      currentCategory = currentId;
      sectionNav.querySelectorAll('.section-nav-item').forEach(btn => {
        const active = btn.getAttribute('data-cat-key') === currentId;
        btn.classList.toggle('is-active', active);
        if (active) {
          scrollToCategoryTab(btn, 'smooth');
        }
      });
      updateNavArrows();
    }
  }

  window.addEventListener('scroll', handleScrollSpy, { passive: true });

  // 가격 표기 헬퍼 (한국어: "9,500원", 한국어 외: "KRW 9,500")
  function formatPrice(rawPrice, lang = currentLang) {
    if (!rawPrice) return '';
    const numOnly = rawPrice.replace(/[^0-9,]/g, '').trim();
    if (lang === 'ko') {
      return `${numOnly}원`;
    } else {
      return `KRW ${numOnly}`;
    }
  }

  // 6. 30개 전체 메뉴 리스트 렌더링
  function renderMenus() {
    const catMap = STORE_DATA.categoryMap[currentLang] || STORE_DATA.categoryMap['ko'];
    const items = STORE_DATA.items;

    // 카테고리별 분류
    const sigItems = items.filter(i => i.catKey === 'sig');
    const setItems = items.filter(i => i.catKey === 'set');
    const singleItems = items.filter(i => i.catKey === 'single');
    const noodleItems = items.filter(i => i.catKey === 'noodle');
    const sideItems = items.filter(i => i.catKey === 'side');
    const addonItems = items.filter(i => i.catKey === 'addon');
    const drinkItems = items.filter(i => i.catKey === 'drink');

    const tapHintLabels = {
      ko: "상세보기",
      en: "Tap to view",
      ja: "詳細を見る",
      "zh-CN": "点击查看",
      "zh-TW": "點擊查看",
      zh: "点击查看",
      vi: "Xem chi tiết"
    };
    const tapHint = tapHintLabels[currentLang] || "상세보기";

    let html = '';

    // 2열 카드 그리드 아이템 렌더링 헬퍼 (시그니처, 세트, 단품, 면류, 사이드 공통 - 상단 배지 태그 제거)
    function renderGridCard(item) {
      const name = item.names[currentLang] || item.names['ko'];
      const koreanName = item.names['ko'];
      const desc = item.descs[currentLang] || item.descs['ko'];
      const photoSrc = item.image;
      const showKrSub = currentLang !== 'ko' && koreanName;
      const priceText = formatPrice(item.price, currentLang);
      return `
        <div class="sig-card" data-item-id="${item.id}" role="button" tabindex="0">
          <div class="sig-photo-wrap">
            ${photoSrc ? `<img class="sig-photo-img" src="${photoSrc}" alt="${name}" loading="lazy" onerror="this.style.display='none'">` : ''}
            <span class="sig-tap-hint" aria-label="${tapHint}">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 4.5v15m7.5-7.5h-15"/></svg>
            </span>
          </div>
          <div class="sig-body">
            <h3 class="sig-name">${name}</h3>
            ${showKrSub ? `<span class="sig-name-kr">${koreanName}</span>` : ''}
            ${desc ? `<p class="sig-desc">${desc}</p>` : ''}
            <div class="sig-price">${priceText}</div>
          </div>
        </div>
      `;
    }

    // A. 시그니처 메뉴 섹션 (2열 카드 그리드)
    if (sigItems.length > 0) {
      html += `
        <section class="menu-section-block" id="sec-sig">
          <div class="section-title-wrap">
            <h2 class="section-title">${catMap.sig}</h2>
            <span class="section-count">${sigItems.length}</span>
          </div>
          <div class="sig-grid">
            ${sigItems.map(item => renderGridCard(item)).join('')}
          </div>
        </section>
      `;
    }

    // B. 세트 메뉴 섹션 (2열 카드 그리드)
    if (setItems.length > 0) {
      html += `
        <section class="menu-section-block" id="sec-set">
          <div class="section-title-wrap">
            <h2 class="section-title">${catMap.set}</h2>
            <span class="section-count">${setItems.length}</span>
          </div>
          <div class="sig-grid">
            ${setItems.map(item => renderGridCard(item)).join('')}
          </div>
        </section>
      `;
    }

    // C. 단품 메뉴 섹션 (2열 카드 그리드 & 이미지 레이아웃)
    if (singleItems.length > 0) {
      html += `
        <section class="menu-section-block" id="sec-single">
          <div class="section-title-wrap">
            <h2 class="section-title">${catMap.single}</h2>
            <span class="section-count">${singleItems.length}</span>
          </div>
          <div class="sig-grid">
            ${singleItems.map(item => renderGridCard(item)).join('')}
          </div>
        </section>
      `;
    }

    // D. 면류 섹션 (2열 카드 그리드 & 이미지 레이아웃)
    if (noodleItems.length > 0) {
      html += `
        <section class="menu-section-block" id="sec-noodle">
          <div class="section-title-wrap">
            <h2 class="section-title">${catMap.noodle}</h2>
            <span class="section-count">${noodleItems.length}</span>
          </div>
          <div class="sig-grid">
            ${noodleItems.map(item => renderGridCard(item)).join('')}
          </div>
        </section>
      `;
    }

    // E. 사이드 섹션 (2열 카드 그리드 & 이미지 레이아웃)
    if (sideItems.length > 0) {
      html += `
        <section class="menu-section-block" id="sec-side">
          <div class="section-title-wrap">
            <h2 class="section-title">${catMap.side}</h2>
            <span class="section-count">${sideItems.length}</span>
          </div>
          <div class="sig-grid">
            ${sideItems.map(item => renderGridCard(item)).join('')}
          </div>
        </section>
      `;
    }

    // F. 별도추가 섹션 (컴팩트 리스트)
    if (addonItems.length > 0) {
      html += `
        <section class="menu-section-block menu-list-wrap" id="sec-addon">
          <div class="section-title-wrap">
            <h2 class="section-title">${catMap.addon}</h2>
            <span class="section-count">${addonItems.length}</span>
          </div>
          <div class="menu-list">
            ${addonItems.map(item => renderListItem(item)).join('')}
          </div>
        </section>
      `;
    }

    // G. 음료 · 주류 섹션 (컴팩트 리스트)
    if (drinkItems.length > 0) {
      html += `
        <section class="menu-section-block menu-list-wrap" id="sec-drink">
          <div class="section-title-wrap">
            <h2 class="section-title">${catMap.drink}</h2>
            <span class="section-count">${drinkItems.length}</span>
          </div>
          <div class="menu-list">
            ${drinkItems.map(item => renderListItem(item)).join('')}
          </div>
        </section>
      `;
    }

    menuSectionsContainer.innerHTML = html;

    // 메뉴 클릭 시 모달 열기 이벤트 (시그니처, 세트, 단품, 면류, 사이드 등 사진 카드 메뉴만 모달 열기)
    menuSectionsContainer.querySelectorAll('.sig-card[data-item-id]').forEach(el => {
      el.addEventListener('click', () => {
        const id = parseInt(el.getAttribute('data-item-id'), 10);
        openMenuModal(id);
      });
    });
  }

  function renderListItem(item) {
    const name = item.names[currentLang] || item.names['ko'];
    const koreanName = item.names['ko'];
    const desc = item.descs[currentLang] || item.descs['ko'];
    const showKrSub = currentLang !== 'ko' && koreanName;
    const priceText = formatPrice(item.price, currentLang);

    return `
      <div class="menu-item non-clickable">
        <div class="menu-item-left">
          ${item.image ? `
            <div class="menu-thumb">
              <img src="${item.image}" alt="${name}" loading="lazy" onerror="this.parentElement.style.display='none'">
            </div>
          ` : ''}
          <div class="menu-text">
            <h4 class="menu-name">${name}</h4>
            ${showKrSub ? `<span class="menu-name-kr">${koreanName}</span>` : ''}
            ${desc ? `<p class="menu-desc">${desc}</p>` : ''}
          </div>
        </div>
        <div class="menu-item-right">
          <span class="menu-price">${priceText}</span>
        </div>
      </div>
    `;
  }

  // 7. 메뉴 상세 모달
  function openMenuModal(itemId) {
    const item = STORE_DATA.items.find(i => i.id === itemId);
    if (!item) return;

    const catMap = STORE_DATA.categoryMap[currentLang] || STORE_DATA.categoryMap['ko'];
    const name = item.names[currentLang] || item.names['ko'];
    const koreanName = item.names['ko'];
    const desc = item.descs[currentLang] || item.descs['ko'];
    const catName = catMap[item.catKey] || '';

    modalCatTag.textContent = catName;
    modalTitle.textContent = name;

    const modalTitleKr = document.getElementById('modalTitleKr');
    if (modalTitleKr) {
      if (currentLang !== 'ko' && koreanName) {
        modalTitleKr.textContent = koreanName;
        modalTitleKr.style.display = 'block';
      } else {
        modalTitleKr.textContent = '';
        modalTitleKr.style.display = 'none';
      }
    }

    modalDesc.textContent = desc || (currentLang === 'ko' ? '정성을 다해 조리하는 돈까스에빠지다의 인기 메뉴입니다.' : '');
    modalPriceVal.textContent = formatPrice(item.price, currentLang);

    const priceLabels = {
      ko: "가격",
      en: "Price",
      ja: "価格",
      "zh-CN": "价格",
      "zh-TW": "價格",
      zh: "价格",
      vi: "Giá"
    };
    modalPriceLabel.textContent = priceLabels[currentLang] || "가격";

    // 사진 처리
    if (item.image) {
      modalPhotoWrap.style.display = 'block';
      modalPhoto.src = item.image;
      modalPhoto.alt = name;
    } else {
      modalPhotoWrap.style.display = 'none';
    }

    menuModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenuModal() {
    menuModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeMenuModal);
  if (menuModalOverlay) {
    menuModalOverlay.addEventListener('click', (e) => {
      if (e.target === menuModalOverlay) {
        closeMenuModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuModalOverlay.classList.contains('active')) {
      closeMenuModal();
    }
  });

  // 상단 브랜드 타이틀 클릭 시 대문(언어 선택 첫 화면)으로 이동
  const headerHomeBtn = document.getElementById('headerHomeBtn');
  if (headerHomeBtn) {
    headerHomeBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // 초기 렌더링 실행
  updateLangChipUI();
  renderLangMenu();
  updateBrandInfo();
  renderCategories();
  renderMenus();
  updateNavArrows();
});
