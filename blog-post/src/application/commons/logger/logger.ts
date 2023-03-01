import { IContextLogger } from "./logger_abstract";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class ContextLogger implements IContextLogger {
    log(text: string): void {
        console.log(text);
    }
}