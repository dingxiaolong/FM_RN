/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconjiantou from './Iconjiantou';
import Iconxihuan from './Iconxihuan';
import Icondibudaohanglan from './Icondibudaohanglan';
import Icontingshu from './Icontingshu';
import Iconfaxian from './Iconfaxian';
import Iconshouyeshouye from './Iconshouyeshouye';

export type IconNames = 'iconjiantou' | 'iconxihuan' | 'icondibudaohanglan-' | 'icontingshu' | 'iconfaxian' | 'iconshouyeshouye';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconjiantou':
      return <Iconjiantou key="1" {...rest} />;
    case 'iconxihuan':
      return <Iconxihuan key="2" {...rest} />;
    case 'icondibudaohanglan-':
      return <Icondibudaohanglan key="3" {...rest} />;
    case 'icontingshu':
      return <Icontingshu key="4" {...rest} />;
    case 'iconfaxian':
      return <Iconfaxian key="5" {...rest} />;
    case 'iconshouyeshouye':
      return <Iconshouyeshouye key="6" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
