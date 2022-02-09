# ToDo List App

## Requirements
UI shall contain a list of todo items and controls to modify the list:

- You can add an item with title + description to the todo list
- You can remove an item
- You can edit the description and title
- You can mark it done, when done its not editable

## Design
Components:

1. Title
2. Form: including title and description, adding new ToDo's
3. TaskList: row view with title and description, and has 'done' checkbox, edit button and delete button
   1. Row: display the entire content depending on `isDone` property of ToDoRow
   2. DeleteRow: display the title and description in strike-through text


## Preview
Main:

![main](img/pre1.png)


Edit modal:

![edit](img/pre2.png)

Done view:

![done](img/pre3.png)

Delete:

![delete](img/pre4.png)