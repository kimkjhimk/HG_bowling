import React from 'react';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line import/extensions
import tailwindConfig from '../../tailwind.config.js';

const { theme } = resolveConfig(tailwindConfig);

const Theme = (props: any) => <ThemeProvider {...props} {...{ theme }} />;

export default Theme;
