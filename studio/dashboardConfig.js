export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de7ee02d07aeb744bbc44fe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-usphx3qp',
                  apiId: 'd74898ce-ae70-40c8-8364-d74de83c58bd'
                },
                {
                  buildHookId: '5de7ee0261371cbcea0cd154',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gghq3ux8',
                  apiId: 'a7721753-f2d2-4f55-ad96-d718972f3a90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pabloregis/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gghq3ux8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
