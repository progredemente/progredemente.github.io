import React, { Component } from 'react';
import './CalendarGraph.css';
import { formatDate } from '../../common/utils';
 
class CalendarGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.daysOffset = ((new Date(`${this.props.year}-01-01T00:00`)).getDay() + 6) % 7;
        const data = [...this.props.data]
        data.unshift(...new Array(this.daysOffset).fill(null));
        this.weeks = data.reduce((acc, val, index) => {
            if(index % 7 === 0) {
                acc.push([]);
            }
            acc[acc.length - 1].push(val);
            return acc;
        }, []);
    }

    getColor(numPosts) {
        if(numPosts !== null) {
            if(numPosts === 0) {
                return 'white';
            }
            const s = (1 - numPosts/this.props.max) * 60;
            const v = (numPosts/this.props.max) * 60;
            return `hwb(150deg ${s}% ${v}%)`;
        }
        return 'transparent';
    }

    render() {
        return (
            <div>
                <div>{this.props.year}</div>
                <div className='calendar-graph'>
                    {
                        this.weeks.map((week, weekIndex) => {
                            return (
                                <div key={weekIndex} className='calendar-week'>
                                    {
                                        week.map((day, dayIndex) => {
                                            const date = new Date(`${this.props.year}-01-01T00:00`);
                                            date.setDate(date.getDate() + dayIndex + weekIndex * 7 - this.daysOffset || 0);
                                            const title = day !== null ? `${day} - ${formatDate(date)}` : null;
                                            return (
                                                <div 
                                                    key={dayIndex} 
                                                    className='calendar-day'
                                                    title={title}
                                                    style={
                                                        {
                                                            backgroundColor: this.getColor(day),
                                                            borderColor: day !== null ? 'lightgray' : 'transparent'
                                                        }
                                                    }
                                                >
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
 
export default CalendarGraph;