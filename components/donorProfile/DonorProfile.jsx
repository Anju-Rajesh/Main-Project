// import React, { useState, useEffect } from 'react';

// const DonorProfile = ({ donor, onUpdate, onDelete }) => {
//     const [editing, setEditing] = useState(false);
//     const [editedDonor, setEditedDonor] = useState({ ...donor });

//     const handleEdit = () => {
//         setEditing(true);
//     };

//     const handleSave = () => {
//         // Assuming you have an onUpdate function to handle updating donor details
//         onUpdate(editedDonor);
//         setEditing(false);
//     };

//     const handleDelete = () => {
//         // Assuming you have an onDelete function to handle deleting donor details
//         onDelete(donor._id);
//     };

//     const handleCancel = () => {
//         setEditing(false);
//         // Reset the edited donor to the original donor data
//         setEditedDonor({ ...donor });
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setEditedDonor((prevDonor) => ({ ...prevDonor, [name]: value }));
//     };

//     return (
//         <div>
//             <h2>Donor Profile</h2>
//             <div>
//                 <label>First Name: </label>
//                 {editing ? (
//                     <input
//                         type="text"
//                         name="firstName"
//                         value={editedDonor.firstName}
//                         onChange={handleInputChange}
//                     />
//                 ) : (
//                     <span>{donor.firstName}</span>
//                 )}
//             </div>
//             <div>
//                 <label>Last Name: </label>
//                 {editing ? (
//                     <input
//                         type="text"
//                         name="lastName"
//                         value={editedDonor.lastName}
//                         onChange={handleInputChange}
//                     />
//                 ) : (
//                     <span>{donor.lastName}</span>
//                 )}
//             </div>
//             <div>
//                 <label>Email: </label>
//                 <span>{donor.email}</span>
//             </div>
//             <div>
//                 <label>Blood Group: </label>
//                 {editing ? (
//                     <input
//                         type="text"
//                         name="bloodGroup"
//                         value={editedDonor.bloodGroup}
//                         onChange={handleInputChange}
//                     />
//                 ) : (
//                     <span>{donor.bloodGroup}</span>
//                 )}
//             </div>
//             <div>
//                 <label>Contact Number: </label>
//                 {editing ? (
//                     <input
//                         type="text"
//                         name="contactNumber"
//                         value={editedDonor.contactNumber}
//                         onChange={handleInputChange}
//                     />
//                 ) : (
//                     <span>{donor.contactNumber}</span>
//                 )}
//             </div>
//             <div>
//                 <label>Address: </label>
//                 {editing ? (
//                     <textarea
//                         name="address"
//                         value={editedDonor.address}
//                         onChange={handleInputChange}
//                     />
//                 ) : (
//                     <span>{donor.address}</span>
//                 )}
//             </div>

//             {editing ? (
//                 <div>
//                     <button onClick={handleSave}>Save</button>
//                     <button onClick={handleCancel}>Cancel</button>
//                 </div>
//             ) : (
//                 <div>
//                     <button onClick={handleEdit}>Edit</button>
//                     <button onClick={handleDelete}>Delete</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DonorProfile;
