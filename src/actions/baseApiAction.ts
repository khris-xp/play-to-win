"use server";

import { cookies } from "next/headers";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api/v1";

type ApiError = {
  statusCode: number;
  message: string;
};

type ApiResponse<T> = {
  data?: T;
  error?: ApiError;
};

type RequestConfig = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: object | FormData;
  requiresAuth?: boolean;
};

export async function baseApiAction<T>(
  endpoint: string,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> {
  const { method = "GET", body, requiresAuth = true } = config;

  try {
    const headers: Record<string, string> = {
      accept: "application/json",
    };

    if (!(body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    if (requiresAuth) {
      const cookieStore = cookies();
      const token = (await cookieStore).get("AUTH_TOKEN")?.value;

      if (!token) {
        return {
          error: {
            statusCode: 401,
            message: "Unauthorized - No token provided",
          },
        };
      }

      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers,
      body:
        body instanceof FormData
          ? body
          : body
          ? JSON.stringify(body)
          : undefined,
    });

    const contentType = response.headers.get("content-type");
    let responseData;

    if (contentType && contentType.includes("application/json")) {
      try {
        const jsonData = await response.json();
        // Extract data from response while preserving the original structure
        responseData = jsonData.data || jsonData;
      } catch {
        responseData = null;
      }
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      return {
        error: {
          statusCode: response.status,
          message:
            responseData?.message ||
            responseData?.error?.message ||
            "An error occurred",
        },
      };
    }

    // Return successful response with data
    return { data: responseData };
  } catch (error) {
    return {
      error: {
        statusCode: 500,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
    };
  }
}