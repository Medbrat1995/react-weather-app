import React from 'react';
import styled from 'styled-components';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const HighChartStyled = styled.div`
    
`;

function HighChartComponent({hourly, daily}){

    let chartOptions = {
        xAxis: {
            categories: ['A', 'B', 'C']
        },
        series: {
            data: [1, 2, 3]
        }
    };

    return(<HighChartStyled>This is a HighChart component
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </HighChartStyled>)
}

export default HighChartComponent;