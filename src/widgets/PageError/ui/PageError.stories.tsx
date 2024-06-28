import type { Meta, StoryObj } from '@storybook/react'
import {
  ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageError } from 'widgets/PageError'

const meta = {
  title: 'widgets/PageError',
  component: PageError
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const PageErrorLight: Story = {
  args: {}
}

export const PageErrorDark: Story = {
  args: {}
}
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
