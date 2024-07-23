import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1721529051023_8134',
  koa: {
    port: 7001,
  },
  cors: {
    origin: '*',
  },
  webSocket: {}
} as MidwayConfig;
