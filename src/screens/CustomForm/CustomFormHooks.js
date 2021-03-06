import React from 'react'
import { DragAndDrop } from '@/components';
import '@/styles/DragNDrop.css';



function CustomFormHook() {
    
    const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DROP_DEPTH':
        return { ...state, dropDepth: action.dropDepth }
        case 'SET_IN_DROP_ZONE':
        return { ...state, inDropZone: action.inDropZone };
        case 'ADD_FILE_TO_LIST':
        return { ...state, fileList: state.fileList.concat(action.files) };
        default:
        return state;
    }
    };

    const [data, dispatch] = React.useReducer(
        reducer, { dropDepth: 0, inDropZone: false, fileList: [] }
    )


    return (
        <div>
            <h1 className="App">Drag and Drop</h1>
            <DragAndDrop data={data} dispatch={dispatch}/>
            <ol className="dropped-files">
                {data.fileList.map(f => {
                    return (
                        <li key={f.name}>{f.name}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default CustomFormHook;


