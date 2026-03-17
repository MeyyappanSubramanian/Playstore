const APP_DATA = {
  games:[
    {id:1,name:"Clash of Realms",dev:"SuperCell",icon:"🏰",bg:"#e8f5e9",rating:4.8,downloads:"100M+",category:"games",tags:["Strategy","Multiplayer","Free"],desc:"Build your kingdom, train your troops, and battle opponents worldwide.",screenshots:["🏰","⚔️","🛡️","🗡️"]},
    {id:2,name:"Pixel Runner",dev:"IndieSoft",icon:"🏃",bg:"#fff3e0",rating:4.5,downloads:"50M+",category:"games",tags:["Action","Endless","Free"],desc:"Run, jump, and dodge obstacles in this addictive endless runner.",screenshots:["🏃","💨","🌟","🏆"]},
    {id:3,name:"Galaxy Siege",dev:"StarForge",icon:"🚀",bg:"#e3f2fd",rating:4.7,downloads:"80M+",category:"games",tags:["Shooter","Sci-Fi","Free"],desc:"Defend the galaxy from alien invaders in this fast-paced space shooter.",screenshots:["🚀","🌌","👾","💫"]},
    {id:4,name:"Candy Blast",dev:"SwipeGames",icon:"🍭",bg:"#fce4ec",rating:4.6,downloads:"200M+",category:"games",tags:["Puzzle","Casual","Free"],desc:"Match and blast your way through thousands of colorful candy levels.",screenshots:["🍭","🍬","🎉","🌈"]},
    {id:5,name:"Legends Arena",dev:"RiotMobile",icon:"⚔️",bg:"#ede7f6",rating:4.9,downloads:"150M+",category:"games",tags:["MOBA","PvP","Free"],desc:"5v5 MOBA on mobile with 80+ heroes, competitive ranked mode.",screenshots:["⚔️","🛡️","🏟️","🎮"]},
    {id:6,name:"Farm Story",dev:"PlayVillage",icon:"🌾",bg:"#f9fbe7",rating:4.4,downloads:"60M+",category:"games",tags:["Simulation","Relaxing","Free"],desc:"Build your dream farm, grow crops, raise animals, and trade with friends.",screenshots:["🌾","🐄","🍎","🏡"]},
  ],
  apps:[
    {id:7,name:"SwiftCam Pro",dev:"VisualLabs",icon:"📸",bg:"#e3f2fd",rating:4.7,downloads:"30M+",category:"apps",tags:["Photography","Editor","Free"],desc:"Professional camera app with AI-powered features, 200+ filters.",screenshots:["📸","🎨","✨","🌅"]},
    {id:8,name:"NoteFlow",dev:"ProductiveCo",icon:"📝",bg:"#fff9c4",rating:4.8,downloads:"20M+",category:"apps",tags:["Productivity","Notes","Free"],desc:"The smartest note-taking app with AI summaries and cloud sync.",screenshots:["📝","💡","🔗","📋"]},
    {id:9,name:"VaultVPN",dev:"SecureNet",icon:"🔒",bg:"#e8eaf6",rating:4.6,downloads:"40M+",category:"apps",tags:["Security","Privacy","Free"],desc:"Military-grade encryption, zero-log policy, 90+ countries.",screenshots:["🔒","🌐","🛡️","✅"]},
    {id:10,name:"FitTrack",dev:"HealthFirst",icon:"💪",bg:"#e8f5e9",rating:4.9,downloads:"25M+",category:"apps",tags:["Fitness","Tracker","Free"],desc:"All-in-one fitness tracker with workouts, sleep, heart rate, and AI coach.",screenshots:["💪","🏋️","📊","❤️"]},
    {id:11,name:"CloudDrive",dev:"StorageTech",icon:"☁️",bg:"#e0f7fa",rating:4.5,downloads:"100M+",category:"apps",tags:["Storage","Backup","Free"],desc:"15GB free cloud storage. Auto-backup photos, share files instantly.",screenshots:["☁️","📁","🔗","💾"]},
    {id:12,name:"WalletPay",dev:"FinTech Inc",icon:"💳",bg:"#f3e5f5",rating:4.7,downloads:"70M+",category:"apps",tags:["Finance","Payments","Free"],desc:"Send money, pay bills, recharge, and shop with WalletPay.",screenshots:["💳","💰","📱","🏦"]},
  ],
  food:[
    {id:13,name:"FoodieX",dev:"QuickBite",icon:"🍕",bg:"#fce4ec",rating:4.6,downloads:"50M+",category:"food",tags:["Delivery","Restaurant","Free"],desc:"Order from 50,000+ restaurants. Track your order live.",screenshots:["🍕","🍔","🌮","🚴"]},
    {id:14,name:"BrewMaster",dev:"CafeApps",icon:"☕",bg:"#efebe9",rating:4.5,downloads:"10M+",category:"food",tags:["Coffee","Recipes","Free"],desc:"Perfect your brew with pour-over, espresso, and cold brew guides.",screenshots:["☕","🫖","🍵","⭐"]},
    {id:15,name:"RecipeBook",dev:"ChefWorld",icon:"👨‍🍳",bg:"#fff3e0",rating:4.8,downloads:"35M+",category:"food",tags:["Recipes","Cooking","Free"],desc:"5 million+ recipes with step-by-step instructions.",screenshots:["👨‍🍳","🥗","🍳","📋"]},
    {id:16,name:"BubbleTea",dev:"SipSip Labs",icon:"🧋",bg:"#fce4ec",rating:4.4,downloads:"8M+",category:"food",tags:["Drinks","Delivery","Free"],desc:"Order premium bubble tea, smoothies, and fresh juices.",screenshots:["🧋","🥤","🍹","🌸"]},
    {id:17,name:"WineLog",dev:"VinoPro",icon:"🍷",bg:"#f3e5f5",rating:4.7,downloads:"5M+",category:"food",tags:["Wine","Reviews","Free"],desc:"Scan a wine label to get ratings, food pairings, and buy it online.",screenshots:["🍷","🍇","📸","⭐"]},
    {id:18,name:"GrocerGo",dev:"FreshMart",icon:"🛒",bg:"#e8f5e9",rating:4.6,downloads:"20M+",category:"food",tags:["Grocery","Delivery","Free"],desc:"Get fresh vegetables, fruits, dairy delivered in under 30 minutes.",screenshots:["🛒","🥦","🥕","🚚"]},
  ],
  education:[
    {id:19,name:"LearnX",dev:"EduTech",icon:"📚",bg:"#e3f2fd",rating:4.8,downloads:"40M+",category:"education",tags:["Learning","Courses","Free"],desc:"Access 100,000+ online courses from world-class instructors.",screenshots:["📚","🎓","💡","📊"]},
    {id:20,name:"MathWiz",dev:"BrainBox",icon:"🧮",bg:"#fff9c4",rating:4.7,downloads:"15M+",category:"education",tags:["Math","Solver","Free"],desc:"Snap a photo of any math problem and get instant solutions.",screenshots:["🧮","✏️","📐","🔢"]},
    {id:21,name:"LinguaLeap",dev:"PolyMind",icon:"🌍",bg:"#e8f5e9",rating:4.9,downloads:"60M+",category:"education",tags:["Language","Learning","Free"],desc:"Learn 40+ languages with gamified lessons and live tutors.",screenshots:["🌍","💬","🎯","🏆"]},
    {id:22,name:"ScienceKid",dev:"CuriousMinds",icon:"🔬",bg:"#e0f7fa",rating:4.6,downloads:"10M+",category:"education",tags:["Science","Kids","Free"],desc:"Interactive science experiments and quizzes for students aged 6-16.",screenshots:["🔬","🧪","🌡️","⚗️"]},
  ],
  social:[
    {id:23,name:"BuzzChat",dev:"SocialWave",icon:"💬",bg:"#e3f2fd",rating:4.7,downloads:"80M+",category:"social",tags:["Chat","Messaging","Free"],desc:"End-to-end encrypted messaging, group calls, stories, and communities.",screenshots:["💬","📞","🎭","😊"]},
    {id:24,name:"Vibe",dev:"CreatorSpace",icon:"🎭",bg:"#fce4ec",rating:4.6,downloads:"55M+",category:"social",tags:["Reels","Creator","Free"],desc:"Create and discover short videos and grow your own audience.",screenshots:["🎭","🎬","❤️","🌟"]},
    {id:25,name:"LinkUp",dev:"ProConnect",icon:"💼",bg:"#e8eaf6",rating:4.5,downloads:"30M+",category:"social",tags:["Professional","Network","Free"],desc:"Your professional network. Find jobs, connect with peers.",screenshots:["💼","🤝","📈","🏢"]},
    {id:26,name:"PinBoard",dev:"Idealist",icon:"📌",bg:"#fff3e0",rating:4.8,downloads:"45M+",category:"social",tags:["Ideas","Visual","Free"],desc:"Discover and save ideas for every interest. Build beautiful boards.",screenshots:["📌","🎨","✨","📸"]},
  ],
  health:[
    {id:27,name:"MindSpace",dev:"ZenTech",icon:"🧘",bg:"#e8f5e9",rating:4.9,downloads:"20M+",category:"health",tags:["Meditation","Sleep","Free"],desc:"Guided meditations, sleep stories, and breathing exercises.",screenshots:["🧘","😴","🌙","🌿"]},
    {id:28,name:"RunKeeper",dev:"PaceUp",icon:"🏃",bg:"#fff9c4",rating:4.7,downloads:"30M+",category:"health",tags:["Running","GPS","Free"],desc:"GPS run tracker with training plans and audio coaching.",screenshots:["🏃","🗺️","📊","🏅"]},
    {id:29,name:"DietAI",dev:"NutriSci",icon:"🥗",bg:"#e0f7fa",rating:4.6,downloads:"12M+",category:"health",tags:["Diet","Nutrition","Free"],desc:"AI-powered meal planning and personalized nutrition goals.",screenshots:["🥗","🍎","📊","🤖"]},
    {id:30,name:"HeartGuard",dev:"CardioPlus",icon:"❤️",bg:"#fce4ec",rating:4.8,downloads:"8M+",category:"health",tags:["Heart","Monitor","Free"],desc:"Monitor your heart rate, SpO2, and ECG right from your phone.",screenshots:["❤️","📈","🔴","⌚"]},
  ],
  travel:[
    {id:31,name:"TripWise",dev:"WanderApps",icon:"✈️",bg:"#e3f2fd",rating:4.7,downloads:"25M+",category:"travel",tags:["Flights","Hotel","Free"],desc:"Compare flights, book hotels, and manage all your trips in one app.",screenshots:["✈️","🏨","🗺️","💰"]},
    {id:32,name:"MapGo",dev:"NaviSoft",icon:"🗺️",bg:"#e8f5e9",rating:4.9,downloads:"90M+",category:"travel",tags:["Navigation","Maps","Free"],desc:"Real-time navigation with live traffic and offline maps.",screenshots:["🗺️","🚗","🛣️","⭐"]},
    {id:33,name:"HotelPin",dev:"StayNow",icon:"🏨",bg:"#fff3e0",rating:4.6,downloads:"18M+",category:"travel",tags:["Hotels","Deals","Free"],desc:"Find last-minute hotel deals up to 60% off. No booking fees.",screenshots:["🏨","🛏️","🌟","💳"]},
    {id:34,name:"LocalGuide",dev:"TravelMind",icon:"🧭",bg:"#f3e5f5",rating:4.5,downloads:"9M+",category:"travel",tags:["Guide","Tourist","Free"],desc:"Offline city guides, AR navigation for 500+ cities worldwide.",screenshots:["🧭","🏛️","🎨","📍"]},
  ],
  music:[
    {id:35,name:"BeatStream",dev:"AudioLabs",icon:"🎵",bg:"#f3e5f5",rating:4.8,downloads:"70M+",category:"music",tags:["Music","Streaming","Free"],desc:"Stream 80M+ songs, podcasts, and audiobooks with live lyrics.",screenshots:["🎵","🎧","🎤","🎼"]},
    {id:36,name:"TuneMaker",dev:"BeatBox",icon:"🎹",bg:"#e8eaf6",rating:4.7,downloads:"15M+",category:"music",tags:["Create","DJ","Free"],desc:"Create beats, remix tracks on your phone with 500+ instruments.",screenshots:["🎹","🎚️","🎛️","🎶"]},
    {id:37,name:"ChordMaster",dev:"MusicLearn",icon:"🎸",bg:"#fff9c4",rating:4.6,downloads:"10M+",category:"music",tags:["Guitar","Learn","Free"],desc:"Learn guitar, piano, and ukulele with interactive lessons.",screenshots:["🎸","🎵","📖","🏆"]},
    {id:38,name:"SoundWave",dev:"PodCo",icon:"🎙️",bg:"#e0f7fa",rating:4.5,downloads:"8M+",category:"music",tags:["Podcast","Radio","Free"],desc:"Listen to 5M+ podcasts and live radio stations worldwide.",screenshots:["🎙️","📻","🎧","⭐"]},
  ],
};

const ALL_APPS = Object.values(APP_DATA).flat();
let currentNav = "home";
let currentSlide = 0;
let slideInterval;
let installedApps = new Set();
let pricingAnnual = false;

/* ══ UTILS ══ */
function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}
function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
function animateCounter(el, target, suffix){
  const duration = 1800, start = performance.now(), isFloat = target % 1 !== 0;
  function update(now){
    const p = Math.min((now - start) / duration, 1), ease = 1 - Math.pow(1 - p, 4);
    el.textContent = (isFloat ? (ease * target).toFixed(1) : Math.floor(ease * target)) + suffix;
    if(p < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
function initScrollReveal(){
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add("revealed");
        if(e.target.classList.contains("animated-stats-bar")){
          e.target.querySelectorAll(".stat-num[data-target]").forEach(el =>
            animateCounter(el, parseFloat(el.dataset.target), el.dataset.suffix || "")
          );
        }
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal-on-scroll").forEach(el => obs.observe(el));
}
function createParticleBurst(x, y, color){
  color = color || "#01875f";
  for(let i = 0; i < 12; i++){
    const p = document.createElement("div");
    p.className = "click-particle";
    p.style.cssText = `left:${x}px;top:${y}px;background:${color};position:fixed;width:8px;height:8px;border-radius:50%;pointer-events:none;z-index:9999;`;
    document.body.appendChild(p);
    const angle = (i / 12) * Math.PI * 2, dist = 40 + Math.random() * 40;
    p.animate([
      { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(angle)*dist}px), calc(-50% + ${Math.sin(angle)*dist}px)) scale(0)`, opacity: 0 }
    ], { duration: 600, easing: "cubic-bezier(0,0,0.2,1)", fill: "forwards" }).onfinish = () => p.remove();
  }
}

/* ══ NAVIGATE ══ */
function navigateTo(nav){
  currentNav = nav;

  // Update header nav active state
  document.querySelectorAll(".nav-link").forEach(l =>
    l.classList.toggle("active", l.dataset.nav === nav)
  );

  // Update sidebar active state
  document.querySelectorAll(".sidebar-link[data-nav]").forEach(l =>
    l.classList.toggle("active", l.dataset.nav === nav)
  );

  // Show/hide all pages
  const pages = ["home","about","blogs","pricing","contact","auth","educational","entertainment","informational","productivity"];
  pages.forEach(p => {
    const el = document.getElementById(p + "Page");
    if(el) el.style.display = (p === nav) ? "" : "none";
  });

  // Show hero section on home
  const heroSection = document.getElementById("heroSection");
  if(heroSection) heroSection.style.display = (nav === "home") ? "" : "none";

  // Search bar only on home
  const sb = document.getElementById("searchBarEl");
  if(sb) sb.style.display = (nav === "home") ? "" : "none";

  // Render page content
  if(nav === "home"){
    const container = document.getElementById("appSections");
    if(container) renderHomeView(container);
  }
  if(nav === "about") renderAboutPage();
  if(nav === "blogs") renderBlogsPage();
  if(nav === "pricing") renderPricingPage();
  if(nav === "contact") renderContactPage();
  if(nav === "educational") renderServicePage("educational");
  if(nav === "entertainment") renderServicePage("entertainment");
  if(nav === "informational") renderServicePage("informational");
  if(nav === "productivity") renderServicePage("productivity");

  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(initScrollReveal, 80);
}

/* ══ THEME ══ */
function initTheme(){
  const btn = document.getElementById("themeBtn"), icon = document.getElementById("themeIcon");
  if(localStorage.getItem("theme") === "dark"){ document.body.classList.add("dark"); icon.textContent = "light_mode"; }
  btn.addEventListener("click", (e) => {
    createParticleBurst(e.clientX, e.clientY, "#01875f");
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    icon.textContent = isDark ? "light_mode" : "dark_mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    showToast(isDark ? "🌙 Dark mode on" : "☀️ Light mode on");
  });
}

/* ══ SLIDER ══ */
function initSlider(){
  const slider = document.getElementById("heroSlider");
  if(!slider) return;
  const dots = document.querySelectorAll(".dot");
  const total = slider.querySelectorAll(".hero-slide").length;
  function goTo(idx){
    currentSlide = (idx + total) % total;
    slider.scrollTo({ left: currentSlide * slider.offsetWidth, behavior: "smooth" });
    dots.forEach((d, i) => d.classList.toggle("active", i === currentSlide));
  }
  dots.forEach((d, i) => d.addEventListener("click", () => { goTo(i); resetTimer(); }));
  function resetTimer(){
    clearInterval(slideInterval);
    slideInterval = setInterval(() => goTo(currentSlide + 1), 4000);
  }
  resetTimer();
}

/* ══ SIDEBAR ══ */
function initSidebar(){
  const btn = document.getElementById("hamburgerBtn"),
        sidebar = document.getElementById("sidebar"),
        overlay = document.getElementById("sidebarOverlay");

  btn.addEventListener("click", () => { sidebar.classList.add("open"); overlay.classList.add("active"); });
  overlay.addEventListener("click", () => { sidebar.classList.remove("open"); overlay.classList.remove("active"); });

  sidebar.querySelectorAll(".sidebar-link[data-nav]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
      navigateTo(link.dataset.nav);
    });
  });

  const logoBtn = document.getElementById("logoBtn");
  if(logoBtn) logoBtn.addEventListener("click", () => navigateTo("home"));

  const avatarBtn = document.getElementById("avatarBtn");
  if(avatarBtn) avatarBtn.addEventListener("click", () => navigateTo("auth"));
}

/* ══ NAV LINKS — header navbar buttons ══ */
function initNavLinks(){
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      createParticleBurst(e.clientX, e.clientY, "#01875f");
      navigateTo(link.dataset.nav);
    });
  });
}

/* ══ SEARCH ══ */
function initSearch(){
  const input = document.getElementById("searchInput");
  if(!input) return;
  let timer;
  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const q = input.value.trim().toLowerCase();
      const container = document.getElementById("appSections");
      const heroSection = document.getElementById("heroSection");
      if(!q){
        if(heroSection) heroSection.style.display = "";
        renderHomeView(container);
        return;
      }
      if(heroSection) heroSection.style.display = "none";
      showSearchResults(q, container);
    }, 250);
  });
}

function showSearchResults(q, container){
  if(!container) return;
  container.innerHTML = "";
  const results = ALL_APPS.filter(a =>
    a.name.toLowerCase().includes(q) ||
    a.dev.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q)) ||
    a.category.toLowerCase().includes(q)
  );
  if(!results.length){
    container.innerHTML = `<div class="no-results"><span class="material-icons-round">search_off</span><p>No results for "${q}"</p></div>`;
    return;
  }
  const title = document.createElement("p");
  title.className = "search-results-title";
  title.textContent = results.length + " result" + (results.length !== 1 ? "s" : "") + ` for "${q}"`;
  container.appendChild(title);
  const sec = document.createElement("section");
  sec.className = "section";
  const grid = document.createElement("div");
  grid.className = "apps-grid-large";
  results.forEach(app => grid.appendChild(createAppCardLg(app)));
  sec.appendChild(grid);
  container.appendChild(sec);
}

/* ══ HOME VIEW ══ */
function renderHomeView(container){
  if(!container) return;
  container.innerHTML = "";
  const inp = document.getElementById("searchInput");
  if(inp) inp.value = "";

  // Mega Hero
  const megaHero = document.createElement("div");
  megaHero.className = "mega-hero reveal-on-scroll";
  megaHero.innerHTML = `
    <div class="mega-hero-bg">
      <div class="orb orb1"></div><div class="orb orb2"></div><div class="orb orb3"></div>
      <div class="grid-lines"></div>
    </div>
    <div class="mega-hero-content">
      <div class="mega-badge">🔥 &nbsp;#1 App Store 2025</div>
      <h1 class="mega-title">
        <span class="title-line">Discover</span>
        <span class="title-line gradient-text">3 Million+</span>
        <span class="title-line">Apps &amp; Games</span>
      </h1>
      <p class="mega-subtitle">Everything you love. All in one place. Verified, safe &amp; free.</p>
      <div class="mega-actions">
        <button class="mega-btn-primary" id="megaExploreBtn"><span class="material-icons-round">explore</span> Explore Now</button>
        <button class="mega-btn-secondary" id="megaGamesBtn"><span class="material-icons-round">sports_esports</span> Top Games</button>
      </div>
    </div>
    <div class="mega-floating-cards">
      <div class="float-card fc1"><span>🎮</span><strong>Games</strong></div>
      <div class="float-card fc2"><span>📸</span><strong>Apps</strong></div>
      <div class="float-card fc3"><span>🎵</span><strong>Music</strong></div>
      <div class="float-card fc4"><span>🍕</span><strong>Food</strong></div>
      <div class="float-card fc5"><span>❤️</span><strong>Health</strong></div>
    </div>`;
  megaHero.querySelector("#megaExploreBtn").addEventListener("click", (e) => {
    createParticleBurst(e.clientX, e.clientY);
    showToast("🚀 Welcome to Play Store!");
  });
  megaHero.querySelector("#megaGamesBtn").addEventListener("click", (e) => {
    createParticleBurst(e.clientX, e.clientY, "#4285f4");
    showToast("🎮 Check out Top Games below!");
  });
  container.appendChild(megaHero);

  // Animated Stats Bar
  const statsBar = document.createElement("div");
  statsBar.className = "animated-stats-bar reveal-on-scroll";
  statsBar.innerHTML = [
    {icon:"📱",color:"linear-gradient(135deg,#01875f,#34a853)",target:3,suffix:"M+",label:"Apps & Games"},
    {icon:"👥",color:"linear-gradient(135deg,#4285f4,#1a73e8)",target:500,suffix:"M+",label:"Active Users"},
    {icon:"🌍",color:"linear-gradient(135deg,#ea4335,#d32f2f)",target:190,suffix:"+",label:"Countries"},
    {icon:"⭐",color:"linear-gradient(135deg,#fbbc04,#f9a825)",target:4.8,suffix:"★",label:"Avg Rating"},
    {icon:"🏆",color:"linear-gradient(135deg,#9c27b0,#6a1b9a)",target:50,suffix:"B+",label:"Downloads"}
  ].map(s => `<div class="astat-card"><div class="astat-icon" style="background:${s.color}">${s.icon}</div><div class="astat-info"><span class="stat-num" data-target="${s.target}" data-suffix="${s.suffix}">0${s.suffix}</span><span class="stat-label">${s.label}</span></div></div>`).join("");
  container.appendChild(statsBar);

  // Service Cards (4 big cards linking to service pages)
  const serviceSection = document.createElement("div");
  serviceSection.className = "service-cards-section reveal-on-scroll";
  serviceSection.innerHTML = `<h2 class="service-cards-title">🚀 Explore by Service Type</h2><div class="service-cards-grid"></div>`;
  const scGrid = serviceSection.querySelector(".service-cards-grid");
  [
    {nav:"educational",icon:"🎓",tag:"Learn & Grow",title:"Educational Apps",desc:"Discover 5,000+ apps that help you learn new skills, master languages, and unlock your full potential.",stats:["5,000+ Apps","200M Students","150+ Subjects"],btnText:"Explore Edu Apps",btnColor:"#1565c0",bg:"linear-gradient(135deg,#0d1b4e,#1565c0,#0d3a6e)"},
    {nav:"entertainment",icon:"🎮",tag:"Play & Enjoy",title:"Entertainment Apps",desc:"From epic mobile games to music streaming and viral short videos — your entertainment universe awaits.",stats:["10,000+ Games","80M+ Songs","500M Daily Users"],btnText:"Explore Entertainment",btnColor:"#6a1b9a",bg:"linear-gradient(135deg,#1a0533,#4a148c,#0d1a3a)"},
    {nav:"informational",icon:"📰",tag:"Stay Informed",title:"Informational Apps",desc:"Breaking news, real-time weather, stock markets, health guides — know everything as it happens.",stats:["2,000+ Apps","24/7 Updates","100+ Categories"],btnText:"Explore Info Apps",btnColor:"#bf360c",bg:"linear-gradient(135deg,#1a0a00,#6d2800,#0a1a1a)"},
    {nav:"productivity",icon:"💻",tag:"Work Smarter",title:"Productivity Apps",desc:"AI-powered tools, task managers, cloud sync, and collaboration apps to supercharge your workflow.",stats:["3,500+ Apps","60M Professionals","40% Time Saved"],btnText:"Explore Productivity",btnColor:"#01875f",bg:"linear-gradient(135deg,#001a14,#004d40,#001a30)"},
  ].forEach(c => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `<div class="service-card-bg" style="background:${c.bg}"></div><div class="service-card-content"><span class="service-card-tag">${c.tag}</span><div class="service-card-icon">${c.icon}</div><div class="service-card-title">${c.title}</div><div class="service-card-desc">${c.desc}</div><div class="service-card-stats">${c.stats.map(s=>`<span class="service-card-stat">✦ ${s}</span>`).join("")}</div><button class="service-card-btn" style="color:${c.btnColor}"><span class="material-icons-round" style="font-size:16px">arrow_forward</span> ${c.btnText}</button></div>`;
    card.querySelector(".service-card-btn").addEventListener("click", (e) => { e.stopPropagation(); createParticleBurst(e.clientX, e.clientY, c.btnColor); navigateTo(c.nav); });
    card.addEventListener("click", () => navigateTo(c.nav));
    scGrid.appendChild(card);
  });
  container.appendChild(serviceSection);

  // Featured Spotlight
  const spotlight = document.createElement("section");
  spotlight.className = "section reveal-on-scroll";
  spotlight.innerHTML = `
    <div class="section-header"><h2 class="section-title">✨ Featured Today</h2><span class="live-badge"><span class="live-dot"></span>LIVE</span></div>
    <div class="featured-spotlight">
      <div class="featured-main">
        <div class="featured-main-bg" style="background:linear-gradient(135deg,#0d0221,#311b92,#4527a0)"></div>
        <div class="featured-sparkles"><span class="sparkle s1">✦</span><span class="sparkle s2">✦</span><span class="sparkle s3">✦</span><span class="sparkle s4">✦</span></div>
        <div class="featured-main-content">
          <span class="featured-badge glow-badge">🏆 Editor's Choice</span>
          <h3>Legends Arena</h3>
          <p>5v5 MOBA with 80+ heroes — the most competitive mobile game of 2025</p>
          <div class="featured-main-meta"><span class="meta-pill">⭐ 4.9</span><span class="meta-pill">150M+ downloads</span><span class="meta-pill free-pill">FREE</span></div>
          <button class="hero-btn featured-install-btn glow-btn">⚡ Install Now</button>
        </div>
        <div class="featured-main-emoji">⚔️</div>
      </div>
      <div class="featured-side">
        <div class="featured-side-card" style="background:linear-gradient(135deg,#1b5e20,#2e7d32)">
          <div class="fsc-info"><span class="featured-badge small">🌟 Top Pick</span><div class="fsc-icon">🌍</div><strong>LinguaLeap</strong><span>Learn 40+ Languages</span><small>⭐ 4.9 · 60M+</small></div>
        </div>
        <div class="featured-side-card" style="background:linear-gradient(135deg,#004d40,#00695c)">
          <div class="fsc-info"><span class="featured-badge small">🆕 New</span><div class="fsc-icon">🧘</div><strong>MindSpace</strong><span>Meditate &amp; Sleep</span><small>⭐ 4.9 · 20M+</small></div>
        </div>
      </div>
    </div>`;
  spotlight.querySelector(".featured-main").addEventListener("click", (e) => {
    if(!e.target.classList.contains("featured-install-btn") && !e.target.classList.contains("glow-btn")) openModal(APP_DATA.games[4]);
  });
  spotlight.querySelector(".featured-install-btn").addEventListener("click", (e) => {
    createParticleBurst(e.clientX, e.clientY, "#fbbc04");
    handleInstall(APP_DATA.games[4], spotlight.querySelector(".featured-install-btn"));
  });
  spotlight.querySelectorAll(".featured-side-card").forEach((card, i) => {
    card.addEventListener("click", () => openModal(i === 0 ? APP_DATA.education[2] : APP_DATA.health[0]));
  });
  container.appendChild(spotlight);

  // Info Banners
  const infoBanner = document.createElement("div");
  infoBanner.className = "info-banner-row reveal-on-scroll";
  infoBanner.innerHTML = [
    {icon:"🛡️",color:"#4285f4",title:"Safe & Verified",desc:"Every app scanned"},
    {icon:"🔄",color:"#01875f",title:"Auto Updates",desc:"Always fresh"},
    {icon:"👨‍👩‍👧",color:"#ea4335",title:"Family Friendly",desc:"Parental controls"},
    {icon:"📶",color:"#fbbc04",title:"Offline Play",desc:"No internet needed"}
  ].map(b => `<div class="info-banner-card" style="--ib-color:${b.color}"><div class="ib-icon">${b.icon}</div><div class="ib-text"><strong>${b.title}</strong><span>${b.desc}</span></div></div>`).join("");
  container.appendChild(infoBanner);

  container.appendChild(createAppRow("🎮 Top Games", APP_DATA.games, "reveal-on-scroll"));

  // Hype Banner
  const hb = document.createElement("div");
  hb.className = "reveal-on-scroll";
  hb.innerHTML = `<div class="hype-banner"><div class="hype-banner-bg-orbs"><div class="hype-orb hb1"></div><div class="hype-orb hb2"></div></div><div class="hype-banner-content"><span class="hype-banner-tag">⚡ Limited Time</span><h3>🎁 Get 3 Months FREE Premium</h3><p>Ad-free, offline play &amp; more with Play Pass</p></div><div class="hype-banner-emoji">🚀</div></div>`;
  hb.querySelector(".hype-banner").addEventListener("click", (e) => {
    createParticleBurst(e.clientX, e.clientY, "#fbbc04");
    showToast("🎉 Play Pass offer activated!");
  });
  container.appendChild(hb);

  container.appendChild(createAppRow("📱 Top Apps", APP_DATA.apps, "reveal-on-scroll"));

  // Trending Now
  const trending = document.createElement("section");
  trending.className = "section reveal-on-scroll";
  const trendApps = [APP_DATA.food[0], APP_DATA.health[0], APP_DATA.travel[1], APP_DATA.music[0], APP_DATA.social[0], APP_DATA.education[2]];
  const trendColors = [
    "linear-gradient(135deg,#880e4f,#c2185b)",
    "linear-gradient(135deg,#004d40,#00897b)",
    "linear-gradient(135deg,#1a237e,#1976d2)",
    "linear-gradient(135deg,#4a148c,#7b1fa2)",
    "linear-gradient(135deg,#bf360c,#e64a19)",
    "linear-gradient(135deg,#1b5e20,#388e3c)"
  ];
  trending.innerHTML = `<div class="section-header"><h2 class="section-title">🔥 Trending Now</h2><span class="live-badge"><span class="live-dot"></span>UPDATED</span></div><div class="trending-grid"></div>`;
  const tgrid = trending.querySelector(".trending-grid");
  trendApps.forEach((app, i) => {
    const card = document.createElement("div");
    card.className = "trending-card";
    card.innerHTML = `<div class="trending-card-bg" style="background:${trendColors[i]}"></div><div class="trending-rank">#${i+1} Trending</div><div class="trending-emoji">${app.icon}</div><div class="trending-info"><strong>${app.name}</strong><span>${app.tags[0]} · ${app.dev}</span><div class="trending-rating">⭐ ${app.rating} · ${app.downloads}</div></div><button class="btn-get trending-get-btn">Get</button>`;
    card.addEventListener("click", (e) => { if(!e.target.classList.contains("trending-get-btn")) openModal(app); });
    card.querySelector(".trending-get-btn").addEventListener("click", (e) => { e.stopPropagation(); createParticleBurst(e.clientX, e.clientY); handleInstall(app, card.querySelector(".trending-get-btn")); });
    tgrid.appendChild(card);
  });
  container.appendChild(trending);

  // Category Highlights
  const highlights = document.createElement("div");
  highlights.className = "category-highlights reveal-on-scroll";
  [
    {label:"Food & Drinks", emoji:"🍔", color:"#fce4ec", accent:"#c2185b", apps:APP_DATA.food.slice(0,3)},
    {label:"Health & Fitness", emoji:"❤️", color:"#e8f5e9", accent:"#2e7d32", apps:APP_DATA.health.slice(0,3)},
    {label:"Music & Audio", emoji:"🎵", color:"#f3e5f5", accent:"#7b1fa2", apps:APP_DATA.music.slice(0,3)}
  ].forEach(hl => {
    const card = document.createElement("div");
    card.className = "hl-card";
    card.style.setProperty("--hl-color", hl.color);
    card.style.setProperty("--hl-accent", hl.accent);
    card.innerHTML = `<div class="hl-header"><span class="hl-emoji">${hl.emoji}</span><h4>${hl.label}</h4><button class="hl-see-all">See all →</button></div><div class="hl-apps">${hl.apps.map((a,idx) => `<div class="hl-app-row" data-idx="${idx}"><div class="hl-app-icon" style="background:${a.bg}">${a.icon}</div><div class="hl-app-info"><span class="hl-app-name">${a.name}</span><span class="hl-app-meta">⭐ ${a.rating} · ${a.tags[0]}</span></div><button class="btn-get hl-get-btn" data-idx="${idx}">Get</button></div>`).join("")}</div>`;
    card.querySelector(".hl-see-all").addEventListener("click", () => showToast("Showing: " + hl.label));
    card.querySelectorAll(".hl-app-row").forEach(row => {
      const idx = parseInt(row.dataset.idx);
      row.addEventListener("click", (e) => { if(!e.target.classList.contains("hl-get-btn")) openModal(hl.apps[idx]); });
    });
    card.querySelectorAll(".hl-get-btn").forEach(btn => {
      const idx = parseInt(btn.dataset.idx);
      btn.addEventListener("click", (e) => { e.stopPropagation(); createParticleBurst(e.clientX, e.clientY); handleInstall(hl.apps[idx], btn); });
    });
    highlights.appendChild(card);
  });
  container.appendChild(highlights);

  container.appendChild(createAppRow("✈️ Travel", APP_DATA.travel, "reveal-on-scroll"));
  container.appendChild(createAppRow("💬 Social", APP_DATA.social, "reveal-on-scroll reveal-delay-1"));
  container.appendChild(createAppRow("📚 Education", APP_DATA.education, "reveal-on-scroll reveal-delay-2"));

  setTimeout(initScrollReveal, 60);
}

/* ══ SERVICE PAGES ══ */
function renderServicePage(type){
  const configs = {
    educational:{
      pageId:"educationalPage",
      heroBg:"linear-gradient(135deg,#0d1b4e,#1565c0,#0d3a6e)",
      orb1:"rgba(21,101,192,0.35)", orb2:"rgba(30,136,229,0.2)",
      tagBg:"rgba(21,101,192,0.2)", tagBorder:"rgba(21,101,192,0.5)", tagColor:"#90caf9", tagText:"📚 Educational Apps",
      title1:"Learn Anything.", title2:"Grow Smarter.", title3:"Every Day.",
      titleGrad:"linear-gradient(90deg,#90caf9,#42a5f5)",
      desc:"Unlock the world's best learning apps — from language mastery to advanced science. Over 5,000 educational apps trusted by millions of students and teachers worldwide.",
      stats:[{num:"5,000+",label:"Edu Apps"},{num:"200M+",label:"Students"},{num:"150+",label:"Subjects"}],
      emoji:"🎓",
      btnPrimary:{text:"Browse All Edu Apps",color:"white",bg:"linear-gradient(135deg,#1565c0,#1e88e5)",target:"educational"},
      btnSecondary:{text:"View Pricing",target:"pricing"},
      features:[{icon:"auto_stories",label:"Interactive Lessons",color:"#1565c0",bg:"rgba(21,101,192,0.1)"},{icon:"psychology",label:"AI Personalization",color:"#1e88e5",bg:"rgba(30,136,229,0.1)"},{icon:"emoji_events",label:"Certificates",color:"#0288d1",bg:"rgba(2,136,209,0.1)"},{icon:"groups",label:"Live Tutors",color:"#0277bd",bg:"rgba(2,119,189,0.1)"},{icon:"offline_bolt",label:"Offline Learning",color:"#01579b",bg:"rgba(1,87,155,0.1)"},{icon:"child_friendly",label:"Kid-Safe",color:"#006064",bg:"rgba(0,96,100,0.1)"}],
      appsTitle:"🏆 Top Educational Apps", appsBadge:"CURATED",
      cardBar:"linear-gradient(90deg,#1565c0,#42a5f5)",
      apps:[...APP_DATA.education,{id:101,name:"Duolingo Pro",dev:"Duolingo Inc",icon:"🦉",bg:"#e8f5e9",rating:4.9,downloads:"200M+",tags:["Language","Free"],desc:"The world's most popular language-learning app."},{id:102,name:"Khan Academy",dev:"Khan Academy",icon:"🌱",bg:"#e3f2fd",rating:4.8,downloads:"100M+",tags:["All Subjects","Free"],desc:"Free world-class education for anyone, anywhere."},{id:103,name:"Coursera",dev:"Coursera Inc",icon:"🎯",bg:"#fff3e0",rating:4.7,downloads:"80M+",tags:["Courses","Free"],desc:"Build skills with courses from top universities worldwide."},{id:104,name:"Photomath",dev:"MicroBlink",icon:"📷",bg:"#fce4ec",rating:4.8,downloads:"50M+",tags:["Math","Free"],desc:"Scan math problems and get instant step-by-step explanations."}],
      whyTitle:"💡 Why Learn With Apps?",
      whyCards:[{icon:"⏰",title:"Learn Anytime",desc:"Pocket-sized lessons fit into your commute, lunch break, or bedtime routine."},{icon:"🎮",title:"Gamified & Fun",desc:"Streaks, points, and rewards make learning addictive — not a chore."},{icon:"🤖",title:"AI-Powered",desc:"Adaptive learning adjusts to your pace, strengths, and weak areas."},{icon:"💰",title:"Free Content",desc:"Access Harvard, Stanford, and MIT-level education for free."},{icon:"📊",title:"Track Progress",desc:"Visual dashboards show exactly how far you've come."},{icon:"🌐",title:"Global Community",desc:"Learn with millions of students worldwide and practice with native speakers."}],
      testTitle:"💬 What Learners Say",
      testimonials:[{stars:"★★★★★",text:"LinguaLeap helped me become conversational in Spanish in just 3 months!",name:"Priya Sharma",role:"Language Learner",avatar:"👩",bg:"#e3f2fd"},{stars:"★★★★★",text:"MathWiz saved my son's grades. He went from failing to top of his class!",name:"Rajan Kumar",role:"Parent",avatar:"👨",bg:"#e8f5e9"},{stars:"★★★★★",text:"I got my first dev job after completing courses on LearnX. Life changer!",name:"Ananya Dev",role:"Software Engineer",avatar:"👩‍💻",bg:"#fff3e0"},{stars:"★★★★★",text:"ScienceKid made learning fun for my kids. They ask to use it every evening!",name:"Meera Patel",role:"Teacher",avatar:"👩‍🏫",bg:"#fce4ec"}],
      ctaBg:"linear-gradient(135deg,#0d2b6e,#1565c0,#0d4a6e)", ctaOrb1:"rgba(30,136,229,0.3)", ctaOrb2:"rgba(66,165,245,0.2)", ctaTagColor:"#90caf9", ctaTag:"🎓 Start Learning Today", ctaTitle:"Unlock Your Full Potential", ctaDesc:"Join 200M+ learners using educational apps to level up their skills", ctaBtnColor:"#1565c0", ctaBtnText:"Browse All Edu Apps →", ctaTarget:"educational"
    },
    entertainment:{
      pageId:"entertainmentPage",
      heroBg:"linear-gradient(135deg,#1a0533,#4a148c,#0d1a3a)",
      orb1:"rgba(106,27,154,0.35)", orb2:"rgba(171,71,188,0.2)",
      tagBg:"rgba(106,27,154,0.2)", tagBorder:"rgba(171,71,188,0.5)", tagColor:"#ce93d8", tagText:"🎬 Entertainment Apps",
      title1:"Play. Watch.", title2:"Stream. Vibe.", title3:"Non-Stop.",
      titleGrad:"linear-gradient(90deg,#ce93d8,#ba68c8)",
      desc:"The biggest library of games, streaming apps, music platforms, and social entertainment. Your boredom ends here — guaranteed.",
      stats:[{num:"10,000+",label:"Games"},{num:"80M+",label:"Songs"},{num:"500M+",label:"Daily Users"}],
      emoji:"🎮",
      btnPrimary:{text:"Explore Games",color:"white",bg:"linear-gradient(135deg,#6a1b9a,#9c27b0)",target:"entertainment"},
      btnSecondary:{text:"Go Back Home",target:"home"},
      features:[{icon:"sports_esports",label:"Top Games",color:"#6a1b9a",bg:"rgba(106,27,154,0.1)"},{icon:"music_note",label:"Music Streaming",color:"#7b1fa2",bg:"rgba(123,31,162,0.1)"},{icon:"movie",label:"Video & Reels",color:"#8e24aa",bg:"rgba(142,36,170,0.1)"},{icon:"headset",label:"Podcasts",color:"#9c27b0",bg:"rgba(156,39,176,0.1)"},{icon:"live_tv",label:"Live Streams",color:"#ab47bc",bg:"rgba(171,71,188,0.1)"},{icon:"offline_pin",label:"Offline Mode",color:"#ba68c8",bg:"rgba(186,104,200,0.1)"}],
      appsTitle:"🔥 Hottest Entertainment Apps", appsBadge:"LIVE",
      cardBar:"linear-gradient(90deg,#6a1b9a,#ba68c8)",
      apps:[...APP_DATA.games.slice(0,4),...APP_DATA.music.slice(0,2),{id:201,name:"Netflix",dev:"Netflix Inc",icon:"🎬",bg:"#fce4ec",rating:4.8,downloads:"200M+",tags:["Streaming","Free"],desc:"Watch award-winning TV shows, movies, anime and documentaries."},{id:202,name:"Spotify",dev:"Spotify AB",icon:"🎧",bg:"#e8f5e9",rating:4.9,downloads:"400M+",tags:["Music","Free"],desc:"Listen to millions of songs and podcasts for free."}],
      whyTitle:"🎯 Why These Apps Are #1",
      whyCards:[{icon:"🎮",title:"Epic Gaming Library",desc:"10,000+ games from casual to hardcore — RPGs, shooters, puzzles and more."},{icon:"🎵",title:"Music For Every Mood",desc:"Stream 80M+ songs, discover new artists, and build the perfect playlist."},{icon:"📺",title:"Binge-Worthy Content",desc:"Movies, shows, anime, and documentaries curated just for you."},{icon:"🎙️",title:"Podcast Universe",desc:"5M+ podcasts covering every topic imaginable."},{icon:"⚡",title:"Instant Access",desc:"Zero lag, lightning-fast downloads. Entertainment at the speed of thought."},{icon:"👥",title:"Social Features",desc:"Play with friends, share music, collaborate on playlists and leaderboards."}],
      testTitle:"⭐ Player Reviews",
      testimonials:[{stars:"★★★★★",text:"Legends Arena is insanely good! I've been playing for 6 months and it never gets old.",name:"Karthik V",role:"Gamer",avatar:"🎮",bg:"#ede7f6"},{stars:"★★★★★",text:"BeatStream's recommendation algorithm is scary good. Every suggestion is perfect.",name:"Shreya M",role:"Music Lover",avatar:"🎵",bg:"#f3e5f5"},{stars:"★★★★★",text:"The game library here is unmatched. Found 3 new obsessions this month alone!",name:"Rahul P",role:"Streamer",avatar:"🕹️",bg:"#e8eaf6"},{stars:"★★★★★",text:"Finally a place where all my entertainment needs are met in one app!",name:"Aisha K",role:"Content Creator",avatar:"📸",bg:"#fce4ec"}],
      ctaBg:"linear-gradient(135deg,#1a0533,#4a148c,#1a0533)", ctaOrb1:"rgba(156,39,176,0.35)", ctaOrb2:"rgba(186,104,200,0.25)", ctaTagColor:"#ce93d8", ctaTag:"🎮 Pure Entertainment", ctaTitle:"Never Be Bored Again", ctaDesc:"Explore thousands of games, music apps, and more — all free to download", ctaBtnColor:"#6a1b9a", ctaBtnText:"Explore Entertainment →", ctaTarget:"entertainment"
    },
    informational:{
      pageId:"informationalPage",
      heroBg:"linear-gradient(135deg,#1a0a00,#6d2800,#0a1a1a)",
      orb1:"rgba(191,54,12,0.3)", orb2:"rgba(239,108,0,0.2)",
      tagBg:"rgba(191,54,12,0.2)", tagBorder:"rgba(239,108,0,0.5)", tagColor:"#ffcc80", tagText:"ℹ️ Informational Apps",
      title1:"Know More.", title2:"Stay Informed.", title3:"Live Better.",
      titleGrad:"linear-gradient(90deg,#ffcc80,#ffa726)",
      desc:"From breaking news to health guides, travel info to financial tools — these apps keep you ahead with real-time data and trusted sources.",
      stats:[{num:"2,000+",label:"Info Apps"},{num:"24/7",label:"Live Updates"},{num:"50M+",label:"Daily Reads"}],
      emoji:"📰",
      btnPrimary:{text:"Browse Info Apps",color:"white",bg:"linear-gradient(135deg,#bf360c,#e64a19)",target:"informational"},
      btnSecondary:{text:"Go Back Home",target:"home"},
      features:[{icon:"newspaper",label:"Breaking News",color:"#bf360c",bg:"rgba(191,54,12,0.1)"},{icon:"health_and_safety",label:"Health Info",color:"#d84315",bg:"rgba(216,67,21,0.1)"},{icon:"wb_sunny",label:"Weather",color:"#e64a19",bg:"rgba(230,74,25,0.1)"},{icon:"trending_up",label:"Finance",color:"#ef6c00",bg:"rgba(239,108,0,0.1)"},{icon:"travel_explore",label:"Travel Guides",color:"#f57c00",bg:"rgba(245,124,0,0.1)"},{icon:"fact_check",label:"Fact Checker",color:"#fb8c00",bg:"rgba(251,140,0,0.1)"}],
      appsTitle:"📡 Top Informational Apps", appsBadge:"REAL-TIME",
      cardBar:"linear-gradient(90deg,#bf360c,#f57c00)",
      apps:[...APP_DATA.health.slice(0,2),...APP_DATA.travel.slice(0,2),{id:301,name:"News Daily",dev:"MediaGroup",icon:"📰",bg:"#fff3e0",rating:4.7,downloads:"50M+",tags:["News","Free"],desc:"Personalized news from 10,000+ sources. AI-curated and verified."},{id:302,name:"WeatherNow",dev:"MeteoApps",icon:"⛅",bg:"#e3f2fd",rating:4.8,downloads:"30M+",tags:["Weather","Free"],desc:"Hyper-local weather forecasts with 15-minute precision."},{id:303,name:"FinanceIQ",dev:"WealthTech",icon:"📈",bg:"#e8f5e9",rating:4.6,downloads:"20M+",tags:["Finance","Free"],desc:"Real-time stock quotes, market news, and crypto prices."},{id:304,name:"WikiSnap",dev:"InfoLabs",icon:"📖",bg:"#f3e5f5",rating:4.5,downloads:"15M+",tags:["Knowledge","Free"],desc:"Instant answers powered by Wikipedia and academic sources."}],
      whyTitle:"🔍 Why Stay Informed?",
      whyCards:[{icon:"⚡",title:"Real-Time Updates",desc:"Breaking news, live scores, market moves — information as it happens."},{icon:"🛡️",title:"Verified & Trusted",desc:"Every app is vetted for accuracy with built-in fact-checking."},{icon:"🎯",title:"Personalized For You",desc:"AI learns what matters to you and surfaces the most relevant content."},{icon:"🌍",title:"Global Coverage",desc:"News from 190+ countries in 40+ languages."},{icon:"📴",title:"Offline Reading",desc:"Save articles, guides and maps for offline use without Wi-Fi."},{icon:"🔔",title:"Smart Alerts",desc:"Custom notifications for topics, stocks, and locations you care about."}],
      testTitle:"💬 Trusted by Millions",
      testimonials:[{stars:"★★★★★",text:"News Daily filters out clickbait and gives me what's real. Only news app I need.",name:"Vikram S",role:"Journalist",avatar:"📝",bg:"#fff3e0"},{stars:"★★★★★",text:"WeatherNow predicted the exact minute it started raining. Scarily accurate!",name:"Lakshmi R",role:"Farmer",avatar:"🌾",bg:"#e8f5e9"},{stars:"★★★★★",text:"FinanceIQ helped me understand markets in a way no textbook could.",name:"Arjun T",role:"Investor",avatar:"📈",bg:"#e3f2fd"},{stars:"★★★★★",text:"WikiSnap is like having an encyclopedia in my pocket. I use it every day.",name:"Nandini K",role:"Student",avatar:"📚",bg:"#f3e5f5"}],
      ctaBg:"linear-gradient(135deg,#1a0a00,#6d2800,#1a1500)", ctaOrb1:"rgba(239,108,0,0.3)", ctaOrb2:"rgba(251,140,0,0.2)", ctaTagColor:"#ffcc80", ctaTag:"📡 Always Informed", ctaTitle:"The World At Your Fingertips", ctaDesc:"Download the best informational apps and never miss what matters", ctaBtnColor:"#bf360c", ctaBtnText:"Explore Info Apps →", ctaTarget:"informational"
    },
    productivity:{
      pageId:"productivityPage",
      heroBg:"linear-gradient(135deg,#001a14,#004d40,#001a30)",
      orb1:"rgba(1,135,95,0.3)", orb2:"rgba(38,166,154,0.2)",
      tagBg:"rgba(1,135,95,0.2)", tagBorder:"rgba(38,166,154,0.5)", tagColor:"#80cbc4", tagText:"⚡ Productivity Apps",
      title1:"Work Smarter.", title2:"Do More. Stress Less.", title3:"Every Day.",
      titleGrad:"linear-gradient(90deg,#80cbc4,#26a69a)",
      desc:"Transform how you work, organize, and get things done. AI-powered tools, seamless collaboration, and smart automation for individuals and teams.",
      stats:[{num:"3,500+",label:"Work Apps"},{num:"40%",label:"Time Saved"},{num:"60M+",label:"Professionals"}],
      emoji:"💻",
      btnPrimary:{text:"Browse All Apps",color:"white",bg:"linear-gradient(135deg,#01875f,#34a853)",target:"productivity"},
      btnSecondary:{text:"View Pricing",target:"pricing"},
      features:[{icon:"task_alt",label:"Task Management",color:"#01875f",bg:"rgba(1,135,95,0.1)"},{icon:"cloud_sync",label:"Cloud Sync",color:"#00897b",bg:"rgba(0,137,123,0.1)"},{icon:"smart_toy",label:"AI Assistant",color:"#00796b",bg:"rgba(0,121,107,0.1)"},{icon:"group_work",label:"Team Collab",color:"#00695c",bg:"rgba(0,105,92,0.1)"},{icon:"lock",label:"End-to-End Secure",color:"#004d40",bg:"rgba(0,77,64,0.1)"},{icon:"bolt",label:"Automation",color:"#26a69a",bg:"rgba(38,166,154,0.1)"}],
      appsTitle:"⚡ Top Productivity Apps", appsBadge:"TOP RATED",
      cardBar:"linear-gradient(90deg,#01875f,#26a69a)",
      apps:[...APP_DATA.apps.slice(0,4),{id:401,name:"TodoMaster",dev:"TaskFlow Inc",icon:"✅",bg:"#e8f5e9",rating:4.8,downloads:"30M+",tags:["Tasks","Free"],desc:"Smart to-do lists with AI prioritization and team sharing."},{id:402,name:"FocusZone",dev:"DeepWork Co",icon:"🎯",bg:"#e0f7fa",rating:4.7,downloads:"15M+",tags:["Focus","Free"],desc:"Pomodoro timer, website blocker, and focus music."},{id:403,name:"MeetSync",dev:"CalTech",icon:"📅",bg:"#fff3e0",rating:4.6,downloads:"12M+",tags:["Calendar","Free"],desc:"Smart calendar that auto-schedules meetings across all devices."},{id:404,name:"PassLock",dev:"SecureVault",icon:"🔐",bg:"#f3e5f5",rating:4.9,downloads:"25M+",tags:["Security","Free"],desc:"Store all passwords securely with one master key."}],
      whyTitle:"🚀 Supercharge Your Work",
      whyCards:[{icon:"⏱️",title:"Save 2+ Hours Daily",desc:"Automation and smart suggestions eliminate repetitive tasks."},{icon:"🧠",title:"AI That Thinks Ahead",desc:"Predictive features draft emails, summarize meetings, and suggest next actions."},{icon:"🔗",title:"Everything Connected",desc:"Integrate with 200+ tools — Slack, Gmail, Notion, Google Drive and more."},{icon:"📱",title:"Work From Anywhere",desc:"Full-featured mobile apps so you can work from any device."},{icon:"🔒",title:"Enterprise Security",desc:"256-bit encryption, two-factor auth, and zero-knowledge architecture."},{icon:"📊",title:"Insights & Analytics",desc:"Track your productivity patterns and discover where your time really goes."}],
      testTitle:"💬 From Power Users",
      testimonials:[{stars:"★★★★★",text:"NoteFlow replaced 4 different apps for me. Notes, to-dos, reminders — all in one place.",name:"Deepak R",role:"Product Manager",avatar:"💼",bg:"#e8f5e9"},{stars:"★★★★★",text:"FocusZone helped me double my output. The Pomodoro + music combo is incredible.",name:"Sneha A",role:"Freelancer",avatar:"🎯",bg:"#e0f7fa"},{stars:"★★★★★",text:"CloudDrive's auto-backup saved my entire thesis when my laptop crashed. Life saver!",name:"Rohan M",role:"PhD Student",avatar:"📚",bg:"#fff3e0"},{stars:"★★★★★",text:"Our whole team uses these apps now. Productivity went up 60% in the first month!",name:"Preethi N",role:"Startup Founder",avatar:"🚀",bg:"#f3e5f5"}],
      ctaBg:"linear-gradient(135deg,#001a14,#004d40,#001a14)", ctaOrb1:"rgba(1,135,95,0.35)", ctaOrb2:"rgba(38,166,154,0.25)", ctaTagColor:"#80cbc4", ctaTag:"⚡ Work Smarter", ctaTitle:"Your Most Productive Year Starts Now", ctaDesc:"Join 60M+ professionals who transformed their workflow with these apps", ctaBtnColor:"#01875f", ctaBtnText:"Browse Productivity →", ctaTarget:"productivity"
    }
  };

  const c = configs[type];
  if(!c) return;
  const el = document.getElementById(c.pageId);
  if(el.innerHTML.trim()) return; // already rendered

  el.innerHTML = `
    <div class="sp-hero" style="background:${c.heroBg}">
      <div class="sp-hero-bg">
        <div class="sp-hero-orb" style="width:400px;height:400px;background:${c.orb1};top:-90px;left:-80px"></div>
        <div class="sp-hero-orb" style="width:300px;height:300px;background:${c.orb2};bottom:-60px;right:12%;animation-delay:-4s"></div>
        <div class="sp-hero-grid"></div>
      </div>
      <div class="sp-hero-content">
        <div class="sp-hero-tag" style="background:${c.tagBg};border:1px solid ${c.tagBorder};color:${c.tagColor}">${c.tagText}</div>
        <h1 class="sp-hero-title">
          <span>${c.title1}</span>
          <span style="background:${c.titleGrad};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${c.title2}</span>
          <span>${c.title3}</span>
        </h1>
        <p class="sp-hero-desc">${c.desc}</p>
        <div class="sp-hero-stats">${c.stats.map(s=>`<div class="sp-stat"><span class="sp-stat-num">${s.num}</span><span class="sp-stat-label">${s.label}</span></div>`).join("")}</div>
        <div class="sp-hero-btns">
          <button class="sp-hero-btn-primary" id="spBtnPrimary" style="background:${c.btnPrimary.bg};color:${c.btnPrimary.color};box-shadow:0 8px 24px rgba(0,0,0,0.3)">
            <span class="material-icons-round">arrow_forward</span>${c.btnPrimary.text}
          </button>
          <button class="sp-hero-btn-secondary" id="spBtnSecondary">${c.btnSecondary.text}</button>
        </div>
      </div>
      <div class="sp-hero-emoji">${c.emoji}</div>
    </div>`;

  el.querySelector("#spBtnPrimary").addEventListener("click", () => navigateTo(c.btnPrimary.target));
  el.querySelector("#spBtnSecondary").addEventListener("click", () => navigateTo(c.btnSecondary.target));

  // Feature pills
  const fr = document.createElement("div");
  fr.className = "sp-features-row reveal-on-scroll";
  c.features.forEach(f => {
    const p = document.createElement("div");
    p.className = "sp-feature-pill";
    p.style.cssText = `color:${f.color};background:${f.bg};border-color:${f.color}40`;
    p.innerHTML = `<span class="material-icons-round">${f.icon}</span>${f.label}`;
    fr.appendChild(p);
  });
  el.appendChild(fr);

  // Apps showcase
  const as = document.createElement("section");
  as.className = "section reveal-on-scroll";
  as.innerHTML = `<div class="section-header"><h2 class="section-title">${c.appsTitle}</h2><span class="live-badge"><span class="live-dot"></span>${c.appsBadge}</span></div><div class="sp-app-showcase"></div>`;
  const sc = as.querySelector(".sp-app-showcase");
  c.apps.forEach(app => {
    const card = document.createElement("div");
    card.className = "sp-app-card";
    card.innerHTML = `<div class="sp-app-icon" style="background:${app.bg}">${app.icon}</div><div class="sp-app-name">${app.name}</div><div class="sp-app-dev">${app.dev}</div><div class="sp-app-desc">${app.desc}</div><div class="sp-app-footer"><div class="sp-app-rating"><span class="material-icons-round">star</span>${app.rating}</div><button class="btn-get sp-get-btn">Get</button></div>`;
    card.style.setProperty("--sp-bar", c.cardBar);
    card.addEventListener("click", (e) => { if(!e.target.classList.contains("sp-get-btn")) openModal(app); });
    card.querySelector(".sp-get-btn").addEventListener("click", (e) => { e.stopPropagation(); createParticleBurst(e.clientX, e.clientY, c.ctaBtnColor); handleInstall(app, card.querySelector(".sp-get-btn")); });
    sc.appendChild(card);
  });
  el.appendChild(as);

  // Why section
  const ws = document.createElement("section");
  ws.className = "section reveal-on-scroll";
  ws.innerHTML = `<div class="section-header"><h2 class="section-title">${c.whyTitle}</h2></div><div class="sp-why-grid">${c.whyCards.map(w=>`<div class="sp-why-card"><div class="sp-why-icon">${w.icon}</div><div class="sp-why-title">${w.title}</div><div class="sp-why-desc">${w.desc}</div></div>`).join("")}</div>`;
  el.appendChild(ws);

  // Testimonials
  const ts = document.createElement("section");
  ts.className = "section reveal-on-scroll";
  ts.innerHTML = `<div class="section-header"><h2 class="section-title">${c.testTitle}</h2></div><div class="sp-testimonials">${c.testimonials.map(t=>`<div class="sp-testimonial"><div class="sp-test-stars">${t.stars}</div><div class="sp-test-text">"${t.text}"</div><div class="sp-test-author"><div class="sp-test-avatar" style="background:${t.bg}">${t.avatar}</div><div><div class="sp-test-name">${t.name}</div><div class="sp-test-role">${t.role}</div></div></div></div>`).join("")}</div>`;
  el.appendChild(ts);

  // CTA Banner
  const cta = document.createElement("div");
  cta.className = "sp-cta reveal-on-scroll";
  cta.innerHTML = `<div class="sp-cta-bg" style="background:${c.ctaBg}"><div class="sp-cta-orb" style="width:260px;height:260px;background:${c.ctaOrb1};left:-50px;top:-50px"></div><div class="sp-cta-orb" style="width:200px;height:200px;background:${c.ctaOrb2};right:60px;bottom:-40px;animation-delay:-2s"></div></div><div class="sp-cta-content"><span class="sp-cta-tag" style="color:${c.ctaTagColor}">${c.ctaTag}</span><h3>${c.ctaTitle}</h3><p>${c.ctaDesc}</p></div><button class="sp-cta-btn" style="color:${c.ctaBtnColor}">${c.ctaBtnText}</button>`;
  cta.querySelector(".sp-cta-btn").addEventListener("click", () => navigateTo(c.ctaTarget));
  el.appendChild(cta);

  setTimeout(initScrollReveal, 80);
}

/* ══ APP CARD HELPERS ══ */
function createAppRow(title, apps, extraClass){
  const sec = document.createElement("section");
  sec.className = "section " + (extraClass || "");
  sec.innerHTML = `<div class="section-header"><h2 class="section-title">${title}</h2></div><div class="apps-row"></div>`;
  const row = sec.querySelector(".apps-row");
  apps.forEach(app => row.appendChild(createAppCard(app)));
  return sec;
}
function createAppCard(app){
  const card = document.createElement("div");
  card.className = "app-card";
  card.innerHTML = `<div class="app-card-icon" style="background:${app.bg}">${app.icon}</div><div class="app-card-name">${app.name}</div><div class="app-card-meta"><span class="material-icons-round">star</span>${app.rating}</div>`;
  card.addEventListener("click", () => openModal(app));
  return card;
}
function createAppCardLg(app){
  const card = document.createElement("div");
  card.className = "app-card-lg";
  card.innerHTML = `<div class="app-card-lg-icon" style="background:${app.bg}">${app.icon}</div><div class="app-card-lg-name">${app.name}</div><div class="app-card-lg-dev">${app.dev}</div><div class="app-card-lg-footer"><div class="app-card-lg-rating"><span class="material-icons-round">star</span>${app.rating}</div><button class="btn-get">${installedApps.has(app.id) ? "Open" : "Get"}</button></div>`;
  card.addEventListener("click", () => openModal(app));
  card.querySelector(".btn-get").addEventListener("click", e => { e.stopPropagation(); handleInstall(app, card.querySelector(".btn-get")); });
  return card;
}

/* ══ MODAL ══ */
function openModal(app){
  document.getElementById("modalIcon").textContent = app.icon;
  document.getElementById("modalIcon").style.background = app.bg;
  document.getElementById("modalName").textContent = app.name;
  document.getElementById("modalDev").textContent = app.dev;
  document.getElementById("modalRating").textContent = app.rating;
  document.getElementById("modalDownloads").textContent = (app.downloads || "10M+") + " downloads";
  document.getElementById("modalDesc").textContent = app.desc;
  document.getElementById("modalTags").innerHTML = app.tags.map(t => `<span class="modal-tag">${t}</span>`).join("");
  document.getElementById("modalScreenshots").innerHTML = (app.screenshots || [app.icon,app.icon,app.icon]).map(s => `<div class="screenshot" style="background:${app.bg}">${s}</div>`).join("");
  const btn = document.getElementById("installBtn");
  updateInstallBtn(btn, app.id);
  btn.onclick = () => handleInstall(app, btn);
  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if(e.target === document.getElementById("modalOverlay")) closeModal();
});
function updateInstallBtn(btn, id){
  btn.textContent = installedApps.has(id) ? "Open" : "Install";
  btn.classList.toggle("installed", installedApps.has(id));
}
function handleInstall(app, btn){
  if(installedApps.has(app.id)){
    showToast("Opening " + app.name + "... " + app.icon);
  } else {
    installedApps.add(app.id);
    btn.textContent = "Installing...";
    btn.style.opacity = "0.7";
    setTimeout(() => {
      btn.textContent = "Open";
      btn.classList.add("installed");
      btn.style.opacity = "1";
      showToast(app.name + " installed! " + app.icon);
    }, 1200);
  }
}

/* ══ AUTH ══ */
function initAuth(){
  const loginTabBtn = document.getElementById("loginTabBtn"),
        signupTabBtn = document.getElementById("signupTabBtn"),
        slider = document.getElementById("authTabSlider"),
        loginForm = document.getElementById("loginForm"),
        signupForm = document.getElementById("signupForm"),
        goToSignup = document.getElementById("goToSignup"),
        goToLogin = document.getElementById("goToLogin");

  function showLogin(){ loginTabBtn.classList.add("active"); signupTabBtn.classList.remove("active"); slider.classList.remove("signup"); loginForm.style.display = ""; signupForm.style.display = "none"; }
  function showSignup(){ signupTabBtn.classList.add("active"); loginTabBtn.classList.remove("active"); slider.classList.add("signup"); loginForm.style.display = "none"; signupForm.style.display = ""; }

  loginTabBtn.addEventListener("click", showLogin);
  signupTabBtn.addEventListener("click", showSignup);
  if(goToSignup) goToSignup.addEventListener("click", showSignup);
  if(goToLogin) goToLogin.addEventListener("click", showLogin);

  document.querySelectorAll(".auth-eye-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const inp = document.getElementById(btn.dataset.target);
      if(!inp) return;
      const isPass = inp.type === "password";
      inp.type = isPass ? "text" : "password";
      btn.querySelector(".material-icons-round").textContent = isPass ? "visibility_off" : "visibility";
    });
  });

  const passInput = document.getElementById("signupPass");
  if(passInput){
    passInput.addEventListener("input", () => {
      const val = passInput.value;
      const bars = [document.getElementById("sb1"), document.getElementById("sb2"), document.getElementById("sb3"), document.getElementById("sb4")];
      const label = document.getElementById("strengthLabel");
      bars.forEach(b => { if(b) b.className = "strength-bar"; });
      if(!val){ if(label) label.textContent = "Enter password"; return; }
      let score = 0;
      if(val.length >= 6) score++;
      if(val.length >= 10) score++;
      if(/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
      if(/[^A-Za-z0-9]/.test(val)) score++;
      const levels = ["weak","fair","good","strong"];
      const labels = ["Weak 😟","Fair 🙂","Good 👍","Strong 💪"];
      for(let i = 0; i < score; i++){ if(bars[i]) bars[i].classList.add(levels[Math.min(score-1, 3)]); }
      if(label) label.textContent = labels[score-1] || "Enter password";
    });
  }

  const loginSubmitBtn = document.getElementById("loginSubmitBtn");
  if(loginSubmitBtn){
    loginSubmitBtn.addEventListener("click", (e) => {
      const email = document.getElementById("loginEmail").value.trim();
      const pass = document.getElementById("loginPass").value.trim();
      if(!email || !email.includes("@")){ showToast("⚠️ Please enter a valid email!"); return; }
      if(!pass || pass.length < 6){ showToast("⚠️ Password must be at least 6 characters!"); return; }
      createParticleBurst(e.clientX, e.clientY, "#01875f");
      showToast("✅ Welcome back! Signing you in...");
      setTimeout(() => navigateTo("home"), 1500);
    });
  }

  const signupSubmitBtn = document.getElementById("signupSubmitBtn");
  if(signupSubmitBtn){
    signupSubmitBtn.addEventListener("click", (e) => {
      const first = document.getElementById("signupFirst").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const pass = document.getElementById("signupPass").value.trim();
      const confirm = document.getElementById("signupConfirm").value.trim();
      const agreed = document.getElementById("agreeTerms").checked;
      if(!first){ showToast("⚠️ Please enter your first name!"); return; }
      if(!email || !email.includes("@")){ showToast("⚠️ Please enter a valid email!"); return; }
      if(!pass || pass.length < 6){ showToast("⚠️ Password must be at least 6 characters!"); return; }
      if(pass !== confirm){ showToast("⚠️ Passwords do not match!"); return; }
      if(!agreed){ showToast("⚠️ Please agree to Terms & Privacy Policy!"); return; }
      createParticleBurst(e.clientX, e.clientY, "#4285f4");
      showToast("🚀 Account created! Welcome to Play Store!");
      setTimeout(() => navigateTo("home"), 1500);
    });
  }

  const googleBtn = document.getElementById("googleBtn");
  if(googleBtn) googleBtn.addEventListener("click", (e) => { createParticleBurst(e.clientX, e.clientY, "#4285f4"); showToast("🔵 Connecting with Google..."); });

  const forgotBtn = document.querySelector(".auth-forgot-btn");
  if(forgotBtn) forgotBtn.addEventListener("click", () => showToast("📧 Password reset link sent to your email!"));
}

/* ══ ABOUT ══ */
function renderAboutPage(){
  const el = document.getElementById("aboutPage");
  if(el.innerHTML.trim()) return;
  el.innerHTML = `
    <div class="about-hero">
      <div class="about-hero-orb1"></div><div class="about-hero-orb2"></div><div class="about-hero-grid"></div>
      <div class="about-hero-content">
        <div class="about-hero-tag">🚀 Our Story</div>
        <h1>We're Building the World's <span>Best App Marketplace</span></h1>
        <p>Play Store was founded with a simple mission — make great apps accessible to everyone, everywhere. Trusted by 500M+ users across 190+ countries.</p>
        <div class="about-hero-btns">
          <button class="about-btn-primary" onclick="navigateTo('contact')"><span class="material-icons-round">mail</span> Get In Touch</button>
          <button class="about-btn-secondary" onclick="navigateTo('pricing')"><span class="material-icons-round">sell</span> View Plans</button>
        </div>
      </div>
    </div>
    <div class="about-stats-row reveal-on-scroll">
      <div class="about-stat-card"><span class="about-stat-num">500M+</span><span class="about-stat-label">Active Users</span></div>
      <div class="about-stat-card"><span class="about-stat-num">3M+</span><span class="about-stat-label">Apps Listed</span></div>
      <div class="about-stat-card"><span class="about-stat-num">190+</span><span class="about-stat-label">Countries</span></div>
      <div class="about-stat-card"><span class="about-stat-num">50B+</span><span class="about-stat-label">Downloads</span></div>
    </div>
    <div class="about-mission reveal-on-scroll">
      <div class="about-mission-inner">
        <h2>Our Mission is <span>Simple</span></h2>
        <p>We believe great technology should be accessible to everyone — not just the privileged few.</p>
        <p>Every app on Play Store goes through a rigorous safety review. Every developer gets fair visibility. Every user gets a seamless, trusted experience.</p>
        <div class="about-values">
          ${[{icon:"🛡️",title:"Safety First",desc:"Every app is scanned, verified, and continuously monitored for security."},{icon:"🌍",title:"Global Reach",desc:"From Chennai to Chicago, our platform serves 190+ countries in 40+ languages."},{icon:"⚡",title:"Blazing Fast",desc:"Sub-second app discovery, instant downloads, and seamless updates."},{icon:"♿",title:"Accessible for All",desc:"Designed with accessibility — screen readers, high contrast modes supported."},{icon:"🤝",title:"Fair for Developers",desc:"Transparent policies, honest revenue sharing, and real developer support."},{icon:"🔒",title:"Privacy Protected",desc:"Your data is yours. We never sell personal information."}].map(v=>`<div class="about-value-card reveal-on-scroll"><div class="about-value-icon">${v.icon}</div><div class="about-value-title">${v.title}</div><div class="about-value-desc">${v.desc}</div></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="about-team reveal-on-scroll">
      <h2>Meet Our Team</h2>
      <p class="about-team-sub">The passionate people behind Play Store's success</p>
      <div class="about-team-grid">
        ${[{emoji:"👨‍💻",name:"Meyyappan S",role:"Founder & CEO",bg:"linear-gradient(135deg,#01875f,#34a853)"},{emoji:"👩‍🎨",name:"Priya Rajan",role:"Head of Design",bg:"linear-gradient(135deg,#4285f4,#1a73e8)"},{emoji:"👨‍🔬",name:"Arjun Kumar",role:"Lead Engineer",bg:"linear-gradient(135deg,#ea4335,#c62828)"},{emoji:"👩‍💼",name:"Ananya Devi",role:"Product Manager",bg:"linear-gradient(135deg,#fbbc04,#f57f17)"},{emoji:"👨‍📊",name:"Vikram Patel",role:"Data Science",bg:"linear-gradient(135deg,#9c27b0,#6a1b9a)"},{emoji:"👩‍🎤",name:"Sneha Nair",role:"Marketing Lead",bg:"linear-gradient(135deg,#00897b,#004d40)"}].map(m=>`<div class="team-card"><div class="team-avatar" style="background:${m.bg}">${m.emoji}</div><div class="team-name">${m.name}</div><div class="team-role">${m.role}</div></div>`).join("")}
      </div>
    </div>`;
}

/* ══ BLOGS ══ */
function renderBlogsPage(){
  const el = document.getElementById("blogsPage");
  if(el.innerHTML.trim()) return;
  const blogs = [
    {emoji:"🚀",bg:"linear-gradient(135deg,#1a237e,#283593)",tag:"Tech",tagColor:"#4285f4",tagBg:"rgba(66,133,244,0.15)",date:"Mar 12, 2025",time:"5 min read",title:"The Future of Mobile Gaming in 2025",excerpt:"From AI-powered NPCs to cloud gaming breakthroughs, discover how mobile gaming is set to transform.",author:"Arjun Kumar",authorBg:"#e3f2fd",authorAvatar:"👨‍🔬"},
    {emoji:"📱",bg:"linear-gradient(135deg,#880e4f,#ad1457)",tag:"Apps",tagColor:"#ea4335",tagBg:"rgba(234,67,53,0.15)",date:"Mar 8, 2025",time:"4 min read",title:"10 Hidden App Features You Didn't Know",excerpt:"Unlock the full potential of your favorite apps with these game-changing features most users never discover.",author:"Priya Rajan",authorBg:"#fce4ec",authorAvatar:"👩‍🎨"},
    {emoji:"🔒",bg:"linear-gradient(135deg,#1b5e20,#2e7d32)",tag:"Security",tagColor:"#01875f",tagBg:"rgba(1,135,95,0.15)",date:"Mar 5, 2025",time:"6 min read",title:"How We Keep Your Data Safe",excerpt:"A transparent look at the security systems protecting over 500 million Play Store users.",author:"Vikram Patel",authorBg:"#e8f5e9",authorAvatar:"👨‍📊"},
    {emoji:"🎮",bg:"linear-gradient(135deg,#4a148c,#7b1fa2)",tag:"Gaming",tagColor:"#9c27b0",tagBg:"rgba(156,39,176,0.15)",date:"Feb 28, 2025",time:"3 min read",title:"Top 20 Indie Games of 2025",excerpt:"From one-developer masterpieces to small studio gems — these indie games proved budget doesn't equal quality.",author:"Meyyappan S",authorBg:"#ede7f6",authorAvatar:"👨‍💻"},
    {emoji:"🤖",bg:"linear-gradient(135deg,#bf360c,#e64a19)",tag:"AI",tagColor:"#ef6c00",tagBg:"rgba(239,108,0,0.15)",date:"Feb 20, 2025",time:"7 min read",title:"AI in Your Pocket",excerpt:"From personalized recommendations to on-device translation, AI is quietly revolutionizing every app.",author:"Ananya Devi",authorBg:"#fff3e0",authorAvatar:"👩‍💼"},
    {emoji:"📊",bg:"linear-gradient(135deg,#006064,#00838f)",tag:"Industry",tagColor:"#00897b",tagBg:"rgba(0,137,123,0.15)",date:"Feb 14, 2025",time:"5 min read",title:"2025 App Economy Report",excerpt:"The app economy reached $1.2 trillion in 2024. Here's what the numbers tell us about where it's headed.",author:"Sneha Nair",authorBg:"#e0f7fa",authorAvatar:"👩‍🎤"}
  ];
  el.innerHTML = `
    <div class="blogs-hero">
      <div class="blogs-hero-orb1"></div><div class="blogs-hero-grid"></div>
      <div class="blogs-hero-content">
        <div class="blogs-hero-tag">✍️ Our Blog</div>
        <h1>Stories, Insights &amp; <span>Ideas</span></h1>
        <p>Deep dives into app trends, developer stories, and tech insights.</p>
      </div>
    </div>
    <div class="blogs-filters section">
      <button class="blog-filter-btn active">All</button>
      <button class="blog-filter-btn">Tech</button>
      <button class="blog-filter-btn">Gaming</button>
      <button class="blog-filter-btn">Security</button>
      <button class="blog-filter-btn">AI</button>
      <button class="blog-filter-btn">Industry</button>
    </div>
    <div class="section">
      <div class="blogs-grid">
        ${blogs.map(b => `
          <div class="blog-card">
            <div class="blog-card-img" style="background:${b.bg}"><span style="font-size:60px;position:relative;z-index:1">${b.emoji}</span></div>
            <div class="blog-card-body">
              <div class="blog-card-meta"><span class="blog-tag" style="color:${b.tagColor};background:${b.tagBg}">${b.tag}</span><span class="blog-date">${b.date}</span><span class="blog-read-time">· ${b.time}</span></div>
              <div class="blog-card-title">${b.title}</div>
              <div class="blog-card-excerpt">${b.excerpt}</div>
              <div class="blog-card-author"><div class="blog-author-avatar" style="background:${b.authorBg}">${b.authorAvatar}</div><span class="blog-author-name">${b.author}</span><button class="blog-read-btn">Read →</button></div>
            </div>
          </div>`).join("")}
      </div>
    </div>`;
  el.querySelectorAll(".blog-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      el.querySelectorAll(".blog-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showToast("Showing: " + btn.textContent);
    });
  });
  el.querySelectorAll(".blog-read-btn").forEach(btn => {
    btn.addEventListener("click", (e) => { e.stopPropagation(); showToast("📖 Opening article..."); });
  });
}

/* ══ PRICING ══ */
function renderPricingPage(){
  const el = document.getElementById("pricingPage");
  el.innerHTML = `
    <div class="pricing-hero">
      <div class="pricing-hero-orb1"></div><div class="pricing-hero-orb2"></div><div class="pricing-hero-grid"></div>
      <div class="pricing-hero-content">
        <div class="pricing-hero-tag">💰 Simple Pricing</div>
        <h1>Choose the Plan That's <span>Right for You</span></h1>
        <p>Start free. Upgrade anytime. Cancel whenever. No hidden fees, ever.</p>
      </div>
    </div>
    <div class="pricing-toggle reveal-on-scroll">
      <span class="pricing-toggle-label active">Monthly</span>
      <div class="pricing-switch" id="pricingSwitch"></div>
      <span class="pricing-toggle-label">Annual</span>
      <span class="pricing-save-badge">Save 20%</span>
    </div>
    <div id="pricingCardsWrap"></div>
    <div class="pricing-faq reveal-on-scroll">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-grid">
        ${[{q:"Can I switch plans anytime?",a:"Yes! Upgrade or downgrade at any time."},{q:"Is there a free trial?",a:"All paid plans come with a 14-day free trial — no credit card required."},{q:"What happens when I cancel?",a:"You keep access until the end of your billing period, then revert to free."},{q:"Student discounts?",a:"Yes! Students get 50% off all plans with a valid .edu email."},{q:"Enterprise volume discounts?",a:"Contact our sales team for custom pricing on 100+ user licenses."},{q:"Which payment methods?",a:"All major credit cards, UPI, NetBanking, and PayPal."}].map(f=>`<div class="faq-item"><div class="faq-q"><span class="material-icons-round">help_outline</span>${f.q}</div><div class="faq-a">${f.a}</div></div>`).join("")}
      </div>
    </div>`;
  el.querySelector("#pricingSwitch").addEventListener("click", () => {
    pricingAnnual = !pricingAnnual;
    el.querySelector("#pricingSwitch").classList.toggle("on", pricingAnnual);
    el.querySelectorAll(".pricing-toggle-label")[0].classList.toggle("active", !pricingAnnual);
    el.querySelectorAll(".pricing-toggle-label")[1].classList.toggle("active", pricingAnnual);
    renderPricingCards(el);
  });
  renderPricingCards(el);
}

function renderPricingCards(el){
  const old = el.querySelector(".pricing-grid");
  if(old) old.remove();
  const plans = [
    {icon:"🆓",name:"Free",desc:"Perfect for getting started",monthly:0,annual:0,popular:false,features:[{yes:true,label:"Browse all apps"},{yes:true,label:"5 free downloads/month"},{yes:true,label:"Basic search & filters"},{yes:false,label:"Ad-free experience"},{yes:false,label:"Offline downloads"},{yes:false,label:"Priority support"}]},
    {icon:"⚡",name:"Pro",desc:"For power users who want more",monthly:199,annual:159,popular:true,features:[{yes:true,label:"Unlimited downloads"},{yes:true,label:"Ad-free experience"},{yes:true,label:"Offline downloads"},{yes:true,label:"Early access to new apps"},{yes:true,label:"Priority support"},{yes:false,label:"Developer tools"}]},
    {icon:"🏢",name:"Business",desc:"For teams and organizations",monthly:499,annual:399,popular:false,features:[{yes:true,label:"Everything in Pro"},{yes:true,label:"Team management (10 seats)"},{yes:true,label:"Developer tools & analytics"},{yes:true,label:"Custom app catalog"},{yes:true,label:"Dedicated account manager"},{yes:true,label:"SLA guaranteed uptime"}]}
  ];
  const grid = document.createElement("div");
  grid.className = "pricing-grid reveal-on-scroll";
  plans.forEach(plan => {
    const price = pricingAnnual ? plan.annual : plan.monthly;
    const card = document.createElement("div");
    card.className = "pricing-card" + (plan.popular ? " featured" : "");
    card.innerHTML = `
      ${plan.popular ? '<div class="pricing-popular-badge">⭐ Most Popular</div>' : ""}
      <div class="pricing-card-icon">${plan.icon}</div>
      <div><div class="pricing-card-name">${plan.name}</div><div class="pricing-card-desc">${plan.desc}</div></div>
      <div class="pricing-price">${price === 0 ? '<span class="pricing-amount">Free</span>' : `<span class="pricing-currency">₹</span><span class="pricing-amount">${price}</span><span class="pricing-period">/ month</span>`}</div>
      <div class="pricing-features">${plan.features.map(f=>`<div class="pricing-feature ${f.yes?"yes":"no"}"><span class="material-icons-round">${f.yes?"check_circle":"cancel"}</span><span>${f.label}</span></div>`).join("")}</div>
      <button class="pricing-cta-btn">${price === 0 ? "Get Started Free" : "Start Free Trial"}</button>`;
    card.querySelector(".pricing-cta-btn").addEventListener("click", (e) => {
      createParticleBurst(e.clientX, e.clientY, "#01875f");
      showToast(price === 0 ? "🚀 Welcome!" : "🎉 Starting " + plan.name + " trial!");
    });
    grid.appendChild(card);
  });
  const faq = el.querySelector(".pricing-faq");
  el.insertBefore(grid, faq);
}

/* ══ CONTACT ══ */
function renderContactPage(){
  const el = document.getElementById("contactPage");
  if(el.innerHTML.trim()) return;
  el.innerHTML = `
    <div class="contact-hero">
      <div class="contact-hero-orb1"></div><div class="contact-hero-orb2"></div><div class="contact-hero-grid"></div>
      <div class="contact-hero-content">
        <div class="contact-hero-tag">📬 Contact Us</div>
        <h1>We'd Love to <span>Hear From You</span></h1>
        <p>Got a question, feedback, or just want to say hi? Our team responds within 24 hours.</p>
      </div>
    </div>
    <div class="contact-body">
      <div class="contact-info reveal-on-scroll">
        <h2>Let's Connect</h2>
        <p>Whether you're a developer, user, or partner — we're here to help.</p>
        <div class="contact-info-items">
          ${[{icon:"location_on",color:"linear-gradient(135deg,#4285f4,#1a73e8)",label:"Our Office",val:"123 Tech Park, Chennai, Tamil Nadu 600001, India"},{icon:"email",color:"linear-gradient(135deg,#01875f,#34a853)",label:"Email Us",val:"hello@playstore.app"},{icon:"phone",color:"linear-gradient(135deg,#ea4335,#c62828)",label:"Call Us",val:"+91 98765 43210"},{icon:"support_agent",color:"linear-gradient(135deg,#fbbc04,#f57f17)",label:"Live Support",val:"Available 24/7 for Pro & Business users"}].map(i=>`<div class="contact-info-item"><div class="contact-info-icon" style="background:${i.color}"><span class="material-icons-round">${i.icon}</span></div><div class="contact-info-text"><strong>${i.label}</strong><span>${i.val}</span></div></div>`).join("")}
        </div>
        <div class="contact-social-title">Follow Us</div>
        <div class="contact-socials">
          <button class="contact-social-btn" onclick="showToast('Opening Twitter...')">𝕏</button>
          <button class="contact-social-btn" onclick="showToast('Opening Instagram...')">📷</button>
          <button class="contact-social-btn" onclick="showToast('Opening LinkedIn...')">in</button>
          <button class="contact-social-btn" onclick="showToast('Opening YouTube...')">▶</button>
        </div>
      </div>
      <div class="contact-form-wrap reveal-on-scroll">
        <h2>Send Us a Message</h2>
        <div class="contact-form">
          <div class="form-row">
            <div class="form-group"><label>First Name</label><input type="text" placeholder="Meyyappan" /></div>
            <div class="form-group"><label>Last Name</label><input type="text" placeholder="Subramanian" /></div>
          </div>
          <div class="form-group"><label>Email Address</label><input type="email" placeholder="meyyappan@gmail.com" /></div>
          <div class="form-group"><label>Subject</label>
            <select><option>General Inquiry</option><option>Technical Support</option><option>Developer Partnership</option><option>Business Inquiry</option><option>Report an Issue</option></select>
          </div>
          <div class="form-group"><label>Message</label><textarea placeholder="Tell us what's on your mind..."></textarea></div>
          <button class="form-submit-btn" id="contactSubmit"><span class="material-icons-round">send</span> Send Message</button>
        </div>
      </div>
    </div>
    <div class="contact-map reveal-on-scroll">
      <div class="contact-map-grid"></div>
      <div class="contact-map-content">
        <span class="contact-map-pin">📍</span>
        <h3>Play Store HQ</h3>
        <p>123 Tech Park, Chennai, Tamil Nadu, India</p>
        <div class="contact-map-badge"><span class="material-icons-round" style="font-size:14px">location_on</span> Chennai, India · IST (UTC+5:30)</div>
      </div>
    </div>`;
  el.querySelector("#contactSubmit").addEventListener("click", (e) => {
    createParticleBurst(e.clientX, e.clientY, "#01875f");
    showToast("✅ Message sent! We'll reply within 24 hours.");
  });
}

/* ══ NEWSLETTER ══ */
function initNewsletter(){
  const btn = document.querySelector(".newsletter-input button");
  const input = document.querySelector(".newsletter-input input");
  if(!btn || !input) return;
  btn.addEventListener("click", () => {
    if(!input.value.trim() || !input.value.includes("@")){ showToast("⚠️ Please enter a valid email!"); return; }
    input.value = "";
    showToast("✅ Subscribed successfully!");
  });
}

/* ══ INIT ══ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSlider();
  initSidebar();
  initNavLinks();
  initSearch();
  initAuth();
  initNewsletter();

  // Render home page on load
  const container = document.getElementById("appSections");
  if(container) renderHomeView(container);

  setTimeout(initScrollReveal, 100);
});