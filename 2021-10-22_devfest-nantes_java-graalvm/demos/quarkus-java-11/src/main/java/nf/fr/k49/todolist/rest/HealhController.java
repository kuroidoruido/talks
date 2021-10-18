package nf.fr.k49.todolist.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import nf.fr.k49.todolist.core.data.TodoRepository;
import nf.fr.k49.todolist.core.model.TodoItem;

@Path("/api/probe")
@Tag(name = "Health")
public class HealhController {
    @GET
	public void probe() {}
}