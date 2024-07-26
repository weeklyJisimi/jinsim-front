'use client';

import { Button } from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShareLetterButton = () => {
  const currentUrl = window.location.href;

  return (
    <CopyToClipboard
      text={currentUrl}
      onCopy={() => alert('URL이 복사되었습니다.')}
    >
      <Button>공유하기</Button>
    </CopyToClipboard>
  );
};

export default ShareLetterButton;
