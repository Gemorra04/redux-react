import React from "react"
import {connect} from "react-redux"
import Button from "material-ui/es/Button/Button";
import Header from "./Header";

@connect((store) => {
    return {
        currentModel: store.models.currentModel,
    };
})
export default class Layout extends React.Component {

    render() {
        return<div><Header></Header></div>
    }
}
