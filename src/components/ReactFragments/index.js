import React from "react";
import { Fragment } from "react";

export default class ReactFragments extends React.Component {

    UNSAFE_componentWillReceiveProps(){
        console.log ("update")
    }

    render(){
        return(
            <div>
                {this.props.list.map(item =>
                    <Fragment key={item}>
                        Item {item}
                    </Fragment>
                    )}
            </div>
        )
    }
}