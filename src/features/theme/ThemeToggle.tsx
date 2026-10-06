import { memo } from 'react';
import { useTheme } from './useTheme';

export const ThemeToggle = memo(function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" className="toggler" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
});
