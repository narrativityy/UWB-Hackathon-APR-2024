const Analysis = require('../models/analysis-model');
const User = require('../models/user-model');
const OpenAI = require("openai");
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail')
 
module.exports.findAllAnalyses = (req, res) => {
    Analysis.find()
        .then((allDaAnalyses) => {
            res.json(allDaAnalyses)
        })
        .catch((err) => {
            res.json(err)
        });
}
 
module.exports.findOneSingleAnalysis = (req, res) => {
    Analysis.findOne({ _id: req.params.id })
        .then(oneSingleAnalysis => {
            res.json(oneSingleAnalysis)
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.createNewAnalysis = async(req, res) => {

    const openai = new OpenAI(process.env.OPENAI_API_KEY);

    const analysis = req.body.analysis

    const prompt = `I am a recovering addict and this is how my day has been. Mood: ${analysis.mood}\nBehavioral Activities: ${analysis.behavioralActivities}\nSleep Pattern: ${analysis.sleepPattern}\nDiet: ${analysis.diet}\nSocial Interactions: ${analysis.socialInteractions}\nStress: ${analysis.stress}\nMedication: ${analysis.medication}\nSubstance Cravings: ${analysis.substanceCravings}\nTherapy: ${analysis.therapy}\nTrigger Exposure: ${analysis.triggerExposure}\nPhysical Symptoms: ${analysis.physicalSymptoms}. What are my chances of relapse? Respond with just the words no risk, low risk, medium risk, or high risk. Don't add any extra words. \n`

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
      });

    const secret = process.env.SECRET_KEY
    const _id = req.body.userJWT
    const decryptedId = jwt.verify(_id, secret)

    User.findOne({_id: decryptedId.id})
    .then(user => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
        to: user.sponsorEmail, // Change to your recipient
        from: 'jake@jakemcrowley.com', // Change to your verified sender
        subject: 'Relapse Risk Analysis',
        text: `Hello ${user.sponsor},\n\nYour sponsee, ${user.name}, has completed their daily relapse risk analysis. After analysis their risk was determined to be: ${completion.choices[0].message.content}\n\nBest,\nAddiction Recovery Aid`,
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

        return Analysis.create({user, response: completion.choices[0].message.content})
    })
    .then(newlyCreatedAnalysis => {
        res.json(newlyCreatedAnalysis)
    })
    .catch(err => {
        res.status(400).json(err)
    });}


 
module.exports.updateExistingAnalysis = (req, res) => {
    Analysis.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAnalysis => {
            res.json(updatedAnalysis)
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.deleteAnExistingAnalysis = (req, res) => {
    Analysis.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        });}

module.exports.analyze = async(req, res) => {
    const openai = new OpenAI(process.env.OPENAI_API_KEY);

    const analysis = req.body

    const prompt = `I am a recovering addict and this is how my day has been. Mood: ${analysis.mood}\nBehavioral Activities: ${analysis.behavioralActivities}\nSleep Pattern: ${analysis.sleepPattern}\nDiet: ${analysis.diet}\nSocial Interactions: ${analysis.socialInteractions}\nStress: ${analysis.stress}\nMedication: ${analysis.medication}\nSubstance Cravings: ${analysis.substanceCravings}\nTherapy: ${analysis.therapy}\nTrigger Exposure: ${analysis.triggerExposure}\nPhysical Symptoms: ${analysis.physicalSymptoms}. What are my chances of relapse? Respond with just the words no risk, low risk, medium risk, or high risk. Don't add any extra words. \n`

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
      });

    return res.status(200).json(completion.choices[0].message.content)
}