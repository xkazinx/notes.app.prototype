class Document {
    constructor(json) {
        this.id = json.id;
        this.name = json.name;
        this.created_at = json.created_at;
        this.updated_at = json.updated_at;
    }
}

export default Document;