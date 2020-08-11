package org.acme.rest;

import io.quarkus.security.identity.SecurityIdentity;

public class User {

    private final String userName;

    User(SecurityIdentity identity) {
        this.userName = identity.getPrincipal().getName();
    }

    public String getUserName() {
        return userName;
    }

    @Override
    public String toString() {
        return userName;
    }

}
