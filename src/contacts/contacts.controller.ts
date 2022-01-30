import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Contact } from './contacts.model';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';


@ApiTags("Пользователи")
@Controller('contacts')
export class ContactsController {
	constructor(private contactsService: ContactsService) {}

	@ApiOperation({summary: "Создание контакта"})
	@ApiResponse({status: 200, type: Contact})
	@Post()
	create(@Body() contactsDto: CreateContactDto) {
		return this.contactsService.createContact(contactsDto)
	}

	@ApiOperation({summary: "Получение контактов"})
	@ApiResponse({status: 200, type: [Contact]})
	@Get() 
		getAll() {
			return this.contactsService.getAllContacts()
		
	}

}
