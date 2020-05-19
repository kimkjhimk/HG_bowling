import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'bowling', table: 'frame_log'}}})
export class FrameLog extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id_frame_log', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  idFrameLog: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'num', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  num?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'score', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  score?: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'player_id', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  playerId: number;

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
    mysql: {columnName: 'game_log_id_game_log', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  gameLogIdGameLog: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FrameLog>) {
    super(data);
  }
}

export interface FrameLogRelations {
  // describe navigational properties here
}

export type FrameLogWithRelations = FrameLog & FrameLogRelations;
