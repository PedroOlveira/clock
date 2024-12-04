export function showTemporaryImage(imagePath) {
    const temporaryImage = document.getElementById('temporaryImage');
    if (temporaryImage) {
        temporaryImage.src = imagePath;
        temporaryImage.classList.remove('hidden');
        setTimeout(() => {
            temporaryImage.classList.add('hidden');
        }, 3000);
    }
}
export function showTimeoutMessage() {
    const timeoutMessage = document.getElementById('timeoutMessage');
    if (timeoutMessage) {
        timeoutMessage.classList.remove('hidden');
    }
}
