import {
    List, Datagrid, TextField, ReferenceField, BooleanField,
    Edit, EditButton, SimpleForm, TextInput, ReferenceInput, BooleanInput,
    Create
} from "react-admin";

export const TodosList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <BooleanField source="completed" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TodosEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" inputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <BooleanInput source="completed" />

        </SimpleForm>
    </Edit>
);
export const TodosCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Create>
);
