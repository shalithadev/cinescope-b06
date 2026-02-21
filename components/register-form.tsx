"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerUser, type AuthFormState } from "@/actions/auth";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const initialState: AuthFormState = {
    message: null,
    errors: {},
    success: false,
  };

  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      router.push("/dashboard");
    } else {
      console.log("Registration failed:", state);
    }
  }, [router, state]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Enter your details to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup className="gap-4">
              <Field className="gap-2">
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className={cn(state.errors?.name && "border-red-500!")}
                  // required
                />
                <FieldError className="text-xs">
                  {state.errors?.name?.[0]}
                </FieldError>
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className={cn(state.errors?.email && "border-red-500!")}
                  // required
                />
                <FieldError className="text-xs">
                  {state.errors?.email?.[0]}
                </FieldError>
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Your password"
                  className={cn(state.errors?.password && "border-red-500!")}
                  // required
                />
                <FieldError className="text-xs">
                  {state.errors?.password?.[0]}
                </FieldError>
              </Field>
              <Field>
                <FieldError className="text-xs text-center">
                  {state.errors?.general?.[0]}
                </FieldError>
                <Button
                  type="submit"
                  className="uppercase cursor-pointer"
                  disabled={isPending}
                >
                  {isPending ? "Registering..." : "Register"}
                </Button>
                <Button variant="outline" type="button" disabled>
                  Continue with Google
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
