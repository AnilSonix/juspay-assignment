export function delay(durationInSeconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, durationInSeconds * 1000);
  });
}
