import type { Preview, StoryFn } from '@storybook/react'

import '../../src/app/styles/index.scss'
import {
  ThemeDecorator
} from '../../src/shared/config/storybook/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
import {
  RootDecorator
} from '../../src/shared/config/storybook/RootDecorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    (Story: StoryFn) => RootDecorator(Story)
  ]
}

export default preview
