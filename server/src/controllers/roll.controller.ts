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
import {RollLog} from '../models';
import {RollLogRepository} from '../repositories';

export class RollController {
  constructor(
    @repository(RollLogRepository)
    public rollLogRepository : RollLogRepository,
  ) {}

  @post('/rolls', {
    responses: {
      '200': {
        description: 'RollLog model instance',
        content: {'application/json': {schema: getModelSchemaRef(RollLog)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RollLog, {
            title: 'NewRollLog',
            
          }),
        },
      },
    })
    rollLog: RollLog,
  ): Promise<RollLog> {
    return this.rollLogRepository.create(rollLog);
  }

  @get('/rolls/count', {
    responses: {
      '200': {
        description: 'RollLog model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(RollLog) where?: Where<RollLog>,
  ): Promise<Count> {
    return this.rollLogRepository.count(where);
  }

  @get('/rolls', {
    responses: {
      '200': {
        description: 'Array of RollLog model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(RollLog, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(RollLog) filter?: Filter<RollLog>,
  ): Promise<RollLog[]> {
    return this.rollLogRepository.find(filter);
  }

  @patch('/rolls', {
    responses: {
      '200': {
        description: 'RollLog PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RollLog, {partial: true}),
        },
      },
    })
    rollLog: RollLog,
    @param.where(RollLog) where?: Where<RollLog>,
  ): Promise<Count> {
    return this.rollLogRepository.updateAll(rollLog, where);
  }

  @get('/rolls/{id}', {
    responses: {
      '200': {
        description: 'RollLog model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RollLog, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RollLog, {exclude: 'where'}) filter?: FilterExcludingWhere<RollLog>
  ): Promise<RollLog> {
    return this.rollLogRepository.findById(id, filter);
  }

  @patch('/rolls/{id}', {
    responses: {
      '204': {
        description: 'RollLog PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RollLog, {partial: true}),
        },
      },
    })
    rollLog: RollLog,
  ): Promise<void> {
    await this.rollLogRepository.updateById(id, rollLog);
  }

  @put('/rolls/{id}', {
    responses: {
      '204': {
        description: 'RollLog PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rollLog: RollLog,
  ): Promise<void> {
    await this.rollLogRepository.replaceById(id, rollLog);
  }

  @del('/rolls/{id}', {
    responses: {
      '204': {
        description: 'RollLog DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rollLogRepository.deleteById(id);
  }
}
