import React, { PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants";

const GradientBackground = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={COLORS.GRADIENT_BACKGROUND}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
