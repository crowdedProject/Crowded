const request = require('supertest');
const express = require('express');
const assert = require('chai').assert;
const expect = require('chai').expect;
const psql = require(__dirname + '/../../../src/server/psql.js');

describe('Database', function() {
  it('should determine whether to connect locally or globally', function () {
      
  });
  it('should drop tables before creating', function () {
      
  });
  it('should populate the neighborhood table on starting', function () {
      
  });
  it('should have a user, cafe and neighborhood table', function () {
      
  });
  describe('Cafe', function () {
    it('should have many users', function () {
      
    });
  });
  describe('User', function () {
    it('should belong to many Cafes', function () {
      
    });
  });
  describe('Neighborhood', function () {
    it('should belong to many Cafes', function () {
      
    });
  });
});