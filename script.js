function showDetails(id) {
  hideAll();
  document.getElementById('roadmap').classList.add('hide');
  document.getElementById('main-title').classList.add('hide');

  const detailSections = document.querySelectorAll('[id="' + id + '"]');
  if (detailSections.length > 0) {
    detailSections.forEach(section => {
      section.style.display = 'block';
    });
    detailSections[0].scrollIntoView({ behavior: 'smooth' });
  }
}

function showMultipleDetails(ids) {
  document.getElementById('roadmap').classList.add('hide');
  document.getElementById('main-title').classList.add('hide');

  ids.forEach(id => {
    const detailSection = document.getElementById(id);
    if (detailSection) {
      detailSection.style.display = 'block';
    }
  });
}

function hideAll() {
  const details = document.querySelectorAll('.details');
  details.forEach(div => div.style.display = 'none');

  document.getElementById('roadmap').classList.remove('hide');
  document.getElementById('main-title').classList.remove('hide');
}

window.onload = hideAll;
