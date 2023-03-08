import React from 'react';
import AxiosMock from './AxiosMock';
import type { AxiosStatic } from 'axios';

const AxiosContext = React.createContext<AxiosStatic | AxiosMock>(new AxiosMock());

export default AxiosContext;
