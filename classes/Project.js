const db = require('../config/db');
const Content = require('../classes/Content');

class Project {
  constructor(data) {
    this.id = data.id; // number
    this.profile = data.profile; // number (Foreign key referencing Profile)
    this.title = data.title; // string
    this.description = data.description; // string
    this.order = data.order; // number
    this.created_at = data.created_at; // Date
    this.updated_at = data.updated_at; // Date
  }

  async initialise() {
    await this.getAdditionalData(this.id);
  }

  async getAdditionalData(id) {
    await this.getContentData(id);
  }

  async getContentData(id) {
    this.contentData = await db.select()
      .from('content')
      .where({ project: id, });
  }
}

module.exports = Project;