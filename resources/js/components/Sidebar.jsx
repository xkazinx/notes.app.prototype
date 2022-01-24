import axios from 'axios';
import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import File from '../models/File';


function Sidebar(props) {
    const [files, setFiles] = useState([]);

    useEffect(() => onFetchFiles(), []);

    const onFetchFiles = async () => {
        try {
            const response = await axios.get('files');

            setFiles(response.data.map(json => new File(json)));
        }
        catch (error) {
            console.log("Fetch failed with error", error.response.data);
        }
    };

    const onCreateButtonClick = async () => {
        try {
            const name = prompt("Insert the file's name");

            const response = await axios.post('files', { name });

            const files = new File(response.data);

            onFetchFiles();

            // TODO Move this to the store
        }
        catch (error) {
            console.log("Creation failed with error", error.response.data);
        }
    }

    const onOpenFile = async (file) => {
        try {
            const response = await axios.get(`files/${file.id}`);

            console.log(response.data);
        }
        catch (error) {
            console.log("Fetch failed with error", error.response.data);
        }
    }

    const ListItems = () =>
    { 
        const style =
        {
            backgroundColor: 'white',
            display: "block",
            width: "100%",
            border: '1px solid rgba(0, 0, 0, .25)',
        };

        let list = [];

        for(let i = 0; i < 100; ++i)
        {
            list.push(<div key={i} style={style} contentEditable></div>); 
        }

        return (<div>{list}</div>)
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={onCreateButtonClick}>
                Create list
            </button>
            <div className="row">
                <div className="col-3">
                    <ul>

                        {files.map(file =>(  // ahi busco la property
                        <li style={{listStyleType: 'none'}} key={file.id}>
                            <button className='btn btn-block btn-link'
                                onClick={() => onOpenFile(file)}>{file.name}
                            </button>
                        </li>)
                        )} 

                    </ul>
                </div>
                <div className="col-9">
                    <ListItems />
                </div>
            </div>

        </div>
    );
}

export default Sidebar;