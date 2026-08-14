import { createTheme, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = createTheme({
  /**
   * Primary color for the app. 
   * Using a vibrant purple/indigo for a playful party feel.
   */
  primaryColor: 'indigo',
  
  /**
   * Global radius for a modern, soft look.
   */
  defaultRadius: 'md',

  /**
   * Custom colors can be added here if needed.
   */
  colors: {
    // We can define custom color palettes here if the default indigo isn't enough
  },

  /**
   * Component-specific overrides to ensure consistency.
   */
  components: {
    Button: {
      defaultProps: {
        variant: 'filled',
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        withBorder: true,
      },
    },
  },
});
