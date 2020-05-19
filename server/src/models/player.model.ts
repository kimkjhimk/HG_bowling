import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'bowling', table: 'player'}}})
export class Player extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id_player', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  idPlayer: number;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'name', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  name?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'sex', dataType: 'char', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sex?: string;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'height', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  height?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'weight', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  weight?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 0,
    mysql: {columnName: 'shoe_size', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y'},
  })
  shoeSize?: number;

  @property({
    type: 'date',
    mysql: {columnName: 'birth_date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  birthDate?: string;

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
    type: 'date',
    mysql: {columnName: 'created_at', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createdAt?: string;

  @property({
    type: 'date',
    mysql: {columnName: 'modified_at', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  modifiedAt?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'comment', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  comment?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Player>) {
    super(data);
  }
}

export interface PlayerRelations {
  // describe navigational properties here
}

export type PlayerWithRelations = Player & PlayerRelations;
