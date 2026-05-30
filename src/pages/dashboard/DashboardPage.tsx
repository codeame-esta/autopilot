import { DashboardHeader } from "./components/dashboard-header";
import { useGetMe } from "@/hooks/user";

export default function DashboardPage() {
  const { data, isLoading } = useGetMe();

  return (
    <>
      <DashboardHeader
        userName={data?.first_name + " " + data?.last_name}
        profilePicture={data?.profile_picture}
        loading={isLoading}
      />
    </>
  );
}
