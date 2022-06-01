export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ]
}