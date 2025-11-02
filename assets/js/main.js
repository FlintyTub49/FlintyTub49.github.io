(() => {

  // Projects data
  const projects = [
  {
    title: "LLM-Driven Knowledge Graph Completion",
    desc: "Use LLM to augment data in Knowledge Graph (KG) for KG completion",
    img: "assets/img/projects/kg.png",
    repo: "https://github.com/FlintyTub49/augmentation-diss",
    tags: ["ML/DL", "NLP", "LLM", "Big Data"]
  },
  {
    title: "X-ray Image Denoising (Transfer Learning)",
    desc: "Fix distorted medical X-ray images for better diagnosis",
    img: "assets/img/projects/xray.png",
    repo: "https://github.com/FlintyTub49/MLP_Sem2",
    tags: ["ML/DL", "CV", "Pipeline"]
  },
  {
    title: "Document Scanner with in-built OCR",
    desc: "CLI tool to automate model packaging and serving.",
    img: "assets/img/projects/docscan.png",
    repo: "https://github.com/FlintyTub49/DocumentScannerWtihOCR",
    tags: ["CV", "ML/DL", "Front-End"]
  },
  {
    title: "Music Genre Detection and Recommendation System",
    desc: "Recommending songs based on song file provided in MP3 format",
    img: "assets/img/projects/music.png",
    repo: "https://github.com/FlintyTub49/MusicRecommender",
    tags: ["ML/DL", "Front-End", "Big Data"]
  },
  {
    title: "COVID-19 Fake News Detector Bot & Website",
    desc: "NLP bot detecting fake news during the COVID-19 pandemic",
    img: "assets/img/projects/covid.png",
    repo: "https://github.com/FlintyTub49/Fake-News-Detector-Bot-",
    tags: ["ML/DL", "NLP", "Front-End", "Visualisations"]
  },
  {
    title: "Medium Article Recommendation System",
    desc: "Recommending articles based on topics automatically categorised using NLP",
    img: "assets/img/projects/recommend.png",
    repo: "https://github.com/FlintyTub49/Medium-Article-Recommender",
    tags: ["Database", "NLP", "Front-End", "Visualisations"]
  },
  {
    title: "MAHA - One Step ETL Python Package",
    desc: "A python package which performs several ETL tasks in a single line",
    img: "assets/img/projects/maha.png",
    repo: "https://pypi.org/project/MAHA/",
    tags: ["ML/DL", "Pipeline", "Open Source"]
  },
  {
    title: "Mumbai Local Train Ticketing System",
    desc: "Proposed a new Local Train ticketing system with a new database structure",
    img: "assets/img/projects/local.png",
    repo: "",
    tags: ["Database"]
  },
];

const list = document.getElementById("projects-list");

if (list) {
  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card card fade-in"; // same classes as your HTML

    // Generate tags HTML
    const tagsHtml = p.tags ? p.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';

    // Match the HTML structure exactly
    card.innerHTML = `
    <a href="${p.repo}" target="_blank" class="project-link">
        <img src="${p.img}" alt="${p.title}" class="project-thumb"/>
        <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">
            ${tagsHtml}
        </div>
        </div>
    </a>
    `;

    list.appendChild(card);
  });
}

  // Theme toggle
  const toggle=document.getElementById("theme-toggle");
  const setTheme=t=>{if(t==='dark'){document.documentElement.dataset.theme='dark';toggle.textContent='☀️';}else{delete document.documentElement.dataset.theme;toggle.textContent='🌙';}localStorage.setItem('theme',t);};
  const initTheme=()=>setTheme(localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
  if(toggle){initTheme();toggle.onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');}

  // Typing animation
  const typing=document.getElementById('typing');
  if(typing){
    const text='Hi, I’m Jane Doe — Data Professional';
    let i=0;
    function type(){typing.textContent=text.slice(0,i++);if(i<=text.length){typing.classList.add('typing-cursor');setTimeout(type,60);}else typing.classList.remove('typing-cursor');}
    type();
  }

  // const themeToggle = document.getElementById("theme-toggle");
  // const body = document.body;

  // themeToggle.addEventListener("click", () => {
  //   body.classList.toggle("dark-mode");
    
  //   // Change emoji/icon inline
  //   if (body.classList.contains("dark-mode")) {
  //     themeToggle.textContent = "🌙";
  //   } else {
  //     themeToggle.textContent = "☀️";
  //   }
  // });

  // Scroll-fade observer
  const fader=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');fader.unobserve(e.target);}});},{threshold:0.2});
  document.querySelectorAll('.fade-in').forEach(el=>fader.observe(el));

  // Expandable timeline - Work
  document.querySelectorAll('.toggle-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const c=btn.nextElementSibling;
      const open=c.style.display==='block';
      c.style.display=open?'none':'block';
      btn.textContent=open?'More details ▾':'Hide details ▴';
    });
  });

  // Expandable timeline - Education
  document.querySelectorAll('.edu-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const c=btn.nextElementSibling;
      const open=c.style.display==='block';
      c.style.display=open?'none':'block';
      btn.textContent=open?'Course Taken ▾':'Hide Courses ▴';
    });
  });

  // Active nav highlighting
  const navLinks=document.querySelectorAll('#nav-links a');
  const sections=document.querySelectorAll('main section');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        navLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href').slice(1)===e.target.id));
      }
    });
  },{threshold:0.5});
  sections.forEach(s=>obs.observe(s));

  // Footer year
  document.getElementById('year').textContent=new Date().getFullYear();

})();