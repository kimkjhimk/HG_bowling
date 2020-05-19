import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {GameLog} from '../models';
import {GameLogRepository} from '../repositories';

export class GameController {
  constructor(
    @repository(GameLogRepository)
    public gameLogRepository : GameLogRepository,
  ) {}

  @post('/games', {
    responses: {
      '200': {
        description: 'GameLog model instance',
        content: {'application/json': {schema: getModelSchemaRef(GameLog)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GameLog, {
            title: 'NewGameLog',
            
          }),
        },
      },
    })
    gameLog: GameLog,
  ): Promise<GameLog> {
    return this.gameLogRepository.create(gameLog);
  }

  @get('/games/count', {
    responses: {
      '200': {
        description: 'GameLog model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(GameLog) where?: Where<GameLog>,
  ): Promise<Count> {
    return this.gameLogRepository.count(where);
  }

  @get('/games', {
    responses: {
      '200': {
        description: 'Array of GameLog model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(GameLog, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(GameLog) filter?: Filter<GameLog>,
  ): Promise<GameLog[]> {
    return this.gameLogRepository.find(filter);
  }

  @patch('/games', {
    responses: {
      '200': {
        description: 'GameLog PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GameLog, {partial: true}),
        },
      },
    })
    gameLog: GameLog,
    @param.where(GameLog) where?: Where<GameLog>,
  ): Promise<Count> {
    return this.gameLogRepository.updateAll(gameLog, where);
  }

  @get('/games/{id}', {
    responses: {
      '200': {
        description: 'GameLog model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(GameLog, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GameLog, {exclude: 'where'}) filter?: FilterExcludingWhere<GameLog>
  ): Promise<GameLog> {
    return this.gameLogRepository.findById(id, filter);
  }

  @patch('/games/{id}', {
    responses: {
      '204': {
        description: 'GameLog PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GameLog, {partial: true}),
        },
      },
    })
    gameLog: GameLog,
  ): Promise<void> {
    await this.gameLogRepository.updateById(id, gameLog);
  }

  @put('/games/{id}', {
    responses: {
      '204': {
        description: 'GameLog PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gameLog: GameLog,
  ): Promise<void> {
    await this.gameLogRepository.replaceById(id, gameLog);
  }

  @del('/games/{id}', {
    responses: {
      '204': {
        description: 'GameLog DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gameLogRepository.deleteById(id);
  }
}
