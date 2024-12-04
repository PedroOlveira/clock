export function showTemporaryImage(imagePath: string) {
    const temporaryImage = document.getElementById('temporaryImage') as HTMLImageElement;
    if (temporaryImage) {
      temporaryImage.src = imagePath;
      temporaryImage.classList.remove('hidden');
      setTimeout(() => {
        temporaryImage.classList.add('hidden');
      }, 3000);
    }
  }
  
  export function showTimeoutMessage() {
    const timeoutMessage = document.getElementById('timeoutMessage') as HTMLElement;
    if (timeoutMessage) {
      timeoutMessage.classList.remove('hidden');
    }
  }
  