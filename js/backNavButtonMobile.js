document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('n_bar').classList.toggle('show');
    document.getElementById('menu-toggle').style.display = 'none';
    document.getElementById('back-button').style.display = 'block';
});

document.getElementById('back-button').addEventListener('click', function () {
    document.getElementById('n_bar').classList.toggle('show');
    document.getElementById('back-button').style.display = 'none';
    document.getElementById('menu-toggle').style.display = 'block';
});