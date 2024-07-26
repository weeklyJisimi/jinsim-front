// https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide
// https://www.figma.com/community/file/1232637617420363657

'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import KakaoSymbol from '@/component/icon/kakaoSymbol';
import { useRouter } from 'next/navigation';

const KakaologinButton = (props: ButtonProps) => {
  const router = useRouter();
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

  const KakaoLogin = () => {
    router.push(
      `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    );
  };

  return (
    <Button
      onClick={KakaoLogin}
      {...props}
      h={'45px'}
      fontSize={'15px'}
      borderRadius={'12px'}
      textColor={'#000000D9'}
      bgColor={'#FEE500'}
      _hover={{
        bgColor: '#FFEB3B',
      }}
      px={'14px'}
      py={'11px'}
      leftIcon={<KakaoSymbol boxSize={'18px'} color={'#000000'} />}
    >
      카카오 로그인
    </Button>
  );
};

export default KakaologinButton;
