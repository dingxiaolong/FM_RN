/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconfaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M514.9 68.6c-245.5 0-445.3 199.8-445.3 445.3s199.8 445.3 445.3 445.3 445.3-199.8 445.3-445.3c0-245.6-199.7-445.3-445.3-445.3z m399.4 445.3c0 220.2-179.2 399.4-399.4 399.4S115.5 734.1 115.5 513.9s179.2-399.4 399.4-399.4 399.4 179.2 399.4 399.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M702.5 304.1L432.1 422.4c-3.9 1.7-7 4.8-8.7 8.7L305.2 701.5c-2.3 5.3-1.9 11.1 1.3 15.9 3.2 4.8 8.4 7.7 14 7.7 2.3 0 4.6-0.5 6.8-1.4l270.4-118.3c3.9-1.7 7-4.8 8.7-8.7l118.3-270.4c2.3-5.3 1.9-11.1-1.3-15.9-4.5-6.8-13.3-9.6-20.9-6.3z m-34.5 73L566.4 580.2c-1.4 2.8-3.8 5.1-6.8 6.3l-165.1 66c-5.9 2.4-12.5 0.1-15.8-5.1-2.4-3.7-2.7-8.3-0.9-12.4l84.8-186.5c1.3-2.9 3.6-5.2 6.5-6.5L651 359.4c1.8-0.8 3.6-1.2 5.5-1.2 4.4 0 8.6 2.4 11.1 6.3 2.3 3.8 2.4 8.4 0.4 12.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M514.9 474.8c-21.5 0-39 17.5-39 39s17.5 39 39 39c13.9 0 26.9-7.5 33.8-19.5 7-12 7-27 0-39-6.9-12-19.9-19.5-33.8-19.5z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Iconfaxian.defaultProps = {
  size: 18,
};

Iconfaxian = React.memo ? React.memo(Iconfaxian) : Iconfaxian;

export default Iconfaxian;
