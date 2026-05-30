export type GetMeResponse = {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
  password: null;
  email_notification: boolean;
  goal_reminder: boolean;
  provider: string;
  provider_id: null;
};
