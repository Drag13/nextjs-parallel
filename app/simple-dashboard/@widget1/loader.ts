export function widget1Loader() {
  return new Promise((res) => {
    setTimeout(() => res('Hello 1'), 7000);
  });
}
