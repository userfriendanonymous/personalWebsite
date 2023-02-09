import { Injectable } from "@nestjs/common"
import {InjectModel} from '@nestjs/mongoose'
import { Model } from "mongoose"
import { Contact, ContactDocument } from "./schemas/contact.schema"

export class SubmitRequest {
    name: string
    message: string
    email: string
}

interface SubmitResponse {

}

@Injectable()
export class ContactService {
    constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>){

    }

    async submit(request: SubmitRequest): Promise<SubmitResponse> {
        const model = new this.contactModel({
            name: request.name,
            message: request.message,
            email: request.email,
        })
        
        await model.save()
        return {}
    }
}