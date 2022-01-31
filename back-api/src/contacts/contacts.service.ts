import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Contact } from './contacts.model';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
constructor(@InjectModel(Contact) private readonly contactRepository: typeof Contact) {}

async createContact (dto: CreateContactDto) {
	const contact = await this.contactRepository.create(dto)
	return contact
}

async getAllContacts () {
	const contacts = await this.contactRepository.findAll()
	return contacts
}

}
