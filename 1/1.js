function toggleIcon() {
    var iconContainerFirst = document.getElementById('iconContainerFirst');
    var iconContainerLast = document.getElementById('iconContainerLast');

    if (iconContainerFirst && iconContainerLast) {
        if (iconContainerFirst.style.display !== 'none') {
            iconContainerFirst.style.display = 'none';
            iconContainerLast.style.display = 'inline-flex';
        } else {
            iconContainerFirst.style.display = 'inline-flex';
            iconContainerLast.style.display = 'none';
        }
    }
}
