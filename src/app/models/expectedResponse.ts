import { Request } from './request';
import { User } from './user';


export interface LoginResults
{
  results: string;
}

export interface RegisterResults
{
	results: string;
}

export interface StatusUpdateResults
{
	results: string;
}

export interface AllRequestsIterable
{
	results: Iterable<Request>
}

export interface UpdateRequestResults
{
	results: string;
}

export interface DeleteRequestResults
{
	results: string;
}

export interface idRequestResults
{
	results: number;
}

export interface userRequestResult
{
	results: User;
}
