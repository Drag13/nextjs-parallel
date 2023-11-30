export function delay({
  data = 'hello world',
  error = '',
  delay = 1000,
} = {}): Promise<string> {
  return new Promise((res, rej) =>
    setTimeout(() => (error ? rej(error) : res(data)), delay)
  );
}
