import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Heart = ({like,...props}) => (
  <Svg
    width={30}
    height={27}
    viewBox="0 0 30 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 4.0537C12.2009 0.800953 7.52365 -0.204285 4.01658 2.77425C0.509501 5.75279 0.0157518 10.7327 2.76988 14.2555C5.05975 17.1843 11.9897 23.3617 14.261 25.3611C14.515 25.5847 14.6421 25.6966 14.7903 25.7405C14.9196 25.7788 15.0611 25.7788 15.1906 25.7405C15.3388 25.6966 15.4657 25.5847 15.7199 25.3611C17.9912 23.3617 24.921 17.1843 27.211 14.2555C29.9651 10.7327 29.5316 5.72145 25.9642 2.77425C22.3968 -0.172953 17.7991 0.800953 15 4.0537Z"
      fill={like}
      stroke="#D22701"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Heart;
