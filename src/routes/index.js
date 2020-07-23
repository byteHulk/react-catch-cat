import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";

//优化交互
const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

//路由懒加载
const LoadComponent = lazy(() => import("../views/Load/index"));
const GameComponent = lazy(() => import("../views/Game/index"));

export default [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to={"/load"} />
    },
    {
        path: '/load',
        component: SuspenseComponent(LoadComponent)
    },
    {
        path: '/game',
        component: SuspenseComponent(GameComponent)
    }
]