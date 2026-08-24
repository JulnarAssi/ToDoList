# Final Reflection — To-Do List MCP

## Wins

Over the six weeks of training, our team designed and built a working To-Do List MCP Server that allows an AI assistant to manage tasks through structured MCP tools.

We implemented seven tools for adding, listing, searching, updating, completing, and deleting tasks, as well as creating Google Calendar events. We used TypeScript and Zod for implementation and input validation, and stored task data locally in `data/tasks.json`.

One of our biggest achievements was extending the project beyond basic task management by integrating the Google Calendar API. This allows the MCP server to create real calendar events based on user requests.

We also built a project website to present the system in a more visual and accessible way. The website explains the project architecture, MCP tools, example workflows, Google Calendar integration, and the team behind the project.

During Demo Day, we presented the project and demonstrated the tools live. The demo worked successfully, including the MCP tool workflows we had prepared.

We also discussed future improvements with our mentor. We explained that we wanted to expand the project using more APIs, and our mentor encouraged this direction and suggested integrations such as fetching information from Notion.

## Blockers

One of the main challenges was understanding how the different MCP components work together, especially the relationship between the AI assistant, MCP host, server, tools, schemas, and external services.

We also faced technical challenges involving Git branches and merges, tool registration, validation, testing, and setting up the Google Calendar API integration with OAuth 2.0.

Another important challenge was making sure that the project worked correctly from a fresh clone and not only in our original development environment.

Solving these issues helped us improve our understanding of debugging, testing, Git workflows, MCP development, and external API integration.

## Resume Blurb

Developed a To-Do List MCP Server using TypeScript, Zod, and the Model Context Protocol (MCP), enabling AI assistants to manage tasks through seven structured tools. Implemented local JSON persistence and Google Calendar API integration for real calendar event creation. Built a project website to showcase the architecture, tools, workflows, and API integration. Tested the system using MCP Inspector and successfully presented the working project during Demo Day.

## LinkedIn Draft

Over the past six weeks, I worked with my team on building a To-Do List MCP Server as part of the NextFlows MCP training program.

We moved from learning the fundamentals of MCP to designing and implementing a working server with seven task-management tools, TypeScript, Zod validation, local persistence, and Google Calendar API integration. We also built a website to present the project and explain its architecture and workflows in a more visual way.

We successfully demonstrated the project during Demo Day, and it was exciting to discuss how the project could grow further through additional APIs and smarter task-management features.

This experience gave me practical experience with MCP development, external API integration, debugging, testing, and collaborative Git/GitHub workflows.

## What I Would Improve Next

If we continued developing the project, I would focus on making it a smarter and more connected productivity assistant.

The first improvement would be to expand the Google Calendar integration so tasks and calendar events are directly connected and synchronized.

I would also explore additional API integrations, such as Notion, following the idea discussed with our mentor during Demo Day.

Another useful feature would be a task-divider tool that could take a large task or goal and automatically break it into smaller, manageable subtasks.

These improvements would move the project from a basic AI-powered to-do list toward a more complete productivity assistant that can organize, schedule, and break down work across different services.