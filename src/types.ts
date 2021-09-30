import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  range: any
  queryId: any
  queryType: any
  dataTopic: any
  table: any
  kdbFunction: any
  queryError: any
  format: any
  select: Select[][]
  funcTimeCol: any
  where: any
  useGrouping: any
  useConflation: any
  conflation: any
  conflationDurationMS: any
  conflationDefaultAggType: any
  panelType: any
  useTemporalField: any
  errorFound: any
  lastQueryError: any
  funcGroupCol: any
  col_meta: any
  limit: any
  group: any
  metricColumn: any
  fontWeight: any
  rowCountLimit: number
  version: any
}

export const defaultQuery: Partial<MyQuery> = {
  kdbFunction: '',
  queryError: {
    error: [false,false,false,false],
    message: ['','','','']
  },
  format: 'table',
  queryId: '',
  rowCountLimit: 100000,
  version: 2,
  queryType: 'selectQuery'
};

type Select = {
  type: string,
  params: any[]
}
/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  host?: string;
  timeoutLength?: string;
  useAuthentication?: boolean;
  useTLS?: boolean;
  user?: string;
  password?: string;
  timeInterval: string;
}

