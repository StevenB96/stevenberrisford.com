const types = require('../constants/types');


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('content')
    .where({
      title: 'Dating App (production)',
      content_type: types.PROJECT_CONTENT_TYPE
    })
    .update({
      order: 2
    });

  await knex('content')
    .where({
      title: 'Public Information App (production)',
      content_type: types.PROJECT_CONTENT_TYPE
    })
    .update({
      order: 1
    });

  await knex('content')
    .where({
      title: 'Movie Predictor (prototype)',
      content_type: types.PROJECT_CONTENT_TYPE
    })
    .update({
      order: 4
    });

  await knex('content')
    .where({
      title: 'Diagram Optimiser (prototype)',
      content_type: types.PROJECT_CONTENT_TYPE
    })
    .update({
      order: 5
    });

  await knex('content')
    .where({
      title: 'Web Library (prototype)',
      content_type: types.PROJECT_CONTENT_TYPE
    })
    .update({
      order: 6
    });

  await knex('content')
    .where({
      title: 'Terraform Visualiser (prototype)',
      content_type: types.PROJECT_CONTENT_TYPE
    })
    .update({
      order: 7
    });

  await knex('content')
    .where({
      title: 'Shared Whiteboard (prototype)',
      content_type: types.PROJECT_CONTENT_TYPE
    })
    .update({
      order: 8
    });

  await knex('content')
    .where({
      title: 'React/Express Boilerplate',
      content_type: types.PROJECT_CONTENT_TYPE
    })
    .update({
      order: 3
    });

  await knex('content')
    .where({
      title: 'Choir',
      content_type: types.HOBBY_CONTENT_TYPE
    })
    .update({
      order: 1
    });

  await knex('content')
    .where({
      title: 'Dance',
      content_type: types.HOBBY_CONTENT_TYPE
    })
    .update({
      order: 2
    });

  await knex('content')
    .where({
      title: 'Piano',
      content_type: types.HOBBY_CONTENT_TYPE
    })
    .update({
      order: 3
    });

  await knex('content')
    .where({
      title: 'Robot Combat',
      content_type: types.HOBBY_CONTENT_TYPE
    })
    .update({
      order: 4
    });

  await knex('content')
    .where({
      title: 'Decision Tree Guide',
      content_type: types.ARTICLE_CONTENT_TYPE
    })
    .update({
      order: 3
    });

  await knex('content')
    .where({
      title: 'My Full Stack Development Portfolio 2023',
      content_type: types.ARTICLE_CONTENT_TYPE
    })
    .update({
      order: 1
    });

  await knex('content')
    .where({
      title: 'Extract From My Masters Project Individual Report',
      content_type: types.ARTICLE_CONTENT_TYPE
    })
    .update({
      order: 2
    });

  await knex('content')
    .where({
      title: '2PD Article',
      content_type: types.WEB_CONTENT_TYPE
    })
    .update({
      order: 1
    });

  await knex('content')
    .where({
      title: 'BARE Dating Article',
      content_type: types.WEB_CONTENT_TYPE
    })
    .update({
      order: 2
    });

  await knex('content')
    .where({
      title: 'Foreign Ministry of Oman Google Play',
      content_type: types.WEB_CONTENT_TYPE
    })
    .update({
      order: 3
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.rollback = async function (knex) {
  await knex('content').update('order', null);
};
