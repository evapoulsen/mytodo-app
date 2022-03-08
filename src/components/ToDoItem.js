import React from "react";
import { Container, Row } from "react-bootstrap";
import { InfoTodo } from '../data/data';

const ToDoItems = () => {
    return (
        <Container className="contCenter"> {InfoTodo.map((data, key) => {
            return (
                <Row className="listItem" key={key}>
                    <div className="col-1 col-md-1 text-end"><input type="checkbox" /></div>
                    <div className="col-11 col-md-11 align-middle">
                        <p>
                            <strong>{data.todo}</strong> <br />
                            {data.why} <br />
                            <em>{data.where}</em>
                        </p>
                    </div>
                </Row>
            );
        })}
        </Container>        
    );
};

export default ToDoItems;