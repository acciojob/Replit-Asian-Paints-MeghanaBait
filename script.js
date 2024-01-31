document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');
    const blockIdInput = document.getElementById('block_id');
    const colourIdInput = document.getElementById('colour_id');

    changeButton.addEventListener('click', function() {
        const selectedId = blockIdInput.value;
        const selectedColour = colourIdInput.value;

        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });

        const selectedItem = document.getElementById(selectedId);
        if (selectedItem) {
            selectedItem.style.backgroundColor = selectedColour;
        } else {
            alert('Invalid ID');
        }
    });

    resetButton.addEventListener('click', function() {
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    });
});
