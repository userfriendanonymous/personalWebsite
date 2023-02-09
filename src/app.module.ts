import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import {MongooseModule} from '@nestjs/mongoose'
import { ContactModule } from './contact/contact.module'

@Module({
    imports: [
        ContactModule,
        MongooseModule.forRoot('mongodb+srv://admin:UfcapRMIiuvH5Dfj@myws.3fyc6fy.mongodb.net/?retryWrites=true&w=majority', {
            dbName: 'main',
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
