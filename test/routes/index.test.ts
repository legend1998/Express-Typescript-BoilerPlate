import { describe, expect, test } from "@jest/globals";
import supertest from "supertest";
import app from "../../app";

const userId = "666dbcd805052a0673aeddcb";
const movieId = "666dbc47d973977242b614c8";
const contentType = "Movie";

function sum(a: number, b: number): number {
  return a + b;
}

describe("Testing sum function", () => {
  test("Testing sum function", () => {
    expect(sum(5, 6)).toBe(11);
  });
});

describe("Testing Get method", () => {
  test("Testing Get endpoints", async () => {
    const res = await supertest(app).get("/");

    expect(res.statusCode).toBe(200);
  });
});
