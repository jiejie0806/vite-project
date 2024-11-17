import { useRoutes, RouteObject, Navigate } from 'react-router-dom';

import Layout from '../components/layout';

import Home from '../components/home';

import User from '../components/user';

import Login from '../components/login';

import Control from '../components/control';
import ResetPassWord from '../components/reset-pass-word';
import Error from '../components/error';

import LazyLoad from './lazyLoad';
import React from 'react';

export const routersArray = [
    { path: '/', label: '首页',  key:'/', element: <Navigate to='/layout/home'></Navigate>},
    {
        path:'/layout',
        label:'菜单',
        element: <Layout />,
        key: 'layout',
        children: [
            {
                path:'user',
                label: '用户',
                element: <User />,
                children: [
                    {
                        path:'control',
                        label: '控制',
                        element: <Control />,
                        key:'control',
                    },
                    {
                        path:'user1',
                        label: '用户',
                        element: <Login />,
                        key:'user1',
                    },
                ],
                key:'user',
            },
            {
                path:'home',
                label: '首页',
                element: <Home />,
                key:'home',
            },
        ],
    },
    {
        path:'resetpassword',
        label: '重置密码',
        element: <ResetPassWord />,
        key:'resetpassword',
    },
    { path: '404', label: '404',  key:'404', element: <Error />,},
    {
        path:'*',
        element: <Navigate to='/404'></Navigate>,
    },
];

export const loginRouter = [
    { path: '/login', label: '登录',  key:'login', element: LazyLoad(React.lazy(() => import('../components/login'))),
    meta: {title: '登录页', key: 'login', unwantedAuth: true,}
},
];

const GetRouters = () =>{
    const routes:RouteObject[] = useRoutes([...routersArray,...loginRouter]);
    
    return routes;
}

export default GetRouters;