# Security Policy

## Supported Versions

This repository supports the current version of the ToDoList MCP server only.

## Reporting a Security Issue

Please report security issues to the course mentor by email.

Do not post sensitive details publicly in GitHub Issues.

## Week 4 Hardening Summary

This week we improved the MCP server by:

- Strengthening Zod validation for task inputs.
- Restricting file access to the local `data` directory.
- Validating JSON data before use.
- Limiting task list responses to prevent oversized outputs.
- Returning short user-facing error messages while logging technical details to stderr.
- Confirming that the project does not use API keys or external secrets.
- Confirming that no network fetches are currently used, so host allowlisting and network timeouts are not required.
- Strengthened `complete_task` task ID validation to require exactly 7 numeric digits.
