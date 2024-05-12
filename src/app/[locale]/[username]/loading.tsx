import LoadingSpinner from '@/modules/common/components/utility/LoadingSpinner';

export default function UserProfileLoading() {
  return (
    <div className="w-full h-full flex items-center justify-center py-10">
      <LoadingSpinner iconClass="w-14 h-14" />
    </div>
  );
}
