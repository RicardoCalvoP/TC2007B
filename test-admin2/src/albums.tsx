import {
    List, Datagrid, TextField, ReferenceField,
    Edit, EditButton, SimpleForm, TextInput, ReferenceInput,
    Create
} from "react-admin";

export const AlbumList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export const AlbumEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" inputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);
export const AlbumCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);
