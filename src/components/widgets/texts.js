import React from "react";
import "./widgets.css"
import car from "./car.png"
import {formatSeconds} from "../utils";

export function BitTitle(props) {
    return (
        <span>{props.text}</span>
    )
}

export function Track(props) {
    let percentage = Math.round(props.percentage);
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    const way = percentage * 0.88 + 12;
    return (
        <div className="progress-track">
            <div className="track">
                <Car percentage={way}/>
            </div>
            <div className="progress-wrapper">
                <span className="progress">{percentage}%</span>
            </div>
        </div>
    )
}

function Car(props) {
    return (
        <div className="car-engine" style={{width: `${props.percentage}%`}}>
            <img className="car" src={car} alt={"car"}/>
        </div>
    );
}

export function Number(props) {
    return (
        <div className="number-wrapper">
            <span className="number"> = {props.value}</span>
        </div>
    )
}

export function Timer(props) {
    const time = formatSeconds(props.time);
    return (
        <div className="timer-wrapper">
            <span className="timer">{time}</span>
        </div>
    )

}