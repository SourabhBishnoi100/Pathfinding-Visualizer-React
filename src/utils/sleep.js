export const sleep = (ms) =>
  new Promise((resolve) =>
    requestAnimationFrame(() => setTimeout(resolve, ms))
  );
