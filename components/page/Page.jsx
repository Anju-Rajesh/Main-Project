
import React from 'react'
// import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp"
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
import { Link } from 'react-router-dom';
import './page.css'; // Import the CSS file



const Page = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1, description: "REGISTRATION : During the registration process, individuals interested in donating blood are required to provide their personal information, including their name, contact details, and relevant health history. This information is collected to ensure that the donor meets the eligibility criteria for blood donation." },
        { title: "Seeing", img: g2, description: "SEEING : The 'Seeing' step typically involves a brief medical screening by a healthcare professional. This may include checking the donor's vital signs such as blood pressure, pulse, and temperature. The healthcare provider may also ask health-related questions to assess the donor's overall well-being and eligibility to donate blood." },
        { title: "Donation", img: g3, description: "DONATION : The actual blood donation process involves the collection of a specific amount of blood from the donor. This is typically done using a sterile needle to draw blood from a vein, often located in the arm. The collected blood is then stored in a sterile bag for further processing and distribution to those in need." },
        { title: "Save Life", img: g4, description: "SAVE LIFE : After blood donation, the collected blood undergoes rigorous testing and processing to ensure its safety and compatibility.Once approved, it becomes a lifesaving resource for surgeries, trauma care, and various medical treatments.Blood donation plays a pivotal role in supporting healthcare systems and aiding individuals in need." },
    ];
    return (
        <>
        <div>
            <header>
                <h1>The Blood Link</h1><br/><br/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin-login">ADMIN</Link>
                        </li>
                        <li>
                            <Link to="/user-login">USER</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>

        <div className="dark:text-white-900">
            {/* <img src={bg} alt="" /> */}
            {/* <img src={bg} alt="" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} /> */}

            <div className='grid grid-cols-2 place-items-center mt-6 px-52'>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
                    <div>
                        <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900 hero-text'>
                            Be the reason for <br />someone's heartbeat
                        </p>
                    </div>

            </div>
            <br/><br/>
            <h1 className='font-bold text-center text-blood my-4 text-lg underline'>Learn About Donation</h1><br/><br/>
            <div className='flex px-20'>
                <div>
                    <img src={donationFact} width="90%" alt="" />
                    <p className='text-center'>
                            <br /><br />
                        <code>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</code>
                        <br/><br/>
                    </p>
                </div>
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <br/><br/>
            <p className='text-xl underline font-bold text-blood text-center mt-5 mb-5'>
                Blood Donation Process : 
            </p><br/><br/>
            <div className='grid grid-cols-2 place-items-center'>
               {temp2.map((e, i) =>
    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2'>
        <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
        <div className='m-4'>
            <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{i + 1} - {e.title}</h1>
            <p className='text-justify'>{e.description}</p>
        </div>
    </div>
)}
            </div>
            <br />
            <div className='w-full bg-blood text-white-900 h-max text-sm text-center font-bold'>
                <code>BloodLink @ {new Date().getFullYear()} || Made with ❤️ by Anju Rajesh</code>
            </div>
        </div>
        </>
    )
}

export default Page


// // Homepage.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './page.css'; // Import the CSS file

// const Page = () => {
//     return (
        // <div>
        //     <header>
        //         <h1>The Blood Link</h1>
        //         <nav>
        //             <ul>
        //                 <li>
        //                     <Link to="/admin-login">ADMIN</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/user-login">USER</Link>
        //                 </li>
        //             </ul>
        //         </nav>
        //     </header>
        // </div>
//     );
// };

// export default Page;
