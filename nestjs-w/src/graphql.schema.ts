
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface User {
    id?: Nullable<string>;
    pw?: Nullable<string>;
}

export interface IQuery {
    login(userId: string, userPw: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export interface IMutation {
    register(userId: string, userPw: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
