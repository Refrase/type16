// Lib

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// Exports

export default createDevTools(<DockMonitor toggleVisibilityKey="H" changePositionKey="W"><LogMonitor /></DockMonitor>);
