package com.b4l.blood4life.event;

import org.springframework.context.ApplicationEvent;

import javax.servlet.http.HttpServletResponse;

public class RecursoCriadoEvent extends ApplicationEvent {

    private static final long serialVersionUID = 1L;

    private final HttpServletResponse response;
    private final Integer id;

    public RecursoCriadoEvent(
            Object source,
            HttpServletResponse response,
            Integer id
    ) {
        super(source);
        this.response = response;
        this.id = id;
    }

    public HttpServletResponse getResponse() {
        return response;
    }

    public Integer getId() {
        return id;
    }

}
