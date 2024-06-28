import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RootDecorator = (Story: StoryFn) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)
