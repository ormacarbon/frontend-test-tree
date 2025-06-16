export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-black/75 z-[9999] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#00a8a8] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}