import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Description from './index';

describe('Description Component', () => {
  it('should render', async () => {
    const { findByText } = render(
      <Description heading='sample heading' description='sample description'/>
    );

    const title = await findByText(/sample heading/i);
    const description = await findByText(/sample description/i);
    expect(title).toBeVisible()
    expect(description).toBeVisible()
  });
});