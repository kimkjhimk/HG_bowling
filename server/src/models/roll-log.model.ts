import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'bowling', table: 'roll_log'}}})
export class RollLog extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id_roll_log', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  idRollLog: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'ball_weight', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  ballWeight?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'is_left_hand', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  isLeftHand?: number;

  @property({
    type: 'string',
    length: 25,
    mysql: {columnName: 'pin_nums', dataType: 'varchar', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pinNums?: string;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'pin_count', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  pinCount?: number;

  @property({
    type: 'date',
    mysql: {columnName: 'created_at', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createdAt?: string;

  @property({
    type: 'boolean',
    length: 1,
    mysql: {columnName: 'display', dataType: 'char', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  display?: boolean;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'frame_log_id', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  frameLogId: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'player_id_player', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  playerIdPlayer: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RollLog>) {
    super(data);
  }
}

export interface RollLogRelations {
  // describe navigational properties here
}

export type RollLogWithRelations = RollLog & RollLogRelations;
