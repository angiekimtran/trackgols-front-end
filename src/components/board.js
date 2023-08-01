import React from "react";
import { useState, useEffect } from "react";

import Column from "./column"
import { getColumns, deleteColumn } from "../api/columns"
import { getBoard } from "../api/boards"

const Board = ({ boardID, refetchBoard }) => {
    const [columns, setColumns] = useState({});
    const [board, setBoard] = useState({});

    const refetchColumns = async () => {
        const retrieveColumns = await getColumns(boardID);
        setColumns(retrieveColumns);
    };

    const fetchBoard = async () => {
        const selectedBoard = await getBoard(boardID);
        setBoard(selectedBoard);
    };

    const onDeleteColumn = () => {
        deleteColumn(boardID).then(() => {
            refetchBoard();
            setColumns({});
            setBoard({});
        });
    };

    useEffect(() => {
        if (boardID) {
            fetchBoard();
            refetchColumns();
        }
    });

    return (
        <section className="board">
            <div>
                <button className="delete-column" onClick={onDeleteColumn}>X</button>)
            </div>
            <h2 className="board-text-title">{board?.title}</h2>
            <div className="board-container">
                <ul className="ul-cards">
                    {columns &&
                        columns.map((column) => (
                            <Column
                                key={column._id}
                                id={column._id}
                                refetchColumns={refetchColumns}
                            />
                        ))}
                </ul>
            </div>
        </section>
    );
};

export default Board;