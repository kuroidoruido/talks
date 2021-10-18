package nf.fr.k49.todolist.rest;

import java.util.List;
import java.util.Optional;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.PATCH;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import nf.fr.k49.todolist.core.data.TodoRepository;
import nf.fr.k49.todolist.core.model.TodoItem;

@Path("/api/v1/todo")
@Tag(name = "Todo")
public class TodoController {

	@Inject
	private TodoRepository repository;

    @GET
	public List<TodoItem> getAllTodoItems(@HeaderParam("Authentication") String user) {
		System.out.println("YAOURT getAllTodoItems "+user);
		return repository.getAllItems(user);
	}
    @POST
	public TodoItem createOneTodoItem(@HeaderParam("Authentication") String user, TodoItem todoItem) {
		return repository.addOneItem(user, todoItem);
	}
    @PUT
	public Optional<TodoItem> replaceOneTodoItem(@HeaderParam("Authentication") String user, TodoItem todoItem) {
		return repository.replaceOneItem(user, todoItem);
	}
    @PATCH
	public Optional<TodoItem> editOneTodoItem(@HeaderParam("Authentication") String user, TodoItem todoItem) {
		return repository.editOneItem(user, todoItem);
	}
    @DELETE()
	@Path("/{todoItemId}")
	public Optional<TodoItem> deleteOneTodoItem(@HeaderParam("Authentication") String user, @PathParam("todoItemId") String todoItemId) {
		return repository.deleteOneItem(user, todoItemId);
	}
}