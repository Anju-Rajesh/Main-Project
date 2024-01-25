// DonorRegistrationForm
import React, { useState } from 'react'
import axios from 'axios'

const Donerregistration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        bloodGroup: '',
        contactNumber: '',
        address: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('your-api-endpoint/donorregister', formData)
            console.log(response.data)
            // Add logic to handle successful registration
        } catch (error) {
            console.error(error.response.data)
            // Add logic to handle registration error
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Add form fields based on your Donor model */}
            <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
            {/* Add other form fields similarly */}
            <button type="submit">Register as Donor</button>
        </form>
    )
}

export default Donerregistration;