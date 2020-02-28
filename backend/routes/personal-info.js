const router = require('express').Router();
let PersonalInfo = require('../../model/personal-info.model');

router.route('/').get((req, res) => {
    PersonalInfo.find()
        .then(personalInfo => res.json(personalInfo))
        .catch(err => res.status(400).json('Error: ' + err));
});
 
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const address = req.body.address;
    const age = req.body.age;
    const birthDate = req.body.birthDate;
    const nationalID = req.body.nationalID;
    const university = req.body.university;
    const yearOfStudy = req.body.yearOfStudy;
    const phoneNumber = req.body.phoneNumber;
    const sex = req.body.sex;

    const newPersonalInfo = new PersonalInfo({
        username,
        address,
        age,
        birthDate,
        nationalID,
        university,
        yearOfStudy,
        phoneNumber,
        sex
    });

    newPersonalInfo.save()
        .then(() => res.json('Personal-Info Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;