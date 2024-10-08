import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";

// LIBRARIES DATA

import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

// DATA FILES

import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { CommentCreate, CommentEdit, CommentList } from "./comments";
import { AlbumCreate, AlbumEdit, AlbumList } from "./albums";
import { PhotoCreate, PhotoEdit, PhotoList } from "./photos";
import { TodosCreate, TodosEdit, TodosList } from "./todos";


// ICONOS

import PeopleIcon from '@mui/icons-material/People';
import PostIcon from '@mui/icons-material/Description';
import CommentIcon from '@mui/icons-material/Comment';
import AlbumIcon from '@mui/icons-material/PhotoAlbum';
import PhotoIcon from '@mui/icons-material/Photo';
import TodosIcon from '@mui/icons-material/Checklist';

// FUNCTIONALITY

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="users"
      list={UserList}
      icon={PeopleIcon} />

    <Resource
      name="posts"
      list={PostList} edit={PostEdit} create={PostCreate}
      icon={PostIcon} />
    <Resource
      name="comments"
      list={CommentList} edit={CommentEdit} create={CommentCreate}
      icon={CommentIcon} />
    <Resource
      name="albums"
      list={AlbumList} edit={AlbumEdit} create={AlbumCreate}
      icon={AlbumIcon} />
    <Resource
      name="photos"
      list={PhotoList} edit={PhotoEdit} create={PhotoCreate}
      icon={PhotoIcon} />
    <Resource
      name="todos"
      list={TodosList} edit={TodosEdit} create={TodosCreate}
      icon={TodosIcon} />

  </Admin>
);