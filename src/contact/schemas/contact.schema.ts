import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ContactDocument = HydratedDocument<Contact>

@Schema()
export class Contact {
    @Prop({required: false, type: String})
    name: string

    @Prop({required: true, type: String})
    message: string

    @Prop({required: false, type: String})
    email: string
}

export const ContactSchema = SchemaFactory.createForClass(Contact)