import ProfilePageWrapper from "@/components/modules/Profile/ProfilePageWrapper";

export const metadata = {
  title: "User Profile | Traddy",
  description: "View user profile, reviews, and tours on Traddy.",
};

interface ProfilePageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams?: Promise<{
    tab?: string;
  }>;
}

export default async function ProfilePage({
  params,
  searchParams,
}: ProfilePageProps) {
  // We still need to unwrap the params for metadata generation
  const { id } = await params;

  return <ProfilePageWrapper />;
}
