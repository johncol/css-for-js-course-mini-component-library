import type { Preview } from "@storybook/react";

import { IncludeAppGlobalStyles } from "./decorators/IncludeAppGlobalStyles";
import { IncludeFonts } from "./decorators/IncludeFonts";

const preview: Preview = {
  decorators: [IncludeFonts, IncludeAppGlobalStyles],
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
