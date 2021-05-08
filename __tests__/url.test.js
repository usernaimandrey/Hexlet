import { test, expect } from '@jest/globals';
import {
  make, toString, getProtocol, getHost, getPath, setHost, setPath, setQueryParam, getQueryParam,
} from '../14_url.js';

test('make', () => {
  const url = make('https://hexlet.io/community?q=low');
  expect(toString(url)).toBe('https://hexlet.io/community?q=low');
});

test('getData', () => {
  const url = make('http://hexlet.io:8080/community?q=low');
  expect(getProtocol(url)).toBe('http:');
  expect(getHost(url)).toBe('hexlet.io:8080');
  expect(getPath(url)).toBe('/community');
});

test('setHost', () => {
  const url = make('https://hexlet.io/community?q=high');
  setHost(url, 'code-basics.com');
  expect(toString(url)).toBe('https://code-basics.com/community?q=high');
});

test('urlWithEmptyParams', () => {
  const url = make('https://hexlet.io/community');
  expect(toString(url)).toBe('https://hexlet.io/community');
});

test('urlWithEmptyPath', () => {
  const url = make('https://hexlet.io/?q=high&page=5');
  expect(toString(url)).toBe('https://hexlet.io/?q=high&page=5');
});

test('setPath', () => {
  const url = make('https://hexlet.io/community?q=low');
  setPath(url, '/404');
  expect(toString(url)).toBe('https://hexlet.io/404?q=low');
});

test('setQueryParam', () => {
  const url = make('https://hexlet.io/community?q=low&user=guest');

  setQueryParam(url, 'q', 'high');
  expect(toString(url)).toBe('https://hexlet.io/community?q=high&user=guest');

  setQueryParam(url, 'page', 5);
  expect(toString(url)).toBe('https://hexlet.io/community?q=high&user=guest&page=5');
});

test('getQueryParam', () => {
  const url = make('https://hexlet.io/community?q=low&user=guest');
  expect(getQueryParam(url, 'q')).toBe('low');
  expect(getQueryParam(url, 'user')).toBe('guest');
  expect(getQueryParam(url, 'low', 'user')).toBe('user');
  expect(getQueryParam(url, 'b')).toBeNull();
});
