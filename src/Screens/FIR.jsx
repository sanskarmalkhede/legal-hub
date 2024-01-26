// FilingFIRPage.js

import React from 'react';
import Navbar from '../Components/Navbar';

const FIR = () => {
  const tableData = [
    { sno: 1, state: 'New Delhi', portal: 'https://www.delhipolice.nic.in/', faqs: 'Click Here' },
    { sno: 2, state: 'Uttar Pradesh', portal: 'https://uppolice.gov.in/', faqs: 'Click Here' },
    { sno: 3, state: 'Haryana', portal: 'https://haryanapoliceonline.gov.in/Login', faqs: 'Click Here' },
    { sno: 4, state: 'Rajasthan', portal: 'https://police.rajasthan.gov.in/citizen/login.htm?', faqs: 'Click Here' },
    { sno: 5, state: 'Maharashtra', portal: 'https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx', faqs: 'Click Here' },
    { sno: 6, state: 'Madhya Pradesh', portal: 'https://www.mppolice.gov.in/en/complaint-0', faqs: 'Click Here' },
    { sno: 7, state: 'Gujarat', portal: 'https://gujhome.gujarat.gov.in/portal/webHP', faqs: 'Click Here' },
    { sno: 8, state: 'Tamil Nadu', portal: 'https://eservices.tnpolice.gov.in/CCTNSNICSDC/Index?6', faqs: 'Click Here' },
    { sno: 9, state: 'Himachal Pradesh', portal: 'citizenportal.hppolice.gov.in:8080/citizen/login.htm', faqs: 'Click Here' },
    { sno: 10, state: 'Bihar', portal: 'biharpolice.in/OnLineRegisterComplaint.aspx', faqs: 'Click Here' },
    { sno: 11, state: 'Jharkhand', portal: 'https://jofs.jhpolice.gov.in/', faqs: 'Click Here' },
  ];

  return (
    <>
    <Navbar/>
   
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">How to File a Police FIR/Complaint Online</h1>

      <h2 className="text-xl font-bold mt-4">State-wise Online Police Complaint/FIR Portals:</h2>

      <table className="table-auto mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">S. No.</th>
            <th className="px-4 py-2">State</th>
            <th className="px-4 py-2">Online Police Complaint/FIR Portal</th>
            <th className="px-4 py-2">FAQs</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.sno}>
              <td className="border px-4 py-2">{data.sno}</td>
              <td className="border px-4 py-2">{data.state}</td>
              <td className="border px-4 py-2">
                <a href={data.portal} target="_blank" rel="noopener noreferrer" > 
                Click Here
                </a>
              </td>
              <td className="border px-4 py-2">
                <a href={data.portal} target="_blank" rel="noopener noreferrer"> 
                  {data.faqs}
                </a>
              </td>
            </tr>
          ))};
        </tbody>
      </table>

      <h2 className="text-xl font-bold mt-4">Important information to keep in mind:</h2>

      <p>
        You have to fill up the personal details while filing an FIR. The following options will be there:
      </p>

      <ul className="list-disc ml-6">
        <li>Enter the complainant's name: Fill the name of the person who wants to lodge the e-FIR</li>
        <li>Enter the father's/mother's name: Fill the complainant's parents' name</li>
        <li>Enter the complainant's Address: Enter the full address</li>
        <li>Enter complainant's mobile number: Complainant's working mobile number</li>
        <li>Enter complainant's email ID: Email-ID is important because a copy of your e-FIR will be sent to you via email for verification.</li>
      </ul>
    </div>
    </>
  );
};

export default FIR;
