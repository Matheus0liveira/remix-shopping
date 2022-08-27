import { Link, useTransition } from "@remix-run/react";
import { Form } from "remix-forms";
import { schemas } from "..";

export function UserLogin() {
  const transition = useTransition();
  const isSubmitting = transition.state !== "idle";
  return (
    <Form
      action="/user/login"
      method="post"
      schema={schemas.login}
      className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      {({ Field, Errors, Button }) => (
        <div className="max-w-md w-full space-y-8">
          <Link to="/products">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Sign in to your account
            </h2>
          </Link>
          <div className="rounded-md shadow-sm -space-y-px">
            <Field name="email">
              {({ SmartInput, Errors, Label }) => (
                <>
                  <Label htmlFor="email-address" className="sr-only">
                    Email address
                  </Label>
                  <SmartInput
                    type="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                  <Errors className="text-red-400 text-sm mt-2" />
                </>
              )}
            </Field>
            <Field name="password">
              {({ SmartInput, Errors, Label }) => (
                <>
                  <Label htmlFor="password" className="sr-only">
                    Password
                  </Label>
                  <SmartInput
                    type="password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <Errors className="text-red-400 text-sm mt-2" />
                </>
              )}
            </Field>
          </div>
          <Errors className="text-red-400 text-sm mt-1" />
          <Button
            disabled={isSubmitting}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {!isSubmitting ? " Sign in" : "Loading"}
          </Button>
        </div>
      )}
    </Form>
  );
}
