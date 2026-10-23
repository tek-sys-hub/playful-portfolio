type ConfettiListener = (x: number, y: number, count?: number) => void;

const listeners: Set<ConfettiListener> = new Set();

export const subscribeConfetti = (fn: ConfettiListener) => {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
};

export const triggerConfetti = (x: number, y: number, count = 28) => {
  listeners.forEach((fn) => fn(x, y, count));
};
