import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Icon from './index';
import { SocialEnums, SocialInfo } from '../../utils/constants/enums';

describe('Icon Component', () => {
  it('should render', async () => {
    const {getByRole} = render(
      <Icon url='sample' platform={SocialEnums.GITHUB}/>
    );
    // show that it is clickable
    expect(getByRole('link')).toHaveAttribute('href', `${SocialInfo[SocialEnums.GITHUB].href}/sample`)
  });
});