import { MongooseModule } from '@nestjs/mongoose'
import { Module } from "@nestjs/common"
import { ContactController } from "./contact.controller"
import { ContactService } from "./contact.service"
import { Contact, ContactSchema } from './schemas/contact.schema'

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Contact.name, schema: ContactSchema},
        ])
    ],
    providers: [ContactService],
    controllers: [ContactController],
})
export class ContactModule {}