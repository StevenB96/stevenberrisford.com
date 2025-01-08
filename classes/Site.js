class Site {
  constructor(data) {
      this.id = data.id; // number
      this.banner_text = data.banner_text; // string
      this.description = data.description; // string
      this.background_image_link = data.background_image_link; // string
      this.project_background_image_link = data.project_background_image_link; // string
      this.article_background_image_link = data.article_background_image_link; // string
      this.hobby_background_image_link = data.hobby_background_image_link; // string
      this.created_at = data.created_at; // Date
      this.updated_at = data.updated_at; // Date
  }
}

module.exports = Site;