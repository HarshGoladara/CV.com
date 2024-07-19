import userResumeListModel from "../models/userResumeListModel.js";
import resumeModel from "../models/resumeModel.js";

export const addResumeIdTOdb = async(req,res)=>{
    try {
        const {resumeId,resumeName,email} = req.body;
        
       
        const user = await userResumeListModel.findOne({email});
        user.resumes = user.resumes.concat({resumeId,resumeName})
        await user.save();

        const resume = resumeModel({resumeId});
        const ress = await resume.save();

    
        res.status(202).send('Success');


    } catch (error) {
        console.log(error)
    }
}

export const getResumeIdArray = async(req,res)=>{
    try {
        const email = req.query.email;
        const user = await userResumeListModel.findOne({email});
        res.send(user.resumes);
    } catch (error) {
        console.log(error);
    }
    
}

export const getResumeDetails = async (req,res)=>{
    try {
        const resumeId = req.query.resumeID;
        const reusme = await resumeModel.findOne({resumeId});
        res.send(reusme);       
    } catch (error) {
        res.status(404).send({
            message : 'Something went wong.....'
        })
        console.log(error);
    }
}

export const upadateResumeDetails = async(req,res)=>{
    try {
        const resumeDetails = req.body;
        const  resume = await resumeModel.findOneAndUpdate(
            { resumeId: resumeDetails?.resumeId },
            { $set: resumeDetails },
            { new: true, upsert: true }
        );
        res.send('seucess');
    } catch (error) {
        res.status(404).send({
            message : 'Something went wong.....'
        })
        console.log(error);
    }
}