import type { Preview } from "@storybook/react";
import React from "react";

import { ResetStyles } from "../app/global/ResetStyles";
import { GlobalStyles } from "../app/global/GlobalStyles";

const IncludeAppGlobalStyles = (Story) => (
  <>
    <Story />
    <ResetStyles />
    <GlobalStyles />
  </>
);

const preview: Preview = {
  decorators: [IncludeAppGlobalStyles],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
