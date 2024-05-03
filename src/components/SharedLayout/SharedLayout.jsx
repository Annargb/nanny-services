import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header } from "../Header/Header";
import { Container } from "../../styles/Container";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#103931",
              secondary: "#fff",
            },
          },
        }}
      />
    </Container>
  );
};

export default SharedLayout;
