import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import AccordionItem from './index';
import { FiveItemLists } from '../../../utils/constants/data';

describe('Accordion Item Component', () => {
  const dummyItem = FiveItemLists[0];

  it('should render and content is not visible', async () => {
    const { findByText, container } = render(
      <AccordionItem data={dummyItem} />
    );

    const title = await findByText(dummyItem.title);
    const description = await findByText(dummyItem.content);

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();

    expect(container.getElementsByClassName('answer').length).toBe(1);
    expect(container.getElementsByClassName('answer_open').length).toBe(0);
  });

  it('should render and content is visible upon clicking', async () => {
    const { findByText, queryByTestId, container } = render(
      <AccordionItem data={dummyItem} />
    );

    const title = await findByText(dummyItem.title);
    const description = await findByText(dummyItem.content);

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();

    const divContainerButton = queryByTestId(`Accordion_${dummyItem.number}`);

    fireEvent.click(divContainerButton!!);

    expect(container.getElementsByClassName('answer').length).toBe(1);
    expect(container.getElementsByClassName('answer_open').length).toBe(1);
  });
});
