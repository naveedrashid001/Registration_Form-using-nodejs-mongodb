module.exports = {
    form_data: (req, res) => {
        var name = req.body.name;
        var age = req.body.age;
        var email = req.body.email;
        var mobile = req.body.mobile;
        var gender = req.body.gender;
        var password = req.body.password;

        // Validate age
        if ( age.value.length < 3 || age.value .length> 1) { // Change the range as needed
            return res.status(400).json({ error: "Invalid age value. Please enter valid age" });
       }
    }
}
