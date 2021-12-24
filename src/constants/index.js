import P1Img1 from '../assets/images/projects/01_CovMo/reporting.png';
import P1Img2 from '../assets/images/projects/01_CovMo/geo.png';
import P1Img3 from '../assets/images/projects/01_CovMo/callwindow.png';
import P2Img1 from '../assets/images/projects/02_ETL_Scheduling/graph.png';
import P2Img2 from '../assets/images/projects/02_ETL_Scheduling/dashboard.png';
import P3Img1 from '../assets/images/projects/03_Intention_Mining/cluster.png';
import P3Img2 from '../assets/images/projects/03_Intention_Mining/network.png';
import P4Img1 from '../assets/images/projects/04_Medical_Knowledge/network.png';
import P4Img2 from '../assets/images/projects/04_Medical_Knowledge/chord.png';
import P5Img1 from '../assets/images/projects/05_Healthcare_Map/map.png';
import P6Img1 from '../assets/images/projects/06_Epidemic_Map/map1.png';
import P6Img2 from '../assets/images/projects/06_Epidemic_Map/map2.png';
import P6Img3 from '../assets/images/projects/06_Epidemic_Map/map3.png';
import P7Img1 from '../assets/images/projects/07_Fashion_Style/home.png';
import P7Img2 from '../assets/images/projects/07_Fashion_Style/option.png';
import P7Img3 from '../assets/images/projects/07_Fashion_Style/dressup.png';
import P8Img1 from '../assets/images/projects/08_Space_Shooter/scene.png';
import P8Img2 from '../assets/images/projects/08_Space_Shooter/win.png';

export const navbarData = [
    {
        id: 'about',
        name: 'ABOUT',
        href: '#about',
    },
    {
        id: 'experience',
        name: 'EXPERIENCE',
        href: '#experience',
    },
    {
        id: 'projects',
        name: 'PROJECTS',
        href: '#projects',
    },
    {
        id: 'contact',
        name: 'CONTACT',
        href: '#contact',
    },
];

export const projectData = [
    {
        id: '',
        name: '',
        desc: '',
        type: '',
        role: '',
        tech: [],
        link: '',
        imgs: [],
    },
    {
        id: '01',
        name: 'CovMo',
        desc: 'A large-scale telecom data analytics platform to provide geo-location, network optimization solutions, and mobility insights.',
        type: 'WEB APP',
        role: 'Front-end Engineer @ Groundhog Technologies',
        tech: ['TypeScript', 'React Hooks', 'Redux', 'Styled-Components', 'MapBox'],
        link: '',
        imgs: [P1Img1, P1Img2, P1Img3],
    },
    {
        id: '02',
        name: 'ETL Scheduling',
        desc: 'A prototype dashboard to overview the data flow of ETL jobs with timeline charts and dynamic graphs.',
        type: 'WEB APP',
        role: 'Data Engineer @ Cathay Financial Holdings',
        tech: ['JavaScript', 'D3', 'Bootstrap'],
        link: '123',
        imgs: [P2Img1, P2Img2],
    },
    {
        id: '03',
        name: 'Intention Mining',
        desc: 'A visual tool for viewing the online intentions that mining from website URL tags using clustering methods.',
        type: 'WEB APP',
        role: 'Data Engineer @ Cathay Financial Holdings',
        tech: ['JavaScript', 'D3', 'Bootstrap'],
        link: '123',
        imgs: [P3Img1, P3Img2],
    },
    {
        id: '04',
        name: 'Medical Knowledge',
        desc: 'An innovative data visualization platform to control the mining association rules from the massive medical dataset.',
        type: 'WEB APP',
        role: 'Web Developer Intern @ Delta Electronics',
        tech: ['JavaScript', 'D3'],
        link: '123',
        imgs: [P4Img1, P4Img2],
    },
    {
        id: '05',
        name: 'Healthcare Map',
        desc: 'An information retrieval system based on the map for searching millions of Taiwan healthcare data.',
        type: 'WEB APP',
        role: 'Web Developer Intern @ Delta Electronics',
        tech: ['JavaScript', 'D3', 'jQuery', 'PHP', 'SQL', 'LeafLet'],
        link: '123',
        imgs: [P5Img1],
    },
    {
        id: '06',
        name: 'Epidemic Map',
        desc: 'A map visualization system to analyze disease trends and forecast epidemics from crawled PTT public opinion articles.',
        type: 'WEB APP',
        role: 'Postgraduate @ NCCU CS',
        tech: ['JavaScript', 'Python', 'Django', 'D3'],
        link: '123',
        imgs: [P6Img1, P6Img2, P6Img3],
    },
    {
        id: '07',
        name: 'Fashion Style',
        desc: 'A clothing recommendation system that recommends products using styles and popularity learned from online fashion data.',
        type: 'WEB APP',
        role: 'Postgraduate @ NCCU CS',
        tech: ['JavaScript', 'Python', 'Django', 'PostgresDB'],
        link: '123',
        imgs: [P7Img1, P7Img2, P7Img3],
    },
    {
        id: '08',
        name: 'Space Shooter',
        desc: 'A first-person shooter game with space animation materials.',
        type: '3D Game',
        role: 'Postgraduate @ NCCU CS',
        tech: ['C#', 'Unity'],
        link: '123',
        imgs: [P8Img1, P8Img2],
    },
    {
        id: '',
        name: '',
        desc: '',
        type: '',
        role: '',
        tech: [],
        link: '',
        imgs: [],
    },
];
