import {DefaultCrudRepository} from '@loopback/repository';
import {Player, PlayerRelations} from '../models';
import {BowlingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlayerRepository extends DefaultCrudRepository<
  Player,
  typeof Player.prototype.idPlayer,
  PlayerRelations
> {
  constructor(
    @inject('datasources.bowling') dataSource: BowlingDataSource,
  ) {
    super(Player, dataSource);
  }
}
