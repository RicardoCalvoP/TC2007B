import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { CommentCreate, CommentEdit, CommentList } from "./comments";
import { AlbumCreate, AlbumEdit, AlbumList } from "./albums";
import { PhotoCreate, PhotoEdit, PhotoList } from "./photos";
import { TodosCreate, TodosEdit, TodosList } from "./todos";

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
    <Resource
      name="comments"
      list={CommentList} edit={CommentEdit} create={CommentCreate} />
    <Resource
      name="albums"
      list={AlbumList} edit={AlbumEdit} create={AlbumCreate} />
    <Resource
      name="photos"
      list={PhotoList} edit={PhotoEdit} create={PhotoCreate} />
    <Resource
      name="todos"
      list={TodosList} edit={TodosEdit} create={TodosCreate} />

  </Admin>
);