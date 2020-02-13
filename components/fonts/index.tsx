import { css, Global } from "@emotion/core"

import CooperLightWoff from "../../assets/fonts/cooper-bt/cooper-btw03-light.woff"
import CooperLightWoff2 from "../../assets/fonts/cooper-bt/cooper-btw03-light.woff2"
import CooperMdWoff from "../../assets/fonts/cooper-bt/cooper-btw03-md.woff"
import CooperMdWoff2 from "../../assets/fonts/cooper-bt/cooper-btw03-md.woff2"
import GraphikLightItalicWebWoff from "../../assets/fonts/graphik/graphik-light-italic-web.woff"
import GraphikLightItalicWebWoff2 from "../../assets/fonts/graphik/graphik-light-italic-web.woff2"
import GraphikLightWebWoff from "../../assets/fonts/graphik/graphik-light-web.woff"
import GraphikLightWebWoff2 from "../../assets/fonts/graphik/graphik-light-web.woff2"
import GraphikMediumItalicWebWoff from "../../assets/fonts/graphik/graphik-medium-italic-web.woff"
import GraphikMediumItalicWebWoff2 from "../../assets/fonts/graphik/graphik-medium-italic-web.woff2"
import GraphikMediumWebWoff from "../../assets/fonts/graphik/graphik-medium-web.woff"
import GraphikMediumWebWoff2 from "../../assets/fonts/graphik/graphik-medium-web.woff2"
import GraphikRegularItalicWebWoff from "../../assets/fonts/graphik/graphik-regular-italic-web.woff"
import GraphikRegularItalicWebWoff2 from "../../assets/fonts/graphik/graphik-regular-italic-web.woff2"
import GraphikRegularWebWoff from "../../assets/fonts/graphik/graphik-regular-web.woff"
import GraphikRegularWebWoff2 from "../../assets/fonts/graphik/graphik-regular-web.woff2"
import GraphikSemiboldItalicWebWoff from "../../assets/fonts/graphik/graphik-semibold-italic-web.woff"
import GraphikSemiboldItalicWebWoff2 from "../../assets/fonts/graphik/graphik-semibold-italic-web.woff2"
import GraphikSemiboldWebWoff from "../../assets/fonts/graphik/graphik-semibold-web.woff"
import GraphikSemiboldWebWoff2 from "../../assets/fonts/graphik/graphik-semibold-web.woff2"
import MerriweatherLight from "../../assets/fonts/merriweather/merriweather-light.woff2"
import MerriweatherRegular from "../../assets/fonts/merriweather/merriweather-regular.woff2"
import OpenSansRegular from "../../assets/fonts/open-sans/open-sans-regular.woff2"
import OpenSansSemiBold from "../../assets/fonts/open-sans/open-sans-semi-bold.woff2"

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
