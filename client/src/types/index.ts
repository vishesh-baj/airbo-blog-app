export type PostData = {
  _id: string;
  title: string;
  content: string;
  author: string;
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type createPostFormData = {
  title: string;
  content: string;
};

export type EditedPostData = {
  title: string;
  content: string;
};

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterApiData = {
  username: string;
  email: string;
  password: string;
};
export type loginFormData = {
  email: string;
  password: string;
};

export type HeroPostProps = {
  id: string;
  title: string;
  content: string;
  author: string;
};
