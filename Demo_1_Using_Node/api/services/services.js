import { createClient } from "redis"
import crypto from "crypto"
import dotenv from "dotenv"


dotenv.config()

// const CLIENT_ID = process.env.CLIENT_ID
const REDIS_PORT = process.env.REDIS_PORT || 6379;

// const googleClient = new OAuth2Client(CLIENT_ID);
const client = createClient(REDIS_PORT)
await client.connect();

export const createEtag = (plan) => {
    try {
        const hash = crypto.createHash('sha256').update(plan).digest('base64')
        return hash
    } catch (error) {
        console.log(error)
    }
}

export const checkIfPlanExistsService = async(objectId) => {
    try {
        const exists =  await client.exists(objectId)
        if (!exists) {
            return false
        }
        return true
    } catch (error) {
        console.log(error)
    }
}

export const getPlanEtag = async(objectId) => {
    try {
        const exists = await checkIfPlanExistsService(objectId + "_etag")
        if (!exists) {
            return false
        }
        const etag = await client.get(objectId + "_etag")
        return etag 
    } catch (error) {
        console.log(error)
    }
}

export const getPlanService = async (objectId) => {
    try {
        const exists =  await checkIfPlanExistsService(objectId)
        if (!exists) {
            return false
        }
        const plan = await client.get(objectId)
        const etag = await client.get(objectId + "_etag")
        return [plan, etag]
    } catch (error) {
        console.log(error)
    }
}

export const deletePlanService = async (objectId) => {
    try {
        const exists =  await checkIfPlanExistsService(objectId)
        if (!exists) {
            return false
        }
        const deleted = await client.del(objectId)
        const deleted_etag = await client.del(objectId + "_etag")
        return deleted && deleted_etag
    } catch (error) {
        console.log(error)
    }
}

export const savePlanService = async (objectId, plan, etag) => {
    try {
        await client.set(objectId, plan)
        await client.set(objectId + "_etag", etag)
        return objectId
    } catch (error) {
        console.log(error)        
    }
}
