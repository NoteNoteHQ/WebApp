import { PALETTE } from "constants/palette";

export type AppAppearanceTheme = {
  background: string;
  text: string;
};

export const LightAppearanceTheme: AppAppearanceTheme = {
  background: PALETTE.WHITE,
  text: PALETTE.BLACK,
};

// TODO: ダークテーマ選択可能にする
// https://github.com/NoteNoteHQ/WebApp/issues/15
export const DarkAppearanceTheme: AppAppearanceTheme = {
  background: PALETTE.BLACK,
  text: PALETTE.WHITE,
};
