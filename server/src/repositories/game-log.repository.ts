import {DefaultCrudRepository} from '@loopback/repository';
import {GameLog, GameLogRelations} from '../models';
import {BowlingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GameLogRepository extends DefaultCrudRepository<
  GameLog,
  typeof GameLog.prototype.idGameLog,
  GameLogRelations
> {
  constructor(
    @inject('datasources.bowling') dataSource: BowlingDataSource,
  ) {
    super(GameLog, dataSource);
  }
}
