interface IUserProfile {
  name: string;
  photo: string;
}

interface IFeed extends IUserProfile {
  image: Array<string>;
  description: string;
}
