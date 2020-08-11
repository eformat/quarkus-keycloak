package org.acme.rest;

import io.quarkus.security.Authenticated;
import io.quarkus.security.identity.SecurityIdentity;
import io.vertx.core.json.JsonObject;
import org.jboss.resteasy.annotations.cache.NoCache;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/api")
public class ServiceResource {

    @Inject
    SecurityIdentity identity;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @PermitAll
    public JsonObject anyone() {
        JsonObject ret = new JsonObject();
        ret.put("userName", (identity.isAnonymous() ? "anonymous" : identity.getPrincipal().getName()));
        return ret;
    }

    @GET
    @Path("/admin")
    @Produces(MediaType.APPLICATION_JSON)
    @Authenticated
    public User admin() {
        return new User(identity);
    }

    @GET
    @Path("/users/me")
    @Produces(MediaType.APPLICATION_JSON)
    @NoCache
    @Authenticated
    public User me() {
        return new User(identity);
    }
}
