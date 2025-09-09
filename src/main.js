const shareButton = document.getElementById('shareButton');
const shareButton2 = document.getElementById('shareButton2');
const shareContent = document.getElementById('shareContent');
const authorSection = document.getElementById('authorSection');

function toggleShare() {
    authorSection.classList.toggle('hidden');
    shareContent.classList.toggle('hidden');
}

shareButton.addEventListener('click', toggleShare);
shareButton2.addEventListener('click', toggleShare);
