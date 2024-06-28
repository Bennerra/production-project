import type { Meta, StoryObj } from '@storybook/react'
import {
  ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLoader } from 'shared/ui/AppLoader'

const meta = {
  title: 'shared/AppLoader',
  component: AppLoader
} satisfies Meta<typeof AppLoader>

export default meta
type Story = StoryObj<typeof meta>

export const AppLoaderLight: Story = {
  args: {}
}

export const AppLoaderDark: Story = {
  args: {}
}
AppLoaderDark.decorators = [ThemeDecorator(Theme.DARK)]
