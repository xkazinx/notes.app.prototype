import axios from 'axios';
import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import Document from '../models/Document';


function Sidebar(props) {
    const [documents, setDocuments] = useState([]);
    const [documentItems, setDocumentItems] = useState([]);

    useEffect(() => onFetchDocuments(), []);

    const onFetchDocuments = async () => {
        try {
            const response = await axios.get('documents');

            setDocuments(response.data.map(json => new Document(json)));
        }
        catch (error) {
            console.log("Fetch failed with error", error.response.data);
        }
    };

    const onCreateButtonClick = async () => {
        try {
            const name = prompt("Insert the document's name");

            const response = await axios.post('documents', { name });

            const document = new Document(response.data);

            onFetchDocuments();

            // TODO Move this to the store
        }
        catch (error) {
            console.log("Creation failed with error", error.response.data);
        }
    }

    const onOpenDocument = async (document) => {
        try {
            const response = await axios.get(`documents/${document.id}`);
            console.log(documentItems);
            setDocumentItems([{ "asd": "asd2" }]);
            
            console.log(documentItems);
        }
        catch (error) {
            console.log("Fetch failed with error", error.response);
        }
    }

    const DocumentItems = () =>
    { 
        const style =
        {
            backgroundColor: 'white',
            display: "block",
            width: "100%",
            border: '1px solid rgba(0, 0, 0, .25)',
        };

        let items = [];

        for(let i = 0; i < 100; ++i)
        {
            items.push(<div key={i} style={style} contentEditable></div>); 
        }

        return (<div>{items}</div>)
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={onCreateButtonClick}>
                Create document
            </button>
            <div className="row">
                <div className="col-3">
                    <ul>

                        {documents.map(document =>(  // ahi busco la property
                        <li style={{documentStyleType: 'none'}} key={document.id}>
                            <button className='btn btn-block btn-link'
                                onClick={() => onOpenDocument(document)}>{document.name}
                            </button>
                        </li>)
                        )} 

                    </ul>
                </div>
                <div className="col-9">
                    <DocumentItems />
                </div>
            </div>

        </div>
    );
}

export default Sidebar;