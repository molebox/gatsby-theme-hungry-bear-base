import * as React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata } from "../Utilities";

/**
 * An SEO component that uses react-helmet to supply site meta-data
 */
export default () => {
  const { title, description, twitter } = useSiteMetadata();

  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitter && <meta name="twitter:creator" content={twitter} />}
      {twitter && <meta name="twitter:title" content={twitter} />}
    </Helmet>
  );
};
