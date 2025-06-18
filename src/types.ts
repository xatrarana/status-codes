import  statusCode  from "./core/status-codes";

export type StatusCodeName = keyof typeof statusCode;

export type StatusCodeNumber = (typeof statusCode)[StatusCodeName];

