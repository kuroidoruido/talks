package nf.fr.k49.todolist.rest;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import nf.fr.k49.todolist.core.data.TodoRepository;
import nf.fr.k49.todolist.core.model.TodoItem;

@RestController()
public class HealhController {
    @GetMapping("/api/probe")
	public void probe() {}
}