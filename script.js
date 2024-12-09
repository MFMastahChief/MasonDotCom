function showAlert() {
    alert("Hello! You clicked the button!");
}
// Select all images in the gallery
const galleryImages = document.querySelectorAll('.gallery img');

// Add click event to each image
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Create a full-screen modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';

        // Add image to modal
        const modalImage = document.createElement('img');
        modalImage.src = image.src;
        modalImage.style.maxWidth = '90%';
        modalImage.style.maxHeight = '90%';

        // Add close functionality
        modal.addEventListener('click', () => {
            modal.remove();
        });

        // Append modal to the body
        modal.appendChild(modalImage);
        document.body.appendChild(modal);
    });
});
