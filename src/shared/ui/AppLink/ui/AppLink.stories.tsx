import type { Meta, StoryObj } from '@storybook/react'
import {
  ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const AppLinkLight: Story = {
  args: {
    children: 'text',
	  theme: AppLinkTheme.PRIMARY
  }
}

export const AppLinkLightSecondary: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.SECONDARY
  }
}

export const AppLinkDark: Story = {
  args: {
	  children: 'text',
	  theme: AppLinkTheme.PRIMARY
  }
}
AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)]

export const AppLinkDarkSecondary: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.SECONDARY
  }
}
AppLinkDarkSecondary.decorators = [ThemeDecorator(Theme.DARK)]
