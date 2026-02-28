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
import { loginUser, type AuthFormState } from "@/actions/auth";

export function LoginForm({
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
    loginUser,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      router.push("/dashboard");
    } else {
      console.log("Login failed:", state);
    }
  }, [router, state]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className={cn(state.errors?.email && "border-red-500!")}
                />
                <FieldError className="text-xs">
                  {state.errors?.email?.[0]}
                </FieldError>
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Your password"
                  className={cn(state.errors?.password && "border-red-500!")}
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
                  {isPending ? "Logging in..." : "Login"}
                </Button>
                <Button variant="outline" type="button" disabled>
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/register">Register</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
