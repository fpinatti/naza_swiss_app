import { Event, Ministry, StaffMember, DailyVerse } from './types';

export const CHURCH_NAME = "Igreja do Nazareno Swiss Park";
export const CHURCH_TAGLINE = "Sua igreja, seu lar.";

export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Cultos',
    date: 'Todos os domingos',
    time: '10:00 e 19:30',
    location: 'Templo principal',
    description: 'Join us for a time of worship and teaching. Coffee and fellowship before service starts.',
    imageUrl: 'https://picsum.photos/800/400?random=1',
    category: ''
  },
  {
    id: '2',
    title: 'Encontro de Oração',
    date: 'Todas as quintas',
    time: '19:30',
    location: 'Templo principal',
    description: 'High school students are invited for an evening of games, pizza, and small groups.',
    imageUrl: 'https://picsum.photos/800/400?random=2',
    category: ''
  },
  {
    id: '3',
    title: 'Community Outreach',
    date: 'Saturday, Nov 4',
    time: '9:00 AM - 12:00 PM',
    location: 'Downtown Center',
    description: 'Serving our city by distributing food packages to those in need.',
    imageUrl: 'https://picsum.photos/800/400?random=3',
    category: ''
  },
  {
    id: '4',
    title: 'Mid-Week Bible Study',
    date: 'Wednesdays',
    time: '6:30 PM - 8:00 PM',
    location: 'Room 204 & Online',
    description: 'A deep dive into the book of Romans. Open to all ages.',
    imageUrl: 'https://picsum.photos/800/400?random=4',
    category: ''
  }
];

export const STAFF: StaffMember[] = [
  {
    id: 's1',
    name: 'Rev. David Miller',
    role: 'Senior Pastor',
    imageUrl: 'https://picsum.photos/200/200?random=10',
    bio: 'Pastor David has been leading Grace Valley for over 10 years with a passion for biblical teaching.'
  },
  {
    id: 's2',
    name: 'Sarah Jenkins',
    role: 'Worship Leader',
    imageUrl: 'https://picsum.photos/200/200?random=11',
    bio: 'Sarah leads our worship team and directs the choir, bringing a spirit of excellence to our services.'
  },
  {
    id: 's3',
    name: 'Mark Thompson',
    role: 'Youth Pastor',
    imageUrl: 'https://picsum.photos/200/200?random=12',
    bio: 'Mark loves connecting with students and helping them navigate life with faith.'
  }
];

export const MINISTRIES: Ministry[] = [
  {
    id: 'm1',
    title: 'Kids Kingdom',
    description: 'Sunday school programs for ages 3-12.',
    details: 'Our Kids Kingdom provides a safe and fun environment for children to learn about Jesus. We have age-appropriate classes: Nursery (0-2), Toddlers (3-5), and Elementary (6-12). All our volunteers are background-checked and passionate about kids ministry.',
    iconName: 'Baby'
  },
  {
    id: 'm2',
    title: 'Small Groups',
    description: 'Connect with others in home-based gatherings.',
    details: 'Small groups are the heartbeat of our church. Meeting weekly in homes across the city, these groups provide a space for deep fellowship, Bible study, and prayer. We have groups for couples, singles, men, women, and mixed demographics.',
    iconName: 'Users'
  },
  {
    id: 'm3',
    title: 'Worship Team',
    description: 'Music and arts ministry opportunities.',
    details: 'The Worship Team leads our congregation in praise every Sunday. If you are a musician, vocalist, or interested in technical production (sound, lights, video), we would love to have you audition. Rehearsals are held on Thursday evenings.',
    iconName: 'Music'
  },
  {
    id: 'm4',
    title: 'Missions',
    description: 'Supporting global and local outreach.',
    details: 'We believe in the Great Commission. Our missions ministry supports missionaries in 5 different countries and organizes annual short-term trips. Locally, we partner with food banks and homeless shelters to serve our neighbors.',
    iconName: 'Globe'
  },
  {
    id: 'm5',
    title: 'Prayer',
    description: 'Join our weekly prayer meetings.',
    details: 'Prayer is the foundation of everything we do. Join us on Tuesday mornings at 6:00 AM or Wednesday nights at 7:00 PM for corporate prayer. We also have a prayer chain for urgent needs within the body.',
    iconName: 'HandsPraying'
  },
  {
    id: 'm6',
    title: 'Volunteer',
    description: 'Find a place to serve.',
    details: 'There is a place for everyone to serve at Grace Valley. From greeting newcomers at the door to making coffee, teaching kids, or helping with building maintenance, your gifts can make a difference. Sign up to join a team today!',
    iconName: 'HeartHandshake'
  }
];

export const DAILY_VERSES: DailyVerse[] = [
  {
    id: 'v0',
    date: '2023-01-01', // Fallback date (very old)
    text: '"Porque eu bem sei os planos que estou projetando para vós", diz o Senhor; "planos de paz, e não de mal, para vos dar um futuro e uma esperança."',
    reference: 'Jeremias 29:11'
  },
  {
    id: 'v1',
    date: '2024-03-10',
    text: '"O Senhor é o meu pastor; de nada terei falta."',
    reference: 'Salmos 23:1'
  },
  {
    id: 'v2',
    date: '2024-03-11',
    text: '"Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas."',
    reference: 'Mateus 6:33'
  },
  {
    id: 'v3',
    date: '2024-03-12',
    text: '"Tudo posso naquele que me fortalece."',
    reference: 'Filipenses 4:13'
  },
  {
    id: 'v4',
    date: '2024-03-13',
    text: '"Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar."',
    reference: 'Josué 1:9'
  },
  {
    id: 'v5',
    date: '2024-03-14',
    text: '"Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso."',
    reference: 'Mateus 11:28'
  },
  {
    id: 'v6',
    date: '2025-01-01',
    text: '"Entregue o seu caminho ao Senhor; confie nele, e ele agirá."',
    reference: 'Salmos 37:5'
  }
];