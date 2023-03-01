import { IRequestHandler } from "../../../commons/base_request_handler";
import { CreateUserCommandResponse } from "./create_user_command_response";
import { CreateUserCommand } from "./create_user_command";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import TYPES from "../../../../types";
import { IContextLogger } from "../../../commons/logger/logger_abstract";

@injectable()
export class CreateUserHandler implements IRequestHandler<CreateUserCommand, Promise<CreateUserCommandResponse>> {
    
    constructor(
        @inject(TYPES.ContextLogger) private readonly _logger: IContextLogger
    ){}

    async handle() : Promise<CreateUserCommandResponse> {
        this._logger.log(`CreateUserHandler called`);

        // create domain object

        // save to repository

        // return user
        
    }
}