const APP_DATA = {
  games: [
    { id:1,  name:"Clash of Realms",  dev:"SuperCell",    icon:"🏰", bg:"#e8f5e9", rating:4.8, downloads:"100M+", category:"games",     tags:["Strategy","Multiplayer","Free"], desc:"Build your kingdom, train your troops, and battle opponents worldwide in this epic real-time strategy game with stunning 3D graphics.",         screenshots:["🏰","⚔️","🛡️","🗡️"] },
    { id:2,  name:"Pixel Runner",     dev:"IndieSoft",    icon:"🏃", bg:"#fff3e0", rating:4.5, downloads:"50M+",  category:"games",     tags:["Action","Endless","Free"],       desc:"Run, jump, and dodge obstacles in this addictive endless runner with stunning pixel art, unique power-ups, and global leaderboards.",       screenshots:["🏃","💨","🌟","🏆"] },
    { id:3,  name:"Galaxy Siege",     dev:"StarForge",    icon:"🚀", bg:"#e3f2fd", rating:4.7, downloads:"80M+",  category:"games",     tags:["Shooter","Sci-Fi","Free"],       desc:"Defend the galaxy from alien invaders in this fast-paced space shooter. Upgrade your ship and unlock new weapons.",                         screenshots:["🚀","🌌","👾","💫"] },
    { id:4,  name:"Candy Blast",      dev:"SwipeGames",   icon:"🍭", bg:"#fce4ec", rating:4.6, downloads:"200M+", category:"games",     tags:["Puzzle","Casual","Free"],        desc:"Match and blast your way through thousands of colorful candy levels. New events and rewards every week!",                                    screenshots:["🍭","🍬","🎉","🌈"] },
    { id:5,  name:"Legends Arena",    dev:"RiotMobile",   icon:"⚔️", bg:"#ede7f6", rating:4.9, downloads:"150M+", category:"games",     tags:["MOBA","PvP","Free"],             desc:"5v5 MOBA on mobile with 80+ heroes, competitive ranked mode, and an ever-growing esports scene.",                                          screenshots:["⚔️","🛡️","🏟️","🎮"] },
    { id:6,  name:"Farm Story",       dev:"PlayVillage",  icon:"🌾", bg:"#f9fbe7", rating:4.4, downloads:"60M+",  category:"games",     tags:["Simulation","Relaxing","Free"],  desc:"Build your dream farm, grow crops, raise animals, and trade with friends in this peaceful farming simulation.",                               screenshots:["🌾","🐄","🍎","🏡"] },
  ],
  apps: [
    { id:7,  name:"SwiftCam Pro",     dev:"VisualLabs",   icon:"📸", bg:"#e3f2fd", rating:4.7, downloads:"30M+",  category:"apps",      tags:["Photography","Editor","Free"],   desc:"Professional camera app with AI-powered features, 200+ filters, RAW capture, manual controls, and a built-in photo editor.",               screenshots:["📸","🎨","✨","🌅"] },
    { id:8,  name:"NoteFlow",         dev:"ProductiveCo", icon:"📝", bg:"#fff9c4", rating:4.8, downloads:"20M+",  category:"apps",      tags:["Productivity","Notes","Free"],   desc:"The smartest note-taking app. Rich text, AI summaries, voice memos, OCR, collaboration, and seamless cloud sync.",                          screenshots:["📝","💡","🔗","📋"] },
    { id:9,  name:"VaultVPN",         dev:"SecureNet",    icon:"🔒", bg:"#e8eaf6", rating:4.6, downloads:"40M+",  category:"apps",      tags:["Security","Privacy","Free"],     desc:"Military-grade encryption, zero-log policy, 90+ countries. Stay safe on any network with VaultVPN.",                                       screenshots:["🔒","🌐","🛡️","✅"] },
    { id:10, name:"FitTrack",         dev:"HealthFirst",  icon:"💪", bg:"#e8f5e9", rating:4.9, downloads:"25M+",  category:"apps",      tags:["Fitness","Tracker","Free"],      desc:"All-in-one fitness tracker: workouts, steps, sleep, heart rate, calories, and AI personal coach.",                                          screenshots:["💪","🏋️","📊","❤️"] },
    { id:11, name:"CloudDrive",       dev:"StorageTech",  icon:"☁️", bg:"#e0f7fa", rating:4.5, downloads:"100M+", category:"apps",      tags:["Storage","Backup","Free"],       desc:"15GB free cloud storage. Auto-backup photos, share files instantly, and access everything from any device.",                                 screenshots:["☁️","📁","🔗","💾"] },
    { id:12, name:"WalletPay",        dev:"FinTech Inc",  icon:"💳", bg:"#f3e5f5", rating:4.7, downloads:"70M+",  category:"apps",      tags:["Finance","Payments","Free"],     desc:"Send money, pay bills, recharge, and shop with WalletPay. Instant UPI transfers and cashback rewards.",                                    screenshots:["💳","💰","📱","🏦"] },
  ],
  food: [
    { id:13, name:"FoodieX",          dev:"QuickBite",    icon:"🍕", bg:"#fce4ec", rating:4.6, downloads:"50M+",  category:"food",      tags:["Delivery","Restaurant","Free"],  desc:"Order from 50,000+ restaurants. Track your order live, earn FoodCoins, and discover new cuisines near you.",                                screenshots:["🍕","🍔","🌮","🚴"] },
    { id:14, name:"BrewMaster",       dev:"CafeApps",     icon:"☕", bg:"#efebe9", rating:4.5, downloads:"10M+",  category:"food",      tags:["Coffee","Recipes","Free"],       desc:"Perfect your brew with step-by-step pour-over, espresso, and cold brew guides. Rate and share coffee spots.",                              screenshots:["☕","🫖","🍵","⭐"] },
    { id:15, name:"RecipeBook",       dev:"ChefWorld",    icon:"👨‍🍳",bg:"#fff3e0", rating:4.8, downloads:"35M+",  category:"food",      tags:["Recipes","Cooking","Free"],      desc:"5 million+ recipes with step-by-step instructions, nutrition info, and a smart grocery list builder.",                                    screenshots:["👨‍🍳","🥗","🍳","📋"] },
    { id:16, name:"BubbleTea",        dev:"SipSip Labs",  icon:"🧋", bg:"#fce4ec", rating:4.4, downloads:"8M+",   category:"food",      tags:["Drinks","Delivery","Free"],      desc:"Order premium bubble tea, smoothies, and fresh juices from top local shops near you.",                                                     screenshots:["🧋","🥤","🍹","🌸"] },
    { id:17, name:"WineLog",          dev:"VinoPro",      icon:"🍷", bg:"#f3e5f5", rating:4.7, downloads:"5M+",   category:"food",      tags:["Wine","Reviews","Free"],         desc:"Scan a wine label to get ratings, food pairings, and buy it online. Log your cellar and tastings.",                                       screenshots:["🍷","🍇","📸","⭐"] },
    { id:18, name:"GrocerGo",         dev:"FreshMart",    icon:"🛒", bg:"#e8f5e9", rating:4.6, downloads:"20M+",  category:"food",      tags:["Grocery","Delivery","Free"],     desc:"Get fresh vegetables, fruits, dairy, and more delivered in under 30 minutes with GrocerGo.",                                               screenshots:["🛒","🥦","🥕","🚚"] },
  ],
  education: [
    { id:19, name:"LearnX",           dev:"EduTech",      icon:"📚", bg:"#e3f2fd", rating:4.8, downloads:"40M+",  category:"education", tags:["Learning","Courses","Free"],     desc:"Access 100,000+ online courses, certificates, and degree programs from world-class instructors at your own pace.",                        screenshots:["📚","🎓","💡","📊"] },
    { id:20, name:"MathWiz",          dev:"BrainBox",     icon:"🧮", bg:"#fff9c4", rating:4.7, downloads:"15M+",  category:"education", tags:["Math","Solver","Free"],          desc:"Snap a photo of any math problem and get instant step-by-step solutions. Supports algebra, calculus, and more.",                         screenshots:["🧮","✏️","📐","🔢"] },
    { id:21, name:"LinguaLeap",       dev:"PolyMind",     icon:"🌍", bg:"#e8f5e9", rating:4.9, downloads:"60M+",  category:"education", tags:["Language","Learning","Free"],    desc:"Learn 40+ languages with gamified lessons, live tutors, and AI conversation practice. Millions of learners worldwide.",                  screenshots:["🌍","💬","🎯","🏆"] },
    { id:22, name:"ScienceKid",       dev:"CuriousMinds", icon:"🔬", bg:"#e0f7fa", rating:4.6, downloads:"10M+",  category:"education", tags:["Science","Kids","Free"],         desc:"Interactive science experiments, AR models, and quizzes for students aged 6-16. Makes science FUN!",                                    screenshots:["🔬","🧪","🌡️","⚗️"] },
  ],
  social: [
    { id:23, name:"BuzzChat",         dev:"SocialWave",   icon:"💬", bg:"#e3f2fd", rating:4.7, downloads:"80M+",  category:"social",    tags:["Chat","Messaging","Free"],       desc:"End-to-end encrypted messaging, group calls, stories, and communities. Connect the way you want.",                                        screenshots:["💬","📞","🎭","😊"] },
    { id:24, name:"Vibe",             dev:"CreatorSpace", icon:"🎭", bg:"#fce4ec", rating:4.6, downloads:"55M+",  category:"social",    tags:["Reels","Creator","Free"],        desc:"Create and discover short videos, connect with creators, and grow your own audience on Vibe.",                                             screenshots:["🎭","🎬","❤️","🌟"] },
    { id:25, name:"LinkUp",           dev:"ProConnect",   icon:"💼", bg:"#e8eaf6", rating:4.5, downloads:"30M+",  category:"social",    tags:["Professional","Network","Free"],  desc:"Your professional network. Find jobs, connect with peers, post insights, and grow your career.",                                           screenshots:["💼","🤝","📈","🏢"] },
    { id:26, name:"PinBoard",         dev:"Idealist",     icon:"📌", bg:"#fff3e0", rating:4.8, downloads:"45M+",  category:"social",    tags:["Ideas","Visual","Free"],         desc:"Discover and save ideas for every interest. Build beautiful boards for recipes, travel, style, and more.",                                screenshots:["📌","🎨","✨","📸"] },
  ],
  health: [
    { id:27, name:"MindSpace",        dev:"ZenTech",      icon:"🧘", bg:"#e8f5e9", rating:4.9, downloads:"20M+",  category:"health",    tags:["Meditation","Sleep","Free"],     desc:"Guided meditations, sleep stories, breathing exercises, and daily mindfulness programs to reduce stress.",                                screenshots:["🧘","😴","🌙","🌿"] },
    { id:28, name:"RunKeeper",        dev:"PaceUp",       icon:"🏃", bg:"#fff9c4", rating:4.7, downloads:"30M+",  category:"health",    tags:["Running","GPS","Free"],          desc:"GPS run tracker with training plans, audio coaching, route mapping, and Strava integration.",                                             screenshots:["🏃","🗺️","📊","🏅"] },
    { id:29, name:"DietAI",           dev:"NutriSci",     icon:"🥗", bg:"#e0f7fa", rating:4.6, downloads:"12M+",  category:"health",    tags:["Diet","Nutrition","Free"],       desc:"AI-powered meal planning, calorie tracking, and personalized nutrition goals. Scan food to log instantly.",                               screenshots:["🥗","🍎","📊","🤖"] },
    { id:30, name:"HeartGuard",       dev:"CardioPlus",   icon:"❤️", bg:"#fce4ec", rating:4.8, downloads:"8M+",   category:"health",    tags:["Heart","Monitor","Free"],        desc:"Monitor your heart rate, SpO2, stress levels, and ECG right from your phone. Works with most wearables.",                               screenshots:["❤️","📈","🔴","⌚"] },
  ],
  travel: [
    { id:31, name:"TripWise",         dev:"WanderApps",   icon:"✈️", bg:"#e3f2fd", rating:4.7, downloads:"25M+",  category:"travel",    tags:["Flights","Hotel","Free"],        desc:"Compare flights, book hotels, explore destinations, and manage all your trips in one app with price alerts.",                             screenshots:["✈️","🏨","🗺️","💰"] },
    { id:32, name:"MapGo",            dev:"NaviSoft",     icon:"🗺️", bg:"#e8f5e9", rating:4.9, downloads:"90M+",  category:"travel",    tags:["Navigation","Maps","Free"],      desc:"Real-time navigation with live traffic, offline maps, and community-based alerts. The smartest way to drive.",                          screenshots:["🗺️","🚗","🛣️","⭐"] },
    { id:33, name:"HotelPin",         dev:"StayNow",      icon:"🏨", bg:"#fff3e0", rating:4.6, downloads:"18M+",  category:"travel",    tags:["Hotels","Deals","Free"],         desc:"Find last-minute hotel deals up to 60% off. Loyalty rewards, no booking fees, and free cancellation.",                                  screenshots:["🏨","🛏️","🌟","💳"] },
    { id:34, name:"LocalGuide",       dev:"TravelMind",   icon:"🧭", bg:"#f3e5f5", rating:4.5, downloads:"9M+",   category:"travel",    tags:["Guide","Tourist","Free"],        desc:"Offline city guides, AR navigation, and curated tours for 500+ cities. Discover hidden gems worldwide.",                                screenshots:["🧭","🏛️","🎨","📍"] },
  ],
  music: [
    { id:35, name:"BeatStream",       dev:"AudioLabs",    icon:"🎵", bg:"#f3e5f5", rating:4.8, downloads:"70M+",  category:"music",     tags:["Music","Streaming","Free"],      desc:"Stream 80M+ songs, podcasts, and audiobooks. Create playlists, see live lyrics, and discover new artists daily.",                       screenshots:["🎵","🎧","🎤","🎼"] },
    { id:36, name:"TuneMaker",        dev:"BeatBox",      icon:"🎹", bg:"#e8eaf6", rating:4.7, downloads:"15M+",  category:"music",     tags:["Create","DJ","Free"],            desc:"Create beats, remix tracks, and produce music on your phone. 500+ instruments, loop library, and cloud studio.",                        screenshots:["🎹","🎚️","🎛️","🎶"] },
    { id:37, name:"ChordMaster",      dev:"MusicLearn",   icon:"🎸", bg:"#fff9c4", rating:4.6, downloads:"10M+",  category:"music",     tags:["Guitar","Learn","Free"],         desc:"Learn guitar, piano, and ukulele with interactive lessons, chord charts, and a song library of 10,000+ tracks.",                       screenshots:["🎸","🎵","📖","🏆"] },
    { id:38, name:"SoundWave",        dev:"PodCo",        icon:"🎙️", bg:"#e0f7fa", rating:4.5, downloads:"8M+",   category:"music",     tags:["Podcast","Radio","Free"],        desc:"Listen to 5M+ podcasts and live radio stations worldwide. Subscribe, download, and never miss an episode.",                             screenshots:["🎙️","📻","🎧","⭐"] },
  ],
};

const ALL_APPS = Object.values(APP_DATA).flat();
let currentCat   = "all";
let currentSlide = 0;
let slideInterval;
let installedApps = new Set();

// ===========================
//   DARK / LIGHT MODE
// ===========================
function initTheme() {
  const btn  = document.getElementById("themeBtn");
  const icon = document.getElementById("themeIcon");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.textContent = "light_mode";
  }
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    icon.textContent = isDark ? "light_mode" : "dark_mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    showToast(isDark ? "🌙 Dark mode on" : "☀️ Light mode on");
  });
}

// ===========================
//   HERO SLIDER
// ===========================
function initSlider() {
  const slider = document.getElementById("heroSlider");
  const dots   = document.querySelectorAll(".dot");
  const total  = slider.querySelectorAll(".hero-slide").length;
  function goTo(idx) {
    currentSlide = (idx + total) % total;
    slider.scrollTo({ left: currentSlide * slider.offsetWidth, behavior: "smooth" });
    dots.forEach((d, i) => d.classList.toggle("active", i === currentSlide));
  }
  dots.forEach((d, i) => d.addEventListener("click", () => { goTo(i); resetTimer(); }));
  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => goTo(currentSlide + 1), 4000);
  }
  resetTimer();
}

// ===========================
//   TABS
// ===========================
function initTabs() {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCat = tab.dataset.cat;
      renderSections(currentCat);
      document.getElementById("heroSection").style.display = currentCat === "all" ? "" : "none";
      document.getElementById("catSection").style.display  = currentCat === "all" ? "" : "none";
    });
  });
}

// ===========================
//   RENDER
// ===========================
function renderSections(cat) {
  const container = document.getElementById("appSections");
  container.innerHTML = "";
  document.getElementById("searchInput").value = "";
  cat === "all" ? renderHomeView(container) : renderCategoryView(container, cat);
}

function renderHomeView(container) {
  container.appendChild(createAppRow("🎮 Top Games",         APP_DATA.games,     "games"));
  container.appendChild(createPromoBanner());
  container.appendChild(createAppRow("📱 Top Apps",          APP_DATA.apps,      "apps"));
  container.appendChild(createAppRow("🍔 Food & Drinks",     APP_DATA.food,      "food"));
  container.appendChild(createAppRow("❤️ Health & Wellness", APP_DATA.health,    "health"));
  container.appendChild(createAppRow("🎵 Music & Audio",     APP_DATA.music,     "music"));
  container.appendChild(createAppRow("✈️ Travel",            APP_DATA.travel,    "travel"));
  container.appendChild(createAppRow("💬 Social",            APP_DATA.social,    "social"));
  container.appendChild(createAppRow("📚 Education",         APP_DATA.education, "education"));
}

function renderCategoryView(container, cat) {
  const apps = APP_DATA[cat] || [];
  const sec1 = createSection("Top Picks in " + capitalize(cat));
  const list = document.createElement("div");
  list.className = "app-list";
  apps.slice(0, 4).forEach(app => list.appendChild(createAppListItem(app)));
  sec1.querySelector(".section-body").appendChild(list);
  container.appendChild(sec1);
  const sec2 = createSection("All Apps");
  const grid = document.createElement("div");
  grid.className = "apps-grid-large";
  apps.forEach(app => grid.appendChild(createAppCardLg(app)));
  sec2.querySelector(".section-body").appendChild(grid);
  container.appendChild(sec2);
}

function createSection(title) {
  const sec = document.createElement("section");
  sec.className = "section";
  sec.innerHTML = `<div class="section-header"><h2 class="section-title">${title}</h2></div><div class="section-body"></div>`;
  return sec;
}

function createAppRow(title, apps, catKey) {
  const sec = document.createElement("section");
  sec.className = "section";
  sec.innerHTML = `<div class="section-header"><h2 class="section-title">${title}</h2><button class="see-all" data-cat="${catKey}">See all</button></div><div class="apps-row"></div>`;
  const row = sec.querySelector(".apps-row");
  apps.forEach(app => row.appendChild(createAppCard(app)));
  sec.querySelector(".see-all").addEventListener("click", () => switchTab(catKey));
  return sec;
}

function createAppCard(app) {
  const card = document.createElement("div");
  card.className = "app-card";
  card.innerHTML = `<div class="app-card-icon" style="background:${app.bg}">${app.icon}</div><div class="app-card-name">${app.name}</div><div class="app-card-meta"><span class="material-icons-round">star</span>${app.rating}</div>`;
  card.addEventListener("click", () => openModal(app));
  return card;
}

function createAppCardLg(app) {
  const card = document.createElement("div");
  card.className = "app-card-lg";
  card.innerHTML = `<div class="app-card-lg-icon" style="background:${app.bg}">${app.icon}</div><div class="app-card-lg-name">${app.name}</div><div class="app-card-lg-dev">${app.dev}</div><div class="app-card-lg-footer"><div class="app-card-lg-rating"><span class="material-icons-round">star</span>${app.rating}</div><button class="btn-get">${installedApps.has(app.id) ? "Open" : "Get"}</button></div>`;
  card.addEventListener("click", () => openModal(app));
  card.querySelector(".btn-get").addEventListener("click", e => { e.stopPropagation(); handleInstall(app, card.querySelector(".btn-get")); });
  return card;
}

function createAppListItem(app) {
  const item = document.createElement("div");
  item.className = "app-list-item";
  item.innerHTML = `<div class="app-list-icon" style="background:${app.bg}">${app.icon}</div><div class="app-list-info"><div class="app-list-name">${app.name}</div><div class="app-list-dev">${app.dev}</div><div class="app-list-rating"><span class="material-icons-round">star</span>${app.rating} · ${app.downloads} downloads</div></div><span class="app-list-badge">${app.tags[0]}</span>`;
  item.addEventListener("click", () => openModal(app));
  return item;
}

function createPromoBanner() {
  const wrap = document.createElement("div");
  wrap.innerHTML = `<div class="promo-banner"><div class="promo-text"><h3>🎁 Get 3 Months FREE Premium</h3><p>Unlock all features with Play Pass — ad-free, offline play, and more</p></div><div class="promo-emoji">🚀</div></div>`;
  wrap.querySelector(".promo-banner").addEventListener("click", () => showToast("Play Pass offer activated! 🎉"));
  return wrap;
}

// ===========================
//   MODAL
// ===========================
function openModal(app) {
  document.getElementById("modalIcon").textContent      = app.icon;
  document.getElementById("modalIcon").style.background = app.bg;
  document.getElementById("modalName").textContent       = app.name;
  document.getElementById("modalDev").textContent        = app.dev;
  document.getElementById("modalRating").textContent     = app.rating;
  document.getElementById("modalDownloads").textContent  = app.downloads + " downloads";
  document.getElementById("modalDesc").textContent       = app.desc;
  document.getElementById("modalTags").innerHTML         = app.tags.map(t => `<span class="modal-tag">${t}</span>`).join("");
  document.getElementById("modalScreenshots").innerHTML  = app.screenshots.map(s => `<div class="screenshot" style="background:${app.bg}">${s}</div>`).join("");
  const btn = document.getElementById("installBtn");
  updateInstallBtn(btn, app.id);
  btn.onclick = () => handleInstall(app, btn);
  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});

function updateInstallBtn(btn, id) {
  btn.textContent = installedApps.has(id) ? "Open" : "Install";
  btn.classList.toggle("installed", installedApps.has(id));
}

function handleInstall(app, btn) {
  if (installedApps.has(app.id)) {
    showToast("Opening " + app.name + "... " + app.icon);
  } else {
    installedApps.add(app.id);
    btn.textContent   = "Installing...";
    btn.style.opacity = "0.7";
    setTimeout(() => {
      btn.textContent   = "Open";
      btn.classList.add("installed");
      btn.style.opacity = "1";
      showToast(app.name + " installed! " + app.icon);
    }, 1200);
  }
}

// ===========================
//   SEARCH
// ===========================
function initSearch() {
  const input = document.getElementById("searchInput");
  let timer;
  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        renderSections(currentCat);
        document.getElementById("heroSection").style.display = currentCat === "all" ? "" : "none";
        document.getElementById("catSection").style.display  = currentCat === "all" ? "" : "none";
        return;
      }
      showSearchResults(q);
    }, 250);
  });
}

function showSearchResults(q) {
  const container = document.getElementById("appSections");
  container.innerHTML = "";
  document.getElementById("heroSection").style.display = "none";
  document.getElementById("catSection").style.display  = "none";
  const results = ALL_APPS.filter(a =>
    a.name.toLowerCase().includes(q) ||
    a.dev.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q)) ||
    a.category.toLowerCase().includes(q)
  );
  if (!results.length) {
    container.innerHTML = `<div class="no-results"><span class="material-icons-round">search_off</span><p>No results for "${q}"</p></div>`;
    return;
  }
  const title = document.createElement("p");
  title.className   = "search-results-title";
  title.textContent = results.length + " result" + (results.length !== 1 ? "s" : "") + " for \"" + q + "\"";
  container.appendChild(title);
  const sec  = document.createElement("section");
  sec.className = "section";
  const grid = document.createElement("div");
  grid.className = "apps-grid-large";
  results.forEach(app => grid.appendChild(createAppCardLg(app)));
  sec.appendChild(grid);
  container.appendChild(sec);
}

// ===========================
//   SIDEBAR
// ===========================
function initSidebar() {
  const btn     = document.getElementById("hamburgerBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  btn.addEventListener("click",     () => { sidebar.classList.add("open");    overlay.classList.add("active"); });
  overlay.addEventListener("click", () => { sidebar.classList.remove("open"); overlay.classList.remove("active"); });
  sidebar.querySelectorAll(".sidebar-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      sidebar.querySelectorAll(".sidebar-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    });
  });
}

// ===========================
//   CATEGORY CARDS
// ===========================
function initCatCards() {
  document.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => switchTab(card.dataset.cat));
  });
}

function switchTab(cat) {
  currentCat = cat;
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.cat === cat));
  document.getElementById("heroSection").style.display = "none";
  document.getElementById("catSection").style.display  = "none";
  renderSections(cat);
  const activeTab = document.querySelector(".tab[data-cat='" + cat + "']");
  if (activeTab) activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===========================
//   NEWSLETTER BUTTON
// ===========================
function initNewsletter() {
  const btn   = document.querySelector(".newsletter-input button");
  const input = document.querySelector(".newsletter-input input");
  if (!btn || !input) return;
  btn.addEventListener("click", () => {
    const email = input.value.trim();
    if (!email || !email.includes("@")) {
      showToast("⚠️ Please enter a valid email!");
      return;
    }
    input.value = "";
    showToast("✅ Subscribed successfully!");
  });
}

// ===========================
//   TOAST
// ===========================
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===========================
//   INIT
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSlider();
  initTabs();
  initSearch();
  initSidebar();
  renderSections("all");
  initCatCards();
  initNewsletter();
});