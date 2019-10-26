import { ThemeProvider } from "emotion-theming"

import { theme } from "../../lib/theme"

export const App: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
