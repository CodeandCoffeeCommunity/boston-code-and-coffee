export type RequestOptions = {
  name: string;
  url: string;
  responseType?: 'json' | 'arrayBuffer';
  body?: any;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
};

export async function request<T>(options: RequestOptions): Promise<Response & T | ArrayBuffer> {
  const { responseType = 'json' } = options;
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

  if (responseType === 'arrayBuffer') {
    return await response.arrayBuffer() as ArrayBuffer;
  }

  return await response.json() as Response & T;
}
