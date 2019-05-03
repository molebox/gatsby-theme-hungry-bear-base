import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface BreakPoints {
  smallMobile: string;
  largeMobile: string;
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

interface Colors {
  primary: string;
  secondary: string;
  light: string;
  accent: string;
}

const breakpoints: BreakPoints = {
  smallMobile: "300",
  largeMobile: "480",
  small: "500",
  medium: "768",
  large: "1130"
};

/**
 * The base brand colors, can be imported and changed
 */
export const colors: Colors = {
  primary: "#173F5F",
  secondary: "#2acdc1",
  light: "#D7F3FF",
  accent: "#E19F20"
};

/**
 * Hook to provide media query to css elements.
 * Pass in the breakpoint and get back the media query
 * @param breakpoint A breakpoint represented as a string value
 */
export function useBreakPoint(breakpoint: string) {
  const [bp, setBreakpoint] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const bpArray = Object.keys(breakpoints).map(key => [
      key,
      breakpoints[key]
    ]);

    const [result] = bpArray.reduce((acc, [name, size]) => {
      if (breakpoint === name) {
        return [...acc, `@media (max-width: ${size}px)`];
      }
      return acc;
    }, []);
    setBreakpoint(result);
  }, [breakpoint]);

  return bp;
}

/**
 * Hook to provide the site meta data.
 * Provides title, description and author
 */
export function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author
            twitter
          }
        }
      }
    `
  );
  return site.siteMetadata;
}
