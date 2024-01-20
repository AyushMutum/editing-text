function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  function addTextFromModal() {
    const modalInput = document.getElementById('modalInput');
    const editor = document.getElementById('editor');
    const textToAdd = modalInput.value;
    editor.value += textToAdd + ' ';
    closeModal();
  }

  function changeFont() {
    const editor = document.getElementById('editor');
    const fontSelect = document.getElementById('fontSelect');
    const selectedFont = fontSelect.options[fontSelect.selectedIndex].value;
    editor.style.fontFamily = selectedFont;
  }