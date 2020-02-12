import { css, Global } from "@emotion/core"

import CooperLightWoff from "../../assets/fonts/CooperBT/CooperBTW03-Light.woff"
import CooperLightWoff2 from "../../assets/fonts/CooperBT/CooperBTW03-Light.woff2"
import CooperMdWoff from "../../assets/fonts/CooperBT/CooperBTW03-Md.woff"
import CooperMdWoff2 from "../../assets/fonts/CooperBT/CooperBTW03-Md.woff2"
import GraphikLightWebWoff from "../../assets/fonts/Graphik/Graphik-Light-Web.woff"
import GraphikLightWebWoff2 from "../../assets/fonts/Graphik/Graphik-Light-Web.woff2"
import GraphikLightItalicWebWoff from "../../assets/fonts/Graphik/Graphik-LightItalic-Web.woff"
import GraphikLightItalicWebWoff2 from "../../assets/fonts/Graphik/Graphik-LightItalic-Web.woff2"
import GraphikMediumWebWoff from "../../assets/fonts/Graphik/Graphik-Medium-Web.woff"
import GraphikMediumWebWoff2 from "../../assets/fonts/Graphik/Graphik-Medium-Web.woff2"
import GraphikMediumItalicWebWoff from "../../assets/fonts/Graphik/Graphik-MediumItalic-Web.woff"
import GraphikMediumItalicWebWoff2 from "../../assets/fonts/Graphik/Graphik-MediumItalic-Web.woff2"
import GraphikRegularWebWoff from "../../assets/fonts/Graphik/Graphik-Regular-Web.woff"
import GraphikRegularWebWoff2 from "../../assets/fonts/Graphik/Graphik-Regular-Web.woff2"
import GraphikRegularItalicWebWoff from "../../assets/fonts/Graphik/Graphik-RegularItalic-Web.woff"
import GraphikRegularItalicWebWoff2 from "../../assets/fonts/Graphik/Graphik-RegularItalic-Web.woff2"
import GraphikSemiboldWebWoff from "../../assets/fonts/Graphik/Graphik-Semibold-Web.woff"
import GraphikSemiboldWebWoff2 from "../../assets/fonts/Graphik/Graphik-Semibold-Web.woff2"
import GraphikSemiboldItalicWebWoff from "../../assets/fonts/Graphik/Graphik-SemiboldItalic-Web.woff"
import GraphikSemiboldItalicWebWoff2 from "../../assets/fonts/Graphik/Graphik-SemiboldItalic-Web.woff2"
import MerriweatherLight from "../../assets/fonts/Merriweather/Merriweather-Light.woff2"
import MerriweatherRegular from "../../assets/fonts/Merriweather/Merriweather-Regular.woff2"
import OpenSansRegular from "../../assets/fonts/Open_Sans/OpenSans-Regular.woff2"
import OpenSansSemiBold from "../../assets/fonts/Open_Sans/OpenSans-SemiBold.woff2"

export const Fonts = () => (
  <Global
    styles={css`@font-face {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src: local("Merriweather Regular"), local("Merriweather-Regular"),
      url("${MerriweatherRegular}") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC,
      U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 300;
    font-display: auto;
    src: local("Merriweather Light"), local("Merriweather-Light"),
      url("${MerriweatherLight}") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
  
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url("${OpenSansRegular}") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
  
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-display: auto;
    src: local("Open Sans Semibold"), local("OpenSans-SemiBold"),
      url("${OpenSansSemiBold}") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
  
  @font-face {
    font-family: "Cooper Light";
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src: url(${CooperLightWoff2}) format("woff2"),
      url(${CooperLightWoff}) format("woff");
  }
  
  @font-face {
    font-family: "Cooper Light";
    font-style: normal;
    font-weight: 500;
    font-display: auto;
    src: url(${CooperMdWoff2}) format("woff2"),
      url(${CooperMdWoff}) format("woff");
  }
  
  @font-face {
    font-family: Graphik;
    font-style: normal;
    font-weight: 300;
    font-display: auto;
    src: url(${GraphikLightWebWoff2}) format("woff2"),
      url(${GraphikLightWebWoff}) format("woff");
  }
  
  @font-face {
    font-family: Graphik;
    font-style: italic;
    font-weight: 300;
    font-display: auto;
    src: url(${GraphikLightItalicWebWoff2}) format("woff2"),
      url(${GraphikLightItalicWebWoff}) format("woff");
  }
  
  @font-face {
    font-family: Graphik;
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    font-stretch: normal;
    src: url(${GraphikRegularWebWoff2}) format("woff2"),
      url(${GraphikRegularWebWoff}) format("woff");
  }
  
  @font-face {
    font-family: Graphik;
    font-style: italic;
    font-weight: 400;
    font-display: auto;
    src: url(${GraphikRegularItalicWebWoff2}) format("woff2"),
      url(${GraphikRegularItalicWebWoff}) format("woff");
  }
  
  @font-face {
    font-family: Graphik;
    font-style: normal;
    font-weight: 500;
    font-display: auto;
    font-stretch: normal;
    src: url(${GraphikMediumWebWoff2}) format("woff2"),
      url(${GraphikMediumWebWoff}) format("woff");
  }
  
  @font-face {
    font-family: Graphik;
    font-style: italic;
    font-weight: 500;
    font-display: auto;
    src: url(${GraphikMediumItalicWebWoff2}) format("woff2"),
      url(${GraphikMediumItalicWebWoff}) format("woff");
  }
  
  @font-face {
    font-family: Graphik;
    font-style: normal;
    font-weight: 600;
    font-display: auto;
    src: url(${GraphikSemiboldWebWoff2}) format("woff2"),
      url(${GraphikSemiboldWebWoff}) format("woff");
  }
  
  @font-face {
    font-family: Graphik;
    font-style: italic;
    font-weight: 600;
    font-display: auto;
    src: url(${GraphikSemiboldItalicWebWoff2}) format("woff2"),
      url(${GraphikSemiboldItalicWebWoff}) format("woff");
  }`}
  />
)
