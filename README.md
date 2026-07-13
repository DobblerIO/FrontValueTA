# Technical Assessment submission for FrontValue

This project contains the code submission for the Technical Assessment given by FrontValue.

## Core Tooling used within the project
 - **React**
 - **Typescript**
 - **Vite**
 - **Playwright**
 - **Github Actions**

## What would I have like to add beyond what is currently there
To be honest, I'm not entirely sure how to feel about the results. There are many things I would have liked to improve. While time has cut me off, let me at least share some of the things that I would have liked to improve upon further.

#### Overall visuals and UX
Let's be honest, it couldn't be more basic than it currently is. Some minor touch-ups could've already made it a bit more pleasant to the eye, but also some UX oriented changes could have made a significant difference such as transitions with actual pending states, maybe a tooltip, perhaps an animation to ease some of the layout shifting happening as a result of the refetch.

#### Use an actual router
I went with the quick and easy way "for now", which ended up being the final result with time being up.

#### Data Storage
Event Emitter driven stores are a personal favorite of mine. Their essentially a dumbed down version of more popular alternatives like Zustand and Jotai. However I don't typically like to use this pattern for data retrieved from an API. Something like `react-query` is typically far better suited for fetching, handling and mutating data retrieved from an API. For any proper solution I would have probably opted for `react-query` instead.

#### Better Error handling
I took my best shot at eye-balling the necessary handling of errors, but without proper testing it's not uncommon for errors to not bubble / be caught in the way you would've intended them to.

#### Testing
From personal experience I find testing to be an aspect that should be very intentful. I was unable to setup a suitable testing strategy for this project. At the moment of writing I still don't have a good idea on how I would have liked to approach this differently, but I do feel I have not succeeded in properly showcasing my knowledge on this subject.

#### Linting configuration
If this was an actual production level project I would have adjusted the ESLint config a lot more. Although typically this would be minor tweaks here and there across multiple days/weeks/months or copying the config over from a previous project.

#### Deploying to Github Pages
This would probably just have been the cherry on top, but I had originally planned to do a proper deployment to Github pages. However any previous experience with Github Pages I had to drop this.