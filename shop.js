var xpScore = 50;

// Update the XP display
const xpDisplay = document.getElementById('xpScore');
xpDisplay.textContent = xpScore;

document.querySelectorAll('.buyBtn').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement; // Get the parent product
        const productXp = parseInt(product.getAttribute('data-xp')); // Get XP cost
        
        if (xpScore >= productXp) {
            xpScore -= productXp; // Deduct the XP
            xpDisplay.textContent = xpScore; // Update the display
            alert(`You purchased ${product.querySelector('h3').textContent} for ${productXp} XP!`);
        } else {
            alert("You don't have enough XP!");
        }
    });
});
