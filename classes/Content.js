class Content {
  constructor(data) {
      this.id = data.id; // number
      this.project = data.project; // number (Foreign key referencing Project)
      this.profile = data.profile; // number (Foreign key referencing Profile)
      this.title = data.title; // string
      this.description = data.description; // string
      this.media_id = data.media_id; // string
      this.media_link = data.media_link; // string
      this.media_type = data.media_type; // string
      this.type = data.type; // string
      this.order = data.order; // number
      this.created_at = data.created_at; // Date
      this.updated_at = data.updated_at; // Date
  }
}

module.exports = Content;