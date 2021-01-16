
import React, { Component } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ReferenceArea
} from 'recharts';
import unemployment from './unemployment.json';
import {getColors} from './chartUtils';
 
class Unemployment extends Component {

    constructor(props){
        super(props);
        this.state = {
            unemploymentYears: Object.keys(unemployment[0]).filter((key) => /^\d+$/.test(key)).sort().map((year) => {return {year: year, checked: year > "2015"}}),
            show: false
        };
    }

    changeUnemploymentYears = (year) => {
        let unemploymentYears = this.state.unemploymentYears;
        let yearObj = unemploymentYears.find((y) => y.year === year);
        yearObj.checked = !yearObj.checked;
        this.setState({unemploymentYears: unemploymentYears});
    }

    render() {
        let unemploymentColors = getColors(this.state.unemploymentYears.filter((year) => year.checked).map((year) => year.year));
        let unemployment2 = [...unemployment];
        let previousMonth = {...unemployment[11]};
        previousMonth["name"] = "-";
        previousMonth["tooltipName"] = "Fin año anterior";
        for(let i = new Date().getFullYear(); i > 2001; i--){
            previousMonth[i] = previousMonth[i - 1];
        }
        delete previousMonth["2001"];
        unemployment2.unshift(previousMonth);
        let unemployment3 = new Array(this.state.unemploymentYears.length * 12);
        for(let i = 0; i < this.state.unemploymentYears.length; i++){
            for(let j = 0; j < 12; j++){
                unemployment3[i * 12 + j] = {
                    parados: unemployment[j][this.state.unemploymentYears[i].year],
                    name: `${this.state.unemploymentYears[i].year}/${("0" + (j + 1)).slice(-2)}`
                };
            }
        }
        return (
            <div className={this.state.show ? "show" : ""}>
                <h2 className="collapser" onClick={() => this.setState({show:!this.state.show})}>Paro registrado en España <span>&gt;</span></h2>
                {
                    this.state.show &&
                    <div>
                        <h3>Comparación anual</h3>
                        <LineChart
                            data={unemployment2}
                            width={700}
                            height={300}
                        >
                            <XAxis dataKey="name" interval={0} stroke="black" width={100} padding={{left: 10, right: 10}}/>
                            <Tooltip
                                labelFormatter={(label) => unemployment2.filter((month) => month.name === label)[0].tooltipName}
                                cursor={{ fill: "#EEEEEE"}}
                                formatter={(name, value, props) =>  [name, props.payload.name === "-" ? value-1 : value, props]}
                            />
                            <YAxis stroke="black" type="number" domain={["auto", "auto"]} width={100}/>
                            <CartesianGrid strokeDasharray="3 3" />
                            {
                                unemploymentColors.map((year) => {
                                    return <Line dataKey={year.key} stroke={year.color} dot={false} />
                                })
                            }

                        </LineChart>
                        <p>Seleccionar años:</p>
                        <div className="line-picker">
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
                        <h3>Presidentes</h3>
                        <LineChart
                            data={unemployment3}
                            width={700}
                            height={300}
                        >
                            <XAxis
                                dataKey="name"
                                interval={24}
                                stroke="black"
                                width={100}
                                padding={{left: 10, right: 10}}
                                tickFormatter={(value) => value.substring(0, 4)}
                            />
                            <Tooltip
                                cursor={{ fill: "#EEEEEE"}}
                            />
                            <YAxis stroke="black" type="number" domain={["auto", "auto"]} width={100}/>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Line dataKey="parados" stroke="green" dot={false} />
                            <ReferenceArea x2="2004/04" label="Aznar" style={{fill: "#0bb2ff", fillOpacity: .25}}/>
                            <ReferenceArea x1="2004/04" x2="2011/12" label="Zapatero" style={{fill: "#f31912", fillOpacity: .25}}/>
                            <ReferenceArea x1="2011/12" x2="2018/06" label="Rajoy" style={{fill: "#0bb2ff", fillOpacity: .25}}/>
                            <ReferenceArea x1="2018/06" label="Sánchez" style={{fill: "#f31912", fillOpacity: .25}}/>
                        </LineChart>
                        <p className="source">Fuente: <a href="https://www.sepe.es/HomeSepe/que-es-el-sepe/estadisticas/datos-avance/paro.html" target="_blank" rel="noopener noreferrer">SEPE</a></p>
                    </div>
                }
            </div>
        );
    }
}
 
export default Unemployment;