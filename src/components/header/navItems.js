const navItems = [
    { label: 'About', id: 'about', offsetMobile: -50, offsetDesktop: -84 },
    {
        label: 'Services',
        id: 'services',
        offsetMobile: -80,
        offsetDesktop: -84,
        children: [
            {
                id: 1,
                label: 'Internet and Digital Marketing',
            },
            {
                id: 2,
                label: 'Technical Support Services',
            },
            {
                id: 3,
                label: 'IT Performance Management',
            },
            {
                id: 4,
                label: 'Software Engineering',
            },
            {
                id: 5,
                label: 'SMME Services',
            },
        ],
    },
    {
        label: 'Ownership',
        id: 'ownership',
        offsetMobile: -50,
        offsetDesktop: -84,
    },
    {
        label: 'Partners',
        id: 'partners',
        offsetMobile: -50,
        offsetDesktop: -84,
    },
    {
        label: 'The Future',
        id: 'future',
        offsetMobile: -50,
        offsetDesktop: -50,
    },
    {
        label: 'Contact Us',
        id: 'contact',
        offsetMobile: -50,
        offsetDesktop: -50,
    },
];

export default navItems;
