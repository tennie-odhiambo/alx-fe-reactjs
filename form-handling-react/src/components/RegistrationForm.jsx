import { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        e.preventDefault();
        if (!formData.username && !formData.email && !formData.password) {
            alert(`To continue, please enter all required details!`);
        }

        console.log('Form Submitted', formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username && !formData.email && !formData.password) {
            alert(`To continue, please enter all required details!`);
        } else {
            console.log('Form Submitted', formData);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default RegistrationForm;
