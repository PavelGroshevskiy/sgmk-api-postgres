import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'contacts'})
export class Contact extends Model<Contact> {

	@ApiProperty({example: 1, description: "Уникальный идентификатор"})
	@Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
	id:number

	@ApiProperty({example: 'Павел', description: "Имя пользователя"})
	@Column({type:DataType.STRING, allowNull: false})
	name: string;

	@ApiProperty({example: 'Грошевский', description: "Фамилия пользователя"})
	@Column({type:DataType.STRING, allowNull: false})
	surname: string;

	@ApiProperty({example: 'Web-разработчик', description: "Описание пользователя"})
	@Column({type:DataType.STRING})
	description: string;

	@ApiProperty({example: 89502624125, description: "Мобильный номер пользователя"})
	@Column({type:DataType.INTEGER, unique: true, allowNull: false})
	phone: number;
}