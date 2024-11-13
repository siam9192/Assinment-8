import { IRouter, Router } from 'express';
import BookRouter from '../modules/Book/book.route';
import MemberRouter from '../modules/Member/member.route';
import { BorrowRouter, ReturnRouter } from '../modules/Borrow/borrow.router';



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
  },
  {
    path:'/borrow',
    router:BorrowRouter
  },
  {
    path:'/return',
    router:ReturnRouter
  }
];
const routes = moduleRoutes.map((route) =>
  router.use(route.path, route.router),
);

export default routes;
