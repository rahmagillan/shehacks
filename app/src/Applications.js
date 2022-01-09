// TUTORIAL CREDIT: https://codesandbox.io/s/jovial-leakey-i0ex5?file=/src/App.js

import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'

export default function Applications(props) {
    const [columns, setColumns] = useState({
        '0': {
          name: "Ready To Apply",
          items: []
        },
        '1': {
          name: "Applied",
          items: []
        },
        '2': {
          name: "Interview",
          items: []
        },
        '3': {
          name: "Selected",
          items: []
        }
      })

    useEffect(() => {
        if (props.data) {
            let cols = {
                '0': {
                  name: "Ready To Apply",
                  items: []
                },
                '1': {
                  name: "Applied",
                  items: []
                },
                '2': {
                  name: "Interview",
                  items: []
                },
                '3': {
                  name: "Selected",
                  items: []
                }
              }
            Object.keys(props.data).map((key) => {
                let newObj = props.data[key]
                newObj['id'] = key
                cols[props.data[key]['stage']].items.push(newObj)
                return 0
            })
            setColumns(cols)
        }
    }, [props.data])
    
    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
            });
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    padding: "1em",
                    paddingTop: "2em",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={columnId}
                >
                  <Typography variant='h6'>{column.name}<Badge style={{ marginLeft: "100px" }} badgeContent={column.items.length} color="primary"/></Typography>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "#efefef",
                              padding: 4,
                              width: 250,
                              minHeight: 500
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#eeeeee"
                                            : "#fafafa",
                                          color: "white",
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        <ListItem 
                                            alignItems="flex-start"
                                        >
                                            <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" src={item.avatar} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.company}
                                                secondary={item.date}
                                            />
                                        </ListItem>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
    )
}
