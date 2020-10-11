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

let Icontingshu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.61025 48.820024a463.790226 463.790226 0 1 0 463.790227 463.790226A463.790226 463.790226 0 0 0 512.61025 48.820024z m0 854.350417a390.560191 390.560191 0 1 1 390.560191-390.560191 390.560191 390.560191 0 0 1-390.560191 390.560191z m0-592.675089a226.769011 226.769011 0 0 0-227.501311 226.28081v122.05006A56.631228 56.631228 0 0 0 341.740167 713.504648h28.315614a56.631228 56.631228 0 0 0 56.875327-56.387127v-84.946842a56.631228 56.631228 0 0 0-56.875327-56.387127h-43.205721a186.980691 186.980691 0 0 1 371.520381 0h-43.449821a56.631228 56.631228 0 0 0-56.875328 56.387127v84.946842a56.631228 56.631228 0 0 0 56.875328 56.387127H683.480334a56.387128 56.387128 0 0 0 56.631227-56.387127v-122.05006A226.769011 226.769011 0 0 0 512.61025 309.274851z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontingshu.defaultProps = {
  size: 18,
};

Icontingshu = React.memo ? React.memo(Icontingshu) : Icontingshu;

export default Icontingshu;
