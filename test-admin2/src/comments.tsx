import {
    List, Datagrid, TextField, ReferenceField, EmailField,
    Edit, EditButton, SimpleForm, TextInput, ReferenceInput,
    Create
} from "react-admin";

export const CommentList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="postId" reference="posts" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" inputProps={{ disabled: true }} />
            <ReferenceInput source="postId" reference="posts" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);
export const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="postId" reference="posts" />
            <TextInput source="name" />
            <EmailField source="email" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
);
