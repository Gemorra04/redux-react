import React from "react"
import { connect } from "react-redux"
@connect((store) => {
    return {
        currentModel: store.models.currentModel,
    };
})
export default class Layout extends React.Component {

    render() {
        const { currentModel } = this.props;
        return<div>Show {currentModel.modelName}</div>
    }
}
