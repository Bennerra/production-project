import type { Meta, StoryObj } from '@storybook/react'
import {
  ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { NotFoundPage } from 'pages/NotFoundPage'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const NotFoundPageLight: Story = {
  args: {}
}

export const NotFoundPageDark: Story = {
  args: {}
}
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)]
