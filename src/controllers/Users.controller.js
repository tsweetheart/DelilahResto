

/* MODELS */
import {user} from '../model/dbInitialize.js'


export const getUsers= async (req,res)=>{

    try{
        const getusers= await user.findAll()
        res.status(200).send({message:getusers})
    }
    catch(err){
        console.log('Error getting users', err)
        res.status(400).json({message:'Problem getting users information'})
    }
}

export const getUserById= async (req,res)=>{

    const id = req.params.id

    try{
        const getusers= await user.findOne({
            where:{
                id
            }
        })
        res.status(200).send({message:getusers})
    }
    catch(err){
        console.log('Error getting user', err)
        res.status(400).json({message:'Problem getting user information'})
    }
}

export const deleteUserById = async (req, res) => {

    const id = req.params.id

    try{
        const deleteUser = await user.destroy({
            where:{
                id: id
            }
        })

        if(!deleteUser)
            return res.status(404).json({message: 'User wasn´t found'})

        res.status(201).json({message: `User ${id} correctly deleted`}) 
    }
    catch(err){
        console.log('Error deleting user', err)
        res.status(400).json({message:'Error deleting user account'})
    }
}