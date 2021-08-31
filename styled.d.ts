// import original module declarations
import "styled-components";
import { Devices } from "./breakpoints";

// and extend them!
type FontWeights = {
  light: string;
  regular: string;
  semibold: string;
  bold: string;
  xbold: string;
};
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: Devices;
    font: FontWeights;
  }
}
