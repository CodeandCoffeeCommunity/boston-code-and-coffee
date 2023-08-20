import Footer from "@/components/layout/Footer"

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
    {children}
    <Footer />
  </>
)}