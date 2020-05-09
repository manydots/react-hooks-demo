import React from 'react';
import {HashRouter, Switch, Redirect, Route } from "react-router-dom";
import { useMappedState } from "redux-react-hook";
import Routers from './routerMap';

// 404页面
import NotFound from '@/page/notFound/';

function RouterMaps() {
    let token = useMappedState(state => state.token);
    return (
      <HashRouter>
            <>
                <Switch>
                      {
                        Routers.map((item,index)=>{
                          return(
                            <Route key={index} path={item.path} exact render={(props) => (!item.auth ? <item.component {...props} /> : (
                              token ? <item.component {...props} /> : <Redirect to={{pathname: "/login"}}/>)
                            )} />
                          )
                        })
                      }
                      <NotFound />
                </Switch>
            </>
      </HashRouter>
    )
}

export default RouterMaps;