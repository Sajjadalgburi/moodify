/**
 * This file will contain all the library code / Constants.
 * Constants is code that won't be changed
 */

export const authBtns = [
  {
    id: 1,
    variant: "outline" as const,
    text: "login",
  },
  { variant: "default" as const, text: "register", id: 2 },
];

export const form_fields = [
  {
    id: "username",
    type: "text",
    label: "Username",
    placeholder: "Enter your username",
  },
  {
    id: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    id: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
];