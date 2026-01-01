import express, { Express, Request, Response } from 'express';
import { loadConfig } from './config';
import { logger } from './logger';

const config = loadConfig();
const app: Express = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/orchestrate', async (req: Request, res: Response) => {
  try {
    const { secret } = req.body;
    if (secret !== config.orchestratorSecret) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    logger.info('Orchestration triggered');
    res.json({ message: 'Orchestration started', success: true });
  } catch (error) {
    logger.error('Orchestration error', { error: String(error) });
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});
