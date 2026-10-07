import { createSlice } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = { mode: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeToggled: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { themeToggled } = themeSlice.actions;
export default themeSlice.reducer;
