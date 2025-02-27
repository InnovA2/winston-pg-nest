import { TransportStreamOptions } from 'winston-transport';
import { PostgresColumnDefinition } from './postgres-column-definition';
export interface PostgresOptions<T> extends TransportStreamOptions {
    /**
     * Connection string to PostgreSQL database
     */
    connectionString: string;
    /**
     * Max number of clients in pool
     */
    maxPool?: number;
    /**
     * Ssl active
     */
    ssl?: {
        rejectUnauthorized: boolean;
    } | boolean;
    /**
     * Schema of the database
     */
    schema?: string;
    /**
     * Name of the table
     */
    tableName?: string;
    /**
     * Fields of the table
     */
    tableColumns?: PostgresColumnDefinition<T>[];
    /**
     * Timezone of the dates (e.g. 'utc+2')
     */
    timezone?: string;
}
