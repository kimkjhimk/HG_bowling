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
import {FrameLog} from '../models';
import {FrameLogRepository} from '../repositories';

export class FrameController {
  constructor(
    @repository(FrameLogRepository)
    public frameLogRepository : FrameLogRepository,
  ) {}

  @post('/frames', {
    responses: {
      '200': {
        description: 'FrameLog model instance',
        content: {'application/json': {schema: getModelSchemaRef(FrameLog)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FrameLog, {
            title: 'NewFrameLog',
            
          }),
        },
      },
    })
    frameLog: FrameLog,
  ): Promise<FrameLog> {
    return this.frameLogRepository.create(frameLog);
  }

  @get('/frames/count', {
    responses: {
      '200': {
        description: 'FrameLog model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(FrameLog) where?: Where<FrameLog>,
  ): Promise<Count> {
    return this.frameLogRepository.count(where);
  }

  @get('/frames', {
    responses: {
      '200': {
        description: 'Array of FrameLog model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FrameLog, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(FrameLog) filter?: Filter<FrameLog>,
  ): Promise<FrameLog[]> {
    return this.frameLogRepository.find(filter);
  }

  @patch('/frames', {
    responses: {
      '200': {
        description: 'FrameLog PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FrameLog, {partial: true}),
        },
      },
    })
    frameLog: FrameLog,
    @param.where(FrameLog) where?: Where<FrameLog>,
  ): Promise<Count> {
    return this.frameLogRepository.updateAll(frameLog, where);
  }

  @get('/frames/{id}', {
    responses: {
      '200': {
        description: 'FrameLog model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(FrameLog, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FrameLog, {exclude: 'where'}) filter?: FilterExcludingWhere<FrameLog>
  ): Promise<FrameLog> {
    return this.frameLogRepository.findById(id, filter);
  }

  @patch('/frames/{id}', {
    responses: {
      '204': {
        description: 'FrameLog PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FrameLog, {partial: true}),
        },
      },
    })
    frameLog: FrameLog,
  ): Promise<void> {
    await this.frameLogRepository.updateById(id, frameLog);
  }

  @put('/frames/{id}', {
    responses: {
      '204': {
        description: 'FrameLog PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() frameLog: FrameLog,
  ): Promise<void> {
    await this.frameLogRepository.replaceById(id, frameLog);
  }

  @del('/frames/{id}', {
    responses: {
      '204': {
        description: 'FrameLog DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.frameLogRepository.deleteById(id);
  }
}
