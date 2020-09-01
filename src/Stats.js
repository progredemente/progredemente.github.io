import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import './Stats.css';
import list from './list.json';

let getMonthData = () => {
    let monthData = [
        { name: "Ene", posts: 0 , tootipName: "Enero"},
        { name: "Feb", posts: 0 , tootipName: "Febrero"},
        { name: "Mar", posts: 0 , tootipName: "Marzo"},
        { name: "Abr", posts: 0 , tootipName: "Abril"},
        { name: "May", posts: 0 , tootipName: "Mayo"},
        { name: "Jun", posts: 0 , tootipName: "Junio"},
        { name: "Jul", posts: 0 , tootipName: "Julio"},
        { name: "Ago", posts: 0 , tootipName: "Agosto"},
        { name: "Sep", posts: 0 , tootipName: "Septiembre"},
        { name: "Oct", posts: 0 , tootipName: "Octubre"},
        { name: "Nov", posts: 0 , tootipName: "Noviembre"},
        { name: "Dic", posts: 0 , tootipName: "Diciembre"},
    ];
    for(let key of Object.keys(list)) {
        let post = list[key];
        monthData[parseInt(post.date.split("/")[1]) - 1].posts++;
    }
    return monthData;
}

let getCelebrityData = () => {
    let celebrityData = [];
    for(let key of Object.keys(list)) {
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

let getPartyData = () => {
    let partyData = [
        { name: "UP", count: 0 },
        { name: "PSOE", count: 0 },
        { name: "MP", count: 0 },
        { name: "PP", count: 0 },
        { name: "JxC", count: 0 },
        { name: "Vox", count: 0 }
    ];
    let partyColors = {
        "UP": "#5c3464",
        "PSOE": "#f31912",
        "MP": "#0fddc4",
        "PP": "#0bb2ff",
        "JxC": "#e73452",
        "Vox": "#7cbd2a"
    }
    for(let key of Object.keys(list)) {
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
 
class Stats extends PureComponent {

    render() {
        let monthData = getMonthData();
        let [celebrityData, celebColors] = getCelebrityData();
        let [partyData, partyColors] = getPartyData();
        return (
            <div>
                <h1 className="section-title">Estadísticas</h1>
                <div className="chart">
                    <h2>Número de posts por mes</h2>
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
                        <Bar dataKey="posts" fill="hsl(0, 100%, 75%)"/>
                    </BarChart>
                </div>
                <div className="chart">
                    <h2>Personajes públicos por aparición</h2>
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
                    <PieChart
                        width={700}
                        height={400}
                    >
                        <Pie
                            className="celebrities"
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
 
export default Stats;