import { PALETTE } from "./palette";

export type AppAppearanceTheme = {
  text: string;
};

export const LightAppearanceTheme: AppAppearanceTheme = {
  text: PALETTE.BLACK,
};

// TODO: ダークテーマ選択可能にする
// https://github.com/NoteNoteHQ/WebApp/issues/15
export const DarkAppearanceTheme: AppAppearanceTheme = {
  text: PALETTE.WHITE,
};
