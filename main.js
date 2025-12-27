document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareButton');
    const shareButton2 = document.getElementById('shareButton2');
    const shareContent = document.getElementById('shareContent'); // Mobile share bar
    const authorSection = document.getElementById('authorSection'); // Default author view
    const shareTooltip = document.getElementById('shareTooltip');   // Desktop tooltip
    const shareIcon = shareButton.querySelector('img');

    function toggleMobileShare() {
        authorSection.classList.toggle('hidden');
        shareContent.classList.toggle('hidden');
    }

    function toggleDesktopShare() {
        shareTooltip.classList.toggle('hidden');
        shareButton.classList.toggle('bg-grey-500');
        shareIcon.classList.toggle('filter-white');
    }

    shareButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (window.innerWidth < 768) {
            toggleMobileShare();
        } else {
            toggleDesktopShare();
        }
    });

    shareButton2.addEventListener('click', () => {
        toggleMobileShare();
    });

    document.addEventListener('click', (event) => {
        const isTooltipVisible = !shareTooltip.classList.contains('hidden');
        if (isTooltipVisible && !shareButton.contains(event.target)) {
            toggleDesktopShare();
        }
    });
});