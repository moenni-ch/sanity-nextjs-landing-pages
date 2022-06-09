export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62a1ed8ff76e9e7dc1d5a9af',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m33s2rdz',
                  apiId: '90b1b217-b4b0-4d1c-8103-9acb7fe30266'
                },
                {
                  buildHookId: '62a1ed8f20f65d7be335660c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kasy4ko3',
                  apiId: '213c69a9-f80f-4480-8703-55f7b7b8e5e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moenni-ch/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kasy4ko3.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
