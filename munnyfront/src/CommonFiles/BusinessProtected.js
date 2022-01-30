import React from "react";
import { Route, Redirect } from "react-router-dom";


export const BusinessProtected = ({ component: Component, ...rest }) => {
    return (
        <Route{...rest}
            render={(props) => {
                if (localStorage.getItem('MFFBusinessUserId').length>0) {
                    return <Component{...props} />
                }
                else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }
            } />
    )
}