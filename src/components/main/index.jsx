import React, { useState, useContext } from "react";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import Card from "../../components/card"
import CardS from "../../components/card2"
import Board from "../../components/board";
import StoreApi from '../../utils/storeApi';


function Index() {
    const { data, addMoreCard, addMoreList, updateListTitle, setData, onDragEnd } = useContext(StoreApi);
    return (
        
        
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={uuid()} type="list" direction="horizontal">
                {(provided) => (
                    <main ref={provided.innerRef} {...provided.droppableProps} className="w-auto mt-87 h-screen flex xl:ml-91 2xl:ml-96 overflow-auto ">
                        {data.listIds.map((listId, index) => {
                            const list = data.lists[listId];
                            return <Board list={list} key={listId} index={index} />
                        })}
                        {provided.placeholder}
                    </main>
                )}
            </Droppable>
        </DragDropContext>
        
    )
}



export default Index;


