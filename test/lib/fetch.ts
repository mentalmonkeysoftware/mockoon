export const fetch = (params: {
  protocol: 'http' | 'https',
  port: number, path: string,
  method: 'GET' | 'POST' | 'PUT' | 'HEAD' | 'OPTIONS',
  headers: { [key in string]: string },
  body: any
}) => {
  const data = JSON.stringify(params.body || {});

  return new Promise((resolve, reject) => {
    const request = require(params.protocol).request({
      hostname: `localhost`,
      port: params.port,
      path: params.path,
      method: params.method.toUpperCase(),
      headers: {
        ...params.headers,
        'Content-Length': data.length
      }
    }, (response) => {
      let body = '';
      response.on('data', (chunk) => body += chunk);
      response.on('end', () => resolve({
        status: response.statusCode,
        headers: response.headers,
        body
      }));
    });

    request.on('error', (err) => reject(err));

    request.write(data);
    request.end();
  });
};
