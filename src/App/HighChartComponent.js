import React from 'react';
import styled from 'styled-components';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import {backgroundColor, textColor, chartStyling, chartStylingLight} from '../Shared/Styles';


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
    let highchartsLineColor = textColor;

    if(hourly){
        hourly_dt = hourly.map(item => new Date(item.dt * 1000).toLocaleString().slice(12, -3));
        hourly_temp = hourly.map(item => item.temp);
    }

    if(daily){
        daily_dt = daily.map(item => new Date(item.dt * 1000).toLocaleString().slice(0, -15));
        daily_min_temp = daily.map(item => item.temp.min);
        daily_max_temp = daily.map(item => item.temp.max);
    }

    let chartOptions = {
        chart: {
            backgroundColor: backgroundColor,
        },

        colors: ['white'],
        title: {
            style: {
                color: 'white',
                font: '20px "Times New Roman"'
            },
            text: `${highchartData} data`
        },
        xAxis: {
            categories: highchartData === 'daily' ? daily_dt : hourly_dt,
            labels: {
                style: {
                    color: 'white',
                    font: '18px "Times New Roman"'
                }
            }
        },
        yAxis: {
            gridLineWidth: 1,
            gridLineColor: `white`,
            labels: {
                style: {
                    color: 'white',
                    font: '18px "Times New Roman"'
                },
            },
            title:{
                text: 'Temperature',
                style: {
                    color: 'white',

                },
            }
        },
        legend: {
            itemStyle: {
                color: 'white',
                font: '18px "Times New Roman"'
            }
        },

        series: highchartData === 'daily' ? [{
            name: 'Max',
            data: daily_max_temp
        },
            {name: 'Min',
                data: daily_min_temp}
        ] : [{
            name: 'Current',
            data: hourly_temp
        }],

    };



    return(<HighChartStyled>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </HighChartStyled>)
}

export default HighChartComponent;