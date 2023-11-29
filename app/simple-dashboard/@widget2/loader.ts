export function widget2Loader() {
  return new Promise((_, rej) => {
    setTimeout(() => rej('Hello 1'), 2000);
  });
}
