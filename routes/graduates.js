
const { Graduate, validate } =require('../models/alumni');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async(req,res) => {
    const graduates = await Graduate.find().sort('name');
    res.send(graduates);
});

router.get('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const graduate = await Graduate.findById(req.params.id,
        {
          name: req.body.name,
          email: req.body.email,
          bio: req.body.bio,
          dateOfGraduation: req.body.dateOfGraduation  
    }, { new: true });

    if (!graduate) return res.status(404).send('The student with the given ID was not found.');

    res.send(graduate);
});

router.post('/', async(req,res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let graduate = new Graduate ({
        name: req.body.name,
        email: req.body.email,
        bio: req.body.bio,
        dateOfGraduation: req.body.dateOfGraduation
    });
    graduate = await graduate.save();

    res.send(graduate);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const graduate = await Graduate.findByIdAndUpdate(req.params.id,
        {
          name: req.body.name,
          email: req.body.email,
          bio: req.body.bio,
          dateOfGraduation: req.body.dateOfGraduation  
    }, { new: true });

    if (!graduate) return res.status(404).send('The student with the given ID was not found.');

    res.send(graduate);
});

router.delete('/:id', async (req, res) => {
    const graduate = await Graduate.findByIdAndRemove(req.params.id);

    if (!graduate) return res.status(404).send('The student with the given ID was not found')
    
    res.send(graduate);
});

module.exports = router; // export router 







// const { Graduate, validate} = require('../models/alumni')
// const express = require('express');
// const router = express.Router();
// //const mongoose = require('mongoose');

// router.get('/', async (req, res) => {
//     const graduates = await Graduate.find().sort('name');
//     res.send(graduates);
// });

// router.get('/:id', async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
//   const graduate = await Graduate.findById(req.params.id,
//       {
//         name: req.body.name,
//         email: req.body.email,
//         bio: req.body.bio,
//         dateOfGraduation: req.body.dateOfGraduation  
//   }, { new: true });
//   if (!graduate) return res.status(404).send('The student with the given ID was not found.');
//   res.send(graduate);
// });

// router.post('/', async (req, res) => {
//     const { error} = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     let graduate = new Graduate({ 
//         name: req.body.name,
//         email: req.body.email, 
//         dateOfGraduation: req.body.dateOfGraduation,
//         bio: req.body.bio 
//     });

//     graduate = await graduate.save();
    
//     res.send(graduate);
//   });

// //   router.put('/:id', async (req, res) => {
// //       const graduate = graduates.find(c => c.id === parseInt(req.params.id));
// //       if (!graduate) return res.status(404).send('The gradaute with the given ID was not found');

// //       const { error } = validateAlumni(req.body);
// //       if (error) return res.status(400).send(result.error.details[0].message);

// //       graduate.name = await req.body.name;
// //       res.send(graduate)
// //   });

//   router.put('/:id', async (req, res) => {
//     const { error } = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
//     const graduate = await Graduate.findByIdAndUpdate(req.params.id, {
//         name: req.body.name,
//         email: req.body.email,
//         dateOfGraduation: req.body.dateOfGraduation,
//         bio: req.body.bio
//     }, { new: true });
//     if (!graduate) return res.status(404).send('The graduate with the given ID was not found.');
//     res.send(graduate);
// });

// //   router.delete('/:id', async (req, res) => {
// //       const graduate = graduates.find(c => c.id ===parseInt(req.params.id));
// //       if (!graduate) return res.status(404).send('The gradaute with the given ID was not found');

// //       const index = await graduates.indexOf(graduate);
// //       graduates.splice(index, 1);

// //       res.send(graduate)
// //   });

//   router.delete('/:id', async (req, res) => {
//     const graduate = await Graduate.findByIdAndRemove(req.params.id);
//     if (!graduate) return res.status(404).send('The graduate with the given ID was not found.')
//     res.send(graduate);
// })

// module.exports = router;