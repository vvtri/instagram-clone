import AuthGuard from '@/modules/auth/components/guard/AuthGuard';

export default function SearchPage() {
  return (
    <AuthGuard>
      <div>SearchPage</div>
    </AuthGuard>
  );
}
