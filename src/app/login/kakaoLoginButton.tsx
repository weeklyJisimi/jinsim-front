// https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide
// https://www.figma.com/community/file/1232637617420363657
import { Button, ButtonProps } from '@chakra-ui/react';
import KakaoSymbol from '@/component/icon/kakaoSymbol';

const KakaologinButton = (props: ButtonProps) => (
  <Button
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

export default KakaologinButton;
