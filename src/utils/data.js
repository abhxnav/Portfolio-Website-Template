import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Language } from '@mui/icons-material';
import { SkypeFilled } from '@ant-design/icons';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Your Name Here...',
    title: 'Your Title Here...',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png', // [put in the link to your Display Picture.]

    dob: 'Your DOB Here...',
    email: 'Your E-mail Here...',
    location: 'Your Location Here...',
    phone: 'Your Ph. No. Here...',
    address: 'Your Address Here...',

    about: "Your Bio Here...",

    resume: 'https://example.com',  // [put in the link to your resume.]

    whatsApp: {
        link: 'https://api.whatsapp.com/send?phone={Your Phone Number}',
        icon: <WhatsAppIcon />,
    },

    socials: {
        github: {
            link: 'https://example.com', // [Your GitHub URL Here...]
            text: 'Your Github Username Here...',
            icon: <GitHubIcon />,
        },
        linkedIn: {
            link: 'https://example.com', // [Your LinkedIn URL Here...]
            text: 'Your LinkedIn Username Here...',
            icon: <LinkedInIcon />,
        },
        skype: {
            link: 'https://example.com', // [Your Skype URL Here...]
            text: 'Your Skype Username Here...',
            icon: <SkypeFilled />,
        },
    },

    education: [
        {
            title: '{Course} - {Institute}',
            date: '{Duration}',
            description: 'Description....',
        },
        {
            title: '{Course} - {Institute}',
            date: '{Duration}',
            description: 'Description....',
        },
        {
            title: '{Course} - {Institute}',
            date: '{Duration}',
            description: 'Description....',
        },
    ],

    experience: [
        {
            title: '{Title} - {Organization}',
            date: '{Duration}',
            description: 'Description....',
        },
        {
            title: '{Title} - {Organization}',
            date: '{Duration}',
            description: 'Description....',
        },
        {
            title: '{Title} - {Organization}',
            date: '{Duration}',
            description: 'Description....',
        },
    ],

    skills: [
        {
            title: 'SKILL TAG 1',
            description: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]
        },
        {
            title: 'SKILL TAG 2',
            description: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]
        },
        {
            title: 'SKILL TAG 3',
            description: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]
        },
        {
            title: 'SKILL TAG 4',
            description: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]
        },
    ],

    projects: [
        {
            tag: 'Tag 1',
            images: [
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
            ], // [put in the links to your Project Display Pictures.]
            title: 'Tag 1 Project 1',
            caption: 'Project Caption Here...',
            description: 'Project Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        },
        {
            tag: 'Tag 1',
            images: [
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
            ], // [put in the links to your Project Display Pictures.]
            title: 'Tag 1 Project 2',
            caption: 'Project Caption Here...',
            description: 'Project Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        },
        {
            tag: 'Tag 2',
            images: [
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
            ], // [put in the links to your Project Display Pictures.]
            title: 'Tag 2 Project 1',
            caption: 'Project Caption Here...',
            description: 'Project Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        },
        {
            tag: 'Tag 3',
            images: [
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
            ], // [put in the links to your Project Display Pictures.]
            title: 'Tag 3 Project 1',
            caption: 'Project Caption Here...',
            description: 'Project Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        },
        {
            tag: 'Tag 3',
            images: [
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
            ], // [put in the links to your Project Display Pictures.]
            title: 'Tag 3 Project 2',
            caption: 'Project Caption Here...',
            description: 'Project Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        },
        {
            tag: 'Tag 1',
            images: [
                'https://rb.gy/hv6lh8',
                'https://rb.gy/hv6lh8',
            ], // [put in the links to your Project Display Pictures.]
            title: 'Tag 1 Project 3',
            caption: 'Project Caption Here...',
            description: 'Project Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <GitHubIcon />
                },
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        },
    ],

    blogs: [
        {
            image: 'https://rb.gy/hv6lh8', // [put in the link to your Blog's Display Picture.]
            title: 'Blog 1',
            caption: 'Blog Caption Here...',
            description: 'Blog Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        },
        {
            image: 'https://rb.gy/hv6lh8', // [put in the link to your Blog's Display Picture.]
            title: 'Blog 2',
            caption: 'Blog Caption Here...',
            description: 'Blog Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        },
        {
            image: 'https://rb.gy/hv6lh8', // [put in the link to your Blog's Display Picture.]
            title: 'Blog 3',
            caption: 'Blog Caption Here...',
            description: 'Blog Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        },
        {
            image: 'https://rb.gy/hv6lh8', // [put in the link to your Blog's Display Picture.]
            title: 'Blog 4',
            caption: 'Blog Caption Here...',
            description: 'Blog Description Here...',
            links: [
                {
                    link: 'https://example.com/',
                    icon: <Language />
                },
            ]
        }
    ]
} 