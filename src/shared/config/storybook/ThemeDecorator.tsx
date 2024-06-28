import 'app/styles/index.scss'
import { type Theme } from 'app/providers/ThemeProvider'
import { type StoryFn } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
)
