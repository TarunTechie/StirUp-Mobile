import * as React from "react";
import Svg, { Rect, Circle, SvgProps } from "react-native-svg";
const FoodType = ({typeColor,...props}) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={1}
      y={1}
      width={26}
      height={26}
      rx={4}
      stroke={typeColor}
      strokeWidth={2}
    />
    <Circle cx={14.0001} cy={13.9999} r={5.6} fill={typeColor} />
  </Svg>
);
export default FoodType;
