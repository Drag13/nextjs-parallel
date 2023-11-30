import { delay } from '../delay';

export default async function W1() {
  const happyString = await delay({ delay: 7000 });
  return (
    <p>
      <h2>W1</h2> {happyString}
    </p>
  );
}
