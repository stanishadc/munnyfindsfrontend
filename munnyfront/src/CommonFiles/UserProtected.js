import React from "react";
import { Route, Redirect } from "react-router-dom";


export const UserProtected = ({ component: Component, ...rest }) => {
    return (
        <Route{...rest}
            render={(props) => {
                if (localStorage.getItem('MFFUserId')!==null) {
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