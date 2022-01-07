import axios from 'axios';
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

    return (
        <div>
            <button className="btn btn-primary" onClick={onCreateButtonClick}>
                Create list
            </button>

            {files.map(file => <div key={file.id}>{file.name}</div>)}
        </div>
    );
}

export default Sidebar;