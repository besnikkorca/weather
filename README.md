# Demo Weather app

### Weather app uses the [openweatherapi](https://openweathermap.org/api)

Based on the design it shows only 3 countries for which the weather is fetched but the code is functional and would work for other countries too as is demonstrated in storybook (in storybook it works for "New York", "London", ...etc.

### Bonus
* Docker setup can be run from main folder (make frontend-start) or (make storybook-start) or launching both (make frontend-storybook-start)
* Setup as a monorep using yarn workspaces
* Can be downloaded as a PWA - shown in the GIF below
* added night mode to the weather app.
* added storybook to the app.
* added unit tests for most of the components.
* Used typescript
* Used scss for styling and no styling libraries
* As per the challenge requests - I used only Class based components and created classes like UseQuery that allow using hooks in Class based components.

### What could be done to improve the project:
* Was going to design the Icons myself and add them as SVG-s - I design websites using Sketch, I'm no expert but certainly can do clouds :)
* Implement a spinner and display it when content is loading, additionally I could have used placeholders for data (with react-query it would have been very easy to do so)
* Add toast/notifications.
* Could have coupled it with sentry and set up an ErrorBoundary.
* Changed the header into a burger menu on smaller designs.
* Provide the cities list and let the user choose their favorite cities that would be shown on top.
* Could easily be changed to use functional components instead of class based ones.


### Used netlify for the deployment of the react apps since I find it more convinient

Link to the [Website](https://635ea1219d8df5000835b29f--cosmic-churros-63e2e5.netlify.app).
Link to [Storybook](https://635ea1f3043bc45da7e377b3--cute-beijinho-f3440e.netlify.app).


Most of the components do have unit tests, I could get the test coverage to 100% if required.

![tests-passing](https://user-images.githubusercontent.com/20396706/198890116-5370be1a-a992-487e-8792-889029bb68aa.gif)

Added storybook which I think is a great addition and showcases how the components are split and how they could easily be reused to build similar UI layouts

![storybook](https://user-images.githubusercontent.com/20396706/198890108-652d8e0d-e2c7-4b9d-8b66-49186d0af171.gif)

Design is pretty much close to pixel perfect

![close-to-pixel-perfect](https://user-images.githubusercontent.com/20396706/198890082-698fc3e8-34f1-48f8-af3e-2cb88a225bbf.gif)

The weather app is responsive from large screens to smallest devices (320px)

![responsive-design](https://user-images.githubusercontent.com/20396706/198890102-0d8e2267-969b-49fc-a168-f2f2a0eb7e96.gif)

The Website is also a PWA and can be used as such as seen in the gif below.

![demo-web-and-pwa](https://user-images.githubusercontent.com/20396706/198890088-a8d3c333-4323-48a7-9f5b-89a2915af5d4.gif)

That's pretty much it, hope you like it!
