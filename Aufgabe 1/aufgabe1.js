var modal = document.getElementById('modalcover');

function show_modal() {
    modal.style.display = 'flex';
  }

document.getElementById('modalclosed').addEventListener('click',
function() {
  modal.style.display = 'none';
});

setTimeout(show_modal, 5000);