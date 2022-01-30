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

            const document = new Document(respolocalnse.data);

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
        }
        catch (error) {
            console.log("Fetch failed with error", error.response);
        }
    }

    const onDocumentItemKeyDown = async (e) =>
    { 
        if (e.key === 'Tab')
        {
            // supongo q aca hay que hacer controller / route para documentItems.save?
            // o lo haria el controller de documents
            // entonces hacer controller de documentitems? por ahora mandalo en el que tenemos

            // Update current item
            const response = await axios.post(
                `documents/${document.id}/item/update/${e.currentTarget.id}`, 
                { 
                    'content': e.currentTarget.textContent 
                }
            );

            if (e.currentTarget.id == documentItems.length - 1)
            {
                console.log("SE");
                
                // Create new item
                /*const response = await axios.post(
                    `documents/${document.id}/item/save`, 
                    { 
                        'content': e.currentTarget.textContent 
                    }
                );*/
            }
        }
    }

    const onNewDocumentItem = () =>
    {
        setDocumentItems(documentItems => [...documentItems, { data : `New item ${documentItems.length}` }]);
    }

    const NewDocumentItemButton = () =>
    { 
        return (<button onClick={onNewDocumentItem} className="btn btn-primary">+</button>)
    }

    const DocumentItems = () =>
    { 
        useEffect(() => 
        {

        }, [documentItems]);

        const style =
        {
            backgroundColor: 'white',
            display: "block",
            width: "100%",
            border: '1px solid rgba(0, 0, 0, .25)',
        };

        return (<div>{documentItems}</div>)
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
                    {
                    documentItems.map((item, idx, arr) =>( 
                        <div onKeyDown={onDocumentItemKeyDown} key={idx} contentEditable>{item.data}</div>
                    ))
                    } 
                    <NewDocumentItemButton />
                </div>
                
            </div>

        </div>
    );
}

export default Sidebar;