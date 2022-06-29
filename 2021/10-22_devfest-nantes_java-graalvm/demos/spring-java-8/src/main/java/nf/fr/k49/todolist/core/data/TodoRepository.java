package nf.fr.k49.todolist.core.data;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import nf.fr.k49.todolist.core.model.TodoItem;

@Service
public class TodoRepository {
    private Map<String, List<TodoItem>> todosByUser;

    public TodoRepository() {
        this.todosByUser = new HashMap<>();
    }

    public List<TodoItem> getAllItems(final String username) {
        final List<TodoItem> items = this.todosByUser.get(username);
        if (items == null) {
            final List<TodoItem> list = new LinkedList<TodoItem>();
            this.todosByUser.put(username, list);
            return list;
        } else {
            return items;
        }
    }

    public TodoItem addOneItem(final String username, TodoItem item) {
        item.setId(UUID.randomUUID().toString());
        final List<TodoItem> items = this.todosByUser.get(username);
        if (items == null) {
            final List<TodoItem> list = new LinkedList<TodoItem>();
            list.add(item);
            this.todosByUser.put(username, list);
            return item;
        } else {
            items.add(item);
            return item;
        }
    }

    public Optional<TodoItem> replaceOneItem(final String username, TodoItem item) {
        final List<TodoItem> items = this.todosByUser.get(username);
        if (items == null) {
            final List<TodoItem> list = new LinkedList<TodoItem>();
            list.add(item);
            this.todosByUser.put(username, list);
            return Optional.ofNullable(item);
        } else {
            List<TodoItem> actualItem = items.stream().filter(i -> i.getId().equals(item.getId())).collect(Collectors.toList());
            if (actualItem == null || actualItem.size() != 1) {
                return Optional.empty();
            } else {
                items.replaceAll(current -> current.getId().equals(item.getId()) ? item : current);
                return Optional.ofNullable(item);
            }
        }
    }

    public Optional<TodoItem> editOneItem(final String username, TodoItem item) {
        final List<TodoItem> items = this.todosByUser.get(username);
        if (items == null) {
            return Optional.empty();
        }
        List<TodoItem> actualItem = items.stream().filter(i -> i.getId().equals(item.getId())).collect(Collectors.toList());
        if (actualItem == null || actualItem.size() != 1) {
            return Optional.empty();
        }
        TodoItem patchedItem = new TodoItem()
            .id(item.getId())
            .description(item.getDescription() == null ? actualItem.get(0).getDescription() : item.getDescription())
            .status(item.getStatus() == null ? actualItem.get(0).getStatus() : item.getStatus());
        items.replaceAll(current -> {
            if (current.getId().equals(item.getId())) {
                return patchedItem;
            } else {
                return current;
            }
        });
        return Optional.ofNullable(patchedItem);
    }

    public Optional<TodoItem> deleteOneItem(final String username, String itemId) {
        final List<TodoItem> items = this.todosByUser.get(username);
        if (items == null) {
            return Optional.empty();
        }
        List<TodoItem> actualItem = items.stream().filter(i -> i.getId().equals(itemId)).collect(Collectors.toList());
        if (actualItem == null || actualItem.size() != 1) {
            return Optional.empty();
        }
        if(items.remove(actualItem.get(0))) {
            return Optional.ofNullable(actualItem.get(0));
        } else {
            return Optional.empty();
        }
    }
}