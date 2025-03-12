import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const firstDayOnTwitter = new Date("2020-03-15T00:00")

function restartStoredData() {
    let currentYear = (new Date()).getFullYear();
    let data = {
        archiveYears: Array.from({ length: currentYear - 2019 }, (_, i) => i + 2020).reduce((acc, year) => ({...acc, [year + '']: year === currentYear }), {})
    };
    window.localStorage.setItem('web', JSON.stringify(data));
    return data;
}

function getStoredData() {
    let data = window.localStorage.getItem('web');
    if(!data) {
        return restartStoredData();
    }
    return JSON.parse(data);
}

export function formatDate(date) {
    return `${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
}

export function getNextDayForX(date) {
    date.setDate(date.getDate() + 1);
    if(date.getTime() < firstDayOnTwitter.getTime()) date = firstDayOnTwitter;
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
}

export function getStoredValue(key) {
    let data = getStoredData();
    if(!(key in data)){
        data = restartStoredData();
    }
    return data[key];

}

export function setStoredValue(key, value) {
    let data = getStoredData();
    data[key] = value;
    window.localStorage.setItem('web', JSON.stringify(data));
}

export function withParams(Component) {
    return (props) => {
        return <Component {...props} params={useParams()}/>
    }
}

export function withNavigate(Component) {
    return (props) => {
        return <Component {...props} navigate={useNavigate()}/>
    }
}
