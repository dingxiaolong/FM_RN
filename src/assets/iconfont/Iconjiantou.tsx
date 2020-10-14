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

let Iconjiantou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M357.376 852.309333a25.6 25.6 0 0 0 36.181333 36.181334l358.4-358.4a25.6 25.6 0 0 0 0-36.181334l-358.4-358.4a25.6 25.6 0 0 0-36.181333 36.181334L697.685333 512l-340.309333 340.309333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjiantou.defaultProps = {
  size: 18,
};

Iconjiantou = React.memo ? React.memo(Iconjiantou) : Iconjiantou;

export default Iconjiantou;
