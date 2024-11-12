import { IRouter, Router } from 'express';
import BookRouter from '../modules/Book/book.route';
import MemberRouter from '../modules/Member/member.route';



const router = Router();

type TModuleRoutes = { path: string; router: IRouter }[];

const moduleRoutes: TModuleRoutes = [
  {
    path:'/books',
    router:BookRouter
  },
  {
    path:'/members',
    router:MemberRouter
  }
];
const routes = moduleRoutes.map((route) =>
  router.use(route.path, route.router),
);

export default routes;
