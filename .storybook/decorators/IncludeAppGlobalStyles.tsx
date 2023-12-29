import React from "react";
import { ResetStyles } from "../../app/global/ResetStyles";
import { GlobalStyles } from "../../app/global/GlobalStyles";

export const IncludeAppGlobalStyles = (Story) => (
  <>
    <Story />
    <ResetStyles />
    <GlobalStyles />
  </>
);
