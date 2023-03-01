import { IRequestHandler } from "../../commons/base_request_handler";
import { GetPostsResponse } from "./get_posts_response";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import TYPES from "../../../types";
import { IContextLogger } from "../../commons/logger/logger_abstract";

@injectable()
export class GetAllPostsHandler implements IRequestHandler<null, Promise<GetPostsResponse>> {
    
    constructor(
        @inject(TYPES.ContextLogger) private readonly _logger: IContextLogger
    ){}

    async handle() : Promise<GetPostsResponse> {
        console.log("handler");
        this._logger.log(`GetAllPostsHandler called`);

        const res : GetPostsResponse = {
            id: "41234123412341234fdgs",
            title: "Coffeee!!!",
            description: "This is a cofee post"
        };
        return res;
    }
}