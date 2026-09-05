# My Journey of Building an MCP To-Do List Server

Before starting the training, I didn't have that much interest in the AI field. I used to like it, but I didn't want to dive deep into it. I actually have more interest in hardware, physical design, embedded systems, and similar fields, but unfortunately, I didn't have the chance to work deeply in them at that time.

Then, I started the AI training at NextFlows Academy. We started with Zoom meetings and introductions until we had our first on-site meeting. I liked the organization and the seriousness in presenting and managing the training.

After that, everyone picked their project idea, and the teams were chosen randomly. We started building our first tool and pushed it to GitHub in our project repository. I was the team lead, so I was also responsible for helping organize our work and making sure we were moving forward.

## Starting to Understand MCP

At first, I was confused about what MCP actually meant and how it was used. There were also many new concepts that I didn't fully understand.

So, my friend and I decided to make our own study sessions. Each one of us would choose a concept, learn and search about it, and then explain it to the other person.

Through this, we explored what MCP is and learned about concepts such as what a tool is, prompts, resources, npm, development environments, and other related concepts.

This way of learning helped me understand the project better because instead of just using something without knowing what it meant, I started understanding what was actually happening behind it.

## Building Our Project

We built a To-Do List MCP Server that organizes tasks and makes managing them easier and cleaner for the user.

The user can write a prompt to the AI, for example:

> "What tasks do I have today?"

or:

> "Give me the most important tasks."

or:

> "Show me my incomplete tasks."

After we connected the AI with our MCP server, Claude could understand the user's request and ask for permission to use a suitable tool. Once the user accepts, the AI uses the tool through the MCP server and then returns the results to the user.

Our project had six main task management tools, with three having priority 0 and the other three having priority 1.

Through building these tools, I learned more about how an AI assistant can use tools to actually interact with data instead of only giving a text response.

## Learning About APIs and Google Calendar

I also wanted to learn more about APIs and how to use them. Our basic project did not require an external API, but I wanted to explore this area, so I added a Google Calendar API integration to our project.

I created a custom `create_calendar_event` tool for our MCP server. It is customized for our project and restricted according to how we wanted it to behave based on our code and instructions.

Through this, I learned more about APIs, how to connect an API with an MCP server, and how to make an external service work as part of our To-Do List project.

This was one of the parts that made the project more interesting for me because I was able to learn something outside the original requirements and add it to our project.

## Testing the Project

After building the tools, I tested every tool using three different cases:

- Happy cases
- Stress cases
- Invalid cases

Sometimes I faced problems with MCP Inspector connections, code bugs, and other unexpected issues. Testing these cases helped me understand that it is not enough for the tool to work in the normal situation. We also have to think about what could happen when the user gives unexpected, invalid, or difficult requests.

## Building the Website

I also implemented a website to introduce our project idea and explain what we built.

The website shows our project idea, tools, architecture, workflow, Google Calendar integration, and how a user request goes through the MCP server until the final action is completed.

This helped me learn how to present a technical project in a simple and organized way, instead of only showing the code.

## Demo Day

Finally, we had our Demo Day. We went on-site and presented our project in front of everyone in the training, along with our mentors.

We demonstrated the project by asking Claude different prompts and showing how it used our MCP tools. Everything was working successfully during our demonstration.

At the end of the day, our mentor gave every team the same prompt to test whether the project would PASS or FAIL.

Unfortunately, our project initially got a FAIL result. However, the reason was actually a simple issue that was not a mistake in our main CRUD functionality or a failure of the project itself.

We had implemented our `list_tasks` tool to return only the first 10 tasks if the user did not specify an exact number. The mentor's prompt did not specify a number, so when we added, deleted, or updated a task, it sometimes did not appear in the results because only the first 10 tasks were being displayed, while we actually had more than 10 tasks stored.

After understanding what was happening, we fixed the behavior of the `list_tasks` tool and tested it again.

After the fix, the project passed the test, and we considered the project successfully completed.

## Looking Back

Looking back at the whole journey, I learned much more than I expected when I first started the training.

I learned how MCP works, how to build and connect tools, how to use Zod for validation, how to work with Git and GitHub, how to test using MCP Inspector, how to connect an external API, and how to deal with unexpected problems.

More importantly, I started the training without being sure that AI was a field I wanted to work in. I was more interested in hardware, physical design, and embedded systems. But after actually working with AI and building a project myself, I started to understand the field more and like it more than I expected.

Before the training, I used to say that I would never work with AI. Now, I have changed my mind, also I would like to try other fields especially in hardware.

I am really grateful that I had the opportunity to take this training at NextFlows Academy. I would like to thank everyone at the academy, especially our mentors and engineers, for helping us throughout the training and making the experience easier and more understandable for us.

This was not just a training where we learned about MCP. It was an experience where we learned by actually building something, testing it, breaking it, fixing it, and finally presenting it.
