import { ToastContainer } from "react-toastify";
import ContextProvider from "@/providers/ContextProvider";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ErpRegisterLayout({ children, params }) {
  const { lang } = params;

  return (
    <ContextProvider>
      <ToastContainer position="top-center" autoClose={3000} />
      <main style={{ minHeight: "100vh" }}>
        {children}
      </main>
      <BackToTopButton />
      <WhatsAppButton lang={lang} />
    </ContextProvider>
  );
}
