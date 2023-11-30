import { delay } from '../delay';

export default async function W2() {
  const sadString = await delay({ error: 'Sorry bro', delay: 3000 });
  return (
    <p>
      <h2>W1</h2>
      {sadString}
    </p>
  );
}
