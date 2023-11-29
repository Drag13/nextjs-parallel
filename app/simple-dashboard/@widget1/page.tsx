import { widget1Loader } from './loader';

export default async function Widget1() {
  const data = await widget1Loader();
  return <>Widget1: {data}</>;
}
