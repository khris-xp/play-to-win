"use server";
import { AuthResponseType } from "@/types/auth.type";
import { UserResponseType } from "@/types/user.type";
import { baseApiAction } from "./baseApiAction";

export async function loginAction(email: string, password: string) {
  return baseApiAction<AuthResponseType>(`/auth/login`, {
    method: "POST",
    body: { email, password },
    requiresAuth: false,
  });
}

export async function fetchUserProfileAction() {
  return baseApiAction<UserResponseType>(`/user/profile`, {
    method: "GET",
    requiresAuth: true,
  });
}
