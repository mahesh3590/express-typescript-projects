import TYPES from './types';
import {Container} from 'inversify';
//import { interfaces, TYPE } from 'inversify-express-utils';
import { IContextLogger, ContextLogger } from "./application/commons/logger";
import { GetAllPostsHandler, GetPostsResponse } from "./application/posts/queries";
import { IRequestHandler } from "./application/commons/base_request_handler";

const container = new Container();

container.bind<IContextLogger>(TYPES.ContextLogger ).to(ContextLogger).inSingletonScope();
container.bind<IRequestHandler<null, Promise<GetPostsResponse>>>(TYPES.GetAllPostsHandler).to(GetAllPostsHandler).inSingletonScope();

export default container;