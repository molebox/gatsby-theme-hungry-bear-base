/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { colors } from "../Utilities";
import { Box } from "../components/Box";
import SEO from "../components/SEO";

const theme = {
  colors
};

export default () => (
  <ThemeProvider theme={theme}>
    <SEO />
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Box color={theme.colors.accent}>Hello!</Box>
    </div>
  </ThemeProvider>
);
