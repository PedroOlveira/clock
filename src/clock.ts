import { showTemporaryImage, showTimeoutMessage } from './utils/timer.js';

let seconds = 0;
let intervalId: ReturnType<typeof setInterval> | null = null;

export function startClock() {
  const canvas = document.getElementById('clock') as HTMLCanvasElement;
  const numeralsDiv = document.getElementById('numerals') as HTMLElement;

  if (!canvas || !numeralsDiv) {
    console.error('Elementos do relógio não encontrados.');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Falha ao obter o contexto do canvas.');
    return;
  }

  const radius = canvas.width / 2;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  const drawClock = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();

    const secondAngle = ((seconds % 60) / 60) * 2 * Math.PI;
    drawHand(ctx, secondAngle, radius - 40, "red", 4);

    numeralsDiv.textContent = `${seconds} segundos`;
  };

  const drawHand = (ctx: CanvasRenderingContext2D, angle: number, length: number, color: string, width: number) => {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + length * Math.cos(angle - Math.PI / 2), centerY + length * Math.sin(angle - Math.PI / 2));
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  };

  intervalId = setInterval(() => {
    seconds++;
    if (seconds % 10 === 0 && seconds < 60) {
      showTemporaryImage('./images/image10s.png');
    }
    if (seconds === 60) {
      const temporaryImage = document.getElementById('temporaryImage') as HTMLImageElement;
      if (temporaryImage) {
        temporaryImage.src = './images/imageEnd.jpg'; // Caminho para a imagem final
        temporaryImage.classList.remove('hidden'); // Exibe a imagem
      }
      if (intervalId !== null) {
        clearInterval(intervalId); // Para o intervalo
        intervalId = null; // Opcional, para evitar chamadas futuras
      }
    }
    drawClock();
  }, 1000);
}
