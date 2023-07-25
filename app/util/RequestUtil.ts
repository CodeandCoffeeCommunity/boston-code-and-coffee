export type RequestOptions = {
  name: string;
  url: string;
  body?: any;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
};

export async function request<T>(options: RequestOptions): Promise<Response & T> {
  let response: Response & T;
  
  try {
    response = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
      body: JSON.stringify(options.body),
    }) as Response & T;
  } catch (e) {
    throw 'Failed to fetch';
  }

  if (!response.ok) {
    throw response;
  }

  return await response.json();
}
