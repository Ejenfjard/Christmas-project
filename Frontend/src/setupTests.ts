/** @format */
import "@testing-library/jest-dom"; 
import { server } from "./mocks/Server"; 
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => server.listen()); 
afterEach(() => server.resetHandlers());
afterAll(() => server.close()); 
