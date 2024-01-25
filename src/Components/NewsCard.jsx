import React from "react";

const News = [
  {
    id: 1,
    imageUrl:
      "https://www.livelaw.in/h-upload/2022/03/02/750x450_410966-calcutta-high-court-1.jpg",
    heading: "Medical Admission Irregularities",
    details:
      "On Wednesday, a division bench of Justices Soumen Sen & Uday Kumar had stayed the single bench's order calling for a CBI probe upon noting that such a probe was not sought in the prayers of the original writ petitioners and that the State may be allowed to complete its own investigation and submit its's progress reports.",
    redirectPath: "/forgot-password",
  },
  {
    id: 2,
    imageUrl:
      "https://www.livelaw.in/h-upload/2024/01/25/500x300_518235-750x450506971-justice-vikram-nath-justice-ahsanuddin-amanullah-and-sc-1.webp",
    heading:
      "Members In Default Of Membership Fee Stand Disqualified From Society Without Notice; They're Not Entitled To Vote : Supreme Court",
    details:
      "The present case revolves arounda society named Shikshan Prasarak Mandal, Mul. Prior to the death of the President, due to his poor health, the Executive Body passed a resolution empowering Advocate Babasaheb Wasade/ Appellant as the Working President. He was required to look after day-to-day affairs and management of the Society. As there was no elected President, Vice-President, or Secretary, 16 members of the Society requested the appellant through a written request to summon an extraordinary meeting to hold the elections.",
    redirectPath: "/forgot-password",
  },
  {
    id: 3,
    imageUrl:
      "https://www.livelaw.in/h-upload/2024/01/22/750x450_517734-ayodhya-ram-temple-.webp",
    heading:
      "Ram Temple Consecration | Citing Traffic Diversion In Prayagraj, Allahabad HC Bar Association To Abstain From Judicial Work On Jan 23",
    details:
      "After abstaining from judicial work on Monday (January 22), the Allahabad High Court Bar Association today decided to extend its stance to abstain from judicial work on Tuesday, January 23 as well. This decision has been taken by the Executive body of the Association given the traffic diversion currently operating in Prayagraj due to the Ram Mandir Consecration Ceremony in...",
    redirectPath: "/forgot-password",
  },
];
function NewsCard() {
  return (
    <div className="container flex gap-6 m-1">
      {News.map((item) => (
        <div
          key={item.id}
          className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer my-4"
        >
          <img
            className="w-full h-48 object-cover"
            src={item.imageUrl}
            alt="Card Image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.heading}</div>
            <p className="text-gray-700 text-base">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsCard;
