const db = require('../config/db');

class Profile {
  constructor(data) {
    this.id = data.id; // number
    this.full_name = data.full_name; // string
    this.personal_summary = data.personal_summary; // string
    this.picture_link = data.picture_link; // string
    this.job_title = data.job_title; // string
    this.cv_link = data.cv_link; // string
    this.phone_number = data.phone_number; // string
    this.email_address = data.email_address; // string
    this.post_address = data.post_address; // string
    this.created_at = data.created_at; // Date
    this.updated_at = data.updated_at; // Date
  }

  async initialise() {
    await this.getAdditionalData(this.id);
  }

  async getAdditionalData(id) {
    await this.getProjectData(id);
    await this.getContentData(id);
    await this.getReferenceData(id);
  }

  async getProjectData(id) {
    this.projectData = await db.select()
      .from('project')
      .where({
        profile: id,
      })
      .orderBy('order');
  }

  async getContentData(id) {
    this.contentData = await db.select()
      .from('content')
      .where({
        profile: id,
        project: null
      })
      .orderBy('order');
  }

  async getReferenceData(id) {
    this.referenceData = await db.select()
      .from('reference')
      .where({ profile: id });
  }
}

module.exports = Profile;