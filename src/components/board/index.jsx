import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from '../../components/card'
const index = ({ list, index }) => {
    
    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}   className="my w-1/4  overflow-visible rounded-md bg-gray-150 mr-5 flex flex-col  flex-shrink-0  flex-grow items-center">
                    
                        <h2 className="text-gray-400 font-bold m-4 self-start">{list.title}</h2>
                        <Droppable droppableId={list.id}  >
                            {(provided) => (
                                <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="flex flex-col h-screen my-width rounded-md bg-gray-150  flex-grow"
                                >

                                    {list.cards.map((card, index) => (
                                        <Card key={card.id} card={card} index={index} />
                                        ))}

                                        {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
            )}
        </Draggable>
    )
}

export default index


