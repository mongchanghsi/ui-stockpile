import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';

import AccordionVer2 from './index';
import { FiveItemLists } from '../../utils/constants/data';

describe('Accordion Version 2 Component', () => {
  it('should render', async () => {
    const { findByText, getByRole, debug } = render(
      <AccordionVer2 data={FiveItemLists} />
    );

    const title = await findByText(/Accordion List/i);
    const description = await findByText(/Accordion Items where you /i);

    const accordion_list = getByRole('list', { name: /items/i });
    const { getAllByRole } = within(accordion_list);
    const items = getAllByRole('listitem');

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(items.length).toBe(5);

    debug();
  });
});
