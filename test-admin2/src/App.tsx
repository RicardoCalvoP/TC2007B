import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="users"
      list={UserList} />

    <Resource
      name="posts"
      list={PostList} edit={PostEdit} create={PostCreate} />

  </Admin>
);