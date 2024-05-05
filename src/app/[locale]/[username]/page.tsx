import UserProfilePostEmpty from '@/modules/user/components/UserProfile/UserProfilePostEmpty';

type UserProfilePageProps = {
	params: {
		username: string;
		locale: string;
	};
};

export default function UserProfilePage({ params }: UserProfilePageProps) {
	return <UserProfilePostEmpty />;
}
