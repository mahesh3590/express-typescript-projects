import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response } from "inversify-express-utils";
import TYPES from "../../types";
import container from "../../inversify.config";

@controller("/posts")
export class PostController implements interfaces.Controller {

/**
 * @swagger
 * paths:
 *  /posts:
 *   get:
 *     summary: Retrieve all the posts.
 *     description: Retrieve all posts.
 *     responses:
 *       200:
 *         description: All posts.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: Title of the post
 *                       example: Cofee
 *                     description:
 *                       type: string
 *                       description: Description of the post
 *                       example: Post description
*/
  @httpGet("/")
  public async index (@response() res: express.Response) {
    try {

      const instance: any = container.get(TYPES.GetAllPostsHandler);
      console.log(instance);
      const posts = await instance.handle();
      res.status(200).json(posts);
    } catch(error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}