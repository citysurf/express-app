import { ObjectId } from 'mongodb';
import executeMongoDBOperation from '../services/mongodb.connector';
import { Request, RequestHandler, Response} from 'express';

export const getSavedCities: RequestHandler = async(req: Request, res: Response)=>{
    try{

        let userId = "66a7ed5ed8e1f865e0c3f1b4"; // placeholder
        // TODO ~ Verify user session 
        let cities;
        if(userId){
            try{
                cities = await executeMongoDBOperation('users', 'find', { _id: new ObjectId(userId) }, null, { cities: 1, _id: 0 })
            }catch(e){
                console.log(e)
                res.status(200).json(
                    ["Invalid User Id"]
                )
            }
        }

        res.status(200).json(
            cities
        );

    }catch(e){
        console.log(e);
    }   
}

export const createUser: RequestHandler = async(req: Request, res: Response)=>{
    // TODO
}

export const updateUser: RequestHandler = async(req: Request, res: Response)=>{
    // TODO
}

export const authenticateUser: RequestHandler = async(req: Request, res: Response)=>{
    // TODO
}

export const deleteUser: RequestHandler = async(req: Request, res: Response)=>{
    // TODO
}

export const deleteCity: RequestHandler = async(req: Request, res: Response)=>{
    // TODO
}