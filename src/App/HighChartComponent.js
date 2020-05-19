import React from 'react';
import styled from 'styled-components';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import {backgroundColor, textColor, chartStyling} from '../Shared/Styles';

const HighChartStyled = styled.div`
    
`;

function HighChartComponent({hourly, daily, highchartData}){

    let hourlyData = hourly ? hourly.map(item => ({dt: item.dt, temp: item.temp})) : [];
    let dailyData = daily ? daily.map(item => ({dt: item.dt, min_temp: item.temp.min, max_temp: item.temp.max})) : [];

    let hourly_dt = [];
    let hourly_temp = [];
    let daily_dt = [];
    let daily_min_temp = [];
    let daily_max_temp = [];

    if(hourly){
        hourly_dt = hourly.map(item => new Date(item.dt * 1000).toLocaleString().slice(0, -3));
        hourly_temp = hourly.map(item => item.temp);
    }

    if(daily){
        daily_dt = daily.map(item => new Date(item.dt * 1000).toLocaleString().slice(0, -15));
        daily_min_temp = daily.map(item => item.temp.min);
        daily_max_temp = daily.map(item => item.temp.max);
    }



    console.log(`hourly data is ${hourly_dt}`);
    console.log(`daily data is ${JSON.stringify(dailyData)}`);
    let chartOptions = {
        chart: {
            backgroundColor: '#ff5050'
        },
        colorAxis: {
            gridLineColor: '#333'
        },
        colors: ['#333'],
        title: {
            text: `${highchartData} data`
        },
        xAxis: {
            categories: highchartData === 'daily' ? daily_dt : hourly_dt
        },

        series: highchartData === 'daily' ? [{
            data: daily_max_temp
        },
            {data: daily_min_temp}
        ] : [{
            data: hourly_temp
        }],
        /*series: {
            data: highchartData === 'daily' ? daily_max_temp : hourly_temp
        }*/
    };

    return(<HighChartStyled>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </HighChartStyled>)
}

export default HighChartComponent;