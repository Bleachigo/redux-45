import { memo } from 'react';
import { useAppSelector } from '../../app/hooks';

export const Footer = memo(function Footer() {
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <footer className="footer">
      <small>Current theme: {mode}</small>
    </footer>
  );
});
