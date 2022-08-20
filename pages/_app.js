import React from "react";

import Layout from "../Layouts/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { useRouter } from "next/router";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute.js";

const noAuthRequired = ["/", "/login", "/signup"];
const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider enableSystem={true} attribute="class">
              <Layout>
                {noAuthRequired.includes(router.pathname) ? (
                  <Component {...pageProps} />
                ) : (
                  <ProtectedRoute>
                    <Component {...pageProps} />
                  </ProtectedRoute>
                )}
              </Layout>
            </ThemeProvider>
          </Hydrate>
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
