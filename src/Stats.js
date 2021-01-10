
import React, { Component } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts';
import './Stats.css';
import unemployment from './unemployment.json';
 
class Stats extends Component {

    constructor(props){
        super(props);
        let unemploymentYears = Object.keys(unemployment[0]).filter((key) => /^\d+$/.test(key)).sort().map((year) => {return {year: year, checked: year > "2015"}});
        this.state = {
            unemploymentYears
        };
    }

    changeUnemploymentYears = (year) => {
        let unemploymentYears = this.state.unemploymentYears;
        let yearObj = unemploymentYears.find((y) => y.year === year);
        yearObj.checked = !yearObj.checked;
        this.setState({unemploymentYears: unemploymentYears});
    }

    getColors = (keys) => {
        let colors = [];
        for(let i = 0; i < keys.length; i++){
            colors.push({ key: keys[i], color: `hsl(${360 * i / keys.length}, 50%, 50%)`});
        }
        return colors;
    }

    getUnemploymentDomain = () => {
        let domain = [Number.MAX_VALUE, 0];
        for(let year of this.state.unemploymentYears.filter((year) => year.checked).map((year) => year.year)){
            for(let month of unemployment){
                if(month[year] > domain[1]){
                    domain[1] = month[year];
                }
                if(month[year] < domain[0]){
                    domain[0] = month[year];
                }
            }
        }
        return [(Math.floor(domain[0] / 100000) * 100000 - 100000), Math.ceil(domain[1] / 100000) * 100000 + 100000];
    }

    render() {
        console.log("RERENDERING");
        let unemploymentColors = this.getColors(this.state.unemploymentYears.filter((year) => year.checked).map((year) => year.year));
        let unemploymentDomain = this.getUnemploymentDomain();
        return (
            <div>
                <h1 className="section-title">Estadísticas</h1>
                <div className="chart">
                    <h2>Paro registrado</h2>
                    <LineChart
                        data={unemployment}
                        width={700}
                        height={300}
                    >
                        <XAxis dataKey="name" interval={0} stroke="black" width={100} padding={{left: 10, right: 10}}/>
                        <Tooltip
                            labelFormatter={(label) => unemployment.filter((month) => month.name === label)[0].tootipName}
                            cursor={{ fill: "#EEEEEE"}}
                        />
                        <YAxis stroke="black" type="number" domain={unemploymentDomain} width={100}/>
                        <CartesianGrid strokeDasharray="3 3" />
                        {
                            unemploymentColors.map((year) => {
                                return <Line dataKey={year.key} stroke={year.color} dot={false} />
                            })
                        }

                    </LineChart>
                    <p>Seleccionar años:</p>
                    <div className="year-picker">
                        {
                            this.state.unemploymentYears.map((year, index) => {
                                return (
                                    <div key={year.year}>
                                        <input
                                            type="checkbox"
                                            checked={this.state.unemploymentYears[index].checked}
                                            onChange={() => this.changeUnemploymentYears(year.year)}
                                            name={`unemployment${year.year}`}
                                            />
                                        <label htmlFor={`unemployment${year.year}`}>{year.year}</label>
                                        {
                                            this.state.unemploymentYears[index].checked &&
                                            <span style={{backgroundColor: unemploymentColors.find((color) => color.key === year.year).color}} className="color-box"></span>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p>Fuente: <a href="https://www.sepe.es/HomeSepe/que-es-el-sepe/estadisticas/datos-avance/paro.html" target="_blank" rel="noopener noreferrer">SEPE</a></p>
                </div>
            </div>
        );
    }
}
 
export default Stats;