import {Document} from 'mongoose';

export interface Isuperadmin extends Document{
    readonly id : number;
    readonly name : string;
    readonly age : number;

}