import ErrorBoundary from '@/app/components/ErrorBoundary';

export default function ProblemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
}