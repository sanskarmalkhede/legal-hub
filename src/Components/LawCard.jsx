import React from 'react';

const Law = [
    {
        id: 1,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ_PpdNMcnaeDzrydOK9R0RsC3BlaaFlj8A&usqp=CAU',
        heading: 'Labour Laws',
        details: 'Labour laws (also spelled as labor laws), labour code or employment laws are those that mediate the relationship between workers, employing entities, trade unions, and the government. Collective labour law relates to the tripartite relationship between employee, employer, and union.',
        redirectPath: '/forgot-password'
    },
    {
        id: 2,
        imageUrl: 'https://vakilsearch.com/blog/wp-content/uploads/2022/04/CORPORATE-LAW.jpg',
        heading: 'Corporate Laws',
        details: 'The corporate world today is growing rapidly and without any law, it would definitely go haywire. Corporate law, also known as business law is a set of rules to govern the practices of the corporate world. These laws set legal boundaries while running a business and keep everything under control.',
        redirectPath: '/forgot-password'
    },
    {
        id: 3,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJfFKQXAHDj_ShvePyxbpXEyakeprk4z-eqXgVj6MFGh_2lUsAWJW65mkqmYPNzHpzRc&usqp=CAU',
        heading: 'Civil Laws',
        details: 'Civil law is a legal system originating in Italy and France and adopted in much of the world. The civil law system is intellectualized within the framework of Roman law and French civil law, and with core principles codified into a referable system, which serves as the primary source of law.',
        redirectPath: '/forgot-password'
    },
    {
        id: 4,
        imageUrl: 'https://www.lawshiksha.in/wp-content/uploads/2023/04/Knowledge-2.png',
        heading: 'Property Laws',
        details: 'Under property law, both tangible and intangible properties are included. Tangible properties are all the physical assets and intangible properties are patents, stocks, copyrights and more. These are of high value and without any law, people might even kill each other for it.',
        redirectPath: '/forgot-password'
    },
    {
        id: 5,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsG_XMwHEPsk_9Wtc_x0VveDM8rz3ioVK1Q&usqp=CAU',
        heading: 'Family Laws',
        details: 'Falls under civil law, the family helps in disputes that are related to marriage, divorce, child custody, adoption and more. Any issue that affects families can be resolved with the help of a family lawyer. The family laws are set to clear rules for various aspects related to family life.',
        redirectPath: '/forgot-password'
    },
]
// import { useHistory } from 'react-router-dom';

// const Card = ({ imageUrl, heading, details, redirectPath }) => {
//   const history = useHistory();

//   const handleCardClick = () => {
//     history.push(redirectPath);
//   };
// };
function LawCard() {
    return (
        <div className='container flex gap-6 m-1'>
            {Law.map((item) => (
                <div key={item.id} className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer my-4" onClick={item.redirectPath}>
                    <img className="w-full h-48 object-cover" src={item.imageUrl} alt="Card Image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.heading}</div>
                        <p className="text-gray-700 text-base">{item.details}</p>   
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LawCard;
