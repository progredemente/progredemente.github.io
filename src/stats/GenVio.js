
import React, { Component } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts';
import genvio from './genvio.json';
import {getColors} from './chartUtils';
 
class Stats extends Component {

    lineNames = {
        mujeres: "Población de mujeres a 1 de enero",
        muertes_totales: "Defunciones de mujeres",
        muertes_viogen: "Muertes víctimas mortales por vdg",
        denuncias_puestas: "Denuncias por vdg",
        condenados: "Condenados por vdg",
        absueltos: "Absueltos de vdg"
    }

    constructor(props){
        super(props);
        this.state = {
            show: false,
            genvioLines: {
                mujeres: true,
                muertes_totales: true,
                muertes_viogen: true,
                denuncias_puestas: true,
                condenados: true,
                absueltos: true
            },
            logScale: false,
        };
    }

    render() {
        let genvioColors = getColors(Object.keys(this.state.genvioLines).filter((line) => this.state.genvioLines[line]));
        return (
            <div className={this.state.show ? "show" : ""}>
                <h2 className="collapser" onClick={() => this.setState({show:!this.state.show})}>Violencia de género en España <span>&gt;</span></h2>
                {
                    this.state.show &&
                    <div>
                        <LineChart
                                data={genvio}
                                width={700}
                                height={300}
                        >
                            <XAxis
                                dataKey="name"
                                interval={1}
                                stroke="black"
                                width={100}
                                padding={{left: 10, right: 10}}
                            />
                            <Tooltip
                                formatter={(name, value, props) => [name, this.lineNames[value], props]}
                                cursor={{ fill: "#EEEEEE"}}
                            />
                            <YAxis stroke="black" type="number" domain={["auto", "auto"]} width={100} scale={this.state.logScale ? 'log' : 'auto'}/>
                            <CartesianGrid strokeDasharray="3 3" />
                            {
                                Object.keys(this.state.genvioLines).map((key) => {
                                    return (
                                        this.state.genvioLines[key] &&
                                        <Line dataKey={key} stroke={genvioColors.find((color) => color.key === key).color} dot={false} />
                                    );
                                })
                            }
                        </LineChart>
                        <p>
                            <label htmlFor="scale">Escala logarítmica</label>
                            
                            <input
                                type="checkbox"
                                checked={this.state.logScale}
                                onChange={() => this.setState({logScale: !this.state.logScale})}
                                name="scale"
                            />
                        </p>
                        <p>Seleccionar datos:</p>
                        <div>
                            {
                                Object.keys(this.state.genvioLines).map((line) => {
                                    return (
                                        <div key={line}>
                                            <input
                                                type="checkbox"
                                                checked={this.state.genvioLines[line]}
                                                onChange={() => {
                                                    let genvioLines = this.state.genvioLines;
                                                    genvioLines[line] = !genvioLines[line];
                                                    this.setState({genvioLines: genvioLines}
                                                )}}
                                                name={line}
                                                />
                                            <label htmlFor={line}>{ this.lineNames[line]}</label>
                                            {
                                                this.state.genvioLines[line] &&
                                                <span style={{backgroundColor: genvioColors.find((color) => color.key === line).color}} className="color-box"></span>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className="source">Fuente: <a href="https://www.ine.es/" target="_blank" rel="noopener noreferrer">INE</a> y <a href="http://estadisticasviolenciagenero.igualdad.mpr.gob.es/" target="_blank" rel="noopener noreferrer">Portal estadístico de la Delegación del Gobierno contra la Violencia de Género</a></p>
                    </div>
                }
            </div>
        );
    }
}
 
export default Stats;