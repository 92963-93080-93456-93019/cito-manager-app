import React, { useContext } from 'react';
import styles from './DashboardGrid.module.scss';
import { ENGINE_MANAGER_ENDPOINT } from '../../environment';
import DashboardItem from './DashboardItem';

export default class DashboardGrid extends React.Component {


    constructor(props) {
        super(props);
        this.state = { statistics: [] };
    }

    componentDidMount() {
        const url_get_products = ENGINE_MANAGER_ENDPOINT + '1/statistics?appid=' + this.props.appid;
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