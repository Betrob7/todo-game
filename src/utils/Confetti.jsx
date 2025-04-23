import confetti from "canvas-confetti";

export default function Confetti(element) {
  const rect = element.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  confetti({
    particleCount: 50,
    spread: 60,
    startVelocity: 25,
    origin: { x, y },
    scalar: 0.75,
    zIndex: 9999,
  });
}
