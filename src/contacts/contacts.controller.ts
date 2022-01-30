import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
	constructor(private contactsService: ContactsService) {}

	@Post()
	create(@Body() contactsDto: CreateContactDto) {
		return this.contactsService.createContact(contactsDto)
	}

	@Get() 
		getAll() {
			return this.contactsService.getAllContacts()
		
	}

}
