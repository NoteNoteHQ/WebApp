import "styled-components";
import { AppAppearanceTheme } from "../constants/theme";

declare module "styled-components" {
  export interface DefaultTheme extends AppAppearanceTheme {}
}
