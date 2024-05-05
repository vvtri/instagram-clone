import UserPostEmpty from '@/modules/user/components/UserProfile/UserPostEmpty';

type UserProfilePageProps = {
	params: {
		username: string;
		locale: string;
	};
};

export default function UserProfilePage({ params }: UserProfilePageProps) {
	return <UserPostEmpty />;
}
