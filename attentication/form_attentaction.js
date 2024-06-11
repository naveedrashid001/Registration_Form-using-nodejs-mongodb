const mongoose = require('mongoose');

module.exports = {
    form_data: (req, res) => {
        var name = req.body.name;
        var age = req.body.age;
        var email = req.body.email;
        var mobile = req.body.mobile;
        var gender = req.body.gender;
        var password = req.body.password;

        // Validate age
        if ( age.value < 3 || age.value > 1) { // Change the range as needed
            return res.status(400).json({ error: "Invalid age value. Please enter valid age" });
       }else{
        return;
       }

        // Continue with other operations if age is valid
        // For example, saving data to the database or processing the form
    }
}
