import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';

import MultilevelDropdown from './index';
import { MultilevelOptions } from '../../utils/constants/data';

describe('Multilevel Dropdown Component', () => {
  it('should render', async () => {
    const { getByRole } = render(
      <MultilevelDropdown data={MultilevelOptions} />
    );

    const multilevelDropdownList = getByRole('list');
    const { getAllByRole } = within(multilevelDropdownList);
    const items = getAllByRole('listitem');

    expect(items.length).toBe(MultilevelOptions.length);
  });
});
