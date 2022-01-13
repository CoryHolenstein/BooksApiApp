import React from "react";
import Form from "react-bootstrap/Form";
import classNames from "classnames";



export default function List({ items, currentView, onToggleCurrentView }) {
    const isDetailedView = currentView === "grid";

    return (
        <div>
            <div className="fixed-nav">
                <h3>Showing items as a {currentView}</h3>
                <Form.Check
                    checked={isDetailedView}
                    onChange={onToggleCurrentView}
                    type="switch"
                    id="show-details"
                    label="Show details"
                />
            </div>

            <div className={classNames("list", { "list-grid": isDetailedView })}>
                {items.map(item => (
                    <div className="list-item" key={item.volumeInfo}>
                        {isDetailedView && (
                            <img
                                src={item.img}
                                alt={item.title}
                                className="list-item-image"
                            />
                        )}
                        <h3>{item.title}</h3>
                        {isDetailedView && (
                            <p className="list-item-description">{item.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
