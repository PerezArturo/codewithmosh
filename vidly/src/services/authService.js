import http from "./httpService";
import { apiEndpoint } from "../config.json";

export function login(email, password) {
  return http.post(apiEndpoint + "auth", { email, password });
}
