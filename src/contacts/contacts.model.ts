import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'contacts'})
export class Contact extends Model<Contact> {
	@Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
	id:number

	@Column({type:DataType.STRING, allowNull: false})
	name: string;

	@Column({type:DataType.STRING, allowNull: false})
	surname: string;

	@Column({type:DataType.STRING})
	description: string;

	@Column({type:DataType.INTEGER, unique: true, allowNull: false})
	phone: number;
}