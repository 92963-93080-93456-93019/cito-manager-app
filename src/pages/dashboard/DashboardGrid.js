import React, { useContext } from 'react';
import styles from './DashboardGrid.module.scss';
import configData from "../../config.json";
import DashboardItem from './DashboardItem';

export default class DashboardGrid extends React.Component {


    constructor(props) {
        super(props);
        this.state = { statistics: [] };
    }

    componentDidMount() {
        const url_get_products = 'http://localhost:8081/managerApi/1/statistics?appid=' + this.props.appid;
        fetch(url_get_products)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                this.setState({statistics : json});
            });
    }

    render() {
        return (
            <div className={styles.p__container}>
                <div className={styles.p__grid}>

                    {
                        this.state.statistics.map(statistic => (
                            <DashboardItem statistic={statistic} />
                        ))
                    }

                </div>
                <div className={styles.p__footer}>

                </div>
            </div>
        );
    }
}