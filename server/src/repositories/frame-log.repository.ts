import {DefaultCrudRepository} from '@loopback/repository';
import {FrameLog, FrameLogRelations} from '../models';
import {BowlingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FrameLogRepository extends DefaultCrudRepository<
  FrameLog,
  typeof FrameLog.prototype.idFrameLog,
  FrameLogRelations
> {
  constructor(
    @inject('datasources.bowling') dataSource: BowlingDataSource,
  ) {
    super(FrameLog, dataSource);
  }
}
