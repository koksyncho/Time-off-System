import { Request } from './request';


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
