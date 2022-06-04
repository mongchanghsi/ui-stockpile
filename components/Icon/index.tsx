import { FC } from 'react';
import { SocialEnums, SocialInfo } from '../../utils/constants/enums';
import { getIconSvgMobile } from '../../utils/helpers';
import styles from './index.module.scss';

interface IconProps {
  url: string;
  platform: SocialEnums;
}

const Icon: FC<IconProps> = ({url, platform}) => {
  return (
    <div className={styles.action}>
      <a
        className={styles.link}
        href={`${SocialInfo[platform].href}/${url}`}
        target='_blank'
        rel='noreferrer'
      >
        {getIconSvgMobile(SocialInfo[platform].label)}
      </a>
    </div>
  )
}
export default Icon;