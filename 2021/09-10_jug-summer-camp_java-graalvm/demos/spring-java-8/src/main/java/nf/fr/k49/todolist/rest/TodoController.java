package nf.fr.k49.todolist.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import nf.fr.k49.todolist.core.data.TodoRepository;
import nf.fr.k49.todolist.core.model.TodoItem;

@RestController()
public class TodoController {

	@Autowired
	private TodoRepository repository;

    @GetMapping("/api/v1/todo")
	public List<TodoItem> getAllTodoItems(@RequestHeader("Authentication") String user) {
		return repository.getAllItems(user);
	}
    @PostMapping("/api/v1/todo")
	public TodoItem createOneTodoItem(@RequestHeader("Authentication") String user, @RequestBody TodoItem todoItem) {
		return repository.addOneItem(user, todoItem);
	}
    @PutMapping("/api/v1/todo")
	public Optional<TodoItem> replaceOneTodoItem(@RequestHeader("Authentication") String user, @RequestBody TodoItem todoItem) {
		return repository.replaceOneItem(user, todoItem);
	}
    @PatchMapping("/api/v1/todo")
	public Optional<TodoItem> editOneTodoItem(@RequestHeader("Authentication") String user, @RequestBody TodoItem todoItem) {
		return repository.editOneItem(user, todoItem);
	}
    @DeleteMapping("/api/v1/todo/{todoItemId}")
	public Optional<TodoItem> deleteOneTodoItem(@RequestHeader("Authentication") String user, @PathVariable String todoItemId) {
		return repository.deleteOneItem(user, todoItemId);
	}
}