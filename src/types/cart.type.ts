export type CartResponseType = {
  ID: string;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    created_at: string;
    updated_at: string;
  };
  total_amount: number;
  created_at: string;
  updated_at: string;
};
