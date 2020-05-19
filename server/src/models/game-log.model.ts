import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'bowling', table: 'game_log'}}})
export class GameLog extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id_game_log', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  idGameLog: number;

  @property({
    type: 'string',
    length: 23,
    mysql: {columnName: 'game_result', dataType: 'varchar', dataLength: 23, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  gameResult?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'created_at', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createdAt?: string;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'player_id_player', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  playerIdPlayer: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'lane', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  lane?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'score', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  score?: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'player_name', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  playerName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GameLog>) {
    super(data);
  }
}

export interface GameLogRelations {
  // describe navigational properties here
}

export type GameLogWithRelations = GameLog & GameLogRelations;
