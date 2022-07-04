import { render } from "@testing-library/react"
import StorybookVideo from "."

describe('Storybook component', () => {
  it('should load', () => {
    render(<StorybookVideo />)
  })
  it('should have a button',  () => {
    const { getByRole } = render(<StorybookVideo />)
    const startStopButton = getByRole('button', { name: /start/i });
  })
})