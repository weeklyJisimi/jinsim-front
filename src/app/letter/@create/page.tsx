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
        <h1>{source?.emotion}</h1>
      </>
      )<>{temp}</>
    </>
  );
};

export default Page;
