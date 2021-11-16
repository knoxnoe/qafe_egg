import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1636961430088_4071';

  // add your egg config in here
  config.middleware = ['errorHandler'];

  // config.errorHandler = {
  //   match: '/api'
  // }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3307,
    database: 'test1',
    username: 'root',
    password: '123456',
    // database configuration
    // client: {
    //   host: '127.0.0.1',
    //   port: '3307',
    //   user: 'root',
    //   password: '123456',
    //   database: 'qafe',
    // },

  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
