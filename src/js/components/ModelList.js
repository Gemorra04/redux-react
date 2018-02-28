import React from "react"
import { connect } from "react-redux"
import ModelCard from "./ModelCard"
import { fetchModels } from "../actions/modelsActions"
import LoadingIndicator from "./LoadingIndicator"
import Paper from "material-ui/Paper"
// import { ToastContainer, toast } from 'react-toastify';

@connect((store) => {
    return {
        models: store.models,
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchModels())
    }
    render() {

        const { models } = this.props;
        // const notify = () => toast("Wow so easy !");
        // return        <div>
        //     <div>
        //         <button onClick={notify}>Notify !</button>
        //         <ToastContainer />
        //     </div>
        // </div>



         if (models.fetching) {
            return <LoadingIndicator size={60} text="Modelle werden geladen"/>
         }
        if (models.models == null || !models.models.length) {
            return <h1>Keine Modelle vorhanden.</h1>
        }
        const mappedModels = models.models.map(model => <ModelCard key={model.id} dispatch={this.props.dispatch} model={model}></ModelCard>)
        return <Paper>
            {mappedModels}
        </Paper>
    }
}
