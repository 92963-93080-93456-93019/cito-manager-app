import React, {useContext} from 'react';
import Layout from '../../components/Layout';
import DashboardGrid from './DashboardGrid';

export default class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = { 
            managerId: "",
            address: "",
            app: {
                appid: "",
                name: "",
                address: ""
            }
        }
    }
    

    componentDidMount() {
    fetch("http://localhost:8081/managerApi/1/info")
        .then((response) => response.json())
        .then((json) => {
            this.setState({ 
                managerId: json.managerId ,
                address : json.address,
                app : json.app
            });
            console.log(this.state);
        });
    }

    render() {
        return (
            <Layout title="Dashboard" description="This is the Dashboard page">
                <div className="text-center mt-5">
                    <h1>{this.state.app.name} | Dashboard</h1>
                    <div className="row no-gutters justify-content-center">
                        <div className="col-sm-9 p-3">
                            <DashboardGrid appid={this.state.app.appid}/>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
