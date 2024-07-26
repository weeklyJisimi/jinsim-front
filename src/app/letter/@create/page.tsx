'use client';

import { useSourceStore } from '../letter-source-store';

const Page = () => {
  const { source } = useSourceStore();
  const temp = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공');
    }, 1000);
  }).then((result) => {
    console.log(result);
  });

  return (
    <>
      (
      <>
        <h1>편지를 쓰는 이유: {source?.purpose}</h1>
        <h1>편지를 쓰는 이유: {source?.to}</h1>
        <h1>편지를 쓰는 이유: {source?.episode}</h1>
        <h1>편지를 쓰는 이유: {source?.emotion}</h1>
        <h1>편지를 쓰는 이유: {source?.length}</h1>
      </>
      )<>{temp}</>
    </>
  );
};

export default Page;
