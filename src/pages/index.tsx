import * as React from "react";
import { css } from "@emotion/core";
import { Box } from "../components/Box";
import { colors } from '../Utilities';
import SEO from '../components/SEO';

export default () => (
  <div>
    <SEO />
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
      `}
    >
      <Box color={colors.accent}>Hello</Box>
    </div>
  </div>
);