package nf.fr.k49.todolist.core.model;

import java.util.Objects;

public class TodoItem {
    private String id;
    private String description;
    private TodoItemStatus status;

    public TodoItem() {
        this.status = TodoItemStatus.TODO;
    }

    public TodoItem(String id, String description, TodoItemStatus status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TodoItemStatus getStatus() {
        return this.status;
    }

    public void setStatus(TodoItemStatus status) {
        this.status = status;
    }

    public TodoItem id(String id) {
        this.id = id;
        return this;
    }

    public TodoItem description(String description) {
        this.description = description;
        return this;
    }

    public TodoItem status(TodoItemStatus status) {
        this.status = status;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof TodoItem)) {
            return false;
        }
        TodoItem todoItem = (TodoItem) o;
        return Objects.equals(id, todoItem.id) && Objects.equals(description, todoItem.description) && Objects.equals(status, todoItem.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, status);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", description='" + getDescription() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }

}