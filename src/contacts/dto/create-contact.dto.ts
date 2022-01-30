import { ApiProperty } from "@nestjs/swagger";

export class CreateContactDto {

	@ApiProperty({example: 1, description: "Уникальный идентификатор"})
	id: number;
	@ApiProperty({example: 'Павел', description: "Имя пользователя"})
	name: string;
	@ApiProperty({example: 'Грошевский', description: "Фамилия пользователя"})
	surname: string;
	@ApiProperty({example: 'Web-разработчик', description: "Описание пользователя"})
	description: string;
	@ApiProperty({example: 89502624125, description: "Мобильный номер пользователя"})
	phone: number;

}