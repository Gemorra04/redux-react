import React from "react"
import { connect } from "react-redux"
import ModelList from "./ModelList"
import Header from "./Header"
import EditorFrame from "./EditorFrame"

@connect((store) => {
    return {
        currentModel: store.models.currentModel,
    };
})
export default class Layout extends React.Component {

    render() {
        const {currentModel} = this.props;
        const content = currentModel == null ? <ModelList />:<EditorFrame/>
        return<div><Header/><div style={{marginTop:'70px'}}>{content}</div></div>
    }
}
