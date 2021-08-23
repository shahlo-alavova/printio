import React, { Component } from "react";

import { Rnd } from "react-rnd";


const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    width: "100%",
    height: "100%"
};

class imageRes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            activeDrags: 0,
            deltaPosition: {
                x: 0,
                y: 0
            },
            controlledPosition: {
                x: -400,
                y: 200
            },
            items: []
        };
    }
    onItemClick = item => {
        let array = this.state.items;
        array.push({ name: item });
        console.log(array, "array");
        console.log(item, "item");
        this.setState({ items: array });
    };

    onResize = (event, { element, size }) => {
        this.setState({ width: size.width, height: size.height });
    };
    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        const { deltaPosition, controlledPosition } = this.state;
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div
                        className={"col-9 leftPanel"}
                        style={{
                            height: "500px",
                            width: "500px",
                            position: "relative",
                            overflow: "auto",
                            padding: "0"
                        }}
                    >
                        {this.state.items.map((item, i) => {
                            return (
                                <Rnd
                                    style={style}
                                    bounds=".leftPanel"
                                    default={{
                                        x: 0,
                                        y: 0,
                                        width: 100,
                                        height: 100
                                    }}
                                >
                                    <img style={style} src={"../images/" + item.name + ".png"} />
                                </Rnd>
                            );
                        })}
                    </div>
                    <div className={"col-3 rightPanel"}>
                        <div onClick={() => this.onItemClick(1)}>
                            <div className="box item-1">
                                <img src="../images/142-1428097_homer-simpson-png-clipart.png" />
                            </div>
                        </div>
                        <div onClick={() => this.onItemClick(2)}>
                            <div className="box item-2">
                                <img src="../images/142-1428097_homer-simpson-png-clipart.png" />
                            </div>
                        </div>
                        <div onClick={() => this.onItemClick(3)}>
                            <div className="box item-3">
                                <img src="../images/12.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default imageRes;
