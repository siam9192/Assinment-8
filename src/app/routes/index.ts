import { IRouter, Router } from 'express';
import BookRouter from '../modules/Book/book.route';



const router = Router();

type TModuleRoutes = { path: string; router: IRouter }[];

const moduleRoutes: TModuleRoutes = [
  {
    path:'/books',
    router:BookRouter
  }
];
const routes = moduleRoutes.map((route) =>
  router.use(route.path, route.router),
);

export default routes;
