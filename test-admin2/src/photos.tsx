import {
    List, Datagrid, TextField, ReferenceField, ImageField, UrlField,
    Edit, EditButton, SimpleForm, TextInput, ReferenceInput,
    Create
} from "react-admin";

export const PhotoList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="albumId" reference="albums" />
            <TextField source="id" />
            <TextField source="title" />
            <UrlField source="url" />
            <ImageField source="thumbnailUrl" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PhotoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" inputProps={{ disabled: true }} />
            <ReferenceInput source="albumId" reference="albums" />
            <TextInput source="title" />
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);
export const PhotoCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="albumId" reference="albums" />
            <TextInput source="title" />
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);
