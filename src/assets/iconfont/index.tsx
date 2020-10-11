/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Icondibudaohanglan from './Icondibudaohanglan';
import Icontingshu from './Icontingshu';
import Iconfaxian from './Iconfaxian';
import Iconshouyeshouye from './Iconshouyeshouye';

export type IconNames = 'icondibudaohanglan-' | 'icontingshu' | 'iconfaxian' | 'iconshouyeshouye';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icondibudaohanglan-':
      return <Icondibudaohanglan key="1" {...rest} />;
    case 'icontingshu':
      return <Icontingshu key="2" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="3" {...rest} />;
    case 'iconshouyeshouye':
      return <Iconshouyeshouye key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
