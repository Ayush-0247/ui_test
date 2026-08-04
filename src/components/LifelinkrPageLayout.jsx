
export default function LifelinkrPageLayout({ children }) {
  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-900"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      {children}
    </div>
  );
}
