import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { themeToggled } from './themeSlice';

export function ThemeToggle() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      className="toggler"
      onClick={() => dispatch(themeToggled())}
    >
      Current theme: {mode}
    </button>
  );
}
