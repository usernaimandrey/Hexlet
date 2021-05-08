const make = (url) => {
  const addresUrl = new URL(url);
  return addresUrl;
};

const toString = (url) => url.href;

const getProtocol = (url) => url.protocol;
const getHost = (url) => url.host;
const getPath = (url) => url.pathname;

const setHost = (url, host) => {
  const data = url;
  data.host = host;
  return data;
};

const setProtocol = (url, protocol) => {
  const data = url;
  data.protocol = protocol;
  return data;
};

const setPath = (url, path) => {
  const data = url;
  data.pathname = path;
  return data;
};

const setQueryParam = (url, key, value) => {
  const data = url;
  data.searchParams.set(key, value);
  return data;
};

const getQueryParam = (data, paramName, def = null) => {
  if (!data.searchParams.get(paramName)) {
    return def;
  }
  return data.searchParams.get(paramName);
};

export {
  make,
  toString,
  getProtocol,
  getHost,
  getPath,
  setHost,
  setProtocol,
  setPath,
  setQueryParam,
  getQueryParam,
};
