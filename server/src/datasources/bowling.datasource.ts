import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'bowling',
  connector: 'mysql',
  url: 'mariadb://bowling:akthqudtls1!@localhost/bowling',
  host: '127.0.0.1',
  port: 3306,
  user: 'bowling',
  password: 'akthqudtls1!',
  database: 'bowling'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BowlingDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'bowling';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.bowling', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
