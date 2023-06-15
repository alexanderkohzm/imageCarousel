# Image Carousel System Design (FrontEnd)

## Qustion

Design an image carousel component that displays a list of images one at a time, allowing the user to browse through them with pagination buttons.

<img src="./readMeImages/Image-Carousel-Example.png" alt="READ" width="1200">

## RADIO

Try to implement the RADIO framework. Requirement analysis, Architecture, Data models, Interface (API), and Optimisation

## Requirement Analysis

**Functional Requirements**
It's important to start with basic minimum requirements. In order for this carousel to work

- User needs to view the image
- User needs to be able to click `next` and `prev` buttons to go between images
- `next` or `prev` buttons will be disabled if you're at the start/end of the carousel. Alternatively, pressing `next` at the end will jump from the last to the first image
- User needs to be able to click on row of dots to jump to the image. E.g. clicking on the 3rd dot will jump to the 3rd image

**Non-Functional Requirements**
User Experience

- If there are no images, display a no image sign
- If images are of different sizes, we need to make sure they fit within the carousel (e.g. grow them or display "black" background around images that are smaller). We don't want the carousel to jump in size
- Loading images - if some images take longer to load, do we want to display the others while the images taking longer to load displays a "loading" sign
- When we move between images, do we want it to "slide" across? Or do we want it to suddenly change?

## Architecture

<img src="./readMeImages/ImageCarousel.png" alt="READ" width="1200">

## Database

This is fairly simple. There should just be an array of objects. Each object has the image's URL
`{ image : 'exampleUrl' }`

## Interface (API)

Note that Controller/Parent Container perform the same thing, so we might not need the parent container

We should aim to have the minimum amount of state for each component. Other than the images, all other data is ephemeral data (e.g. which image the user currently viewing)

The Parent Container will have the state of the which image is currently being viewed

## Optimisation

This was covered in the requirement analysis. I think the most important things are
**User Experience / Network**

- If there are no images, display a no image sign
- If images are of different sizes, we need to make sure they fit within the carousel (e.g. grow them or display "black" background around images that are smaller). We don't want the carousel to jump in size
- Loading images - if some images take longer to load, do we want to display the others while the images taking longer to load displays a "loading" sign
- If this application is used throughout the world, we'll need to have CDNs across the world to host and deliver the images

**Optimisations that I did not think of**

User Experience

- "Sliding" images from one to the next
- Think of different ways to display the image (e.g. `cover` isn't the only way. It might need to change depending on the size/focus of the image)

Performance

- Defer loading of images that aren't on the screen. For example, in AirBnB they only load the first image of the carousel. Once a user clicks on the next image, they'll load image 2 as well as images 3, 4, 5 etc. This is because if a user clicks on the image they likely have higher intent
- Preloading & lazy loading (e.g. only load first image, rest are loaded lazily. Second image is pre-loaded if the user shows possible intent of viewing more images like hovering over image carousel, clicking on `next` etc)
- Device-specific images - having a high-res image on a mobile phone doesn't make sense as the user wouldn't be able to tell the different anyways. So alter the quality of image depending on device size

Mobile-Friendliness

- Interactive elements should be large enough when used on mobile. elements too small (like pagination dots) may have their functionality taken out (i.e. clicking on which image you want to go to) but retain their visual use (i.e. which image you're currently on)

Keyboard Support

- `prev` and `next` buttons should map to the left and right arrow keys on the keyboard
