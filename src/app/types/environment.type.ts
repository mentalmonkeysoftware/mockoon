import { Header, Route } from 'src/app/types/route.type';

export type Environment = {
  uuid: string;
  name: string;
  port: number;
  endpointPrefix: string;
  latency: number;
  routes: Route[];
  proxyMode: boolean;
  proxyHost: string;
  https: boolean;
  cors: boolean;
  headers: Header[];
};

export type Environments = Environment[];

export type CurrentEnvironment = { environment: Environment, index: number };
