import { memo } from 'react';
import { useAppSelector } from '../../app/hooks';
import { ThemeToggle } from '../../features/theme/ThemeToggle';

export const Header = memo(function Header() {
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <header className="header">
      <h1>Theme Context demo</h1>
      <p>Current theme: {mode}</p>

      <ThemeToggle />
    </header>
  );
});
