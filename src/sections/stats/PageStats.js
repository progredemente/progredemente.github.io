import React, { Component } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend,
    CartesianGrid
} from 'recharts';
import './PageStats.css';
import list from '../../list.json';
 
class PageStats extends Component {

    constructor(props){
        super(props);
        this.state = {
            characterYear: null,
            partyYear: null,
        }
    }

    getMonthData = () => {
        let monthData = [
            { name: "Ene", tootipName: "Enero"},
            { name: "Feb", tootipName: "Febrero"},
            { name: "Mar", tootipName: "Marzo"},
            { name: "Abr", tootipName: "Abril"},
            { name: "May", tootipName: "Mayo"},
            { name: "Jun", tootipName: "Junio"},
            { name: "Jul", tootipName: "Julio"},
            { name: "Ago", tootipName: "Agosto"},
            { name: "Sep", tootipName: "Septiembre"},
            { name: "Oct", tootipName: "Octubre"},
            { name: "Nov", tootipName: "Noviembre"},
            { name: "Dic", tootipName: "Diciembre"},
        ];
        let years = new Set();
        for(let key of Object.keys(list)) {
            let post = list[key];
            let date = new Date(post.date);
            let year = date.getFullYear();
            years.add(year);
            let month = date.getMonth();
            if(!(year in monthData[month])){
                monthData[month][year] = 0;
            }
            monthData[month][year]++;
        }
        years = Array.from(years);
        let yearColors = [];
        for(let i = 0; i < years.length; i++){
            yearColors.push({ year: years[i], color: `hsl(${360 * i / years.length}, 100%, 75%)`});
        }
        return [monthData, yearColors];
    }

    getListKeys(year) {
        let listKeys = Object.keys(list);
        if(year !== null) {
            listKeys = listKeys.filter((key) => {
                return new Date(list[key].date).getFullYear() === year;
            })
        }
        return listKeys;
    }
    
    getCelebrityData = () => {
        let celebrityData = [];
        let listKeys = this.getListKeys(this.state.characterYear);
        for(let key of listKeys) {
            let post = list[key];
            if(post.celebrities !== undefined) {
                for(let celName of post.celebrities){
                    let celebrity = celebrityData.find((cel) => celName === cel.name);
                    if(celebrity === null || celebrity === undefined) {
                        celebrityData.push({ name: celName, count: 1 });
                    }
                    else celebrity.count++;
                }
            }
        }
        celebrityData.sort((a, b) => b.count - a.count);
        let celebrityFiltered = celebrityData.filter((cel) => cel.count > 1 );
        let justOnce = celebrityData.length - celebrityFiltered.length;
        if(justOnce > 0) {
            celebrityFiltered.push({ name: "Otros", count: justOnce});
            celebrityData = celebrityFiltered;
        }
        let celebColors = [];
        for(let i = 0; i < celebrityData.length; i++){
            celebColors.push(`hsl(${360 * i / celebrityData.length}, 100%, 75%)`);
        }
    
        return [celebrityData, celebColors];
    }
    
    getPartyData = () => {
        let partyData = [
            { name: "BComú", count: 0 },
            { name: "PSOE", count: 0 },
            { name: "MP", count: 0 },
            { name: "PP", count: 0 },
            { name: "JxC", count: 0 },
            { name: "Vox", count: 0 },
            { name: "EH Bildu", count: 0},
            { name: "ERC", count: 0},
            { name: "C's", count: 0},
            { name: "Compromís", count: 0},
            { name: "MDyC", count: 0},
            { name: "BNG", count: 0},
            { name: "Podemos", count: 0},
            { name: "IU", count: 0},
            { name: "Sumar", count: 0},
            { name: "CUP", count: 0},
            { name: "AA", count: 0},
            { name: "Drago", count: 0},
            { name: "CJ", count: 0}
        ];
        let partyColors = {
            "BComú": "#e8412c",
            "PSOE": "#f31912",
            "MP": "#0fddc4",
            "PP": "#0bb2ff",
            "JxC": "#00c4b2",
            "Vox": "#7cbd2a",
            "EH Bildu": "#95c11f",
            "ERC": "#ffb018",
            "C's": "#fa5000",
            "Compromís": "#e65f00",
            "MDyC": "#05851b",
            "BNG": "#76b3dd",
            "Podemos": "#9068f4",
            "IU": "#df0022",
            "Sumar": "#e51635",
            "CUP": "#fff000",
            "AA": "#24c87f",
            "Drago": "#009ee0",
            "CJ": "#233B90"
        }
        let listKeys = this.getListKeys(this.state.partyYear);
        for(let key of listKeys) {
            let post = list[key];
            if(post.parties !== undefined) {
                for(let partyName of post.parties){
                    partyData.find((party) => party.name === partyName).count++;
                }
            }
        }
        partyData.sort((a, b) => b.count - a.count);
        return [partyData, partyColors];
    }

    getYearData() {
        let yearDataObj = {};
        for(let key of Object.keys(list)) {
            let post = list[key];
            let year = new Date(post.date).getFullYear().toString();
            if(!(year in yearDataObj)){
                yearDataObj[year] = { name: year , posts: 1 }
            }
            else {
                yearDataObj[year].posts++;
            }
        }
        return Object.keys(yearDataObj).sort((a, b) => b - a).map((key) => yearDataObj[key]);
    }

    render() {
        let [monthData, yearColors] = this.getMonthData();
        let [celebrityData, celebColors] = this.getCelebrityData();
        let [partyData, partyColors] = this.getPartyData();
        let yearData = this.getYearData();
        return (
            <div>
                <h1 className="section-title">Estadísticas de la página</h1>
                <div className="chart">
                    <h2>Número de posts por mes y año</h2>
                    <BarChart
                        data={monthData}
                        width={700}
                        height={300}
                    >
                        <XAxis dataKey="name" interval={0} stroke="black"/>
                        <Tooltip
                            labelFormatter={(label) => monthData.filter((month) => month.name === label)[0].tootipName}
                            cursor={{ fill: "#EEEEEE"}}
                        />
                        <YAxis stroke="black"/>
                        <Legend verticalAlign="top"/>
                        <CartesianGrid strokeDasharray="3 3" />
                        {
                            yearColors.map((year) => {
                                return <Bar dataKey={year.year} fill={year.color} key={year.year}/>
                            })
                        }
                    </BarChart>
                </div>
                <div className="chart">
                    <h2>Número de posts por año</h2>
                    <BarChart
                        data={yearData}
                        width={700}
                        height={60 * yearData.length}
                        layout="vertical"
                    >
                        <XAxis stroke="black" type="number" />
                        <Tooltip
                            cursor={{ fill: "#EEEEEE"}}
                        />
                        <YAxis stroke="black" dataKey="name" type="category" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="posts">
                            {
                                yearData.map((year) => <Cell key={`cell-${year.year}`} fill={yearColors.find((y) => y.year === parseInt(year.name)).color}/>)
                            }
                        </Bar>
                    </BarChart>
                </div>
                <div className="chart">
                    <h2>Personajes públicos por aparición</h2>
                    <div>
                        <div
                            onClick={() =>{
                                this.setState({characterYear: null})
                            }}
                        >
                            <input
                                type="radio"
                                checked={this.state.characterYear === null}
                                readOnly
                            />
                            Todos los años
                        </div>
                        {
                            (() => {
                                let ret = [];
                                for(let i = 2020; i <= new Date().getFullYear(); i++){
                                    ret.push(
                                        <div
                                            key={i}
                                            onClick={() =>{
                                                this.setState({characterYear: i})
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                checked={this.state.characterYear === i}
                                                readOnly
                                            />
                                            {i}
                                        </div>
                                    )
                                }
                                return <>{ret}</>;
                            })()
                        }
                    </div>
                    <PieChart
                        width={700}
                        height={400}
                    >
                        <Pie
                            data={celebrityData}
                            dataKey="count"
                            nameKey="name"
                            label={(cel) => cel.name}
                            labelLine={{stroke: "black"}}
                        >
                            {
                                celebrityData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={celebColors[index]}/>
                                ))
                            }
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="chart semicircle">
                    <h2>Partidos políticos por aparición</h2>
                    <div>
                        <div
                            onClick={() =>{
                                this.setState({partyYear: null})
                            }}
                        >
                            <input
                                type="radio"
                                checked={this.state.partyYear === null}
                                readOnly
                            />
                            Todos los años
                        </div>
                        {
                            (() => {
                                let ret = [];
                                for(let i = 2020; i <= new Date().getFullYear(); i++){
                                    ret.push(
                                        <div
                                            key={i}
                                            onClick={() =>{
                                                this.setState({partyYear: i})
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                checked={this.state.partyYear === i}
                                                readOnly
                                            />
                                            {i}
                                        </div>
                                    )
                                }
                                return <>{ret}</>;
                            })()
                        }
                    </div>
                    <PieChart
                        width={700}
                        height={500}
                    >
                        <Pie
                            data={partyData}
                            dataKey="count"
                            nameKey="name"
                            label={(cel) => cel.name}
                            labelLine={{stroke: "black"}}
                            startAngle={180}
                            endAngle={0}
                            innerRadius={125}
                            outerRadius={200}
                        >
                            {
                                partyData.map((entry, index) => {
                                    return (
                                        <Cell key={`cell-${index}`} fill={partyColors[entry.name]}/>
                                    )

                                }
                                )
                            }
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        );
    }
}
 
export default PageStats;