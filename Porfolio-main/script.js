const cards = document.querySelectorAll('.artwork-card');

// Panels
const panels = {
  Past: document.getElementById('past-panel'),
  Current: document.getElementById('current-panel'),
  Future: document.getElementById('future-panel')
};

// Close buttons
document.getElementById('close-past').addEventListener('click', () => panels.Past.style.display = 'none');
document.getElementById('close-current').addEventListener('click', () => panels.Current.style.display = 'none');
document.getElementById('close-future').addEventListener('click', () => panels.Future.style.display = 'none');

// Content elements
const contentElements = {
  Past: {
    title: document.getElementById('past-title'),
    text: document.getElementById('past-text'),
    leftTitle: document.getElementById('past-left-title'),
    leftText: document.getElementById('past-left-text')
  },
  Current: {
    title: document.getElementById('current-title'),
    text: document.getElementById('current-text'),
    leftTitle: document.getElementById('current-left-title'),
    leftText: document.getElementById('current-left-text')
  },
  Future: {
    title: document.getElementById('future-title'),
    text: document.getElementById('future-text'),
    leftTitle: document.getElementById('future-left-title'),
    leftText: document.getElementById('future-left-text')
  }
};

// Chapter data
const chapterData = {
  Past: {
    1: {
      title: "Past Chapter 1",
      // text: "Echoes of childhood beneath the poinciana tree...",
      leftTitle: "Crimson Tree",
      leftText: "Warmth and myth intertwine under ancient branches."
    },
    2: {
      title: "Past Chapter 2",
      text: "Stories told by firelight, remembered in silence...",
      leftTitle: "Firelight Tales",
      leftText: "Flickering flames carry voices from the past."
    }
  },
  Current: {
    1: {
      title: "Chapter 1: The Shadow",
      text: "Shadows whisper, blades glint, and choices begin to stir...",
      leftTitle: "The Shadow",
      leftText: "The warrior walks unseen, guided by whispers."
    },
    2: {
      title: "Chapter 2: The Blade",
      text: "Steel meets silence. The blade remembers every scar...",
      leftTitle: "The Blade",
      leftText: "Forged in silence, the blade holds ancient vows."
    }
  },
  Future: {
    1: {
      title: "Future Chapter 1",
      text: "The flames rise, and the warrior walks into legend...",
      leftTitle: "Flameborn",
      leftText: "Destiny ignites in the fire of transformation."
    },
    2: {
      title: "Future Chapter 2",
      text: "Blood and fire forge a monument that time cannot erase...",
      leftTitle: "Blood Monument",
      leftText: "A legacy carved in fire and memory."
    }
  }
};

// Hiển thị panel và nội dung chương đầu tiên
function showPanel(tag) {
  Object.values(panels).forEach(panel => panel.style.display = 'none');
  const panelKey = tag === "Past Memories" ? "Past" : tag;
  const panel = panels[panelKey];
  const content = contentElements[panelKey];
  const data = chapterData[panelKey][1];

  panel.style.display = 'flex';
  content.title.textContent = data.title;
  content.text.textContent = data.text;
  content.leftTitle.textContent = data.leftTitle;
  content.leftText.textContent = data.leftText;
}

// Gắn sự kiện click cho artwork cards
cards.forEach(card => {
  card.addEventListener('click', () => {
    const tag = card.getAttribute('data-tag');
    showPanel(tag);
  });
});

// Gắn sự kiện click cho từng chương trong mỗi panel
["Past", "Current", "Future"].forEach(section => {
  document.querySelectorAll(`.${section.toLowerCase()}-panel .chapter-list li`).forEach(item => {
    item.addEventListener('click', () => {
      const chapter = item.getAttribute('data-chapter');
      const data = chapterData[section][chapter];
      const content = contentElements[section];

      content.title.textContent = data.title;
      content.text.textContent = data.text;
      content.leftTitle.textContent = data.leftTitle;
      content.leftText.textContent = data.leftText;
    });
  });
});
  const sections = document.querySelectorAll('.life-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(40px)';
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    observer.observe(section);
  });
//   const sections = document.querySelectorAll('.life-section');

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = '1';
//         entry.target.style.transform = 'translateY(0)';
//       } else {
//         // Khi rời khỏi khung hình, reset lại để hiệu ứng chạy lần nữa
//         entry.target.style.opacity = '0';
//         entry.target.style.transform = 'translateY(40px)';
//       }
//     });
//   }, {
//     threshold: 0.2
//   });

//   sections.forEach(section => {
//     observer.observe(section);
//   });
