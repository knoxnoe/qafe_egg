import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  // mysql
  // mysql: {
  //   enable: true,
  //   package: 'egg-mysql'
  // },

   // orm
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  // restful api
  validate: {
    enable: true,
    package: 'egg-validate'
  },

};

export default plugin;
