import React, { useContext } from "react";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Board from "../../components/board";
import StoreApi from '../../utils/storeApi';


function Index() {
    const { data, onDragEnd } = useContext(StoreApi);
    return (

        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="app" type="list" direction="horizontal">
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


