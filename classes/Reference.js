class Reference {
  constructor(data) {
      this.id = data.id; // number
      this.profile = data.profile; // number (Foreign key referencing Profile)
      this.author = data.author; // string
      this.role = data.role; // string
      this.organisation = data.organisation; // string
      this.text = data.text; // string
      this.order = data.order; // number
      this.created_at = data.created_at; // Date
      this.updated_at = data.updated_at; // Date
  }
}

module.exports = Reference;