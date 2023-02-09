import { Controller, Post, BadRequestException, Body, Req, Res, UseFilters } from "@nestjs/common"
import {SubmitRequest} from './contact.service'
import { ContactService } from "./contact.service"
import { Response } from "express"
import { HttpExceptionFilter } from "./filters/http.filter"

@Controller('/contact')
@UseFilters(HttpExceptionFilter)
export class ContactController {
    constructor(private contactService: ContactService){}

    @Post('/submit')
    async submit(@Body() body: SubmitRequest, @Res() response: Response){
        if (!(
            typeof body.email === 'string' &&
            typeof body.name === 'string' &&
            typeof body.message === 'string'
        )){
            throw new BadRequestException('Email, Name and Message must be provided')
        }

        await this.contactService.submit(body)
        response.status(200).json({message: 'Successfully submitted'})
    }
}