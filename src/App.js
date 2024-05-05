import React, {Fragment} from "react";
import image from "./images/webpack.png";
import "./styles/style.scss";


export const App = () => {
    return (
        <Fragment>
            <div className="head">
                <h1>Webpack</h1>
            </div>

            <div className="body">
                <img src = {image}/>
            </div>

            <div className="footer">
                Footer
            </div>
        </Fragment>
    )
}
