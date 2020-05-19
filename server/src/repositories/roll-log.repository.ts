import {DefaultCrudRepository} from '@loopback/repository';
import {RollLog, RollLogRelations} from '../models';
import {BowlingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RollLogRepository extends DefaultCrudRepository<
  RollLog,
  typeof RollLog.prototype.idRollLog,
  RollLogRelations
> {
  constructor(
    @inject('datasources.bowling') dataSource: BowlingDataSource,
  ) {
    super(RollLog, dataSource);
  }
}
