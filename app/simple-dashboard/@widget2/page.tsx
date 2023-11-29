import { widget2Loader } from './loader';

export default async function Widget2() {
  const data = await widget2Loader();
  return <>Widget2: {data}</>;
}
