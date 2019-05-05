/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import SEO from "../components/SEO";

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
      <h1>This is the base theme</h1>
    </div>
  </div>
);
