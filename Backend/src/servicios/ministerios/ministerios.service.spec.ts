import { Test, TestingModule } from '@nestjs/testing';
import { MinisteriosService } from './ministerios.service';

describe('MinisteriosService', () => {
  let service: MinisteriosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinisteriosService],
    }).compile();

    service = module.get<MinisteriosService>(MinisteriosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
