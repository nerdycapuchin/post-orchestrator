export interface LogEntry {
  timestamp: string;
  level: 'info' | 'error' | 'warn' | 'debug';
  message: string;
  context?: Record<string, any>;
}

export class Logger {
  private level: string;

  constructor(level: string = 'info') {
    this.level = level;
  }

  info(message: string, context?: Record<string, any>): void {
    this.log('info', message, context);
  }

  error(message: string, context?: Record<string, any>): void {
    this.log('error', message, context);
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log('warn', message, context);
  }

  debug(message: string, context?: Record<string, any>): void {
    this.log('debug', message, context);
  }

  private log(level: string, message: string, context?: Record<string, any>): void {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: level as any,
      message,
      context,
    };
    console.log(JSON.stringify(entry));
  }
}

export const logger = new Logger(process.env.LOG_LEVEL || 'info');
